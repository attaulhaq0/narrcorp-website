interface ConsentChoice {
  version: 1;
  analytics: 'granted' | 'denied';
  expires: number;
}

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
  }
  interface Navigator {
    readonly globalPrivacyControl?: boolean;
  }
}

const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
const privacy = document.querySelector<HTMLDialogElement>('#privacy-dialog');
const cookies = document.querySelector<HTMLDialogElement>('#cookie-dialog');
const disclosure = document.querySelector<HTMLDetailsElement>('#privacy');
const privacyContent = disclosure?.querySelector('.footer-privacy-body');
const privacyTarget = privacy?.querySelector('[data-privacy-content]');

if (privacy && privacyContent && privacyTarget && disclosure) {
  privacyTarget.append(privacyContent);
  const summary = disclosure.querySelector('summary');
  summary?.setAttribute('aria-haspopup', 'dialog');
  summary?.setAttribute('aria-controls', 'privacy-dialog');
  summary?.addEventListener('click', (event) => {
    event.preventDefault();
    privacy.showModal();
  });
  document.querySelectorAll('[data-open-privacy]').forEach((control) => {
    control.addEventListener('click', () => privacy.showModal());
  });
  document
    .querySelector('[data-close-privacy]')
    ?.addEventListener('click', () => privacy.close());
}

if (banner && cookies) {
  const measurementId = banner.dataset.measurementId || '';
  const configured = /^G-[A-Z0-9]+$/.test(measurementId);
  const storageKey = 'narrcorp-cookie-choice';
  const consentAge = Number(banner.dataset.consentDays) * 24 * 60 * 60 * 1000;
  const privacySignal = navigator.globalPrivacyControl === true;
  const liveHost = ['narrcorp.com', 'www.narrcorp.com'].includes(
    location.hostname,
  );
  let loaded = false;
  let restoreFocus: HTMLElement | undefined;

  const readChoice = (): ConsentChoice | undefined => {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (
        value?.version === 1 &&
        (value.analytics === 'granted' || value.analytics === 'denied') &&
        Number.isFinite(value.expires) &&
        value.expires > Date.now()
      ) {
        return value;
      }
    } catch {
      // Missing or blocked browser storage leaves analytics off by default.
    }
    return undefined;
  };
  let choice = readChoice();
  const hasConsent = () =>
    !privacySignal &&
    choice?.analytics === 'granted' &&
    choice.expires > Date.now();

  const clearAnalyticsCookies = () => {
    const domains = [
      location.hostname,
      '.' + location.hostname,
      '.narrcorp.com',
    ];
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0]?.trim();
      if (name !== '_ga' && !name?.startsWith('_ga_')) continue;
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
      }
    }
  };

  const startAnalytics = () => {
    if (!configured || !liveHost || loaded || !hasConsent()) return;
    loaded = true;
    Reflect.set(window, 'ga-disable-' + measurementId, false);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer!.push(arguments);
    };
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    let referrer = '';
    try {
      if (document.referrer) referrer = new URL(document.referrer).origin + '/';
    } catch {
      /* Invalid referrers are omitted. */
    }
    window.gtag('config', measurementId, {
      send_page_view: true,
      page_location: location.origin + location.pathname,
      page_referrer: referrer,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: consentAge / 1000,
      cookie_update: false,
      cookie_flags: 'SameSite=Lax;Secure',
    });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(tag);
  };

  const updateStatus = () => {
    const status = document.querySelector('[data-consent-status]');
    if (status) status.textContent = hasConsent() ? 'On' : 'Off';
  };

  document
    .querySelectorAll<HTMLButtonElement>('[data-consent]')
    .forEach((control) => {
      if (privacySignal && control.dataset.consent === 'granted')
        control.disabled = true;
      control.addEventListener('click', () => {
        const granted = control.dataset.consent === 'granted' && !privacySignal;
        choice = {
          version: 1,
          analytics: granted ? 'granted' : 'denied',
          expires: Date.now() + consentAge,
        };
        try {
          localStorage.setItem(storageKey, JSON.stringify(choice));
        } catch {
          /* The choice still applies for this page visit. */
        }
        banner.hidden = true;
        cookies.close();
        updateStatus();
        if (granted) startAnalytics();
        else {
          Reflect.set(window, 'ga-disable-' + measurementId, true);
          clearAnalyticsCookies();
          // Reload stops the already-loaded tag, including its engagement timers.
          if (loaded) location.reload();
        }
        restoreFocus?.focus();
      });
    });
  document
    .querySelectorAll<HTMLButtonElement>('[data-open-cookies]')
    .forEach((control) => {
      control.hidden = !configured;
      control.addEventListener('click', () => {
        restoreFocus = control;
        updateStatus();
        cookies.showModal();
      });
    });
  document
    .querySelector('[data-close-cookies]')
    ?.addEventListener('click', () => cookies.close());
  cookies.addEventListener('close', () => restoreFocus?.focus());
  document
    .querySelectorAll<HTMLElement>('[data-browser-choice]')
    .forEach((message) => {
      message.hidden = !privacySignal;
    });

  document.addEventListener('click', (event) => {
    if (!loaded || !hasConsent() || !(event.target instanceof Element)) return;
    const link = event.target.closest('a[href^="mailto:"]');
    if (!link) return;
    const contactLocation = link.closest('header')
      ? 'header'
      : link.closest('footer')
        ? 'footer'
        : 'contact';
    window.gtag?.('event', 'contact_click', {
      contact_location: contactLocation,
    });
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== storageKey) return;
    choice = readChoice();
    if (!hasConsent() && loaded) {
      Reflect.set(window, 'ga-disable-' + measurementId, true);
      clearAnalyticsCookies();
      location.reload();
    } else {
      banner.hidden = !configured || Boolean(choice);
      updateStatus();
      startAnalytics();
    }
  });
  if (!hasConsent()) clearAnalyticsCookies();
  banner.hidden = !configured || Boolean(choice);
  updateStatus();
  startAnalytics();
}

export {};

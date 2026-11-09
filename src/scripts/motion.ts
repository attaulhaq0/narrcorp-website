import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { onMotionChange } from './preferences';

gsap.registerPlugin(ScrollTrigger);

const revealed = new WeakSet<Element>();
let context: gsap.Context | undefined;
let observer: IntersectionObserver | undefined;
let split: SplitType | undefined;

function setMotion(enabled: boolean) {
  document.documentElement.dataset.motion = enabled ? 'on' : 'off';
  observer?.disconnect();
  context?.revert();
  split?.revert();
  document.querySelector('.contact-art')?.classList.remove('is-animated');
  if (!enabled) return;

  context = gsap.context(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!revealed.has(entry.target)) {
            context?.add(() => {
              gsap.fromTo(
                entry.target,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.75,
                  ease: 'power3.out',
                  clearProps: 'opacity,transform',
                },
              );
            });
            revealed.add(entry.target);
          }
          observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        '.section-intro > h2, .section-intro > p:not(.section-label), .contact-copy > h2, .contact-copy > p',
      )
      .forEach((target) => observer?.observe(target));

    const highlight = document.querySelector<HTMLElement>(
      '[data-scroll-highlight]',
    );
    if (highlight) {
      split = new SplitType(highlight, { types: 'chars,words' });
      split.chars?.forEach((character) =>
        character.setAttribute('aria-hidden', 'true'),
      );
      gsap.set(split.chars, { color: '#69766D' });
      gsap.to(split.chars, {
        color: '#10292C',
        ease: 'none',
        stagger: innerWidth <= 767 ? 0.03 : 0.08,
        scrollTrigger: {
          trigger: highlight,
          start: 'top 85%',
          end: () => (innerWidth <= 767 ? '+=100%' : 'top 20%'),
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }

    const object = document.querySelector('.why-object');
    if (object) {
      const stableRandom = (min: number, max: number, offset: number) => {
        let seed = 7919 + offset * 104729;
        seed ^= seed << 13;
        seed ^= seed >> 17;
        seed ^= seed << 5;
        return min + (max - min) * (Math.abs(seed % 10000) / 10000);
      };
      gsap.fromTo(
        object,
        {
          scale: 1.3,
          x: stableRandom(-120, 120, 1),
          y: stableRandom(-80, 80, 2),
          filter: 'blur(4px)',
        },
        {
          scale: 1,
          x: 0,
          y: 0,
          filter: 'blur(0px)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.why-inner',
            start: 'top bottom',
            end: '50% 50%',
            scrub: true,
          },
        },
      );
    }
    document.querySelectorAll('.ecosystem-icon').forEach((icon, index) => {
      const random = (min: number, max: number, offset: number) => {
        let seed = (index + 1) * 7919 + offset * 104729;
        seed ^= seed << 13;
        seed ^= seed >> 17;
        seed ^= seed << 5;
        return min + (max - min) * (Math.abs(seed % 10000) / 10000);
      };
      const x =
        index === 0
          ? random(-120, 120, 1)
          : index === 3
            ? random(100, 150, 1)
            : random(-40, 40, 1);
      const y =
        index === 0
          ? random(-80, 80, 2)
          : index < 3
            ? random(-120, -80, 2)
            : index === 3
              ? random(-20, 20, 2)
              : random(80, 120, 2);
      gsap.fromTo(
        icon,
        { scale: 1.3, x, y, filter: 'blur(4px)' },
        {
          scale: 1,
          x: 0,
          y: 0,
          filter: 'blur(0px)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.ecosystem-stage',
            start: 'top bottom',
            end: '50% 50%',
            scrub: true,
          },
        },
      );
    });
    const contactArt = document.querySelector('.contact-art');
    const engagementCards = gsap.utils.toArray<HTMLElement>('.engagement-card');
    if (contactArt && engagementCards.length) {
      contactArt.classList.add('is-animated');
      const step = 310,
        total = step * engagementCards.length;
      gsap.set(engagementCards, { y: (index: number) => index * step - 120 });
      gsap.to(engagementCards, {
        y: `-=${total}`,
        duration: 22,
        ease: 'none',
        repeat: -1,
        modifiers: {
          y: gsap.utils.unitize(gsap.utils.wrap(-step, total - step)),
        },
      });
    }
  });
  ScrollTrigger.refresh();
}

onMotionChange(setMotion);
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });

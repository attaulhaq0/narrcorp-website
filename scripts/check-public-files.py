"""Reject private and operational files in the tracked publication set."""
import pathlib
import subprocess
import sys

PRIVATE_DIRECTORIES = {
    'private', '.local', '.runtime', '.codex', '.agents', 'research',
    'design-previews', 'output', 'uploads', 'submissions', 'resumes',
    'receipts', 'node_modules', 'test-results', 'playwright-report',
}
PRIVATE_SUFFIXES = {'.pem', '.key', '.p12', '.pfx', '.kdbx', '.tfstate', '.log', '.har', '.zip', '.7z'}

def forbidden(name):
    path = pathlib.PurePosixPath(name.lower())
    return (bool(PRIVATE_DIRECTORIES.intersection(path.parts[:-1]))
            or path.name == '.env' or path.name.startswith('.env.')
            or 'credentials' in path.name or 'service-account' in path.name
            or path.suffix in PRIVATE_SUFFIXES or path.name.endswith('.tar.gz'))

def main():
    root = pathlib.Path(__file__).resolve().parents[1]
    names = subprocess.check_output(['git', 'ls-files', '-z'], cwd=root).decode('utf-8').split('\0')
    violations = [name for name in names if name and forbidden(name)]
    if violations:
        print('Publication blocked: forbidden tracked paths:', file=sys.stderr)
        print('\n'.join(violations), file=sys.stderr)
        return 1
    print(f'Publication file check passed: {sum(bool(name) for name in names)} tracked files.')
    return 0

if __name__ == '__main__':
    sys.exit(main())

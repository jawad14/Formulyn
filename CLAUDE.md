# Git workflow

**All commits and pushes go to the `Arshman` branch. Never commit to or push `main`.**

- Before committing, confirm the branch: `git branch --show-current` must print `Arshman`.
- If it prints `main`, switch first: `git switch Arshman` (stash/carry over any changes).
- Push with `git push origin Arshman` — never `git push origin main`.
- `main` is updated only by merging a PR from `Arshman` on GitHub.
- `.git/hooks/pre-commit` and `.git/hooks/pre-push` enforce this locally. Do not bypass
  them with `--no-verify` unless the user explicitly asks.

Note: the git repository root is this directory (`d:\KEYOB\Formulyn\Formulyn`), one level
below the folder that is usually opened as the workspace.

@AGENTS.md

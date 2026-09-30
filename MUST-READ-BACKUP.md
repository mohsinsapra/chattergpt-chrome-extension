# Backup from work Mac — 2026-09-30

- Original local path: `/Users/muhammadmohsin/Documents/Learning/ChatGPT Chrome extension/chattergpt`
- Checked-out branch: `main`; HEAD: `486fd4e0a1411ebbb551984dd0669227b65efea9`
- Snapshot contents: current HEAD plus all uncommitted and untracked (non-ignored) changes; 1 new/changed files included vs HEAD.

## Backup branches pushed (intended)
- `backup/work-mac-2026-09-30` (snapshot)
- `backup/branches/main`

## Excluded files (paths only)
Copy these manually from a secure source if needed.
- (none)

## Restore
```
git clone git@github.com:mohsinsapra/chattergpt-chrome-extension.git && cd <repo>
git fetch origin 'refs/heads/backup/*:refs/remotes/origin/backup/*'
git checkout -b restore origin/backup/work-mac-2026-09-30
# then merge/cherry-pick into main when ready; stashes are under origin/backup/stash-N
```

Nothing has been merged into main yet.

# Git Quickguide

## Branches

|-----------------------------------------------------------------------------------|
| Typ       | Zweck                             | Quelle    | Beispiel              |
|-----------|-----------------------------------|-----------|-----------------------|
| main      | Stabile Produktivversion          | -         | main                  |
| develop   | Entwicklungszweig                 | main      | develop               |
| feature/  | Neue Features                     | develop   | feature/user-auth     |
| fix/      | Bugfix                            | develop   | fix/login-redirect    |
| hotfix/   | Dringender Fix auf main           | main      | hotfix/typo-readme    |
| refactor/ | Code/Struktur ohne neue Funktion  | develop   | refactor/state-store  |
| chore/    | Wartung, Config, Dependencies     | develop   | chore/config-update   |
|-----------------------------------------------------------------------------------|

---

## Commit-Typen (Conventional Commits)

|----------------------------------------------------------------------------------------------|
| Typ      | Verwendung                                 | Beispiel                             |
|----------|--------------------------------------------|--------------------------------------|
| feat     | Neue Funktion                              | feat(auth): add login                |
| fix      | Bugfix                                     | fix(mock): correct data              |
| refactor | Struktur/Codeänderung ohne neue Funktion   | refactor(config): restructure        |
| docs     | Dokumentation                              | docs(readme): update instructions    |
| style    | Formatierung, Prettier, CSS                | style(ui): adjust spacing            |
| test     | Tests                                      | test(auth): add unit tests           |
| chore    | Wartung, Dependencies, Config              | chore(deps): update packages         |
| perf     | Performance-Verbesserung                   | perf(api): optimize queries          |
| ci       | CI/CD-Konfiguration                        | ci(github): add workflow             |
|----------------------------------------------------------------------------------------------|

**Format:** `<typ>(<scope>): <beschreibung>`  
*Hinweis: `<scope>` ist optional*

---

## Wichtige Git-Befehle

```bash
# Branch erstellen
git checkout -b <branch-name>

# Dateien zum Commit vorbereiten
git add <file>       # einzelne Datei
git add .            # alle Änderungen

# Commit erstellen
git commit -m "<type>(<scope>): <kurze beschreibung>"

# Pushen
git push -u origin <branch-name>

# Änderungen vom Remote holen
git pull

# Alle Dateien neu indexieren (falls vorher ignoriert)
git rm -r --cached .
git add .
git commit -m "Reindex all files"
git push

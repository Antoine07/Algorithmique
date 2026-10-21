# Guide d'installation — Python et Visual Studio Code

Public : Bachelor 1 — Débutants en programmation Systèmes : Windows 10/11, macOS et Linux Objectif : installer Python, configurer VS Code et exécuter un premier programme.

## 1. Télécharger les logiciels

[File:Python logo 01.svg - Wikimedia Commons](https://images.openai.com/static-rsc-4/Bzj1rVLvlyo0greXCCSMcFmOK7xycDD0ktwcRulLHBuQZ2yA0OKPQb0yrsUb7hMY5ALKXqtYFVZsMmXxH-O1xR8jb2yTd0E0nZOgSU5x0rSx-9kZGLKVWbBOPIATgkXC8v4OcLnlrU3znTMMEm3Ldinh8llnnyumnJK8HwZUEcY?purpose=inline)

Python

Langage de programmation utilisé pendant les travaux pratiques.

Télécharger la version stable de Python 3.

[Télécharger Python — site officiel](https://www.python.org/downloads/?utm_source=chatgpt.com)

[Visual Studio Code - Download and install on Windows | Microsoft Store](https://images.openai.com/static-rsc-4/jY_7hOYswjl1Y6siOy3e4oHaYltkG9BdMI0FTEC9oiGpDEZbypJZZg-WDl7FCqT9EJk6hgIstWo9erek_0vdSIqLOyjd380gJVWlf9N_Anmw0t4IjY8pXwnss6J8xd41GHsUCF-oNc2hxVRa4VEirjkK2VbEJCpeVonLABWzTEI?purpose=inline)

Visual Studio Code

Éditeur de code permettant d'écrire et d'exécuter les programmes Python.

[Télécharger VS Code — site officiel](https://code.visualstudio.com/download?utm_source=chatgpt.com)

## 2. Installer Python

WindowsmacOSLinux

1. Télécharger l'installateur depuis python.org.
2. Lancer l'installation. Si l'option Add Python to PATH est proposée, la cocher.
3. Cliquer sur Install Now et terminer l'installation.
4. Ouvrir PowerShell et saisir :

```
py --version
```

Si le lanceur `py` n'est pas disponible, essayer `python --version`.

Résultat attendu : `Python 3.x.x`.

En cas de redirection vers Microsoft Store, vérifier l'installation et les alias d'exécution Python dans les paramètres Windows.

## 3. Installer et configurer VS Code

1. Installer Visual Studio Code.
2. Ouvrir VS Code.
3. Cliquer sur Extensions dans la barre latérale (ou `Ctrl+Shift+X` sur Windows/Linux, `Cmd+Shift+X` sur Mac).
4. Rechercher `Python`.
5. Installer l'extension officielle Python, éditée par Microsoft (`ms-python.python`).

[Python: VS Code Update, Why It's So Popular (& Famous Easter Egg) -- Visual Studio Magazine](https://images.openai.com/static-rsc-4/WOjdaKejjxmbB-ZXx8vCPFozUyDJ4UTVqc-cTrJK3ak3_4tsz2JVS5beBrMkG_LX0udduhOgYojeno1OwxP7MW_MMki-i0K2GbkwcJpgOZCjgN9nyigxAlFIiohl776gXYflDThsFO2e2HYXiBWn48BB_Eum7Oi0DbXhkNwzVZA?purpose=inline)

Python — Microsoft

Complétion de code, débogage, détection des environnements et exécution de scripts.

[Extension officielle Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python\&utm_source=chatgpt.com)

## 4. Créer son premier programme

Créer un dossier nommé `python_bachelor1`, puis l'ouvrir dans VS Code à l'aide de File → Open Folder.

Créer ensuite un fichier appelé `bonjour.py` :

```
prenom = input("Votre prénom : ")age = int(input("Votre âge : "))print("Bonjour", prenom)print("Vous avez", age, "ans.")
```

Dans VS Code, ouvrir la palette de commandes avec `Ctrl+Shift+P` ou `Cmd+Shift+P`, sélectionner Python: Select Interpreter, puis choisir l'installation Python 3.

Cliquer sur le bouton Run Python File en haut à droite de l'éditeur pour exécuter le programme.

Vous pouvez également utiliser le terminal intégré de VS Code :

```
# Windows
py bonjour.py

# macOS / Linux
python3 bonjour.py
```

## 5. Vérifier son installation

Liste de vérification

0/5

Python 3 est installé et sa version s'affiche dans le terminal.

VS Code est installé et s'ouvre correctement.

L'extension Python de Microsoft est installée.

L'interpréteur Python 3 est sélectionné dans VS Code.

Le programme bonjour.py s'exécute sans erreur.

## 6. Problèmes fréquents

| Problème                     | Solution                                                       |
| ---------------------------- | -------------------------------------------------------------- |
| `python` n'est pas reconnu   | Fermer et rouvrir le terminal, puis vérifier l'installation.   |
| VS Code ne trouve pas Python | Utiliser `Python: Select Interpreter`.                         |
| `SyntaxError`                | Vérifier les parenthèses, guillemets et deux-points.           |
| `IndentationError`           | Vérifier les retraits sous `if`, `for` et `while`.             |
| `ValueError` avec `int()`    | Saisir un entier valide, par exemple `18` plutôt que `18.5`.   |
| Le programme semble bloqué   | Vérifier s'il attend une réponse à `input()` dans le terminal. |

Précision pour Windows : la méthode officielle actuelle passe par le Python Install Manager. L'option « Add Python to PATH » concerne notamment les installateurs classiques et n'apparaît pas nécessairement avec ce gestionnaire.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.python.org\&sz=32)

Python 3.14.7 documentation

+1



Pour les travaux pratiques de jeudi et vendredi, Python 3 et l'extension Python de VS Code suffisent. Il n'est pas nécessaire d'installer NumPy, Pandas, Jupyter ou d'autres bibliothèques.

Documentation officielle : [Tutoriel Python avec VS Code](https://code.visualstudio.com/docs/python/python-tutorial?utm_source=chatgpt.com).&#x20;

[image](https://www.google.com/s2/favicons?domain=https://code.visualstudio.com\&sz=32)

code.visualstudio.com

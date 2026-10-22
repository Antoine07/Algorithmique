# Le labo Python

Ouvrir **[docs/index.html](docs/index.html)** dans un navigateur. Le site complet est dans `docs/` : HTML, CSS, JavaScript et contenus générés. Les cours et QCM fonctionnent sans installation ni serveur.

Le parcours contient le QCM 01 (20 questions), l'introduction à Python (9 slides), l'algorithmique (28 slides, 13 exercices), puis le QCM 02 (20 questions : 10 faciles puis 10 progressives). Les QCM donnent une explication immédiate, un score et un récapitulatif. Les réponses restent enregistrées dans le navigateur lorsque son stockage est disponible ; aucun résultat n'est transmis à un enseignant.

Dix flashcards sur les bonnes pratiques du code complètent le chapitre 02.

La section **Pour aller plus loin**, sous ce parcours, propose le chapitre 03 (18 slides, 8 exercices de recherche dans les listes), puis **8 flashcards**. Chaque carte permet de révéler la réponse et de choisir « Je savais » ou « À revoir ». Le bilan permet de reprendre uniquement les cartes à revoir ; cette autoévaluation est conservée dans le navigateur.

Le cours de tri, **Introduction au tri en Python**, comporte 24 slides et 8 exercices. Il commence par deux animations (sélection et insertion) et la question « À votre avis, comment ça marche ? ». Seul le tri à bulles est ensuite étudié en code. Lecture/pause, vitesse et avance pas à pas permettent d'observer le tri, un passage unique et l'échange avec une variable temporaire.

Après le tri : **5 flashcards**, un **QCM de 5 questions sur le tri**, puis un **QCM général de 20 questions**. Les questionnaires affichent le score et une explication après chaque réponse. Tout fonctionne directement dans `docs/`, sans serveur applicatif.

## Publier sur GitHub Pages

Après avoir envoyé les fichiers du dépôt sur GitHub :

1. Ouvrir **Settings → Pages**.
2. Choisir **Deploy from a branch**.
3. Choisir la branche **main** et le dossier **/docs**.
4. Cliquer sur **Save**.

[Documentation GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

Les liens sont relatifs et fonctionnent aussi sous le chemin d'un dépôt GitHub Pages. Le fichier `docs/.nojekyll` permet de servir directement le site statique. Aucune compilation ni dépendance externe n'est nécessaire sur GitHub. La configuration du dépôt et sa publication ne sont pas effectuées par ces fichiers.

```text
docs/
├── .nojekyll
├── index.html
├── assets/
│   ├── app.js
│   ├── content.js
│   ├── site.css
│   └── sorting.js
├── supports/
│   ├── 01_introduction_python.html
│   ├── 02_algorithmique.html
│   ├── 03_algorithmique.html
│   └── 05_introduction_tri.html
├── revision/
│   ├── 04_flashcards.html
│   ├── 06_flashcards_tri.html
│   └── 07_flashcards_code_propre.html
└── qcm/
    ├── 01_QCM_Revision.html
    ├── 02_QCM_Revision.html
    ├── 03_QCM_Tri.html
    └── 04_QCM_General.html
```

## Pratiquer en local

Utiliser [Sandbox Algo — JupyterLite](sandbox-algo/README.md) :

```sh
cd sandbox-algo
docker compose up -d --build
```

Ouvrir **http://localhost:8882/lab/index.html**. Le notebook `00_demarrage.ipynb` permet de commencer. Les travaux sont enregistrés dans le navigateur et peuvent être téléchargés en `.ipynb`.

## Solution en ligne 

Vous pouvez utiliser jupyterlite en ligne : **https://jupyter.org/try-jupyter/lab**


# Le labo Python

Ouvrir **[docs/index.html](docs/index.html)** dans un navigateur. Le site complet est dans `docs/` : HTML, CSS, JavaScript et contenus générés. Les cours et QCM fonctionnent sans installation ni serveur.

Le parcours contient le QCM 01 (20 questions), l'introduction à Python (9 slides), l'algorithmique (28 slides, 13 exercices), puis le QCM 02 (10 questions). Les QCM donnent une explication immédiate, un score et un récapitulatif. Les réponses restent enregistrées dans le navigateur lorsque son stockage est disponible ; aucun résultat n'est transmis à un enseignant.

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
│   └── site.css
├── supports/
│   ├── 01_introduction_python.html
│   └── 02_algorithmique.html
└── qcm/
    ├── 01_QCM_Revision.html
    └── 02_QCM_Revision.html
```

## Modifier les contenus

Les sources pédagogiques restent dans `supports/*.md` et `qcm/*.md`. Après modification, régénérer les données :

```sh
python3 scripts/build_content.py
```

Le convertisseur écrit les données dans `docs/assets/content.js`, y compris les textes proposés en téléchargement. L'interface se trouve dans `docs/assets/app.js` et son style dans `docs/assets/site.css`. Les sources Markdown et les corrections restent hors de `docs/` ; les corrections ne sont pas ajoutées aux slides.

## Vérifier

```sh
node --check docs/assets/app.js
node scripts/test_site.cjs
```

Les tests vérifient la logique des parcours avec une façade DOM minimale. Ils ne remplacent pas une vérification visuelle dans un navigateur, sur ordinateur et mobile.

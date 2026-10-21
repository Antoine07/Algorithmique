# Sandbox Algo — JupyterLite en local

Un espace pour écrire et exécuter du Python dans des notebooks. Docker sert l'interface sur votre ordinateur ; le noyau Python (Pyodide) fonctionne dans votre navigateur.

## Démarrer

**Prérequis :** Docker Desktop démarré et une connexion Internet pour la première construction et le chargement du noyau Python. Cette configuration n'est pas entièrement hors ligne : Pyodide est chargé depuis son CDN.

Depuis la racine du dépôt :

```sh
cd sandbox-algo
docker compose up -d --build
```

Ouvrir **http://localhost:8882/lab/index.html**. Aucun jeton à saisir.

1. Ouvrir `00_demarrage.ipynb` dans la liste des fichiers, ou créer un notebook depuis le lanceur.
2. Choisir le noyau **Python (Pyodide)** si un choix est demandé.
3. Attendre que le noyau soit prêt, puis exécuter une cellule avec **Maj + Entrée**.

Le premier lancement prend plus de temps : Docker télécharge les dépendances, puis le navigateur charge Python. Pour les lancements suivants, `docker compose up -d` suffit.

## Enregistrer son travail

Les modifications sont enregistrées dans le **stockage du navigateur**, pour cette adresse locale. Elles ne sont pas écrites automatiquement dans le dossier `notebooks/` de l'ordinateur.

- Pour conserver ou rendre un travail : clic droit sur le notebook dans la liste des fichiers, puis **Download / Télécharger**.
- Pour reprendre un fichier `.ipynb` téléchargé : le glisser dans la liste des fichiers JupyterLite.
- Conserver le même navigateur et l'adresse `http://localhost:8882`. Effacer les données du navigateur, changer de profil ou utiliser la navigation privée peut faire perdre les modifications locales.

## Arrêter

Depuis `sandbox-algo/` :

```sh
docker compose down
```

Les notebooks enregistrés dans le navigateur restent disponibles lors du prochain démarrage à la même adresse.

## Ajouter des notebooks de cours

Placer les fichiers de départ dans `sandbox-algo/notebooks/`, puis reconstruire :

```sh
docker compose up -d --build
```

Ces fichiers sont des modèles distribués aux étudiants. Une version déjà modifiée dans leur navigateur reste prioritaire. Pour distribuer une nouvelle version sans écraser leur travail, donner un nouveau nom au notebook.

## En cas de problème

```sh
docker compose ps
docker compose logs jupyterlite
```

Si l'ancienne sandbox `sandobox` occupe encore le port 8882, l'arrêter depuis ce dossier :

```sh
docker compose -p sandobox down --remove-orphans
docker compose up -d --build
```

Sinon, choisir un autre port dans `compose.yaml`, par exemple `127.0.0.1:8883:8888`, et ouvrir l'adresse correspondante. Télécharger les travaux avant de changer d'adresse : le stockage du navigateur est associé à l'origine du site.

## Fonctionnement

`requirements.txt` contient les outils de construction de JupyterLite et son noyau Python. Les bibliothèques installées dans l'image Docker ne deviennent pas automatiquement disponibles dans le Python du navigateur. Les exercices d'algorithmique du cours utilisent seulement les fonctions de base de Python.

La sandbox se lance sur l'ordinateur de chaque étudiant. Le site de cours dans `docs/` peut continuer à être publié sur GitHub Pages indépendamment.

Références : [JupyterLite en local](https://jupyterlite.readthedocs.io/en/stable/quickstart/standalone.html), [contenus et stockage dans le navigateur](https://jupyterlite.readthedocs.io/en/stable/howto/content/files.html).

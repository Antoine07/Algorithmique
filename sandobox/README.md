# Sandbox Python / JupyterLab

Environnement Docker pour expérimenter avec Python 3.12, pandas, NumPy,
Matplotlib, Seaborn, Plotly et scikit-learn dans des notebooks.

## Démarrer

Prérequis : Docker Desktop démarré, avec Docker Compose disponible.

Depuis ce dossier :

```sh
docker compose up -d --build
docker compose logs jupyter
```

Ouvrir **http://localhost:8882/lab** et saisir le jeton affiché dans les logs
après `?token=`. Les liens affichés par Jupyter utilisent le port interne
`8888` : utiliser le port `8882` dans le navigateur.

Pour retrouver le jeton :

```sh
docker compose exec jupyter jupyter server list
```

Dans le lanceur JupyterLab, choisir **Python 3** pour créer un notebook.
Les notebooks et fichiers créés sont enregistrés dans `notebooks/` sur
l'ordinateur et conservés après l'arrêt ou la reconstruction du conteneur.
Le service est accessible uniquement depuis cet ordinateur.

## Arrêter

```sh
docker compose down
```

## Ajouter des bibliothèques

Ajouter les dépendances à `requirements.txt`, puis reconstruire :

```sh
docker compose up -d --build
```

Les paquets installés uniquement depuis un terminal Jupyter ne sont pas
conservés lors du remplacement du conteneur.

La configuration du serveur est dans `jupyter_server_config.py`, copiée dans
l'image à la construction. Après une modification, reconstruire avec la
même commande.

Si le port `8882` est occupé, modifier le port à gauche dans
`127.0.0.1:8882:8888` dans `compose.yaml`, puis relancer le service et utiliser
ce nouveau port dans le navigateur.

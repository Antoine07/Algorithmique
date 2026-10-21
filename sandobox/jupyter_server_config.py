"""Configuration de la sandbox Jupyter exécutée dans Docker."""

c = get_config()  # noqa: F821 — fourni par Jupyter
c.ServerApp.ip = "0.0.0.0"
c.ServerApp.port = 8888
c.ServerApp.port_retries = 0
c.ServerApp.open_browser = False
c.ServerApp.root_dir = "/workspace"
c.ServerApp.default_url = "/lab"

# Conserver l'authentification par jeton généré automatiquement par Jupyter.

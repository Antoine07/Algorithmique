FROM python:3.12-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    MPLCONFIGDIR=/tmp/matplotlib

WORKDIR /opt/sandbox
COPY requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt \
    && useradd --create-home --uid 1000 sandbox \
    && mkdir -p /workspace \
    && chown sandbox:sandbox /workspace
COPY jupyter_server_config.py /etc/jupyter/jupyter_server_config.py
USER sandbox
WORKDIR /workspace
EXPOSE 8888
CMD ["jupyter", "lab", "--config=/etc/jupyter/jupyter_server_config.py"]

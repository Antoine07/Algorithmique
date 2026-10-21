FROM python:3.12-slim-bookworm AS builder

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /build
COPY requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY notebooks/ ./notebooks/
RUN jupyter lite build --contents notebooks --output-dir /site

FROM python:3.12-slim-bookworm AS runtime
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1
WORKDIR /site
COPY --from=builder /site/ /site/
USER 1000:1000
EXPOSE 8888
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8888/lab/index.html', timeout=3)" || exit 1
CMD ["python", "-m", "http.server", "8888", "--bind", "0.0.0.0", "--directory", "/site"]

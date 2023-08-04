FROM python:3.11-alpine
WORKDIR /app

COPY /my-app/fastAPI/__pycache__/requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY . .
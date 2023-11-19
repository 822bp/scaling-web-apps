# syntax=docker/dockerfile:1

FROM python:3.9-slim-buster
WORKDIR /server

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY app.py app.py

CMD ["python3", "app.py"]
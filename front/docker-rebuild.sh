#!/bin/sh
DOCKER_HOST=
docker login docker.re-idea.jp
docker buildx build . --platform=linux/amd64 -t docker.re-idea.jp/global-webcreation-lp-frontend:latest
docker push docker.re-idea.jp/global-webcreation-lp-frontend:latest



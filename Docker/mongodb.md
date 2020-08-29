# Docker Mongo Server

1. Descargar la imagen de Mongo

```
docker pull mongo
```

2. Crear un volumen

```
docker volume create mongo-data
```

3. Crear contenedor

```
docker run -d --name=mongo-server -p 27017:27017 -v mongo-data:/data/db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=ElMund03sanch0 mongo
```

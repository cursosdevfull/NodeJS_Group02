# Docker Mongo Server

1. Descargar la imagen de MySQL

```
docker pull mysql
```

2. Crear un volumen

```
docker volume create mysql-data
```

3. Crear contenedor

```
docker run -d --name=mysql-server -p 3306:3306 -v mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ElMund03sanch0 mysql
```

4. Verificar que esté ejecutándose MySQL

```
docker ps
```

5. Instalar PHPMyAdmin

5.1 Descargar la imagen

```
docker pull phpmyadmin/phpmyadmin
```

5.2 Crear un volumen

```
docker volume create sessions-data
```

5.3 Crear contenedor

```
docker run -d --name=phpmyadmin -p 8080:80 -v sessions-data:/sessions -e PMA_ARBITRARY=1 phpmyadmin/phpmyadmin
```

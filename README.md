# CongresoSemEII XV 🎸

Aplicación para el SemEII XV de San Rafael.
Visitar el sitio web para más información del evento. ## [Ver Web](https://semeii2024.vercel.app)

## [SERVER](https://github.com/GuillermoEQ/CongresoSemEII/edit/main/server)

Navegar a la carpeta server  ``` cd server ```
Ejecutar ` docker-compose build ` para construir el contenedor.
Para correr el contenedor  ` docker-compose up`
Con esto ya se crea el contenedor y empieza a correr en el puerto tanto la app con la db de postgreSQL. 

Si se desea correr sólo los test se debe ejecutar `docker-compose up backend-test`.
Si se desea ejecutar la aplicación en modo de producción se debe ejcutar `docker-compose up backend`. 

## [CLIENT](https://github.com/GuillermoEQ/CongresoSemEII/edit/main/client)

Para ejecutar el Frontend se debe navegar a la carpeta client ```cd client```.
Luego ejecutar `npm install`
Para ejecutar la aplicación `expo start --web`  la cual mostrará la aplicación en el navegador en el `localhost:8081/`.

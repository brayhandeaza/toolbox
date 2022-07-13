# Toolbox : Full Stack JS - Code Challenge

## Paso para correr este projecto

1. Clonar el repositori: `git clone https://github.com/brayhandeaza/toolbox.git`
2. Navega hacia el directorio del proyecto (api o client): `npm install`
3. Desdes el directorio de `app o client` ejecuta la aplicación: `npm run start`

## Ejecución de pruebas (debe estar en directorio api)

- Ejcutar modo prueva: `npm run test`
- Ejcutar modo mientra la app esta correindo: `npm run testRunning`

# Front-End

### Requisitos para el código del frontend

- [x] Esta usando programación funcional y Hook Effects en React.
- [x] La App puede correr usando NodeJS 16.
- [x] No depende de librerías o variables de entorno instaladas de forma global.
- [x] El código esta escrito en JavaScript (ES6+).
- [x] No incluye las siguientes herramientas: TypeScript, Dart, Elm, ni similares.

### Puntos opcionales

- [x] Usaste Redux.
- [ ] Test unitarios usando Jest.
- [x] Poder filtrar por "fileName" usando el punto opcional del API de listado de archivos y filtro por queryparam.

### Librerías y frameworks:

- react
- react-bootstrap
- react-redux
- react-router-dom
- axios

# Back-End

### Requisitos para el código del API:

- [x] La App puede correr usando NodeJS 14.
- [x] No depende de librerías o variables de entorno instaladas de forma global.
- [x] El código esta escrito en JavaScript (ES6+).
- [x] Están escrito sin utilizar: Babel, TypeScript, Dart, Elm, etc.

### Librerías y frameworks:

- express
- axios
- cors
- chai
- chai-http
- mocha

### Puntos opcionales

- [x] Un endpoint `GET /files/list` que dé como respuesta la lista de archivos disponibles tal cual como se la muestra en el API Externa.
- [x] Agregar un filtro por para poder pedir los datos de un archivo especifico: queryparam
      `./files/data?fileName=<Nombre del archivo>.`
- [x] Usaste StandarJs

# Punto opcional global

- [ ] Usar Docker o Docker Compose para correr las apps.

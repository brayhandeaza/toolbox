# Toolbox : Full Stack JS - Code Challenge

## Paso para correr este projecto

1. Clonar el repositori: `git clone https://github.com/brayhandeaza/toolbox.git`
2. Navega hacia el directorio del proyecto (api o client): `npm install`
3. Desdes el directorio de `app o client` ejecuta la aplicación: `npm run start`

## Ejecución de pruebas (debe estar en directorio api)

- Ejcutar modo prueva: `npm run test`
- Ejcutar modo mientra la app esta correindo: `npm run testRunning`

# Front-End

### Preview
![myfile](https://github.com/brayhandeaza/toolbox/blob/main/media/front-end.gif)


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

### Preview
![myfile](https://github.com/brayhandeaza/toolbox/blob/main/media/back-end.gif)

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

# API Requests

### Ejemplo 1:

```json
GET http://localhost:8000/files/list

{
  "files": [
    "test1.csv",
    "test2.csv",
    "test3.csv",
    "test4.csv",
    "test5.csv",
    "test6.csv",
    "test9.csv"
  ]
}
```

### Ejemplo 2:

```json
GET http://localhost:8000/files/data

[
  {
    "file": "test2.csv",
    "lines": [
      {
        "file": "test2.csv",
        "text": "epLBcYIQGgmtIZVrEn",
        "number": "8",
        "hex": "6f27998c9968f175a33264c66d2b9b71"
      }
    ]
  },
  {
    "file": "test3.csv",
    "lines": [
      {
        "file": "test3.csv",
        "text": "IICbMgljzF",
        "number": "8750",
        "hex": "99c117c1ac999ad8db0bca1a5ac4c49b"
      },
      {
        "file": "test3.csv",
        "text": "hGyrysSfwizxIwJ",
        "number": "7328876",
        "hex": "d2a39d949d42c920c181c7b0d18a7c4c"
      },
      {
        "file": "test3.csv",
        "text": "XKaQsCLkUc",
        "number": "8284",
        "hex": "18a6aea0d4620250881585bd7ee2ab2f"
      }
    ]
  }
  . . .
]
```

### Ejemplo 3:

```json
GET http://localhost:8000/files/data?fileName=test3.csv

{
  "file": "test3.csv",
  "lines": [
    {
      "file": "test3.csv",
      "text": "rPGjSPsDAzwIKR",
      "number": "516",
      "hex": "cf78bb2efe8921214e87af7486724db9"
    },
    {
      "file": "test3.csv",
      "text": "tKSvpVaRRKgLGTag",
      "number": "631518413",
      "hex": "3d7f4197a03e11d07e5a840b61cb95ec"
    },
    . . .
  ]
}
```

### Ejemplo 4:

```json
GET http://localhost:8000/files/test2.csv

{
  "file": "test2.csv",
  "lines": [
    {
      "file": "test2.csv",
      "text": "TuCwWZKWzmAMh",
      "number": "760",
      "hex": "f6102372a6ff9e9a8488c0c7f589f688"
    }
  ]
}
```

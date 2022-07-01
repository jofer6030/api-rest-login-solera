# API REST LOGIN - SOLERA

REST API para el login de usuarios

## Estructura JSON de Usuario

```json
{
  "id": 1,
  "password": "$2b$12$YqkAg2.V1np060jXjQv.t.b0llzup.7afFfC2OxU7Rqgw5/kiWipO",
  "username": "admin",
  "fullname": "Juan Perez",
  "createdAt": "2022-03-08T15:32:29.000Z",
  "updatedAt": "2022-03-08T15:32:29.000Z"
},
```

- **id** : Identificador del usuario
- **password** : Contraseña del usuario
- **username** : Nombre de usuario
- **fullname** : Nombre completo del usuario
- **createdAt** : Fecha de creación del usuario
- **updatedAt** : Fecha de actualización del usuario

### POST login de usuario

**Retornan el nombre completo del usuario**

Con Parametros:

`POST /api/user/login/[username]/[password]`

Con Query Params:

`POST /api/user/login?username=[username]&password=[password]`

#### Respuesta

Correct Request:

```json
{
  "message": "User found",
  "user": "Juan Perez"
}
```

Bad Request (username):

```json
{
  "message": "User not found"
}
```

Bad Request (password):

```json
{
  "message": "Password incorrect"
}
```

Bad Request (not password and not username):

```json
{
  "message": "Bad Request"
}
```

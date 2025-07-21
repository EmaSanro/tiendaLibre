# TiendaLibre

Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## Tematica del Proyecto

Esta es una pagina para comprar productos de cualquier tipo, algo asi como mercado libre.
Utiliza una API para recolectar los datos de los productos, la cual esta hecha con la pagina *mockapi.io*.
Tambien utiliza un pequeño sistema de registro y logueo, el cual permite que si no estas registrado en la web no te permita agregar productos al carrito.
Esto fue logrado utilizando sessionStorage y un objeto de datos de usuario para comparar, a la hora de iniciar sesion, que sean las credenciales correctas.

## ENDPOINTS
Obtener todos los productos disponibles:
```bash
api/v1/products
```
Obtener un producto especifico (por ID):
```
api/v1/products/:product_ID
```

## Servidor de desarrollo

Para iniciar el servidor utiliza el comando:

```bash
ng serve
```

Una vez que el servido este corriendo, abre tu navegador e introduce la siguiente URL `http://localhost:4200/`. Se ira actualizando la aplicacion a medida que realices y guardes cambios en los archivos del proyecto.

### Creador
Este proyecto fue creado por - Emanuel San Roman - 45.568.547 - emanuel.sanroman03@gmail.com - Tres Arroyos -.


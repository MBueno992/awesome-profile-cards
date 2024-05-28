
# Proyectos Molones 💻

Aplicación web para poder compartir los proyectos personales de los usuarios con la comunidad o también en redes sociales como Twitter y Facebook una vez creada su respectiva tarjeta.

Se puede acceder a la aplicación a través del siguiente enlace:
[Proyectos molones](https://proyectos-molones-xz0d.onrender.com/)

![Pantalla principal](/src/images/landing.png)

### Pantalla principal

Al acceder a la página vemos inicialmente todos los proyectos que hayan sido registrados por los usuarios. Podremos acceder a su ficha clikando sobre el nombre del proyecto para poder compartirlo en twitter o facebook y ver la imagen del proyecto.
Además, en cada tarjeta podremos acceder tanto al enlace de github del repositorio del proyecto como a la demo.


![Formulario](/src/images/formulario.png)

### Añadir un proyecto

Para registrar un proyecto, deberemos pinchar en el botón que aparece en la parte superior de la página principal "Añadir proyectos" y nos llevará a la página con el formulario para poder crear la tarjeta con nuestro proyecto. Es obligatorio rellenar todos los campos, en caso de dejarles vacíos nos aparecerá un mensaje debajo del campo que no hayamos completado para finalizarlo.

## ¡Lo que he aprendido! 👩🏻‍💻

Este ha sido uno de los primeros proyectos en los que hemos trabajado creando nuestra base de datos con freeDB (para poder desplegar el proyecto en render), y también ha sido mi primera API.

### Herramientas utilizadas 🛠️

Para la realización de este proyecto se ha trabajado con **REACT**, **NODEJS**, **EXPRESS**, **MYSQL** y **VITE** para la ejecución de tareas. Además también se ha utilizado _node_, _SASS_ y _flexbox_.

### Pasos a seguir si queremos arrancar el proyecto desde tu local ⚙️

1. Descarga el proyecto.

- Recuerda, descargar no es clonar, ya que si lo clonas no podrás añadir commits.

1. **Abre una terminal** en la carpeta raíz donde le hayas guardado.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```
npm install
```

> **NOTA**: Esto generará una carpeta llamada node_modules y sólo hay que ejecutarlo una vez. En el momento que aparezca la carpeta ya no será necesario volver a ejecutarlo. Al ser un proyecto que trabaja tanto la parte de front como la parte de back, deberás realizar la instalación en la ruta principal y en la ruta cd web.

1. Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **_El proyecto hay que arrancarlo cada vez que te pongas a programar._** Para ello ejecuta el comando:

```
npm run dev
```

Este comando:

- **Abre una ventana del navegador y muestra la página web**..

Después de ejecutar `npm run dev` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `web/` y programar cómodamente. Para camiar la parte de back, los ficheros se encuentran en la carpeta `src/` que se encuentra en la carpeta raíz, aquí tendremos el archivo `index.js`.

### Estructura de carpetas

La estructura de carpetas en el proyecto es la siguiente:

```
db

src
 ├─ images
 ├─ public-css
 └─ public-react 

views

web
 ├─ public
 └─  src
    ├─ components
    ├─ images
    ├─ scss
    └─ services
```

## Autora ✒️

[**Marta Bueno Ortiz**](https://www.linkedin.com/in/mbueno992/)







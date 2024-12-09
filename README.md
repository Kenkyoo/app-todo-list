# Todo List App

Una simple aplicación web para gestionar tareas. Permite agregar, eliminar y ordenar tareas de forma interactiva, guardándolas en el almacenamiento local del navegador.

## Características

- **Agregar tareas**: Puedes escribir una tarea y agregarla a la lista.
- **Eliminar tareas**: Puedes eliminar tareas de la lista.
- **Ordenar tareas**: Puedes reorganizar las tareas mediante drag & drop.
- **Persistencia local**: Las tareas se guardan en el almacenamiento local del navegador, por lo que se mantienen incluso después de recargar la página.

## Tecnologías utilizadas

- **HTML5**: Estructura básica de la página.
- **CSS (Sass)**: Estilos personalizados utilizando Sass.
- **jQuery**: Manipulación DOM y eventos.
- **MDB UI Kit**: Para el diseño de la interfaz de usuario (UI).
- **SortableJS**: Para hacer que la lista sea ordenable mediante drag & drop.
- **Webpack**: Para el bundling de JavaScript y CSS.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Kenkyoo/app-todo-list.git

    Navega al directorio del proyecto:

cd app-todo-list

Instala las dependencias:

npm install

Ejecuta la aplicación en desarrollo:

    npm start

    Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador.

Uso

    Escribe una tarea en el campo de entrada y presiona "Add" para agregarla a la lista.
    Las tareas se guardarán en el almacenamiento local del navegador.
    Puedes eliminar tareas haciendo clic en el icono de "X".
    Puedes reorganizar las tareas utilizando drag & drop.

Despliegue

La aplicación está disponible en línea en Cloudflare Pages.
Estructura del Proyecto

    index.html: Archivo HTML principal.
    src/index.js: Script principal de la aplicación.
    src/output.css: Estilos generados por Sass.
    dist/bundle.js: Archivo generado por Webpack con el código JavaScript final.
    webpack.config.js: Configuración de Webpack.

Contribuciones

Si deseas contribuir, por favor sigue estos pasos:

    Haz un fork del repositorio.
    Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
    Realiza los cambios y confirma (git commit -am 'Añadir nueva funcionalidad').
    Haz push a la rama (git push origin feature/nueva-funcionalidad).
    Abre un pull request.

Licencia

Este proyecto está bajo la Licencia ISC. Puedes ver más detalles en el archivo LICENSE.

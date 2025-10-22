# Proyecto: Carritos de Compras (Venta de Guitarras)

- Proyecto de carritos de compras, donde se muestran distintas guitarras para su venta

## Herramientas y/o tecnologías

- React
- Node.js (20.19.0)
- Vite
- CSS

## Creación del proyecto

- Para la creación del proyecto, ejecutamos en consola:
  - **_npm create vite@lastest_**
- Con esto, nos intalará la última versión de _Vite_.
- Al ejecutar el comando, nos aparecerá lo siguiente:
  - _Project name:_ **NombreProyecto**
  - _Select a framework:_ **Seleccionamos el FRAMEWORK con el teclado, aparecerá puntos o flechas, elegimos: _REACT_**
  - _Select a variant:_ **Seleccionamos para este proyecto: _JavaScript + SWC_**
  - _Use rolldown-vite (Experimental)?:_ **No**
  - _Install with npm and start now?_ **Yes**
- Después de terminar la configuración, nos aparece la _URL_ de cómo debemos abrirla en el navegador
  - _http://localhost:5173/_
- Ya una vez creado el proyecto y terminando la configuración inicial, limpiamos el contenido de los archivos:
  - **_App.jsx_**
  - **_main.jsx_** -> aquí solo realizamos unos pequeños ajustes
  - **_index.css_** -> limpiamos todo el CSS
- El proyecto lo levantamos con:
  - **_npm run dev_**

### Formas de escribir CSS

- Unos de los temas que más se discuten en _React_ es como escribir el código _CSS_.
- Hay muchas opciones, incluso algunas librerías te ofrecen componentes que puedes personalizar.
- Frameworks como: _Bootstrap_ o _Tailwindcss_ pueden ser utilizados en _React_.
- _CSS PLANO, FRAMEWORKS CSS, SASS, MÓDULOS CSS, COMPONENTES, STYLED COMPONENTS_**
- Recomendaciones_
  - Solo utilizar una forma de generar los estilos _CSS_.
- No hay mejores o peores; cualquiera puede realizar desde un proyecto simple hasta uno muy grande.

### Componentes

- Un componente es una función de JS.
- Es tener código: _HTML & JS_ en un solo archivo.
- _React_ utiliza componentes para la creación de aplicaciones y sitios web.
- Un componente puede tener la extensión:
  - **.jsx - .tsx - .js**
- También es posible pero lo recomendado son las 2 primeras opciones.
- Un componente usualmente tiene 2 propósitos: ser **re-utilizable** o **separa la funcionalidad**; si se cumplen ambas es aún mejor.
- Siempre tiene que tener un: _return()_, que es lo que se muestra en pantalla.
- 
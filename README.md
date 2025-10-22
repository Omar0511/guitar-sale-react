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

  ## JSX
  
  - Es una extensión del lenguaje desarrollada por:
    - _Meta (Facebook)_
  - para _React_.
  - Parece _JS_ pero muestra código de _HTML_ y básicamente es un lenguaje de _Templates/Vistas_ que muestra el _HTML_ pero tiene todas las funciones de _Javascript_.
  - Una vez compilado son archivos: _JS_ con funciones y objetos.
  
  ### Reglas JSX

  - A diferencia de _HTML_, que no es estricto, en _JSX_ si un elemtno _HTML_ tiene una etiqueta de apertura, deberás tener también la de cierre.
  - Las etiquetas de solo apertura como: 
    - **<link>, <img> <input>**
  - Deberán finalizar con: **/>**.
  - Cada componente debe tener un _return_.
  - En este _return_ deber haber máximo un solo elemento en el nivel máximo.

### Notas

- En _React_, **class** se debe cambiar por: _className_.

## HOOKS

- Son la base de _React_.
- Los _Hooks_ te permiten utilizar las diferentes funciones de _React_ en tus componentes, _React_ tiene una serie de _Hooks_ pero también puedes crear los tuyos.
- Los _Hooks_ están disponibles desde la versión: **16.8**, previo a ello se tenían que crear _Classes_ para crear y modificar el _STATE_, con los _Hooks_ no es necesario.
- Los _Hooks_ se dividen en:
  - Básicos
  - Adicionales
- Categorías de _Hooks_
  - _useState_
  - _useEffect_
  - _useReducer_
  - _useCallback_
  - _useMemo_
  - _useRef_
  - _useImperativeHandle_
  - _useCLayoutEffect_
  - _useCInsertionEffect_
  - _useTransition_
  - _useDeferredValue_
  - _useId_
  - _useSynExternalStore_
- Creación de _Hooks_ propios:
  - También es posible crear tus propios _Hooks_, de esta forma podrás separar tu código en funciones reutilizables y sacar todo el beneficio de lo que _React_ ofrece.

## STATE

- El estado es una variable con información relevante en nuestra aplicación de _React_, algunas veces el _state_ pertenece a un componente en específico o algunas veces compartirlo a lo largo de diferentes componentes.
- Piensa en el _state_ como el resultado de alguna interacción en el sitio o aplicación web: el listado de clientes, la imagen a mostrar en una galería, si un usuario esta autenticado o no.
- El _state_ es creado con el _hook: **useState()**_
- Ejemplo
  - **import { useState } from "react"**
  - **const [customer, setCUstomer] = useState( {} );**
  - **const [customer, setCUstomer] = useState( 0 );**
  - **const [customer, setCUstomer] = useState( [] );**
  - **const [customer, setCUstomer] = useState( false );**
- Cada que tu _state_ cambia, tu aplicación de _React_ va a renderizar y actualizarse con esos cambios, no es necesario hacer nada más y tu interfaz siempre estará sincronizada con el _state_.
- Para modificar el _state_, se utiliza la función que extraemos cuando declaramos el _state_ en nuestro componente.
- 
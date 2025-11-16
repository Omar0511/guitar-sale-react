# Proyecto: Carritos de Compras (Venta de Guitarras)

- Proyecto de carritos de compras, donde se muestran distintas guitarras para su venta

## Herramientas y/o tecnologías

- React
- Node.js (20.19.0)
- Vite
- TailwindCSS
- TypeScript

## Creación del proyecto

- Para la creación del proyecto, ejecutamos en consola:
  - **_npm create vite@lastest_**
- Con esto, nos intalará la última versión de _Vite_.
- Al ejecutar el comando, nos aparecerá lo siguiente:
  - _Project name:_ **NombreProyecto**
  - _Select a framework:_ **Seleccionamos el FRAMEWORK con el teclado, aparecerá puntos o flechas, elegimos: _REACT_**
  - _Select a variant:_ **Seleccionamos para este proyecto: _TypeScript + SWC_**
  - _Use rolldown-vite (Experimental)?:_ **No**
  - _Install with npm and start now?_ **Yes**
- Después de terminar la configuración, nos aparece la _URL_ de cómo debemos abrirla en el navegador
  - _http://localhost:5173/_
- En caso que no aparezca, nos movemos a la carpeta del proyecto
  - **cd nombreProyecto**
- Y ejecutamos:
  - **npm i**
- Ya una vez creado el proyecto y terminando la configuración inicial, limpiamos el contenido de los archivos:
  - **_App.jsx_**
  - **_main.jsx_** -> aquí solo realizamos unos pequeños ajustes
  - **_index.css_** -> limpiamos todo el CSS
- El proyecto lo levantamos con:
  - **_npm run dev_**
- Una vez que terminamos el proyecto, ejecutamos el comando:
  - **_npm run build_**
- Con esto nos aparecerá la carpeta de:
  - _dist_ 

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

  ### Creación de _HOOKS_ propios

  - Existe una gran ventaja de crear tus propios _HOOKS_ y es la de incorporar _State_ y otros _Hooks_ de _React_ a tu propio código para poderlo re-utilizar entre otros proyectos.
  - Otra gran ventaja es la de organizar tu código, de esa forma el _hook_ se encarga de toda la lógica del _state_ mientras que tus componentes solo de mostrar la información.

    #### Ventjas

    - Tu código personalizado tendrá todas las ventjas de _React_ como son: 
      - state
      - effects
      - integrar otros _hooks_
      - performance
    - Re-utilizable en otros proyectos.
    - Fácil de escribir pruebas.

    #### ¿Cómo crearlos?

    - Los _hooks_ son funciones de _JavaScript_ pero tienen algunas reglas.
    - Tus _hooks_ deben seguir la convención de _React_, **use{hook}**, de esta forma _React_ escanea tu código en búsqueda de posibles problemas con las reglas de los _Hooks_.
    - Un _Hook_ ususalmente solo debe tener lógica y no presentación (para eso es un componente).

- Por convención creamos una carpeta en _src_:
  - **hooks**
  - El nombre del archivo del _hook_ puede llamar como:
    - **useNombreArchivo** -> ejemplo: _useCart.js_
    -  **archivo.js** -> ejemplo: _cart.js_

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

  ### Reglas

  - Los _Hooks_ se colocan en la parte superior de tus componentes de _React_.
  - No se deben colocar dentro de condicionales, tampoco después de un _return_.
  - Los _STATES_ no son mutables, es decir; no se pueden modificar directamente, antes de modificarlo, debemos validar que no afecte el _STATE_.
  - Podemos tomar como base y validar que si y que no, nos afecta y aplica mutabilidad.
  - **https://doesitmutate.xyz/**

## EFFECT

- _useEffect_
- Después de un _useState_ es el más utilizado.
- _useEffect_ siempre es un _callback_, que dependiendo como lo declares va a realizar diferentes acciones.
- Es el sustituto de lo que antes era _componentDidMount()_ y _componentDidUpdate()_.
- Ejemplo
  - **import { useEffect } from "react"**
  - **useEffect( () =>{ console.log('El componente está listo'); }), []);**
- La parte final: **[]**, indica que se va ejecutar cuando el componente este listo.
- Si le pasamos un valor, por ejemplo, una variable o un _state_, se va ejecutar cada que cambie el valor o el resultado de lo que le estamos pasando.
- 

  ### Usos

  - Al ejectuarse automáticamente cuando el componente esta listo, es un buen lugar para colocar código para consultar una _API_ o _LOcalStorage_.
  - Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable, puede actualzar el componente cuando ese cambio suceda.
  - Dependiendo del valor que pasemos en el array de dependencias (o no pasemos nada), el _hook_ de _useEffect_ hará algo diferente.

## STATEMENTS

- Una app de _JS_ es una serie de _statements_, cada _statement_ es una instrucción para hacer algo.
- Algunos _Statements_ son:
  - Creación de variables.
  - Código condicionales con _if_.
  - Lanzar errores con _throw new Error()_.
  - Iterar con _While - For_. 

## EXPRESSIONS

- Una expresión es algo que produce un valor.
- Algunas _EXpressions_ son_
  - Ternarios.
  - Utilizar un _Array Method_ que genere un nuevo _Array_.
  - _.map_ que genera un nuevo _array_ a diferencia de _forEach_.

## PROPS

- Compartir información entre Componentes.
- Los componentes de _React_ utilizan _Props_ para comunicarse entre ellos.
- Puedes pasarle información de un componente padre al hijo por medio de estos _Props_.
- Los _props_ se parecen a los atributos en _HTML_, pero puedes pasarle _arrays_, objetos o funciones.
- Lops _Props_ se pasan del padre al hijo, nunca se pueden pasar del hijo al padre.
- Ejemplo
  - **_ <Header nombreProp= {datos/state o funciones} />_**
- Si tienes un _state_ que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal.
- Cada nivel de componentes deberá tomar y pasar por el _Prop_ hacia otros componentes, tecnologías como:
  - Redux
  - Zustand
  - Jotai
  - Context
- evitan tener que hacerlo de esta forma.

## EVENTOS

- La forma en que _React_ maneja los eventos es muy similar a como lo hace _Javascript_ de forma nativa con algunos cambios.
- Los eventos son _camelCase_, es decir en lugar de _onchange_ se utiliza _onChange_, en lugar de: _onclick_ se usa: _onClick_.
- También a diferencia de: _JS_ y _HTML_, donde se coloca el nombre de la función en un _string_ en _React (JSX)_ se utiliza la función entre llaves {}.
- Ejemplos
  - **_HTML_**
    - <button onclick="llamarEvento()">Ejemplo eventos</button>
  - **_JSX_**
    - <button onClick={llamarEvento()}>Ejemplo eventos JSX</button>

## USEMEMO

- Simplifica los _TEMPLATES_.
- Es un _HOOKS_ enfocado al _performance_.

### TYPESCRIPT

- En esta rama agregamos
  - _Typescript_
- _TypeScript_ es un lenguaje de programación de código abierto desarrollado y mantenido por _Microsoft_. Es un superconjunto tipado de _JavaScript_, lo que significa que cualquier código _JavaScript_ válido también es código _TypeScript_ válido.
- La principal característica de _TypeScript_ es que agrega un sistema de tipos estático a _JavaScript_, lo que permite detecta errores y proporcionar herramientas de desarrollo más s+olidos.

  ## VENTAJAS

  - El sistema de tipos de _TypeScript_ permite al proramador especificar los tipos de variables, parámetros de función, valores de retorno y más. Esto brinda la capacidad de realizar comprobaciones de tipos durante la compilación y detectar posibles erorres antes de que el código se ejecute.

- Una vez que se ha escrito elc código _TypeScript_, este se compila a _JavaScript_.
- _React_ y _Vite_ incluyen soporte a _TypeScript_ lo que ayuda bastante en el desarrollo de proyectos, y una vez listo podemos construir el proyecto, se compila a JavaScript y se puede acceder a él.
- Y hoy en día _TypeScript_ se ha convertido en un estándar para crear aplicaciones: _React, Angular y Vue,js_. En una entrevista de trabajo estarás muy por delante de otros _Devs_.

### NOTAS

- En la carpeta de:
  - _public_
- Eliminamos:
  - **vite.svg**
- 

## SITIO

- (https://guitarras-store.netlify.app/)
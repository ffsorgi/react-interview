# Changelog

**Dato:** No me di cuenta de subir lo que había hecho a Git y de ahí empezar a hacer commits.

**Lo que suelo hacer** es, por cada cambio pequeño, hacer un commit para:

- Tener un registro más detallado de los cambios.
- Contar con versiones estables y pequeñas por si llega a fallar la aplicación, así poder entender qué es lo que falló.

## Tarea 7

Hice una función `conditionalStyle` pasándole por parámetro un string y retornando un string; si el parámetro es “CAJON” devuelve la clase `cajon` y, si no, devuelve vacío.

## Bonus

- Creé un `enum` para los tipos de piezas, mejorando el tipado y permitiendo imprimir las opciones de manera “capitalizada”.
  > Nota: Agregué la opción `TODOS` en el select; la función `onSelectChange` devuelve toda la data o filtra según el tipo.
- Implementé un estado para las piezas, inicializado con un array vacío y, en un `useEffect`, asigné el contenido de `data`.

## Bonus 2

- Creé un componente `CreatePieceForm` con su hoja de estilos en `src/assets/css/CreatePieceForm.css`.
- Generé un estado tipado con `TPiece` e inicializado con un objeto vacío.
- Implementé la función `handleChange` para actualizar el estado dinámicamente.
- Implementé la función `onFormSubmit`, que comprueba con una función `isValidFormData` si la información es correcta; luego crea un nuevo `formDataFormated` asignando tanto a ancho como largo el formato `xxx.xx` (por ejemplo, metros con 2 decimales) y lo envía como parámetro a `saveInLocalStorage`.
- Implementé `saveInLocalStorage`, que recibe un `TPiece` y retorna `void`: toma el ítem `pieces` del `localStorage` utilizando `JSON.parse` al leer y `JSON.stringify` al guardar (si está vacío asigna un array vacío a `actualPieces`); luego comprueba si existe un elemento con el mismo nombre; si lo está, devuelve un `alert`, y si no, lo guarda en el `localStorage`, lanza un `alert` indicando que todo funcionó y reinicia el form.

## Refactor

- Moví el array de objetos `pieces` a un archivo `.json` en la carpeta `public`.
  > Nota: Sé que todo lo que está en la carpeta `public` es accesible desde el lado del cliente.
- Creé el TYPE `Task` en la carpeta `types`.
  > Nota: Vi que lo dejaste como `interface` como trampa y también como ayuda en el `Task[]`.
- Eliminé el `interface Material` y usé el `type TMaterial`, ya que en ese uso no se emplea `interface`.
- Ajusté el `map` en `MaterialList` para que iterara solo los `tr`, agregando la `key` correspondiente.
- Moví el array de objetos de las `task` a un archivo `.json` en la carpeta `public`.
  > Nota: Aprovechando el custom hook, el componente queda más limpio y puede traer los datos directamente.
- Cambié la función para el área usando `reduce` en lugar de `map`.
  > Nota: Investigué y vi que `reduce` es más eficiente para estos casos.
- Extraje el estilo en línea de `PiecesList` e hice una clase en `index.css` para el caso correspondiente.
  > Nota: El nombre se podría mejorar e incluso seguir metodología BEM; de momento lo dejé como `p-5`.
- Cambié el estilo en línea de `HomeView` por una clase llamada `mt-10` y reemplacé `main` por un `div`.
  > Nota: Según recuerdo, ahí no va un `main`.
- Reemplacé el `div` por `Fragment` en el `TodoList`.
- Agregué `React.FC` a los componentes.
  > Nota: Aunque según leí solo lo recomiendan cuando trabajas con childrens, incluso algunos lo ven como mala práctica, no me informé lo suficiente al respecto como para tomar una postura frente a eso.

> No se si usan alguna forma concreta de ordenar los imports actualmente, de momento por practicidad los dejé así.

## Feature

- Creé un custom hook en la carpeta `hooks` para hacer `fetch` a archivos locales pasándole solo el nombre del archivo.
  > Nota: Costó manejar el parámetro de tipo genérico, pero se pudo.
- Creé e implementé un componente UI de loading para no repetir código.
  > Nota: Por ahora es simple, sin más funcionalidades.
- Definí `TJsonFileName` para manejar los tipos de nombres de JSON, aportando control y errores más claros.

## Posibles mejoras

- Mejorar el componente de Loading, añadiendo `isLoading` y un `children` para renderizar cuando sea falso.
- Crear un componente en `layouts` para renderizar tablas recibiendo `title` y `data`.
- Hacer una util function que convierta unidades y valide que los valores sean números ≥ 0.
- Agregar un skeleton loader antes de cargar componentes.
- Si `types` crece, implementar arquitectura “screaming”.
- Acomodar imports según la convención del proyecto.
- Separar `color` y `material` en el JSON para mejorar búsquedas.
- Usar un `Type` personalizado en `TPiece` con tipos separados por `|`.
- Estandarizar el idioma de las claves en los JSON.
- Generar dinámicamente el formulario de `CreatePieceForm` y modularizarlo.
- Crear un componente `Select` para tipos de piezas y enviarlo al padre.
- Modularizar aún más `CreatePieceForm`.

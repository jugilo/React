# Prueba Técnica: React - Junior Developer (Sin TypeScript)

## Instrucciones:
- Tienes **2 horas** para completar la prueba.
- Utiliza **React**, **JavaScript**, **CSS**, y **HTML**.
- Sube tu proyecto a un repositorio de GitHub o envía un archivo comprimido con el código.

---

## Parte 1: Gestión de Tareas (useState)

### Objetivo:
Crear una aplicación de lista de tareas.

### Requisitos:
- ✅ La aplicación debe permitir al usuario agregar tareas en un campo de texto.
- ✅ Cada tarea debe tener un botón para marcarla como completada o eliminarla.
- Muestra dos listas: una para tareas completadas y otra para tareas pendientes.

### Puntos clave:
- Usa **`useState`** para manejar el estado de la lista de tareas.

### Detalles adicionales:
- Cada tarea debe ser un objeto con dos propiedades: `nombre` y `completada` (booleano).
- Aplica estilos básicos con **CSS** para diferenciar las tareas completadas de las pendientes.

---

## Parte 2: API Externa (useEffect)

### Objetivo:
Consumir datos de una API externa y mostrarlos en la interfaz.

### Requisitos:
- Usa la API gratuita de [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos).
- Realiza una petición para obtener una lista de "todos" y muestra los primeros 10 en la interfaz.
- Cada "todo" debe tener un botón que permita marcarlo como completado.

### Puntos clave:
- Utiliza **`useEffect`** para realizar la petición al cargar el componente.
- Usa **`useState`** para almacenar los datos recibidos de la API.

---

## Parte 3: Custom Hook

### Objetivo:
Crear un **custom hook** para reutilizar la lógica de manejo de formularios.

### Requisitos:
- Crea un custom hook llamado `useForm` que maneje el estado de los inputs de un formulario.
- El hook debe devolver el valor actual del input y una función para actualizarlo.
- Usa este hook en la **Parte 1** para manejar la entrada de texto del campo de nueva tarea.

### Puntos clave:
- El hook debe aceptar como parámetro el valor inicial del input y devolver el estado actualizado.

---

## Evaluación:
- Uso adecuado de **`useState`** y **`useEffect`**.
- Implementación correcta de un **custom hook**.
- Buenas prácticas de código (organización, legibilidad).
- Diseño y estilo básico con **CSS**.

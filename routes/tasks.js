// Importar el módulo express.Router()
const express = require ("express")
const router = express.Router();
// Crear el router para el endpoint /tasks
const tasksRouter = express.Router();
// Definir el método GET para listar todas las tareas
tasksRouter.get("/", (req, res) => {
  // Consultar la base de datos y obtener todas las tareas existentes
  // ...
  // Devolver una respuesta con el código de estado 200 y el cuerpo en formato JSON
  // ...
});
// Definir el método POST para crear una nueva tarea
tasksRouter.post("/", (req, res) => {
  // Obtener el cuerpo de la solicitud en formato JSON
  // ...
  // Validar el cuerpo de la solicitud
  // ...
  // Crear la tarea en la base de datos, asignándole un id único
  // ...
  // Devolver una respuesta con el código de estado 201 y el cuerpo en formato JSON
  // ...
});
// Definir el método PUT para actualizar una tarea
tasksRouter.put("/:id", (req, res) => {
  // Obtener el parámetro id de la solicitud
  // ...
  // Obtener el cuerpo de la solicitud en formato JSON
  // ...
  // Validar el parámetro y el cuerpo de la solicitud
  // ...
  // Buscar la tarea en la base de datos por su id
  // ...
  // Si la tarea existe, actualizar sus atributos con los valores del cuerpo de la solicitud
  // ...
  // Devolver una respuesta con el código de estado 200 y el cuerpo en formato JSON
  // ...
  // Si la tarea no existe, devolver una respuesta con el código de estado 404 y el cuerpo en formato JSON
  // ...
});
// Definir el método DELETE para eliminar una tarea
tasksRouter.delete("/:id", (req, res) => {
  // Obtener el parámetro id de la solicitud
  // ...
  // Validar el parámetro de la solicitud
  // ...
  // Buscar la tarea en la base de datos por su id
  // ...
  // Si la tarea existe, eliminarla de la base de datos
  // ...
  // Devolver una respuesta con el código de estado 204, sin cuerpo de la respuesta
  // ...
  // Si la tarea no existe, devolver una respuesta con el código de estado 404 y el cuerpo en formato JSON
  // ...
});
// Crear un arreglo para almacenar las tareas
let tasks = [];

// Definir la ruta para obtener todas las tareas
router.get("/", (req, res) => {
  // Enviar el arreglo de tareas como respuesta en formato JSON
  res.json(tasks);
});

// Definir la ruta para crear una nueva tarea
router.post("/", (req, res) => {
  // Obtener la tarea del cuerpo de la petición
  let task = req.body;
  // Añadir la tarea al arreglo de tareas
  tasks.push(task);
  // Enviar un mensaje de éxito como respuesta
  res.send("Task created successfully");
});

// Exportar el objeto router
module.exports = router;
// Exportar el router para el endpoint /tasks
module.exports = tasksRouter;
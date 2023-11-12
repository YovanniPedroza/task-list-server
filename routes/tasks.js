// Importar el módulo express.Router()
const express = require ("express")
const router = express.Router();

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

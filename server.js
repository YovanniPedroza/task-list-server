// Importar Express
const express = require("express");
// Importar express y el router para el endpoint /tasks
const tasksRouter = require("./routes/tasks");

// Crear una instancia de Express
const app = express();
const PORT = 3000;

// Habilitar el soporte de JSON
app.use(express.json());

// Crear el middleware para validar el método de la solicitud
const validateMethod = (req, res, next) => {
    // Obtener el método de la solicitud
    const method = req.method;
    // Definir un arreglo con los métodos HTTP válidos
    const validMethods = ["GET", "POST", "PUT", "DELETE"];
    // Verificar si el método está en el arreglo
    if (!validMethods.includes(method)) {
      // Enviar un código de respuesta 405 y un mensaje de error
      return res.status(405).send("El método de la solicitud no es válido");
    }
    // Si el método es válido, pasar al siguiente middleware o al manejador de la ruta
    next();
  };
  // Usar el middleware a nivel de aplicación
app.use(validateMethod);

// Usar el router para el endpoint /tasks
app.use("/tasks", tasksRouter);

app.get ("/", (req, res) => {
    res.send ({ mesnaje: "Lista de Tareas"});
});

// Importar las rutas de las tareas
const tasks = require("./routes/tasks");

// Montar las rutas de las tareas como un middleware
app.use("/tasks", tasks);

// Iniciar el servidor en el puerto 3000
//app.listen(3000, () => console.log("Server running on port 3000"));
app.listen (PORT, () => {
    console.log (`http://localhost:${PORT}`);
});
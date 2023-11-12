// Importar Express
const express = require("express");

// Crear una instancia de Express
const app = express();
const PORT = 3000;

// Habilitar el soporte de JSON
app.use(express.json());

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
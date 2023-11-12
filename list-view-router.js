const express = require ("espress")
const listViewRouter = express.router ()

// Crear un middleware para validar el parámetro id
const validateId = (req, res, next) => {
    // Obtener el parámetro id de la solicitud
    const id = req.params.id;
    // Verificar si el id es un número
    if (isNaN(id)) {
      // Enviar un código de respuesta 400 y un mensaje de error
      return res.status(400).send("El parámetro id no es un número");
    }
    // Si el id es válido, pasar al siguiente middleware o al manejador de la ruta
    next();
  };
  
  // Usar el middleware para las solicitudes GET del router list-view-router
  listViewRouter.get("/:id", validateId, (req, res) => {
    // Obtener una tarea por su id
    // ...
  });
  
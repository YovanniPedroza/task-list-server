const express = require ("espress")
const listEditRouter = express.router ()

// Crear un middleware para validar el cuerpo de la solicitud
const validateBody = (req, res, next) => {
    // Obtener el cuerpo de la solicitud
    const body = req.body;
    // Verificar si el cuerpo está vacío
    if (Object.keys(body).length === 0) {
      // Enviar un código de respuesta 400 y un mensaje de error
      return res.status(400).send("El cuerpo de la solicitud está vacío");
    }
    // Verificar si el cuerpo tiene los atributos necesarios para crear una tarea
    if (!body.title || !body.description || !body.status) {
      // Enviar un código de respuesta 400 y un mensaje de error
      return res.status(400).send("El cuerpo de la solicitud no tiene los atributos necesarios para crear una tarea");
    }
    // Si el cuerpo es válido, pasar al siguiente middleware o al manejador de la ruta
    next();
  };
// Usar el middleware a nivel de aplicación, antes de los routers
  app.use(validateMethod);
// Usar los routers para las diferentes rutas
app.use("/list-edit", listEditRouter);
app.use("/list-view", listViewRouter);
  
  // Usar el middleware para las solicitudes POST y PUT del router list-edit-router
  listEditRouter.post("/", validateBody, (req, res) => {
    // Crear una nueva tarea con el cuerpo de la solicitud
    // ...
  });
  
  listEditRouter.put("/:id", validateBody, (req, res) => {
    // Actualizar una tarea existente con el cuerpo de la solicitud
    // ...
  });

  nodule.exports = listEditRouter
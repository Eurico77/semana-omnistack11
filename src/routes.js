const express = require("express");

const OngController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController")
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionControler");

const routes = express.Router();

//ROTA DE SESSÃO
routes.post("/sessions", SessionController.store)

//ROTAS DE CRIAÇAO E DE LISTAGEM DAS ONGS
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

//ROTAS DESTINADAS AOS INCIDENTES 
routes.post("/incidents",incidentController.store);
routes.get("/incidents",incidentController.index);
routes.delete("/incidents/:id", incidentController.destroy);

//ROTAS PARA CASOS ESPECIFICOS
routes.get("/profile", ProfileController.index);

module.exports = routes;

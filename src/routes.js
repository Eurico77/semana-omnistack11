const express = require("express");

const OngController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController")

const routes = express.Router();

//ROTAS DE CRIAÇAO E DE LISTAGEM DAS ONGS
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

//ROTAS DESTINADAS AOS INCIDENTES 
routes.post("/incidents",incidentController.store);

module.exports = routes;

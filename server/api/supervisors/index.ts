import expres from "express";
import * as SupervisorController from './supervisor-controller'

const routes = expres.Router();
routes.post('/addSupervisor',SupervisorController.addSupervisor);
routes.get('/getAllSupervisor',SupervisorController.getAllSupervisor);
routes.put('/updateSupervisor/:id',SupervisorController.updateSupervisor);
routes.delete('/removeSupervisorById/:id',SupervisorController.removeSupervisor);

export = routes;
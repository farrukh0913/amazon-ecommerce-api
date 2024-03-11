import expres from "express";
import * as feedBackController from './feedback-controller'

const routes = expres.Router();
routes.post('/addFeedback',feedBackController.addFeedBack);
routes.get('/getAllFeedback',feedBackController.getAllFeedback);
routes.delete('/removeFeedback/:id',feedBackController.removeFeedback);

export = routes;
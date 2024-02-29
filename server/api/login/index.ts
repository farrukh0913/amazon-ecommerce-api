import * as LoginController from './login-controller';
import expres from "express";

const routes = expres.Router();
routes.post('/loginAdmin',LoginController.loginAdminAccount);


export = routes;
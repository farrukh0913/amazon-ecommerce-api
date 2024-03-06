
import expres from "express";
import * as ProductController from './procuct-controller';

const routes = expres.Router();
routes.post('/addProduct',ProductController.addProduct);
routes.get('/getAllProducts',ProductController.getAllProducts);
routes.get('/getProductById/:id',ProductController.getProductById);
routes.delete('/removeProduct/:id',ProductController.removeProduct);
routes.put('/updateProduct/:id',ProductController.updateProduct);


export = routes;
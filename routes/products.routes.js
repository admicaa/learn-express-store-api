import { Router } from "express";
import productsController from "../app/controllers/productsController.js";

const routes = new Router();

// Add routes
routes.get("/", productsController.index);
// routes.post('/', productsController.store);
// routes.put('/', productsController.store);
// routes.delete('/', productsController.store);

export default routes;

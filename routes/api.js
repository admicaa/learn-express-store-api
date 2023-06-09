import { Router } from "express";

const router = new Router();

var routes = ["products"];

routes.forEach(async (route) => {
  const r = await import(`./${route}.routes.js`);
  router.use(`/${route}`, r.default);
});

export default router;

import express from "express";
const route = express.Router();
import { homeController, createController } from "../controllers/homeController.js";
import { readController } from "../controllers/readController.js";

route.get('/', homeController);
route.post('/', createController);
route.get('/read', readController)

export default route;
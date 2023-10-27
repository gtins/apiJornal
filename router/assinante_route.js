import express from "express";
import {assinante} from "../controller/assinante_controller.js";

let router = express.Router();

router.get('/assinante', assinante.all);
router.post('/assinante', assinante.create);

export {router};
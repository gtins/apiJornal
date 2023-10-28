import express from "express";
import {assinante} from "../controller/assinante_controller.js";

let router = express.Router();

router.get('/assinante', assinante.all);
router.post('/assinante', assinante.create);
router.put('/assinante/:cpf_assinante', assinante.update);
router.delete('/assinante/:cpf_assinante', assinante.delete);

export {router};
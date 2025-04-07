import { Router } from "express";
import { DivisaController } from "..//controllers/divisaController.js";

export const createDivisaRouter = ({ divisaModel }) => {
   
    const divisaRouter = Router();
    const divisaController = new DivisaController(divisaModel);

    divisaRouter.get('/', (req, res) => divisaController.getAllDivisas(req,res));
    divisaRouter.get('/:id', (req, res) => divisaController.getDivisaById(req,res));
    divisaRouter.post('/', (req, res) => divisaController.createDivisa(req,res));
    divisaRouter.delete('/:id', (req, res) => divisaController.deleteDivisaById(req,res));
    divisaRouter.patch('/:id', (req, res) => divisaController.patchDivisaById(req,res));
    return divisaRouter;
}
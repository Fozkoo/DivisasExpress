import { Router } from "express";
import { DivisaController } from "..//controllers/divisaController.js";

export const createDivisaRouter = ({ divisaModel }) => {
   
    const divisaRouter = Router();
    const divisaController = new DivisaController(divisaModel);

    divisaRouter.get('/', (req, res) => divisaController.getAllDivisas(req,res));

    
    return divisaRouter;
}
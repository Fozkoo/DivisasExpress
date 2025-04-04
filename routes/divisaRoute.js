import { Router } from "express";
import { DivisaController } from "../controllers/divisaController.js";

export const createDivisaRouter = ({DivisaController}) => {
   
    const divisaRouter = Router();

    divisaRouter.get('/', (req, res) => DivisaController.getAllDivisas(req,res));

    
    return divisaRouter;
}

 




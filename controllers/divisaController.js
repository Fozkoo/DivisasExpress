import { DivisaModel } from '../models/mysql/divisaModel.js';


export class DivisaController{

    constructor({DivisaModel}) {
        this.DivisaModel = DivisaModel;
    }


    getAllDivisas = async (req, res) => {
        try{
            const divisas = await this.DivisaModel.findAll();
            res.status(200).json(divisas);
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Internal server error'});
        }


    }


}
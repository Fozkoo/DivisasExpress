import { DivisaModel } from '../models/divisaModel.js';


export class DivisaController{

    constructor(DivisaModel) {
        this.DivisaModel = DivisaModel;
    }


    // Este es el endpoint que queda para hacer 
    getDivisaById = async (req, res) => {

    }


    getAllDivisas = async (req, res) => {
        try{
            const divisas = await this.DivisaModel.findAll();
            res.json(divisas);
        } catch (error) {
            console.error('Error al obtener las divisas:', error);
            res.status(500).json({ error: 'Error al obtener las divisas' });
        }
    }
}
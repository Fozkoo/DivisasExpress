import { DivisaModel } from '../models/divisaModel.js';


export class DivisaController{

    constructor(DivisaModel) {
        this.DivisaModel = DivisaModel;
    }


    getDivisaById = async (req, res) => {
        const { id } = req.params;
        try {
            const divisa = await this.DivisaModel.findOne({ where: { id } });
            if (!divisa) {
                return res.status(404).json({ error: 'Divisa no encontrada' });
            }
            res.json(divisa);
        } catch (error) {
            console.error('Error al obtener la divisa:', error);
            res.status(500).json({ error: 'Error al obtener la divisa' });
        }
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
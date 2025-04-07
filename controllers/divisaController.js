import { DivisaModel } from '../models/divisaModel.js';


export class DivisaController{

    constructor(DivisaModel) {
        this.DivisaModel = DivisaModel;
    }


    createDivisa = async (req, res) => {
        const { nombre, moneda, precio, preciomin, preciomax } = req.body;
        try {
            const newDivisa = await this.DivisaModel.create({ nombre, moneda, precio, preciomin, preciomax });
            res.status(201).json(newDivisa);
        } catch (error) {
            console.error('Error al crear la divisa:', error);
            res.status(500).json({ error: 'Error al crear la divisa' });
        }
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

    deleteDivisaById = async (req, res) => {
        const { id } = req.params;
        try {
            const divisa = await this.DivisaModel.findOne({ where: { id } });
            if (!divisa) {
                return res.status(404).json({ error: 'Divisa no encontrada' });
            }
            await divisa.destroy();
            res.json({ message: 'Divisa eliminada correctamente' });
        } catch (error) {
            console.error('Error al eliminar la divisa:', error);
            res.status(500).json({ error: 'Error al eliminar la divisa' });
        }
    }

    patchDivisaById = async (req, res) => {
        const { id } = req.params;
        const { nombre, moneda, precio, preciomin, preciomax } = req.body;
        try {
            const divisa = await this.DivisaModel.findOne({ where: { id } });
            if (!divisa) {
                return res.status(404).json({ error: 'Divisa no encontrada' });
            }
            await divisa.update({ nombre, moneda, precio, preciomin, preciomax });
            res.json(divisa);
        } catch (error) {
            console.error('Error al actualizar la divisa:', error);
            res.status(500).json({ error: 'Error al actualizar la divisa' });
        }
    }


}
import { sequelize } from "../config/db/db.js"; 
import { DataTypes } from "sequelize";

export const DivisaModel = sequelize.define('moneda', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    moneda: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    preciomax: {
        type: DataTypes.DOUBLE,
        allowNull: false    
    },
    preciomin: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: 'moneda', 
    timestamps: false 
});
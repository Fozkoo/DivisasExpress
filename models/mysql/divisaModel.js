import mysql from "mysql2/promise";
import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize('divisas', 'root', '1234', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    logging: false,
});


export const DivisaModel = sequelize.define('divisas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    moneda: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    precioMaximo: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    precioMinimo: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: false 
});
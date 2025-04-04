import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('divisas', 'root', '1234', {

    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});


export const DivisaModel = sequelize.define('divisas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    moneda: {
        type: sequelize.STRING(15),
        allowNull: false
    },
    precio: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    precioMaximo: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    precioMinimo: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: false 
});
import { Sequelize } from "sequelize"; 

export const sequelize = new Sequelize('divisas','root','1234', {
    host: 'localhost',
    dialect: 'mysql',
})
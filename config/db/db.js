import { Sequelize } from "sequelize"; 

export const sequelize = new sequelize('divisas','root','1234', {
    host: 'localhost',
    dialect: 'mysql',
})
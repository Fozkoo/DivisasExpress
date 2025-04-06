import { createApp } from "./app.js";
import { sequelize } from "./config/db/db.js";
import { DivisaModel } from "./models/divisaModel.js"

try {
    await sequelize.authenticate();
    console.log('Conexión con la DB establecida correctamente.');

    await sequelize.sync();

    createApp({ divisaModel: DivisaModel });

} catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
}

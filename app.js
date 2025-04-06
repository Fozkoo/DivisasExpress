import express from 'express';
import { createDivisaRouter } from './routes/divisaRoute.js';


const app = express();

export const createApp = ({divisaModel}) => {

    app.disable('x-powered-by');
    app.use(express.json());   
    app.use('/divisas', createDivisaRouter({ divisaModel }));

    const PORT = process.env.PORT ?? 1234;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

}



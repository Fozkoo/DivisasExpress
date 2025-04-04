import express from 'express';
import cors from 'cors';

const app = express();

export const createApp = ({}) => {

    app.disable('x-powered-by');
    app.use(express.json());
    app.use(crossOriginIsolatedMiddleware);

}



import express from 'express';
import authRouter from './routes/auth.routes';

const app = express();

app.use(express.json());
app.use(authRouter);

export default app;

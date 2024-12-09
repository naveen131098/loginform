import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sequelize } from './models';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

sequelize.sync().then(() => {
    console.log('Database connected');
}).catch(err => console.error(err));

export default app;

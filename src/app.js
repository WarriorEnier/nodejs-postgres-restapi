import express from 'express';
import employeesRoutes from './routes/employes.routes.js';
import indexRouter from './routes/index.routes.js';

const app = express();

app.use(express.json());

app.use(indexRouter);
app.use('/api',employeesRoutes);

app.use((req, res, next)=>{
    res.status(404).send({
        message:'No hay nada'
    })
})

export default app;
    
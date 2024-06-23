import cors from 'cors';
import express, { Application } from 'express';
import { ContactRouter } from './app/modules/contact/contact.route';
import { notFound } from './app/middleware/notFound';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('welcome to contacts Management api!');
});

app.use('/api/v1/contact', ContactRouter);

app.use(globalErrorHandler);
app.use(notFound);

export default app;

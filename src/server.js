import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import productRoutes from './routes/productRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
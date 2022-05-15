import dotenv from "dotenv";
import express from "express";
import user from './router/user';
dotenv.config();
const app = express();
const { PORT } = process.env;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user',user);
app.get('/',(req,res)=>{res.send('hihi')})
app.listen(PORT, () => console.log(`OPEN PORT ${PORT}`));
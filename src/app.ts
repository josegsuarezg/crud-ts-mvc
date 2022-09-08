import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {router} from './routes';
import db from './config/mongo';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log('DataBase connect Correcly'))


app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}`));
import express from 'express';
import connection from './infra/db/connect';

const app = express();

app.use(express.json());

connection();

app.listen(8080, () => console.log('Listening on port 8080'));

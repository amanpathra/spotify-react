import express from 'express';
import cors from 'cors';
import router from './routes/songs.js'

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/api/songs', router);

app.listen(port, () => {
    console.log(`spotify app listening on  http://localhost:${port}`)
})
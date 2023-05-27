// import express from "express";
import express from "express";
import bodyParser from "body-parser";
import notes from "./routes/notes.js";
import cors from 'cors';

const app = express();
// app.use(bodyParser());
app.use(express.json());
app.use(cors());
const port = 3000;
app.use('/notes', notes)


app.listen(port, () => {
    console.log(`The app is listening on port http://localhost:${port}`)
})

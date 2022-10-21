const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const { getCompliment, getFortune, getFamousQuote, createFortune, getCat } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/quote", getFamousQuote);
app.get("/api/cat", getCat);
app.post("/api/create", createFortune);


app.listen(4000, () => console.log("Server running on 4000"));

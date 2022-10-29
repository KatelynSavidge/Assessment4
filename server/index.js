const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const { getCompliment, getFortune, newSong, deleteSong, updateSong } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/create", newSong);
app.delete("/api/delete/:id", deleteSong)
app.put("/api/update", updateSong)

app.listen(4000, () => console.log("Server running on 4000"));

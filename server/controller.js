const database = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A fresh start will put you on your way.", "A golden egg of opportunity falls into your lap this month.", "You are right where you need to be.", "Pick battles big enough to matter, small enough to win."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    newSong: (req,res) => {
        const song = req.body.song
        const album = req.body.album

        let highestId = 0
        for (let i = 0; i < database.length; i++) {
             if (database[i].id > highestId) {
                 highestId = database[i].id
             }
        }
        highestId++

        let newEntry = {
            song: song,
            album: album,
            id: highestId,
        }

        database.push(newEntry)
        console.log(database)
        res.status(200).send(database)
    },

    deleteSong: (req,res) => {
        let id = +req.params.id
        for (let i=0; i<database.length; i++) {
            if (database[i].id === id) {
                database.splice(i, 1)
            }
        }
        res.status(200).send(database)
    },

    updateSong: (req,res) => {
        const id = req.body.id
        const updatedSongName = req.body.song
        for (let i=0; i<database.length; i++) {
            if (database[i].id == id) {
                database[i].song = updatedSongName
            }
        }
        res.status(200).send(database)
    },

} 
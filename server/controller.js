module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A fresh start will put you on your way.", "A golden egg of opportunity falls into your lap this month.", "You are right where you need to be.", "Pick battles big enough to matter, small enough to win."];
      
        let randomize = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomize];
      
        res.status(200).send(randomFortune);
    },

    getFamousQuote: (req, res) => {
        const quote = ["“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi"];
      
        res.status(200).send(quote);
    },

    getCat: (req, res) => {
        const fortune = ["https://www.nj.com/resizer/mg42jsVYwvbHKUUFQzpw6gyKmBg=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/somerset_impact/photo/sm0212petjpg-7a377c1c93f64d37.jpg", "https://www.vets4pets.com/siteassets/species/cat/cat-on-fence.jpg?w=585&scale=down", "https://th.bing.com/th/id/R.43b3733de3bbc28bece972597fddd178?rik=cj%2ftzFzDzSNzSQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-icRUNzUAego%2fUSWC9OcRp5I%2fAAAAAAAAIWU%2fNSi-9HErIfU%2fs1600%2f1970_hd_cat_wallpaper.gif&ehk=Ja0Oy8XQA4YEbNv9WTTLQHwPV2PvKAIdrUjxhciP3VE%3d&risl=&pid=ImgRaw&r=0"];
      
        let catPic = Math.floor(Math.random() * fortune.length);
        let randomCat = fortune[catPic];
      
        res.status(200).send(randomCat);
    },

} 
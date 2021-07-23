const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);

})


app.get("/api/fortune", (req, res) => {
  const fortunes = ["If you continually give, you will continually have.",
    "Happiness will bring you good luck.",
    "Now is the time to try something new.",
    "Pennies from heaven find their way to your doorstep this year!",
    "The smart thing to do is to begin trusting your intuitions."]

  let randomIndexF = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndexF]

  res.status(200).send(randomFortune);
})


const feResource = [
  "https://en.wikipedia.org/wiki/Front-end_web_development", 
  "https://blog.devmountain.com/7-reasons-learn-web-development/", 
  "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer"
]

app.get("/api/front_end/", (req,res) => {
  res.status(200).send(feResource)
})





app.listen(4000, () => {
  console.log("Server running on 4000")
})
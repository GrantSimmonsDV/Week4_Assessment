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

let fullName = []

app.post("/api/register/", (req,res) => {
  let {firstName, lastName} = req.params;
  fullName.push(firstName, lastName)
  res.status(200).send(fullName)
})


let goalsList = ["Cycle the Hiawatha Trail", "Visit Niagra Falls", "See the temples of Eygpt", "Hike the Appalachian Trail", "Visit the Oregon Coast"]


app.get("/api/list/", (req,res) => {
  res.status(200).send(goalsList)
})


app.delete('/api/list/:deleteIndex', (req,res) => {
  const deleteIndex = +req.params.deleteIndex
  goalsList.splice(deleteIndex, 1)
  res.status(200).send(goalsList)
})

//Why do we use params above ^^^, and use body in the one below?
app.post('/api/list/', (req, res) => {
  let { addGl } = req.body
  goalsList.push(addGl)
  res.status(200).send(goalsList)
})

app.listen(4005, () => {
  console.log("Server running on 4005")
})
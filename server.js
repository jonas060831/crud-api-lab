const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = process.env.PORT || 3000

const Movie = require("./models/movie.js")

//Don't forget to set up CORS!
app.use(cors())

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());


/* Build a single model CRUD API using express and MongoDB.  It should have the following routes:

Create
Index
Update
Delete
*/

// Routes go here

app.get('/test/movies/route', async(req,res) => {
  //just checking if i can query the Movies Schema without error in postman
  try {

    const movies = await Movies.find()

    res.status(200).json(movies)

  } catch (e) {
      res.status(500).json({ message: e.message })
  }
})


app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

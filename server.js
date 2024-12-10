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

    const movies = await Movies.find() //if there is any movie in our database

    res.status(200).json(movies)

  } catch (error) {
      res.status(500).json({ message: error.message })
  }
})

app.post('/movies', async (req, res) => {

    try {

      const createdMovie = await Movie.create(req.body)

      return res.json(createdMovie)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

app.get('/movies', async(req, res) => {

  try {

    const allMovies = await Movie.find() //the array of all movies

    return res.json(allMovies)

  } catch (error) {
      res.status(400).json({message: error.message})
  }

})

app.delete('/movies/:movieId', async(req, res) => {

  try {

    const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId)

    return res.json(deletedMovie)

  } catch (error) {
    res.status(400).json({message: error.message})
  }

})

app.put('/movies/:movieId', async(req, res) => {

  try {

    const updatedMovie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, { new: true })

    res.json(updatedMovie)

  } catch (error) {
    res.status(400).json({message: error.message})
  }

})


app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

const mongoose = require("mongoose")
const { Schema, model: Model } = mongoose
//create the schema
const movieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  releaseYear: { type: String, required: true },
  language: { type: String, required: true }
})


//define it
const Movie = Model('Movie', movieSchema)
//dont forget to export
module.exports = Movie

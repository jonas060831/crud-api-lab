const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = process.env.PORT || 3000

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






app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

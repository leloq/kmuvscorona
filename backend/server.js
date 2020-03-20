const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connecting to MongoDB Atlas

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// const solutionsRouter = require('./routes/solutions');
const problemsRouter = require('./routes/problems');
const targetGroupsRouter = require('./routes/targetGroups');

// app.use('/solutions', solutionsRouter);
app.use('/problems', problemsRouter);
app.use('/targetGroups', targetGroupsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


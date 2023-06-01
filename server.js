const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGOB_URI || 'mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.set('debug', true);
  
  app.use(require('./routes'));
  
  app.listen(PORT, () => console.log(`You have been connected on localhost:${PORT}`));
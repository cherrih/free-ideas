const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/months', err => {
  if (err) {
    throw err;
  } else {
    console.log('connected to Mongo!');
  }
});

const db = mongoose.connection;

const monthSchema = new mongoose.Schema({
  month: String, 
  dates: [{
    date: Number,
    tasks: [{
      task: String,
      project: String,
      assignedTo: String,
      complete: Boolean,
    }]
  }]
});

const Month = mongoose.model('Month', monthSchema);

const save = (req, callback) => {
  const month = new Month(req);
  month.save((err, response) => {
    if (err) {
      throw err;
    }
    callback(null, response);
  });
};

module.exports = { save, db };

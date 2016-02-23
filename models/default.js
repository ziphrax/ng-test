var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var defaultSchema = Schema({
  name : String
});

module.exports = mongoose.model('default',defaultSchema);

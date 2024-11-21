const mongoose = require('mongoose');


const taldeSchema = new mongoose.Schema({
   izena: String,
   ikasleak: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Ikasle'
   }]
 });




module.exports = mongoose.model('Taldea', taldeSchema);

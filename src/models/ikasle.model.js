const mongoose = require('mongoose');

const ikasleSchema = new mongoose.Schema({
    izena: {
        type: String,
        required: true
    },
    adina: {
        type: Number,
        min: 16
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    sortzeData: {
        type: Date,
        default: Date.now
    }
});

// Middleware-ak
ikasleSchema.pre('save', function(next) {
    this.izena = this.izena.charAt(0).toUpperCase() + this.izena.slice(1);
    next();
});

ikasleSchema.path('email').validate(function(email) {
    return email.includes('@');
}, 'Email-ak @ izan behar du');

module.exports = mongoose.model('Ikasle', ikasleSchema);
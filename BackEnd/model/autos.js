//import mongoose
const mongoose = require('mongoose') 
const esquemaAuto = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: Number,
    color: String,
    precio: Number,
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
})

//Create export

const Auto = mongoose.model("auto", esquemaAuto)
module.exports = Auto
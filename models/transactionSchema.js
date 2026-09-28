const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    book_name: {
        type: String,
        required: true
    },
    book_quantity: {
        type: Number,
        required: true
    },
    book_price: {
        type: Number,
        required: true
    },
    book_format:{
        type: String,
    }
});

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },

    reference_id: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },

    pan_card: {
        type: String,
        default: ""
    },
    passport_no: {
        type: String,
        default: ""
    },


    address: {
        type: String,
        required: true
    },
    
    books:{
        type: [BookSchema],
        required: true
    }

});

module.exports = mongoose.model("Transaction", transactionSchema);
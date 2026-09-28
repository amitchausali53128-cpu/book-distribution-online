const mongoose = require("mongoose");

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
    post_office: {
        type: String,
        // required: true
    },

    pin_code: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model("Transaction", transactionSchema);
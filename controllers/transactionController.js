const router = require('express').Router();
const Transaction = require('../models/transactionSchema');

// Create a new transaction
router.post('/', async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).send(transaction);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).send(transactions);
    } catch (error) {
        res.status(500).send(error);
    }
});

//get a transaction by reference_id
router.get('/reference/:reference_id', async (req, res) => {
    try {
        const transaction = await Transaction.findOne({ reference_id: req.params.reference_id });
        if (!transaction) {
            return res.status(404).send();
        }
        res.status(200).send(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Get a transaction by ID
router.get('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).send();
        }
        res.status(200).send(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a transaction by ID
router.put('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!transaction) {
            return res.status(404).send();
        }
        res.status(200).send(transaction);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Get transactions by email and password
router.post('/get', async (req, res) => {
    const { email, password } = req.body;
    try {
        const transactions = await Transaction.find({ email, password });
        if (!transactions) {
            return res.status(404).send();
        }
        res.status(200).send(transactions);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;
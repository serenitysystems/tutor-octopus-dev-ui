const mongoose = require('mongoose');

// Define the schema
const Question = new mongoose.Schema({
    date: { type: String, required: true },
    batch: { type: String, required: true },
    questions: [{
        question: { type: String, required: true },
        options: [String],
        correct: { type: String, required: true }
    }],
    title: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: Date, required: true },
    managedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Educator_info"
    }
});

// Create the model
exports.Question = mongoose.model('Question', Question);


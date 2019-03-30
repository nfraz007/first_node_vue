const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodosSchema = new Schema({
    title: {type: String, required: true, max: 100},
    completed: {type: Boolean, default: true},
    created_at: {type: Date, required: true}
});


// Export the model
module.exports = mongoose.model('Todos', TodosSchema);
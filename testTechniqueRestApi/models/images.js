const mongoose = require('mongoose');
const { Schema } = mongoose;
 
 
const userSchema = new Schema({
photo:String,
name:String,
evaluation: { type: mongoose.Schema.Types.ObjectId, ref: 'evaluation' },

},
);
 

const Image = mongoose.model('image', userSchema, 'image');
module.exports = Image

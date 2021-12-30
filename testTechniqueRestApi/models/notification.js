const mongoose = require('mongoose');
const { Schema } = mongoose;
 
 
const userSchema = new Schema({
  projectId:{ type: mongoose.Schema.Types.ObjectId, ref: 'evaluation' },
   vu:{ type: Boolean, default: false },
  Deleted: { type: Boolean, default: false },
  Private: { type: Boolean, default: false },
  Creator: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
   createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  deletedAt: Date,
 
},
);
 

const Notification = mongoose.model('notification', userSchema, 'notifitication');
module.exports = Notification

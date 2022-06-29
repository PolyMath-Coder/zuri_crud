const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;

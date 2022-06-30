const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    // _id: {
    //   type: Schema.Types.ObjectId, 62bd368aa78b08b3497f192d
    // },
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

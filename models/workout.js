const mongoose = require("mongoose");
const workoutSchema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  excercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a exercise",
      },
      name:{
          type: String,
          trim: true,
          required: "Enter the name of an exercise",
      },
      duration: {
          type: Number,
          required: "Enter the duration",
      },
      weight: {
          type: Number,
      },
    },
  ],
});

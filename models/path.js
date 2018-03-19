const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pathSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Array, required: true },
  description: { type: String, required: false },
  upvotes: { type: Number, required: true },
  notes: { type: String, required: false },
  media: { type: String, required: false },
  categories: { type: Array, required: false, default: ['philosophy', 2]},
  path: { type: String, required: false },
  position:{ type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Path = mongoose.model("Path", pathSchema);

module.exports = Path;

// [1] tell mongo & mongoose what the user will look like
// [2] (optional) create a static
// [3] export User model

import mongoose from "mongoose";
const { Schema } = mongoose;

// Everything in Mongoose starts with a schema (maps to a MongoDB and define the shape of the document)
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  passowrd: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

// To use our schema definition, need to convert the schema into a model
// Create a model
const User = mongoose.model("User", userSchema);

export default User;

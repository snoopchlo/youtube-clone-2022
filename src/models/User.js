// [1] tell mongo & mongoose what the user will look like
// [2] (optional) create a static
// [3] export User model

import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

// Everything in Mongoose starts with a schema (maps to a MongoDB and define the shape of the document)
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String,
});

userSchema.pre("save", async function () {
  console.log("password before hashing: ", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("password after hashing: ", this.password);
});

// To use our schema definition, need to convert the schema into a model
// Create a model
const User = mongoose.model("User", userSchema);

export default User;

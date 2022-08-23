import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", {
    pageTitle: "Create an account",
  });
};

// export const postJoin = (req, res) => {
//   console.log(typeof req.body.password);
// };
export const postJoin = async (req, res) => {
  //console.log(req.body); // we were able to print it on conosle. but how to save it to database? -> Model.create()
  const { name, email, username, password, location } = req.body;
  await User.create({
    name,
    email,
    username,
    password,
    location,
  });

  return res.redirect("/login");
};

export const editUser = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Delete User");
export const userProfile = (req, res) => res.send("See user profile");
export const logout = (req, res) => res.send("logout User");

export const login = (req, res) => res.send("Login");

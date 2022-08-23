export const editUser = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Delete User");
export const userProfile = (req, res) => res.send("See user profile");
export const logout = (req, res) => res.send("logout User");

export const login = (req, res) => res.send("Login");
export const getJoin = (req, res) => {
  return res.render("join", {
    pageTitle: "Create an account",
  });
};
export const postJoin = (req, res) => {
  console.log(req.body);
  res.end();
};

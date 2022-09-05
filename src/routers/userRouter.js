import express from "express";
import {
  editUser,
  deleteUser,
  userProfile,
  logout,
  startGithubLogin,
  finishGithubLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", userProfile);
userRouter.get("/logout", logout);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);

export default userRouter;

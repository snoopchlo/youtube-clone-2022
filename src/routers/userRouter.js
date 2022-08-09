import express from "express";
import {
  editUser,
  deleteUser,
  userProfile,
  logout,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", userProfile);
userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);

export default userRouter;

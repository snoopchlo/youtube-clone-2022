import express from "express";
import {
  watchVideo,
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watchVideo);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

// videoRouter.get("/comment", commentVideo);
// videoRouter.get("/comment/delete", deleteComment);

export default videoRouter;

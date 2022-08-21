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

videoRouter.get("/:id([0-9a-f]{24})", watchVideo);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

// videoRouter.get("/comment", commentVideo);
// videoRouter.get("/comment/delete", deleteComment);

export default videoRouter;

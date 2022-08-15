import express from "express";
import {
  watchVideo,
  getEdit,
  postEdit,
  deleteVideo,
  uploadVideo,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watchVideo);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", uploadVideo);

// videoRouter.get("/comment", commentVideo);
// videoRouter.get("/comment/delete", deleteComment);

export default videoRouter;

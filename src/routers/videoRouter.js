import express from "express";
import {
  watchVideo,
  editVideo,
  deleteVideo,
  uploadVideo,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watchVideo);
videoRouter.get("/:id(\\d+)/edit", editVideo);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", uploadVideo);

// videoRouter.get("/comment", commentVideo);
// videoRouter.get("/comment/delete", deleteComment);

export default videoRouter;

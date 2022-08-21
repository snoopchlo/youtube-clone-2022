import Video from "../models/Video";
/*
export const home = (req, res) => {
  console.log("start");
  Video.find({}, (error, videos) => {});
  console.log("Hello"); // Printed frist before than error and videos
  // logger printed after the hello = after request is finished
  return res.render("home", { pageTitle: "Home", videos });
};
*/

export const home = async (req, res) => {
  const videos = await Video.find({});
  Video.find({}, (error, videos) => {});
  return res.render("home", { pageTitle: "Home", videos });
};

export const watchVideo = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {
    pageTitle: "Watch",
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: "Edit" });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete Videos");
};

// export const commentVideo = (req, res) => res.send("comment on Videos");
// export const deleteComment = (req, res) =>
//   res.send("delete commentt on Videos");

export const search = (req, res) => res.send("Search Video");

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};

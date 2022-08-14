const fakeUser = {
  username: "Chloe",
  loggedIn: true,
};
export const watchVideo = (req, res) => {
  const videoID = req.params.id;
  return res.render("watch", { pageTitle: "Watch", videoID });
};

export const uploadVideo = (req, res) => res.send("Upload videos!");
export const editVideo = (req, res) =>
  res.render("edit", { pageTitle: "Edit" });
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete Videos");
};

// export const commentVideo = (req, res) => res.send("comment on Videos");
// export const deleteComment = (req, res) =>
//   res.send("delete commentt on Videos");

export const search = (req, res) => res.send("Search Video");
export const trending = (req, res) => {
  let fakeVideos = [
    {
      title: "video 1",
      rating: 3,
      comments: 25,
      createdAt: "3 minutes ago",
      views: 159,
      id: 1,
    },
    {
      title: "video 2",
      rating: 5,
      comments: 21,
      createdAt: "22 minutes ago",
      views: 539,
      id: 2,
    },
    {
      title: "video 3",
      rating: 4,
      comments: 244,
      createdAt: "52 minutes ago",
      views: 59,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "Home", fakeUser, fakeVideos });
};

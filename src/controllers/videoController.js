const fakeUser = {
  username: "Chloe",
  loggedIn: false,
};

export const watchVideo = (req, res) =>
  res.render("watch", { pageTitle: "Watch" });

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
  const fakeVideos = [
    {
      title: "video 1",
      rating: 4,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "video 2",
      rating: 4,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "video 3",
      rating: 4,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];

  return res.render("home", { pageTitle: "Home", fakeUser, fakeVideos });
};

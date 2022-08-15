const fakeUser = {
  username: "Chloe",
  loggedIn: true,
};

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
    views: 1,
    id: 3,
  },
];

export const watchVideo = (req, res) => {
  const { id } = req.params;
  const chosenVideo = fakeVideos[id - 1];
  return res.render("watch", {
    pageTitle: `Watch ${chosenVideo.title}`,
    chosenVideo,
  });
};

export const uploadVideo = (req, res) => res.send("Upload videos!");
export const getEdit = (req, res) => {
  const { id } = req.params;
  const chosenVideo = fakeVideos[id - 1];
  return res.render("edit", { pageTitle: "Edit", chosenVideo });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const chosenVideo = fakeVideos[id - 1];
  chosenVideo.title = title;
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
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", fakeUser, fakeVideos });
};

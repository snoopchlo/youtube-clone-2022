export const localMiddleware = (req, res, next) => {
  console.log(req.session);
  next();
};

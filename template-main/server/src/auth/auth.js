export function authUser(req, res, next) {
  if (req.body.userId == null) {
    res.status(403);
    return res.send("You must login!");
  }
  next();
}

export function authRole(role) {
  return (req, res, next) => {
    if (req.body.role !== role) {
      res.status(401);
      return res.send("You are not allowed!");
    }
    next();
  };
}

const getHome = (req, res) => {
  const message = req.session.message;
  const details = req.session.userinfo
    ? req.session.userinfo[0].name
    : null;
  res.render("home", {
    details,
    message,
  });
};

module.exports = { getHome };

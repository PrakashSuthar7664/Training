

exports.getHome = (req, res) => {
    const message = req.session.message;
    const details = req.session.userinfo
      ? JSON.stringify(req.session.userinfo[0].name)
      : null;
    //   req.session.message = null;
    res.render("home", {
      details,
      message,
    });
  }
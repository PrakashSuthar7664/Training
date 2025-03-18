const homeController = (req, res) => {
  res.redirect("/questions/0");
};

module.exports = { homeController };

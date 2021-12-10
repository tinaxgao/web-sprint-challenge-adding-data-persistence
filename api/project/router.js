const router = require("express").Router();
const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.getProjects()
    .then((r) => {
      res.json(r);
    })
    .catch(next);
});





module.exports = router;

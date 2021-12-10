const router = require("express").Router();
const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.getProjects()
    .then((r) => {
      r.forEach((i) => {
        if (i.project_completed === 0) {
          i.project_completed = false;
        } else {
          i.project_completed = true;
        }
      });

      res.json(r);
    })
    .catch(next);
});

// r.project_completed === 0 r.project_completed=false

module.exports = router;

const router = require("express").Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  Task.getTasks()
    .then((r) => {
      res.json(r);
    })
    .catch(next);
});





module.exports = router;

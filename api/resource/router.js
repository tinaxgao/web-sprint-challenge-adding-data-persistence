const router = require("express").Router();
const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((r) => {
      res.json(r);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resources.addResource(req.body)
  .then(r => {
    res.json(r);
  })
  .catch(next)
})


module.exports = router;

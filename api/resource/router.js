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
  Resources.postResources()
  .then(r => {
    res.json(r);
  })
  .catch(next)
})

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`


module.exports = router;

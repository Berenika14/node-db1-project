const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json([{}, {}]);
  } catch (err) {
    next({ status: 422, message: "this is horrible" });
  }

  // DO YOUR MAGIC
});

router.get("/:id", (req, res, next) => {
  try {
    res.json("get accounts by id ");
  } catch (err) {
    next(err);
  }

  // DO YOUR MAGIC
});

router.post("/", (req, res, next) => {
  try {
    res.json("post accounts ");
  } catch (err) {
    next(err);
  }

  // DO YOUR MAGIC
});

router.put("/:id", (req, res, next) => {
  try {
    res.json("update accounts");
  } catch (err) {
    next(err);
  }

  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  try {
    res.json("delete accounts");
  } catch (err) {
    next(err);
  }

  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = router;

const router = require("express").Router();

const middleware = require("./accounts-middleware");
const Account = require("./accounts-model");

router.get("/", async (req, res, next) => {
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (err) {
    next({ status: 422, message: "this is horrible" });
  }
});

router.get("/:id", middleware.checkAccountId, async (req, res, next) => {
  res.json(req.account);
});

router.post(
  "/",
  middleware.checkAccountPayload,
  middleware.checkAccountNameUnique,
  (req, res, next) => {
    try {
      res.json("post account");
    } catch (err) {
      next(err);
    }

    // DO YOUR MAGIC
  }
);

router.put(
  "/:id",
  middleware.checkAccountId,
  middleware.checkAccountPayload,
  middleware.checkAccountNameUnique,
  (req, res, next) => {
    try {
      res.json("update accounts");
    } catch (err) {
      next(err);
    }

    // DO YOUR MAGIC
  }
);

router.delete("/:id", middleware.checkAccountId, (req, res, next) => {
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

const router = require("express").Router();

const user = require("./user");

// ---api/v1/
router.use("/user", user);

module.exports = router;

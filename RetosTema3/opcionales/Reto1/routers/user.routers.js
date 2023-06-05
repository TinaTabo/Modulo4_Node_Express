const {Router} = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller");


router.get("/", usersCtrl.getUser);
router.post("/", usersCtrl.postUser);

module.exports = router;
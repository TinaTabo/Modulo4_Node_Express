const {Router} = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller");

router.get("/user", usersCtrl.getUser);
router.post("/user", usersCtrl.postUser);
router.put("/user", usersCtrl.putUser);
router.delete("/user", usersCtrl.deleteUser);


module.exports = router;
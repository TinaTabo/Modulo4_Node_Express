const {Router} = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller");

//-- inicio
router.get("/", usersCtrl.start);
router.post("/", usersCtrl.start);
router.put("/", usersCtrl.start);
router.delete("/", usersCtrl.start);
//-- bye
router.get("/bye", usersCtrl.bye);
router.post("/bye", usersCtrl.bye);
router.put("/bye", usersCtrl.bye);
router.delete("/bye", usersCtrl.bye);

module.exports = router;
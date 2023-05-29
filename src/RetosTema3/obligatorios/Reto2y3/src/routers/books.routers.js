const {Router} = require("express");
const router = Router();
const booksCtrl = require("../controller/books.controller");

router.get("/book", booksCtrl.getBook);
router.post("/book", booksCtrl.postBook);
router.put("/book", booksCtrl.putBook);
router.delete("/book", booksCtrl.delBook);

module.exports = router;
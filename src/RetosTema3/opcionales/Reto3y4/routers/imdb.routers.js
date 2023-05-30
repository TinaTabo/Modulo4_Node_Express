const {Router} = require("express");
const router = Router();
const booksCtrl = require("../controller/imdb.controller");

//-- Reto 3
router.get("/pelicula", booksCtrl.getMovie);
router.post("/pelicula", booksCtrl.postMovie);
router.put("/pelicula", booksCtrl.putMovie);
router.delete("/pelicula", booksCtrl.delMovie);

module.exports = router;
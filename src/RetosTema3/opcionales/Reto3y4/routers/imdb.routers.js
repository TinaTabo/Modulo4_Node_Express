const {Router} = require("express");
const router = Router();
const booksCtrl = require("../controller/imdb.controller");

//-- Reto 3
router.get("/pelicula", booksCtrl.getMovie);
router.get("/pelicula/actor", booksCtrl.getActor);
router.get("/pelicula/director", booksCtrl.getDirector);
router.get("/pelicula/guionista", booksCtrl.getWriter);
router.post("/pelicula", booksCtrl.postMovie);
router.post("/pelicula/actor", booksCtrl.postActor);
router.post("/pelicula/director", booksCtrl.postDirector);
router.post("/pelicula/guionista", booksCtrl.postWriter);
router.put("/pelicula", booksCtrl.putMovie);
router.put("/pelicula/actor", booksCtrl.putActor);
router.put("/pelicula/director", booksCtrl.putDirector);
router.put("/pelicula/guionista", booksCtrl.putWriter);
router.delete("/pelicula", booksCtrl.delMovie);
router.delete("/pelicula/actor", booksCtrl.delActor);
router.delete("/pelicula/director", booksCtrl.delDirector);
router.delete("/pelicula/guionista", booksCtrl.delWriter);

module.exports = router;
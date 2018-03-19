const router = require("express").Router()
const pathController = require("../../controllers/pathController")

// Matches with "/api/paths"
router.route("/")
  .get(pathController.findAll)
  .post(pathController.create)

// //Get trending Paths
// router.route("/trending")
//   .get(pathController.findTrending)
// //Get new Topics
// router.route("/new")
//     .get(pathController.findNew)
//
// // Matches with "/api/paths/:id"
// router
//   .route("/:id")
//   .get(pathController.findById)
//   .put(pathController.update)
//   .delete(pathController.remove)

module.exports = router

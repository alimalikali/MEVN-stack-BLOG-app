const express = require("express");
const { AuthenticationController } = require("../controllers");
const validate = require("../middlewares/validate");
const { createUser, loginUser ,contactDetails } = require("../validations/user.validation");
const verifyJWT = require("../middlewares/verify.Token");
const { upload } = require("../utils/uploads");
const router = express.Router();

// define the about route
// router.get('/', function (req, res) {
//   res.send('About birds')
// })

router.route("/registor").post(validate(createUser) ,AuthenticationController.registor);
router.route("/login").post(validate(loginUser) ,AuthenticationController.loginController);

router.route("/profile").get(verifyJWT ,AuthenticationController.profileController);

router.route("/post")
.post(verifyJWT,upload.single("image"),AuthenticationController.postController)
.get(AuthenticationController.AllpostController)

router.route("/post/:id")
.get(AuthenticationController.particularPost)

router.route("/contact")
.post(validate(contactDetails),AuthenticationController.contact)




module.exports = router;

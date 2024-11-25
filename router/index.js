const { Router } = require("express");
const Aprouter = require("./adminPanel-router");
const adminRouter = require("./admin-router");
const blogRouter = require("./blog_Router");

const router = Router();

router.use('/',Aprouter);
router.use('/',adminRouter);
router.use('/blog',blogRouter)


module.exports = router;
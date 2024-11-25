const { Router } = require("express");
const blogController = require("../controllers/blogController")

const blogRouter = Router()

blogRouter.get('/add_blog',blogController.addblogPage);
blogRouter.post('/add_blog',blogController.addblog);

blogRouter.get('/view_blog',blogController.viewblogPage);

blogRouter.get('/delete_blog/:adminId',blogController.deleteblog);

blogRouter.get('/edit_blog/:adminId',blogController.editblogPage);
blogRouter.post('/edit_blog/:adminId',blogController.editblog);


blogRouter.get('/all_blog',blogController.allblogPage);


blogRouter.get('/:id',blogController.likeBlog)

module.exports = blogRouter;
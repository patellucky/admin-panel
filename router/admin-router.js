const { Router } = require("express");
const AdminCtl = require('../controllers/admin-controller');
const { uploadImage } = require("../middlewares/admin-middelware");

// Aprouter = Admin panel routings
const adminRouter = Router();

adminRouter.post('/add_admin', uploadImage , AdminCtl.addadminData);
adminRouter.get('/delete_admin/:adminId',  AdminCtl.deleteadminData);
adminRouter.post('/edit_admin/:editId',uploadImage,AdminCtl.editadminData)

adminRouter.get('/logout',  AdminCtl.logout);

module.exports = adminRouter;
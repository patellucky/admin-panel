const admin = require("../models/adminSchema");
const fs = require('fs')

module.exports.addadminData = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path;

        }

        req.body.name = req.body.fname + ' ' + req.body.lname

        await admin.create(req.body);
        return res.redirect('back')

    } catch (error) {
        console.log(error);
        return res.redirect('back')
    }
}

module.exports.deleteadminData = async (req, res) => {
    try {
        let { adminId } = req.params;
        let deleteData = await admin.findByIdAndDelete(adminId);
        console.log('admin is deleted');
        fs.unlinkSync(deleteData.image)
        return res.redirect('/view_admin');
    } catch (error) {
        console.log(error);
        return res.redirect('/view_admin');
    }
}



module.exports.editadminData = async (req, res) => {
    try {
        let { editId } = req.params;
        // console.log(editId);
        
        req.body.name = req.body.fname + " " + req.body.lname;
        if (req.file) {
            req.body.image = req.file.path;
            fs.unlinkSync(req.body.oldImage)
        }
        // console.log(req.body);
        let adminData = await admin.findByIdAndUpdate(editId, req.body);
        
        return res.redirect('/view_admin');
    } catch (error) {
        console.log(error);
        return res.redirect('/view_admin');
    }
}


module.exports.logout = (req, res) => {
    res.clearCookie('adminId');
    return res.redirect('/login');

}
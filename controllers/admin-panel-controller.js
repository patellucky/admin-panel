const admin = require('../models/adminSchema');

module.exports.cerateAdmin = async (req, res) => {
    try {
        let data = await admin.create(req.body);
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
}

module.exports.homePage = (req, res) => {
    return res.render('index');
}
module.exports.viewadminPage = async (req, res) => {
    try {
        let data = await admin.find({})
        return res.render('pages/view_admin', { data });
    } catch (error) {
        console.log(error);
        return res.render('pages/view_admin');
    }
}
module.exports.addadminPage = (req, res) => {
    return res.render('pages/add_admin');
}

module.exports.editadminPage = async (req, res) => {

    try {
        let { id } = req.params;
        let data = await admin.findById(id);
        // console.log(data);        
        return res.render('pages/edit_admin', { data });
    } catch (error) {
        console.log(error);
        return res.render('pages/edit_admin');
    }

}
module.exports.loginPage = (req, res) => {
    return res.render('pages/login');
}
module.exports.signupPage = (req, res) => {
    return res.render('pages/signup');
}

module.exports.login = async (req, res) => {
    try {
        console.log(req.body);
        let { email, password } = req.body;
        let currentAdmin = await admin.findOne({ email });
        console.log(currentAdmin);
        
        if (currentAdmin) {
            if (currentAdmin.password == password) {
                return res.cookie('adminId', currentAdmin.id).redirect('/')
            }
            else {
            }
            return res.status(400).redirect('/login')
        }

    } catch (error) {
        console.log(error.message);
        return res.redirect('back');
    }
}


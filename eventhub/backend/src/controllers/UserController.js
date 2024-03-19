const User = require("../models/user");
const nodemailer = require('nodemailer');

const addUser = async (req, res) => {
    console.log("add");
    console.log(req.body);
    const {
        first_name,
        last_name,
        roll_number,
        mobile_number,
        event_name,
        email,
        branch,
        passout_year,
        college,
        gender,
    } = req.body;
    try {
        const newUser = new User({
            first_name,
            last_name,
            roll_number,
            mobile_number,
            email,
            branch,
            event_name,
            passout_year,
            college,
            gender,
        });

        await newUser.save();
        sendEmail(email);
        res.status(201).json({ message: "Registered Successfully", alert: true, completed: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Not registered", alert: false });
    }
};
function sendEmail(toEmail) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nayakpriya919@gmail.com',
            pass: 'cktt erbe nyod fpdi'
        }
    });

    var mailOptions = {
        from: 'nayakpriya919@gmail.com',
        to: toEmail,
        subject: 'Welcome to Our App',
        text: 'Thank you for registering!'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const GetUserData = async (req, res) => {
    try {
        const users = await User.find();
        if (!users.length) {
            return res.status(404).json({ message: "No Users Found." });
        }
        res.status(200).json({ users });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching users" });
    }
};
const DeleteUserData = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User data deleted successfully" });
    } catch (er) {
        console.log(er);
        res.status(500).json({ message: "Error deleting user data" });
    }
};

module.exports = { addUser, GetUserData,DeleteUserData };

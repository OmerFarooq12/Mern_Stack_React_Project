const e = require("express");
const Joi = require("joi");
const router = e.Router()
const AdminModel = require('../Models/AdminModel');
const nodemailer = require('nodemailer');

//Mailer Config
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "shakilsadia8@gmail.com",
    pass: "uywe gpim ugpi dbir",
  },
});

//SignUP Validation
const AdminValidator = Joi.object({
    AdminName: Joi.string().required(),
    AdminEmail: Joi.string().email().required(),
    AdminPassword: Joi.string().min(8).required(),
    AdminC_Password : Joi.ref('AdminPassword')
}) 

router.post('/signup', async(req, res)  =>{
    try {
    await AdminValidator.validateAsync(req.body);

    const checkEmailExist = await AdminModel.findOne({ AdminEmail: req.body.AdminEmail });
    const checkNameExist = await AdminModel.findOne({ AdminName: req.body.AdminName });

    if (checkEmailExist) {
      return res
        .status(200)
        .send({ status: "400", message: "User email already exists" });
    }
    else if (checkNameExist) {
      return res
        .status(200)
        .send({ status: "400", message: "User name already exists" });
    } 
    else {
      const admin = new AdminModel(req.body);
      admin.OTP = Math.floor(100000 + Math.random() * 900000)
      admin.save();

      await transporter.sendMail({
        from: "Hanma Omer",
        to: admin.AdminEmail,
        subject: "Account Verification",
        html: `<h2>Account Verification</h2><p>Your OTP foor account verification is <b>${admin.OTP}</b></p>`
      })

      return res
        .status(200)
        .send({ status: "200", message: "Admin registered successfully!" });
    }
  } catch (error) {
    res.status(200).send({ status: "400", message: error.message });
  }
})


//Verfication Validator

const VerficationValidator = Joi.object({
    AdminEmail: Joi.string().email().required(),
    OTP : Joi.string().required()
})

//Verification Route

router.post('/verification', async (req, res) => {
  try {
    await VerficationValidator.validateAsync(req.body);

    const admin = await AdminModel.findOne({AdminEmail: req.body.AdminEmail, OTP: req.body.OTP})
    if(admin) {
      admin.IsActive = true
      admin.save()

      res.status(200).send({status: "200", message: "Verification Successfull..."})
    } else {
      res.status(200).send({status: "400", message: "Invalid Code"})
    }
  } catch(error) {
    res.status(200).send({ status: "400", message: error.details[0].message });
  }
})

//Login Validator

const LoginValidator = Joi.object({
  AdminName: Joi.string().required(),
  AdminEmail : Joi.string().email().required(),
  AdminPassword : Joi.string().min(8).required()
})

//Login Router

router.post('/Login', async(req, res) => {
try {
  
} catch (error) {
  
}
})
module.exports = router


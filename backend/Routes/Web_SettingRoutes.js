const e = require("express");
const Joi = require("joi");
const router = e.Router()
const SettingsModel = require('../Models/Web_Settings_Model')
const SettingValidator = Joi.object({
    FirstName: Joi.string().required(),
    FullName: Joi.string().required(),
    facebook_link: Joi.string().uri().required(),
    pinterest_link: Joi.string().uri().required(),
    instagram_link: Joi.string().uri().required(),
    youtube_link: Joi.string().uri().required(),
    twitter_link: Joi.string().uri().required(),
})
 

router.post('/Add-Settings', async(req ,res) => {
    try {
        await SettingValidator.validateAsync(req.body)
        const newSettings = new SettingsModel(req.body)
        newSettings.save()
        res
        .status(200)
        .send({status:200 , message :'Settings Added Successfully'})
    } catch (error) {
        res
            .status(200)
            .send({status:400 , message:error})
    }
})

module.exports = router

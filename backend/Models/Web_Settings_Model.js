const mongoose = require('mongoose')

const settingSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required:true  
    },
    FullName: {
        type: String,
        required : true
    },
    facebook_link: {
        type: String,
        required : true
    },
    pinterest_link: {
        type: String,
        required : true
    },
    youtube_link: {
        type: String,
        required : true
    },
    instagram_link: {
        type: String,
        required : true
    },
    twitter_link: {
        type: String,
        required : true
    },
})

const settings = mongoose.model('Settings', settingSchema)
module.exports = settings
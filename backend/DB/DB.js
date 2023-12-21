const { default: mongoose } = require("mongoose");
const MONGODB = process.env.MONGODB
mongoose.connect(MONGODB).then(() => {
    console.log(`MONGODB DataBase Connected At ${MONGODB} `)
}).catch((err) => {
    console.log(`MONGODB DataBase Connection Failed Due To  ${err} `)
});
const e = require('express');
const app = e()
require('dotenv').config()
const port = process.env.PORT
const SettingRoutes = require('./Routes/Web_SettingRoutes');
const AdminRoutes = require('./Routes/AdminRoutes');
const bodyParser = require('body-parser');
require('./DB/DB')

app.use(bodyParser.json())
app.use('/admin',AdminRoutes)
app.use('/web' , SettingRoutes)

app.listen(port, () => {
    console.log(`Server Is Listening On PORT ${port}`)    
})
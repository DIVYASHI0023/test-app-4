const { signup } = require("../Controllers/app.controller")

module.exports=(app)=>{
    app.post('/api/signup',signup)
}

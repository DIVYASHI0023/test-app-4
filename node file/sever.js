const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require("mongoose");
const app = express()
app.use(bodyParser.json());
app.use(cors());


mongoose.connect("mongodb+srv://DIVYASHI:fsrln1234@cluster0.pvsjehq.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Couldn't connect to the database");


})
 



require("./Routes/app.routes")(app);
app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`);
});

require('dotenv').config();
const express = require("express")
const mongoose = require('mongoose')

const path = require('path')

const app = express();

const bodyParser = require("body-parser")
//Routes
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))
})
const bookmarkRoutes = require("./Routes/bookmark")
const tagRoutes = require("./Routes/tag")

//DB connection
mongoose
    .connect(
        process.env.DATABASE,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true,
            useFindAndModify: false
        }
    )
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));
//middleware
app.use(bodyParser.json());




//routesCall
app.use('/api', bookmarkRoutes)
app.use('/api', tagRoutes)

//port
const port = process.env.PORT || 3000;
//server
app.listen(port,() => {
    console.log(`app is running at ${port}`);
})    












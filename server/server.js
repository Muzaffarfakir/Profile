//////////////////initilize all libs 
let express = require("express");
let app = express();
let cors = require("cors");
let bodyparser=require("body-parser")
let path = require("path")
let port = 8000;
let jwt = require("jsonwebtoken");
let mongoose = require("mongoose");
let multer = require("multer");
let cloud = require("cloudinary").v2;

/////////////////////midleawres /////////
app.use(cors());
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"upload")))
cloud.config({
    cloud_name: 'dm0thlxai',
    api_key: '583765424425853',
    api_secret: 'brfFu8p3eAEMmLWOaMcUxtyL96s'
});
/////////////////////setup of multer /////////
let storage = multer.diskStorage({
    destination: "upload/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})
/////////////////upload midleware ////////
let upload = multer({
    storage: storage
})
let par = {
    useNewUrlParser: true
}
////////////////////////url of addres mongose /////// or connect
let url = "mongodb://fakirmuzaffar771:Muzaffar@ac-upkty94-shard-00-00.pdzvphx.mongodb.net:27017,ac-upkty94-shard-00-01.pdzvphx.mongodb.net:27017,ac-upkty94-shard-00-02.pdzvphx.mongodb.net:27017/?ssl=true&replicaSet=atlas-3rofmx-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(url, par).then(() => {
    console.log("eastablished sussecfully")
}).catch((er) => {
    console.log(er)
})
////////schema ////////////////////////
let devSc = new mongoose.Schema({
    name: String,
    pass: String
})
let dataSc = new mongoose.Schema({
    text: String,
    title: String,
    repo : String,
    img:String,
    date:Date
})
/////////////create A Model///////////
let dev = new mongoose.model("devSc", devSc);
let d = new mongoose.model("datasc", dataSc);

////////routings here
////////////Img /////////////////////
let img;
app.post("/projectDataImg", upload.single('imgg'), (req, res) => {
   img=req.file.filename
   
})
app.post("/projectData", (req, res) => {
    cloud.uploader.upload(img).then((da) => {
        console.log(da)

        let { text, title, repo } = req.body;
        let data = new d({
            text: text,
            title: title,
            repo: repo,
            img: da.secure_url,
            date: Date.now()


        });


        data.save();
    });
    });
app.get('/',async(req,res)=>{
    let data=await d.find({});
    res.send(data)

})


//////////////Developer Login Data ///////
app.post("/devLogData", async (req, res) => {
    let { name, pass } = req.body
    let data = await dev.findOne({ name: name, pass: pass })
    if (data) {
        let token = jwt.sign({ id: data._id }, "muju");
        res.json({ mess: "exist", token: token });

    }
    else {
        res.json({ mess: "not" })
    }
})


app.listen(port);

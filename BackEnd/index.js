const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const multer = require('multer');






// var client = new MongoClient('mongodb://localhost:27017/chatroom', {useNewUrlParser:true})
var client = new MongoClient("mongodb+srv://sumant:rajendrav26@cluster0-6ko7m.mongodb.net/freelance?retryWrites=true&w=majority", {useNewUrlParser:true})

const PORT= process.env.PORT||3000

var connection;
client.connect((err, con)=>{
        if(!err)
        {
            connection=con;
            console.log("database connected successfully");
        }
        else{
            console.log("database could not connect");
        }
})



const app = express();


app.use(cors());



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("in destination");
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, req.genId+"_"+file.fieldname+"_"+req[file.fieldname+'Ctr']++ +".jpg");

    }
  })
  
  var upload = multer({ storage: storage })

  app.post('/images',    (req,res,next)=>{ 
                              
    req.genId=req.body.email; 
    req['galleryCtr']=1;
    req['profileCtr']=1; 

    next(); },


  upload.fields([{ name: 'profile', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]),
  (req,res)=>{  console.log("in last",);    res.send({status:"ok"})
}
)


app.post('/images', 
(req,res,next)=>{ 
  
  req.genId="hh"; 
  req['galleryCtr']=1;
  req['profileCtr']=1; 

  next(); },


upload.fields([{ name: 'profile', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]),
(req,res)=>{  console.log("in last");    res.send({status:"ok"})
});


app.post('/sign-up', bodyParser.json() ,(req,res)=>{  

        const collection = connection.db('freelance').collection('users');


        collection.insert(req.body, (err,result)=>{
            if(!err)
            {
                res.send({status:"ok", data:"signup successfull for "+req.body.name});
            }
            else{
                res.send({status:"failed", data:"could not register"});
            }
        })



   });
   

app.get('/sign-up', bodyParser.json() ,(req,res)=>{ 



    const collection = connection.db('freelance').collection('users');


    collection.find(req.body).toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"ok", data:docs});
        }
        else{
            res.send({status:"failed", data:"some error occured"});
        }
    })

    });

 

// add developer info to db
app.post('/dev', bodyParser.json() ,(req,res)=>{  

    const collection = connection.db('Developer').collection('devdata');


    collection.insert(req.body, (err,result)=>{
        if(!err)
        {
            res.send({status:"ok", data:"signup successfull for "+req.body.name});
        }
        else{
            res.send({status:"failed", data:"could not register"});
        }
    })
});


app.get('/dev', bodyParser.json() ,(req,res)=>{ 


    const collection = connection.db('Developer').collection('devdata');

    collection.find(req.body).toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"ok", data:docs});
        }
        else{
            res.send({status:"failed", data:"some error occured"});
        }
    })

    });

    app.put('/dev', bodyParser.json() ,(req,res)=>{  

        const collection = connection.db('Developer').collection('devdata');
    
    
        collection.insert(req.body, (err,result)=>{
            if(!err)
            {
                res.send({status:"ok", data:"signup successfull for "+req.body.name});
            }
            else{
                res.send({status:"failed", data:"could not register"});
            }
        })
    });
    


app.listen(4000, ()=>{
    console.log("Server is listening on port 4000");
    // console.log("got to browser and hit 'localhost:3000'");
})
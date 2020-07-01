const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const multer = require('multer');
const path = require('path');

var nodemailer = require('nodemailer');
const { info, error } = require('console');




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
app.use(express.static(path.join(__dirname,'uploads')));



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("in destination");
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {


        const collection = connection.db('Developer').collection('devdata');
        collection.find({email:req.body.email}).toArray((err,docs)=>{

            if(!err && docs.length>0)
            {
                req.isAlreadyExist =true;
                cb(null, "temp.jpg");
            }
            else{
                req.isAlreadyExist =false;
                const collection = connection.db('Developer').collection('devdata');


                collection.insert(req.body, (err,result)=>{
                    if(!err)
                    {
                  
                            req.genId=result.insertedIds['0'];
                            req.isInsertedSuccess = true;
                            cb(null, req.body.email+"_"+file.fieldname+".jpg");


                    }
                    else{
                            req.isInsertedSuccess = false;
                            cb(null, "temp.jpg");
                    }
                })


            }
        })


    }
  })
 
  
  var upload = multer({ storage: storage })


  app.post('/images',  upload.single('profile'), 
                      (req,res)=>{  console.log("in last",);  
                      
                      if(req.isAlreadyExist)
                      {

                          res.send({status:'failed', data:"you have already give your data"})
                          
                      }
                      else {
                          res.send({status:"ok", data:"Your Data is Successfully Saved"})

                      } 
}
)









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
   

app.post('/sign-up-chek', bodyParser.json() ,(req,res)=>{ 

    console.log(req.body)

    const collection = connection.db('freelance').collection('users');


    collection.find(req.body).toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"ok", data:docs, da:req.body});
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

    app.post('/devUpdate', bodyParser.json() ,(req,res)=>{  

        const collection = connection.db('Developer').collection('devdata');
        
        var email={email:req.body.email}
        var newvalue={$set:req.body}
    
        collection.update(email,newvalue ,(err,result)=>{
            if(!err)
            {
                res.send({status:"ok", data:"updated successfull for "+req.body.email});
            }
            else{
                res.send({status:"failed", data:"could not update"+err});
            }
        })
    });
    

app.post("/sendmail", bodyParser.json(),(req,res)=>{
    var clientemail= req.body.clientemail;
    var devemail= req.body.devemail;
    var emailsubject= req.body.emailsubject;
    var emailcontent= req.body.emailcontent;
    // var devemail=req.body.devemail;
    // alert("hello")
    // res.send(client.user)
    console.log(req.body.clientemail, req.body.devemail)
    sendMail(clientemail,"ucvcxvuefudusgao",devemail,emailsubject, emailcontent, info=>{
        console.log(info)
        res.send(info)
    })
})

function sendMail(from, appPassword, to, subject,  htmlmsg, callback)
{
    let transporter=nodemailer.createTransport(
        {
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:
            {
             //  user:"weforwomen01@gmail.com",
             //  pass:""
             user:from,
              pass:appPassword
              
    
            }
        }
      );
    let mailOptions=
    {
       from:from ,
       to:to,
       subject:subject,
       html:htmlmsg
    };
    transporter.sendMail(mailOptions ,function(error,info)
    {
      if(error)
      {
        console.log(error);
        callback({err:"something is wrong"})
      }
      else
      {
        console.log('Email sent:'+info.response);
        callback({err:"sent"})
      }
    });

   

}



app.listen(4000, ()=>{
    console.log("Server is listening on port 4000");
    // console.log("got to browser and hit 'localhost:3000'");
})
// index.js
//import alert from 'alert-node'
const cron = require("node-cron");
const cors = require('cors');
const express = require("express");
const schedule = require("node-schedule")
let nodemailer = require("nodemailer");
//var path = require('path');
var app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('foobar')
})

app.post('/entry',(req,res)=>{
    let type = req.body.type;
    //console.log(type);
    if(type === "daily")
    {
        let hour =req.body.hour;
        let min =req.body.minute;
        //console.log("hour"+hour+"min"+min);
        // sending emails at periodic intervals
        cron.schedule(`${min} ${hour} * * * `, function(){
            console.log("daily");
            
        });
    }
    else if(type === "weekly"){
        let day =req.body.day;
        let hour = req.body.hour;
        let min = req.body.min;
        // console.log("min"+min+"sec"+sec);
        
        // sending emails at periodic intervals
        cron.schedule(`${min} ${hour} * * ${day}`, function(){
           // console.log("---------------------");
            console.log("Weekly");
            
        });
    }
    else if(type === "monthly"){
        let date =req.body.date;
        let hour = req.body.hour;
        let min = req.body.min; 
        // console.log("min"+min+"sec"+sec);
        
        // sending emails at periodic intervals
        cron.schedule(`${min} ${hour} ${date} * *`, function(){
            //console.log("---------------------");
            console.log("monthly");
            
        });
    }
    else if(type === "yearly"){
        let month = req.body.month;
        let date = req.body.date;
        let hour = req.body.hour;
        let min = req.body.min; 
        // console.log("min"+min+"sec"+sec);
        //create mail transporter
        
        // sending emails at periodic intervals
        cron.schedule(`${min} ${hour} ${date} ${month} *`, function(){
            //console.log("---------------------");
            console.log("Running Cron Job");
            
        });
    }
    else if(type === "once"){
        let year =req.body.year;
        let datee = req.body.date;
        let month = req.body.month;
        let hour = req.body.hour;
        let min = req.body.min;
        var date = new Date(year,month-1,datee,hour,min).toUTCString();
        schedule.scheduleJob(date,()=>{
            console.log("It's today")
        })

        // console.log("min"+min+"sec"+sec);
        
        // sending emails at periodic intervals
        
        //    console.log("---------------------");
          
        
    }
})

// //create mail transporter
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "domain.sayan.singha@gmail.com",
//     pass: "fido@home"
//   }
// });

// // sending emails at periodic intervals
// cron.schedule("* * * * *", function(){
//   console.log("---------------------");
//   console.log("Running Cron Job");
//   let mailOptions = {
//     from: "domain.sayan.singha@gmail.com",
//     to: "sayansingha1451997@gmail.com",
//     subject: `Reminder of one minute`,
//     text: `Hi there, this email was automatically sent by us`
//   };
//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       throw error;
//     } else {
//       console.log("Email successfully sent!");
//     }
//   });
// });

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`listening on port ${port}`) //it wll show 5000 because I have put "export PORT=5000"
})

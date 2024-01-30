// const express=require('express')
// const app=express()
// app.use(express.static(__dirname))
// // console.log('hello welcome')
// app.get('/get-data',function(request,response){
//     // console.log(request)
//     const repdata={
//         'name : ':'class',
//         'sub':'node'
//     }
//     response.status(200).json(repdata)
// })

// app.listen(8004)




const express = require('express')
const bodyParser = require('body-parser')
const {connectdb,getdb}=require('./db.cjs')
const app = express()
let db
app.use(express.static(__dirname))
app.use(bodyParser.json())
connectdb(function(error){
    if(!error)
    {
        app.listen(8004)
        console.log("listening to the port.....8004")
        db=getdb()
    }
    else{
        console.log(error)
    }
})

app.post('/make-new-record',function(request, response) {
    db.collection('expressdata').insertOne(request.body)
    console.log(request.body);
    console.log("value inserted sucessfully");

    
})


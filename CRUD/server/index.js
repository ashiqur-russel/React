const express = require('express') 
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const mysql = require('mysql')
const { restart } = require('nodemon')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'Crud',

});



/* const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'Crud'
}); */
// route to the front-end
/* app.get("/",(req,res)=>{
    const sqlInsert = `INSERT INTO movie (name,reviews) VALUES ('hello','Good One!');`
    db.query(sqlInsert,(err,result)=>{

        if(err){
            return console.log(err)
        }else{
            return console.log("success")

        }

    })
})
 */
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get",(req,res)=>{
    const sqlSelect = "SELECT * FROM movie";
    pool.query(sqlSelect,(err,result)=>{
        res.send(result)
    })

})

app.post("/api/insert",(req,res)=>{
    const name = req.body.name;
    const review = req.body.review;

    const sqlInsert = "INSERT INTO movie (name,review) VALUES (?,?)";
    pool.query(sqlInsert,[name,review],(err,result)=>{
        console.log(result);
    })
})

app.delete("./api/delete/name",(req,res)=>{
    const name = req.params.name;
    const sqlDelete = "DELETE FROM movie WHERE name=?";
    
    pool.query(sqlDelete,name,(err,result)=>{
        if(err){
            console.log(err)
        }
    })
})


//listen to the port
app.listen(3001,()=>{
    console.log("Running on port 3001");
})

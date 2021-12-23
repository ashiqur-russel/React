const express = require('express') 
const db = require('./config/db')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const { restart } = require('nodemon')
const PORT=3001;



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
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })

})

app.post("/api/insert",(req,res)=>{
    const name = req.body.name;
    const review = req.body.review;

    const sqlInsert = "INSERT INTO movie (name,review) VALUES (?,?)";
    db.query(sqlInsert,[name,review],(err,result)=>{
        console.log(result);
    })
})

app.delete("/api/delete/:id",(req,res)=>{
    const name = req.params.id;
    const sqlDelete = "DELETE FROM movie WHERE id=?";
    
    db.query(sqlDelete,name,(err,result)=>{
        if(err){
            console.log(err)
        }
    })
})


/*  app.listen(5000,()=>{
    console.log("Running on port 3001");
}) 
 */


app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
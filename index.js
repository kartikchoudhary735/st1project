const { log } = require('console');
const express= require('express')
const app= express();
const data=[];

app.use(express.json()) //use to populate
app.use(express.urlencoded({extended: true})); //req.body null na aaye from post form.

app.get('/students',(req,res) => {
    res.send(data);
})
app.get('/students/:rollno',(req,res) =>{
    const rollno=parseInt(req.params.rollno);
    const idx=data.findIndex((item) => item.rollno == rollno);
    if(idx!=-1){
        res.send(data[idx]);
    }else{
        res.send("Not found");
    }
})
app.post('/students',(req,res) => {
    const student=req.body;
    data.push(student);
    res.send("Student Added");
})
app.put('/students/:rollno',(req,res) => {
    const newData=req.body;
    const rollno=parseInt(req.params.rollno);
    const idx=data.findIndex((item) => item.rollno == rollno);
    if(idx!=-1){
        data[idx]={...data[idx],...newData};
        res.send("Updated");
    }else{
        res.send("Not Found");
    }
})
app.delete('/students/:rollno',(req,res) => {
    const rollno=parseInt(req.params.rollno);
    const idx=data.findIndex((item) => item.rollno == rollno);
    if(idx!=-1){
        data.splice(idx,1);
        res.send("Deleted");
    }else{
        res.send("Not Found");
    }
})
app.listen('3000',() => {
    console.log("http://localhost:3000");
})
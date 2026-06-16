const express = require('express');
const app = express()
const fs = require('fs');
const users = require('./users.json')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/",(req,res)=>{
    return res.status(200).sendFile(__dirname+'/index.html')
})
app.get("/api/users",(req,res)=>{
    const html =`
    <ul>
      ${users.map(user=>`<li>${user.name}</li>`).join('')}
    </ul>
    `
    res.status(200).send(html)
})
// app.get("/api/user/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find(user=>user.id===id);
//     if(!user){
//         res.status(404).json({message:`User with ${id} is not Found`});
//     }
//     else{
//     res.status(200).json(user);
//     }

// })

app.route("/api/user/:id")
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user=>user.id===id);
    if(!user){
        res.status(404).json({message:`User with ${id} is not Found`});
    }
    else{
    res.status(200).json(user);
    }
    

})
.post((req,res)=>{
    const user ={
        ...req.body,
        id : users.length+1
        
        
    }
    users.push(user);
    fs.writeFile("users.json",JSON.stringify(users),(err,data)=>{
        if(err){
            console.log("Error in Adding User");
            res.status(500).send("Error in Adding User")
        }
        else{
            res.send("User Added Successfully...")
        }
    })

})
.delete((req,res)=>{
    const id =Number(req.params.id);
    const index = users.findIndex(user=> user.id === id);
    if(index===-1){
        res.status(404).json({message:`User with ${id} not exists`})
    }
    users.splice(index,1);
    fs.writeFile("users.json",JSON.stringify(users,null,2),(err)=>{
        if(err){
            res.status(500).json({message:"Error in Deleting User"});
        }
        res.status(200).json({message:`User with ${id} deleted successfully`});
    })
})
.put((req,res)=>{
    const id =Number(req.params.id);
    const index = users.findIndex(user=> user.id === id);
    if(index===-1){
        res.status(404).json({message:`User with ${id} not exists`})
    }
    users[index] = {
    id,
    ...req.body
    };
   fs.writeFile("users.json",JSON.stringify(users,null,2),(err)=>{
        if(err){
            res.status(500).json({message:"Error in Deleting User"});
        }
        res.status(200).json({message:`User with ${id} deleted successfully`});
    })
})
app.listen(2000,()=>{
    console.log("Server listening at port 2000")
})
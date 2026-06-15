const http = require('node:http');
const fs = require('node:fs');
const { readFileSync, readFile } = require('node:fs');
const server = http.createServer( async(req,res)=>{
  if(req.url=='/'){
    res.writeHead(200,{"content-type":"text/html"});
    const events = require('node:events');
    let myEventSource  =  new events.EventEmitter();
    myEventSource.on('someEvent',(user)=>{
    console.log("Event Emitted "+user)
    });
    myEventSource.emit('someEvent','Siddartha')   
    res.end("<h1>Welcome to The Web Page</h1>");
   }
   if(req.url=='/about'){
    res.writeHead(200);
    //let readStream = fs.createReadStream("about.html","utf-8");
    //readStream.pipe(res);
    //res.end();
    // let data =   readFileSync("about.html","utf-8");
    // res.write(data);
    // res.end();
     await readFile("about.html","utf-8",(err,data)=>{
        if(err){
            console.log("Error in reading File");
        }
        else{
            //res.writeHead(201,{'Content-Type':'text/html'});
            res.end(data);
        }
    });
    }
    if(req.url=='/users'){
        res.writeHead(200,{'content-type':'application/json'});
        res.write(JSON.stringify({name:"CVR",place:"Hyderabad"}));
        res.end();
    }
        
    });


server.listen(2000,()=>{
    console.log("Server listening at port 2000");
})


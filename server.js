const express= require("express");
const app = express();

const port =6553;
app.listen(port,function(){
    console.log("server is running at port: "+port);
});
app.get('/',(req,res,next)=>{
    console.log("Home page to be rendered");
    res.sendfile('index.html');
});

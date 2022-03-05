const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./'));

app.get('/',(req,res)=>{
  // res.sendFile("./index.html") ;
res.sendFile(path.join(__dirname,'index.html'));
})
app.listen(5050,()=>{
  console.log('Server is listening to 5050');
})
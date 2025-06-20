const path = require('path');

const http = require('http')
const express = require('express');
const bodyparser =  require('body-parser')

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')



const app = express();
app.use(bodyparser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'));
})





const server = http.createServer(app);
server.listen(3000,()=>{
    console.log("running!")
});
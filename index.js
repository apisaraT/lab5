const express = require('express');
const path = require('path');

const app = express();
const users = require('./Users');


//use express.static middleware
app.use(express.static(path.join(__dirname,'public')));

//logger middleware
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')} ${req.originalUrl}`);
    next();
}
app.use(logger);

app.get('/',(req,res) => {
    // res.send('<h1> Hello World </h1>');
   // res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/about',(req,res) => {
    // res.send('<h1> Hello World </h1>');
   // res.sendFile(path.join(__dirname,'public','about.html'));
});

//define api routes
app.use('/api/users',require('./routes/api/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> {
    console.log(`Sever started on port ${PORT}...`);
});
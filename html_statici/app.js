// Get dependencies
const express = require('express');
const path = require('path');
const app= express();
// Set our api response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
    });
app.get('/streetwear', (req, res) => {
    res.sendFile(path.join(__dirname,'streetwear.html'))
    });
app.get('/basketball', (req, res) => {
    res.sendFile(path.join(__dirname,'basketball.html'))
    });

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});
        
        
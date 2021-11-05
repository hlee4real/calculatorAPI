var _cal= require('./Calculator');
var cors = require('cors');

// app.use(cors());

var express = require('express');
var app = express();
app.get('/calADD', cors(), function(req, res){
    var rs =0;
    var a=parseInt(req.query.a);
    var b=parseInt(req.query.b);
    rs = _cal.add(a,b);
    res.json(rs);
    console.log('add success');
})


app.get('/calSUB', cors(),function(req, res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.sub(a,b);
    res.json(rs);
    console.log('sub success');
})

app.get('/calMUL', cors(), function(req, res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.mul(a,b);
    res.json(rs);
    console.log('mul success');
})

app.get('/calDIV', cors(), function(req, res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.div(a,b);
    res.json(rs);
    console.log('div success');
})
app.listen(3334);


// var a = 3;
// var b = 5;
// console.log(_cal.add(a,b));
// console.log(_cal.sub(a,b));
// console.log(_cal.mul(a,b));
// console.log(_cal.div(a,b));
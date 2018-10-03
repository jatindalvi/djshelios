var express=require('express')

var app=express();

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

//set the template engine to ejs
app.set('view engine','ejs');

//express middleware so that we dont have to write a route for every stylsheet linked to an html file.
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
  res.render('landingpage');
});

app.get('/home',function(req,res){
  res.render('homepage');
});

app.get('/committee',function(req,res){
  res.render('committee');
});


//listen on the declared port

app.listen(port,host);

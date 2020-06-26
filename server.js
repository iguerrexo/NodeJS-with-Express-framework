var express = require("express");
var app = express();


/*****************************************************/
/********  Server Configuration     *****/
/*****************************************************/

// Render HTML From The EndPoints
var ejs = require('ejs');
app.set('views',__dirname + "/public");
app.engine('html', ejs.renderFile);
app.set('view engine', ejs);

//server static files (js, css, img, pdf)
app.use(express.static(__dirname + '/public'));

/*****************************************************/
/** Server HTML **/
/*****************************************************/

app.get('/',function(req, res){
    res.render('index.html');
});


// create the .admin endpoint
//server the admin.hmtl
app.get('/admin',function(req,res){
    res.render('admin.html');
});

app.get('/about',function(req, res){
    res.send('<h1 style="color:blue">Nora Guerrero</h1>');
});

//please contact me at gmail
app.get('/contact',function(req, res){
    res.send('<h1 style="color:orange">Email me at: NoraSaysHello@gmail.com</h1>');
});


//start the project
app.listen(8080, function(){
    console.log("Server running at localhost:8080");
});

//ctrl + c: to kill server
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// https://www.restapitutorial.com/httpstatuscodes.html


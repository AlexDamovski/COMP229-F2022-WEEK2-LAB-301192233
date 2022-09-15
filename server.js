const connect = require('connect');
const app = connect();

function htmlText(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
};

function plainText(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
};

function jsonText(req,res,next){
   
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({Message: "Hello from NodeJS Application as json"}));
}

app.use('/json', jsonText);
app.use('/html', htmlText);
app.use(plainText);



app.listen(3000);
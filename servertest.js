const connect = require('connect');
const app = connect();

function plainText(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application')
}

function htmlText(req,res,next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>')
}
app.use(plainText);
app.use('/html', htmlText);

app.listen(3000);
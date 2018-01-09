var connect = require('connect');
var serveStatic = require('serve-static');
var sFolder=".";
var app = connect();
app.use(serveStatic("."));
var nport=5100;
app.listen(nport,()=>{
    console.log("Listening on Port: "+nport);
console.log("Document root:"+__dirname+"/"+sFolder);
});

const express = require('express')
const fs = require('fs')
const app = express();
app.get("/users",(req, res)=>{
    fs.readFile('users.json', function(err, data) {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.write(data)
        res.end()
      });
});
app.listen(3000);
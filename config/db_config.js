var mysql = require('mysql');

var db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "permana17"
});

db.connect( (err) => {
    if (err) throw err;
    console.log("Connected on database...!!");
});
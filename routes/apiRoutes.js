var db = require("../db/db.json");
var fs = require("fs");

module.exports = function (app) {
    // get
    app.get("/api/notes", function (req, res){
        fs.readFile("./db/db.json", "utf8", (err, data) =>{
            if (err) throw err;
            const db = JSON.parse(data);
            res.json(db);
        
        });
    });
// post
app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        const db = JSON.parse(data);
        const newDB = [];
        db.push(req.body);
        for (let i = 0; i < db.length; i++) {
            const newNote = {
                id: i,
                title: db[i].title,
                text: db[i].text,
            };
            newDB.push(newNote);
        }
        fs.writeFile("./db/db.json", JSON.stringify(newDB, null, 2), (err) => {
            if (err) throw err;
            res.json(newDB);
            console.log("New Note Created");
        });
    });
});
//delete
app.delete("/api/notes/:id", (req, res) =>{
    let idNote = req.params.id;
    fs.readFile("./db/db.json", "utf8", (err, data) =>{
        if (err) throw err;
        
    const notes = JSON.parse(data);
    const newNotes = notes.filter(note => note.id != idNote);
    fs.writeFile("./db/db.json", JSON.stringify(newNotes, null, 2), err => {
        if (err) throw err;
        res.send(db);
        console.log("Deleted!")
    });
});
});
}
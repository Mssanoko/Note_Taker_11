const { fstat } = require("fs");

let db = []

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFiles(".db/db.json","utf8", (err,data) => {
            if (err) throw err;
            const db = JSON.parse(data);
            res.json(db);
      });
    app.post("/api/notes", function(req, res) {
        res.json(tableData);
    });
    app.delete("/api/notes", function(req, res) {
        res.json(tableData);
    });
    });
}
let express = require('express');
let router = express.Router();
let bookList = [];

// Express removed the '/book' when we app.use a router file
// now just '/' needed here
// router.method in router files, app.method in server.js
// most routes to go in router files going forward
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;
let express = require('express');
let router = express.Router();
let movieList = [];

router.get('/', (req, res) => {
    res.send(movieList);
});

// request to /movie/add (changed in client.js)
router.post('/add', (req, res) => {
    movieList.push(req.body);
    res.sendStatus(200);
});


module.exports = router;
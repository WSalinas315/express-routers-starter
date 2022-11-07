let express = require('express');
let router = express.Router();
let movieList = [];

app.get('/', (req, res) => {
    res.send(movieList);
});
  
app.post('/', (req, res) => {
    movieList.push(req.body);
    res.sendStatus(200);
});


module.exports = router;
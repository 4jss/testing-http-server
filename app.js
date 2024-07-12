const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
let requestCount = 0;
app.use((req, res, next) => {
    requestCount++;
    console.log(`Route visited: ${req.url}, Total requests: ${requestCount}`);
    next();
});
app.all('/*', (req, res) => {
    res.status(200).render('index');
});
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

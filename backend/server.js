const express = require('express');
const app = express();

const session = require('express-session');

app.use(
    session({
        secret: 'specialsecretstring',
        resave: false,
        saveUninitialized: false,
    })
);
const port = 3003



app.listen(port, () => console.log(`Listening on port ${port}`));


app.get('/api', (req, res) => {
    if(!req.session.count)
        req.session.count=0;
    req.session.count++;
    res.send({ pagecount: req.session.count })
})


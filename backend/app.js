const express = require('express');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact');
const libraryRoute = require('./routes/library');
const emailRoute = require('./routes/email');
const testRoute = require('./routes/test');
const messageRoute = require('./routes/message')
const accountRoute = require('./routes/account')
const session = require('express-session');
const cors = require("cors");
const MySQLStore = require('express-mysql-session')(session);

const db = require('./config/dbConfig')

const app = express();

const sessionStore = new MySQLStore({}, db);
app.use(session({
    secret: 'your_secret_key', // Change this to a random string
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 1000 * 60 * 60 * 24 // Session expiration time (1 day)
    }
}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
});

app.use('/account', accountRoute);
app.use('/contact', contactRoute);
app.use('/library', libraryRoute);
app.use('/email', emailRoute);
app.use('/',testRoute);
app.use('/message', messageRoute)


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var auth = require('./auth.js');
const util = require('util'); //optional; for debug
var db = require('./db');

// general config
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// app.set('views', path.join(__dirname, 'views'));

query = { };


// middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit: '50mb'}));


app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'GS-ONE-SALT'
}));

// Session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});









// ROUTES
app.get('/', function(request, response) {
  response.render('pages/login');
});

app.get('/logout', function(req, res){
  // destroy the user's session to log them out
  // will be re-created next request
  req.session.destroy(function(){
    res.redirect('/');
  });
});

app.get('/login', function(req, res){
  res.render('pages/login');
});

app.post('/login', function(req, res){
  auth.authenticate(req.body.username, req.body.password, function(err, user){
    if (user) {
      // Regenerate session when signing in
      // to prevent fixation
      req.session.regenerate(function(){
        // Store the user's primary key
        // in the session store to be retrieved,
        // or in this case the entire user object
        req.session.user = user;
        req.session.success = 'Authenticated as ' + user.name
          + ' You may now access <a href="/overview">/overview</a>.';
        res.redirect('/overview');
      });
    } else {
      req.session.error = '<p style="color:red;"> Authentication failed, please check your username and password. </p> ';
      res.redirect('/login');
    }
  });
});

require('./routes')(app, auth, db);
require('./routes-api')(app, auth, db);







// Connect to Mongo on start
console.log('Connecting to MongoDB...');

db.connect('mongodb://....com', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {

    // RUN
    app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
    });

  }
});









module.exports = function(app, auth, db){


  app.get('/overview', auth.restrict, function(request, response) {

    var col = db.get().collection('FX6FR_frames');
    var query = { };

    col.find(query).sort({"receptionDate": -1}).limit(1).toArray(function(err, result) {

      if (result.length == 0){ //if empty collections
        result[0] = require('./data_templates/dataFrame.FX6FR.json');
      }

      response.render('pages/overview', {frameLatest:     result[0] });
    });

  });


  app.get('/data-explorer', auth.restrict, function(request, response) {
    var dfFX6FR = require('./data_templates/dataFrame.FX6FR.json');
    response.render('pages/data-explorer', {frameDefault: dfFX6FR });
  });


  app.get('/data-upload', auth.restrict, function(request, response) {
    response.render('pages/data-upload');
  });


  app.get('/reports', auth.restrict, function(request, response) {
    response.render('pages/reports');
  });


  app.get('/system-status', auth.restrict, function(request, response) {

    const du = require('diskusage');
    let di = du.checkSync("/");
    var disk = {};

    disk.free  = (di.available / 1024 / 1024 / 1024).toFixed(2);
    disk.total = (di.total     / 1024 / 1024 / 1024).toFixed(2);

    response.render('pages/system-status', { disk : disk });
  });

}




module.exports = function(app, auth, db){

  app.get('/api/sample/chartData', function (req, res) {
    var chartData = [ [1504778690,15.25],[1504796718,20.25],[1504796718,20.25],[1504814747,11.75],[1504850803,-1.75],[1504850803,-1.75],[1504868831,7.5],[1504886859,15.75],[1504886859,15.75],[1504904888,18.75],[1504904888,18.75],[1504904888,18.75],[1504922916,9.75],[1504922916,9.75],[1504940944,-1.5],[1504940944,-1.5],[1504940944,-1.5],[1504940944,-1.5],[1504940944,-1.5],[1504958972,-1],[1504958972,-1],[1504977000,8.75],[1504995029,16.75],[1504995029,16.75],[1505013057,19.75],[1505031084,8.5],[1505031084,8.5],[1505031084,8.5],[1505031084,8.5],[1505049112,-3],[1505049112,-3],[1505067140,1],[1505067140,1],[1505085168,10.75],[1505085168,10.75],[1505103196,18],[1505103196,18],[1505103196,18],[1505121225,19.25],[1505121225,19.25],[1505121225,19.25],[1505121225,19.25],[1505139253,6.5],[1505139253,6.5],[1505175310,1.75],[1505193339,12.25],[1505193339,12.25],[1505211367,20],[1505211367,20],[1505229396,17.25],[1505229396,17.25],[1505229396,17.25],[1505247426,3.5],[1505265455,-3.75],[1505265455,-3.75],[1505283485,4.25],[1505283485,4.25],[1505301514,13.5],[1505373635,-2] ];
    res.send( chartData );
  });







  // TODO: api router regex confliting if /api/get/site and /apt/get/:callsign coexist 
  app.get('/api/getSite/:url*', function(req, response) {
    var tic = new Date();
    // URL must be URLencoded! https://www.urlencoder.org/
    // Ex: http%3A%2F%2Fcelestrak.com%2FNORAD%2Felements%2F
    var http = require('http');
    var url = req.params['url'].toString();
    http.get( url , function(resp){
      var body = '';
      resp.on('data', function(chunk){
        body += chunk;
      });
      resp.on('end', function () {
        response.send(body);
        console.log("API /api/getSite/"+url+" - ", (new Date()-tic)/1000, "s");
      });
    }).on("error", function(e){
      console.log("/api/getSite/:address ERROR: " + e.message);
    });

  });



  app.post('/api/receive/FX6FR', function(request, response) {
    var tic = new Date();
    
    var decoder = require('./decoder.js');
    console.log('POST from /api/receive/FX6FR');

    if (request.body && request.body.length){ 

      // save received raw data to database
      var col_raw = db.get().collection('FX6FR_raw');
      col_raw.remove({});
      col_raw.insert( request.body );


      // decode received data and save to database
      var col_frames  = db.get().collection('FX6FR_frames');
      var col_fields  = db.get().collection('FX6FR_fields');
      col_frames.remove({});
      col_fields.remove({});
      var inputRaw = request.body;

      for (var i=0; i<inputRaw.frames.length; i++) {
        
        var frame = decoder.FX6FR( inputRaw.frames[i] );
        frame.receptionDate = inputRaw.dates[i];
        
        delete frame._id; // BUGFIX: _id not being properly re-generated at each interaction. Forces a new _id at insertion.
        col_frames.insertOne(frame);

        var dataPointBuffer = [];

        for (k of Object.getOwnPropertyNames(frame.fields) ){
          dataPointBuffer.push({ fieldName:     k, 
                                 receptionDate: frame.receptionDate,
                                 ts:            frame.fields.TIMESTAMP.value,
                                 value:         frame.fields[k].value
                              });
        }
          col_fields.insert(dataPointBuffer);
      }

      console.log(request.body.length,'frames processed in', (new Date()-tic)/1000, "s")  
      response.send('{"status":true, "frames_processed":'+ request.body.length +'}'); 
      return; 
    } 
    console.log("POST /api/receive/FX6FR: ERROR. Malformed body.");
    response.send('{"status":false}');  
  });    
    



  app.get('/api/get/:callsign/:field/:sorting/:limit', function (req, res) {
    var tic = new Date();

    var callsign = req.params['callsign'];
    var field = req.params['field'];
    var limit = Number( req.params['limit'] );
    var sorting = -1; //descending by default
    if (req.params['sorting'] == "asc") { sorting = 1; }

    var col = db.get().collection(req.params['callsign'] + '_frames');
    var sort  = {"fields.TIMESTAMP.value": sorting} //sort by descending frame timestamp
    var resArray = [];

    col.find({}).sort(sort).limit(limit).toArray(function(err, result) {
      for(var i=0; i<result.length; i++){
        resArray.push( [ result[i].fields['TIMESTAMP'].value, result[i].fields[field].value ] ); 
      }

      res.send( resArray );
      console.log("API /api/get/"+callsign+"/"+field+"/"+limit, " - ", (new Date()-tic)/1000, "s");
    });

  });





} // end of module.exports


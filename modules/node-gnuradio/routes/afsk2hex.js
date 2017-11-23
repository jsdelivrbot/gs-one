var express = require('express');
var router = express.Router();

const execSync = require('child_process').execSync;

router.get('/', function(req, res, next) {
  res.render('afsk2hex');
});


router.post('/', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');


  console.log('rm -f /tmp/gs-sample.*');
  execSync('rm -f /tmp/gs-sample.*');
  console.log('rm done');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  console.log('received:', sampleFile.name);
 
  console.log('moving:', sampleFile.name);
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/tmp/gs-sample.wav', function(err) {
    if (err) {
      return res.status(500).send(err);
    } else {
        // console.log(sampleFile.name, "saved to /tmp/gs-sample.wav");
        output_buffer = execSync('stat -c "%n %s" /tmp/gs-sample.wav');
        output = output_buffer.toString('utf8');
        console.log(output);
    }
 
    // res.send('File uploaded!');

    // output_buffer = execSync('stat -c "%n %s" /tmp/gs-sample.binary');
    // output = output_buffer.toString('utf8');
    // console.log(output);

    console.log("run afsk_bin2hex.sh");
    output_buffer = execSync('./python/afsk_wav2hex.sh');
    output = output_buffer.toString('utf8');
    console.log(output);
    
    res.send(output);

  });



  

});


module.exports = router;

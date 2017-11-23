var express = require('express');
var router = express.Router();

var fs = require('fs');
var Buffer = require('buffer').Buffer;

const execSync = require('child_process').execSync;

router.get('/', function(req, res, next) {
  res.render('afsk2bin');
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


    output_buffer = execSync('./python/afsk_wav2bin.sh');
    output = output_buffer.toString('utf8');
    console.log(output);
    
    binStream_str = "";

    fs.open('/tmp/gs-sample.binary', 'r', function(err, fd) {

      if (err)
        throw err;
      var buffer = new Buffer(1);
      while (true) {   

        var num = fs.readSync(fd, buffer, 0, 1, null);
        if (num === 0)
          break;
        // console.log(buffer[0]);
        binStream_str += buffer[0].toString();
      }

      console.log('binStream_str:', binStream_str);
      res.send(binStream_str);

    });

  });

});


module.exports = router;

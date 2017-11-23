var db = require('./db');

module.exports = {


    FX6FR: function (inputRawString) {
      // Reference doc: ROB1B_E_GS_MA_Notice pour réception des télémesures par des radioamateurs_ROB1B_2017-03-22_v1.0.pdf
      // Requires: dfFX6FR = dataFrame.FX6FR.json and cfCSU = conversionFunctions.CSU.json

      // console.log('Decoding collection CSU_FX6FR_raw -> CSU_FX6FR_decoded');
      // console.log('inputRawString:', inputRawString );

      // split raw string into char pairs (each entry corresponting to a byte, in hexa)
      const inputVectorRaw = inputRawString.match(/.{1,2}/g);

      var dfFX6FR = require('./data_templates/dataFrame.FX6FR.json');
      var cfCSU   = require('./data_templates/conversionFunctions.CSU.json');

      // archives the raw string in the decoded object
      dfFX6FR.raw = inputRawString;

      // loop through all data fields of the frame 
      for (var fieldName in dfFX6FR.fields) {

          var field = dfFX6FR.fields[fieldName];
          var cf = cfCSU[ field.conversionFunction ];

          // slice the byte vector relative to current field 
          var cfInput = [];
          for (var i = field.firstBytePosition; i < field.firstBytePosition+field.lengthInBytes; i++) {
            var byte = parseInt( inputVectorRaw[ i+dfFX6FR.indexOffsetFromZero ], 16 );
            cfInput.push(byte);
          }
        
          // applies the convertion formula
          var cfExec = new Function( cf.inputVectorName, cf.functionString );
          var cfResult = cfExec( cfInput );

          // apply conversionFactor (linear scalar)
          cfResult = cfResult * dfFX6FR.fields[fieldName].conversionFactor;

          // save the resulting value back to the dataFrame object
          dfFX6FR.fields[fieldName].value = cfResult;
      }
        
      return dfFX6FR;      
     
    }

};


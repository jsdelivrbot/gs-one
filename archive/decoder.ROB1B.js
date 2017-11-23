// MISC INFO
// AX25 flag 01111110 = 0x7E
// Input as hexadecimal string, 2 chars per byte.

// sample string 
const inputRawString  = "008c6896948a40608cb06c8ca4406103f000b2ccad59ffffffffffff0102012c012c01ffffffffffff010001001902ef02730017017c001d01fa02fb02fb02fa02ff03ff03ff03ff0300000000000000000c000c000c000c000902af020b02e9023b00810039007f00f802f902f902f802ff03ff03ff03ff0300000000000000000d000d0011000d002b001f00d40b2b001f00c60b3d019d0097000204d102db03f1151206310119151f0457152904850c72047c14e303fb030614ea02740000004831a5ad598f00004eb2ccad5900000053bcccad5900000044260e775911040048260e77599c060044270e775911040048270e77599c06004e9e54775900000053a85477590000005acaa07652112200";
// split raw string into char pairs (each entry corresponting to a byte, in hexa)
const inputVectorRaw = inputRawString.match(/.{1,2}/g);

var dfFX6FR = require('./data_templates/dataFrame.FX6FR.json');
var cfCSU   = require('./data_templates/conversionFunctions.CSU.json');

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

    // save the resulting value back to the dataFrame object
    dfFX6FR.fields[fieldName].value = cfResult;
}
  



// frame fields configuration

// Positions relative to FX6FR frame; index starting with 0; 0x00 prefix byte. 
// Note: documentation - 2 = zero_based_index (this decoder)
// length in bytes

// AX25 HEADER 6.2 and 6.3



// frame processing 
// for (var i = 0; i < frame_str.length; i += 2) {
//   var byte = parseInt( "0x" + frame_str.substr(i, 2), 16 );
//   // var byte = "0x" + frame_str.substr(i, 2);
//   frame_bin.push(byte);
// }

// // console.log(frame_str); // prints the array
// // console.log(frame); // prints the array
// // console.log(a.join(" ")); // turn the array into a string of hex values
// // ​console.log(parseInt(a[1], 16));​ // parse a particular hex number to a decimal value

// frame.ax25_header_bin = frame_bin.slice(AX25HEADER_START,AX25HEADER_END);
// // hexLog(frame.ax25_header, "ax25_header");

// frame.ax25_header_target_bin = frame.ax25_header_bin.slice(0,5);
// // hexLog(frame.ax25_header_target, "ax25_header_target");

// frame.ax25_header_target = "";
// for (var i = 0; i<frame.ax25_header_target_bin.length; i++){
//   frame.ax25_header_target += String.fromCharCode( frame.ax25_header_target_bin[i]/2 );
// }

// frame.ax25_header_source_bin = frame.ax25_header_bin.slice(7,12);
// // hexLog(frame.ax25_header_source, "ax25_header_source");

// frame.ax25_header_source = "";
// for (var i = 0; i<frame.ax25_header_source_bin.length; i++){
//   frame.ax25_header_source += String.fromCharCode( frame.ax25_header_source_bin[i]/2 );
// }










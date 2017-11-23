// Misc Util functions 

function hexLog (array, name) {
  if (name){ console.log(name); }

  if (array) {
    var str = "";
    for (var i=0; i<array.length; i++){
      str += "0x" + toPaddedHexString( array[i] ) + " ";
    }
    console.log(str);
  } else {
    console.log("undefined");
  }
}


function toPaddedHexString(num, len) {
    str = num.toString(16);
    return "0".repeat(len - str.length) + str;
}


// get object methods
// console.log( Object.getOwnPropertyNames(Math) );

// Print object contents
// console.log(JSON.stringify( obj ));

// loop through object key values
// for (k of Object.getOwnPropertyNames(frame.fields) ){
//   console.log( k );
// }


// EJS card for loop:
  // <% for(var i=0; i<20; i++) {%>
  // <div class="card">
  // <div class="card-header">Card 1</div>
  // <div class="card-body">
  // <p class="card-text">Text for this card.</p>
  // </div>
  // </div>
  // <% } %>


// Return static content in a route 

// app.get('/test', auth.restrict, function(req, res){
//   res.send('Wahoo! restricted area, click to <a href="/logout">logout</a>');
// });


// measure elapsed time
// var tic = new Date();
// // stuff
// console.log("elapsed:", (new Date()-tic)/1000, "s");

sync_F4KJX = function() {
  
  $.ajax({
     type: 'GET',
     url:'http://.....com', 
     dataType: 'json',
     success: function(data){

       console.log("GET from CSU legacy server:", data);

       $.ajax({
        type: 'POST',
        url: '/api/receive/FX6FR',
        data: data,
        dataType: 'json',
        success: function(msg){
          console.log('POST to /api/receive/FX6FR:', msg);
          alert('Success! ' + msg.frames_processed + ' frames processed.' )
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('ERROR:', errorThrown);
        }
        
      });
        
     },
     error: function(jqXHR, textStatus, errorThrown) {
       console.log('POST to /api/receive/FX6FR error:', errorThrown);
     }

  });


}

var map;
  function initMap() {

     map = new google.maps.Map(document.getElementById('map'), {
        zoom:4,
        center:{lat:50.0755381,lng:14.4378005}
          });

        google.maps.event.addDomListener(document.getElementById('btn'), 'click', function() {
          randomBetween(); 
    })
    }


  function randomBetween() {
 
      var random = new google.maps.LatLng( (Math.random()*(85*2)-85), (Math.random()*(180*2)-180) );

      var marker = new google.maps.Marker({
        map: map,
        position: random
      });
      map.setCenter(marker.getPosition());
    }
      
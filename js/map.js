function ZoomControl(controlDiv, map) {

  // Creating divs & styles for custom zoom control
  controlDiv.style.padding = '5px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.marginRight = '10px';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.width = '38px'; 
  controlWrapper.style.height = '74px';
  controlDiv.appendChild(controlWrapper);

 // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '32px'; 
  zoomInButton.style.height = '32px';
  zoomInButton.style.marginBottom = '4px';
  zoomInButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  /* Change this to be the .png image you want to use */
  /*zoomInButton.style.backgroundImage = "url('../images/zoomIn.svg')";
  zoomInButton.style.backgroundRepeat = 'no-repeat' ;*/
  controlWrapper.appendChild(zoomInButton);
  
  var zoomInText = document.createElement('div');
  zoomInText.style.fontFamily = 'Arial,sans-serif';
  zoomInText.style.color = 'white';
  zoomInText.style.fontSize = '20px';
  zoomInText.style.paddingTop = '5px';
  zoomInText.innerHTML = '<strong>+</strong>';
  zoomInButton.appendChild(zoomInText);

  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '32px'; 
  zoomOutButton.style.height = '32px';
  zoomOutButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  /* Change this to be the .png image you want to use */
  /*zoomOutButton.style.backgroundImage = 'url("../images/zoomOut.svg")';
  zoomOutButton.style.backgroundRepeat = 'no-repeat' ;*/
  controlWrapper.appendChild(zoomOutButton);
  
  var zoomOutText = document.createElement('div');
  zoomOutText.style.fontFamily = 'Arial,sans-serif';
  zoomOutText.style.color = 'white';
  zoomOutText.style.fontSize = '26px';
  zoomOutText.style.paddingBottom = '4px';
  zoomOutText.innerHTML = '<strong>-</strong>';
  zoomOutButton.appendChild(zoomOutText);  // Setup the click event listener - zoomIn
  zoomInButton.addEventListener('click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  

}
function initialize() {


		var blackstyle = [{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"weight":0.5}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"weight":0.1}]},{"featureType":"landscape","stylers":[{"color":"#ffffff"}]},{"featureType":"water","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"elementType":"labels.text","stylers":[{"visibility":"on"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"elementType":"labels.icon","stylers":[{"visibility":"on"}]}];
		var retrostyle = [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}];
		var greenstyle = [{"stylers":[{"saturation":-100}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#0099dd"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#aadd55"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"on"}]},{}];
		var propiastyle = [{"featureType":"landscape","stylers":[{"visibility":"simplified"},{"color":"#2b3f57"},{"weight":0.1}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"weight":0.4},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"weight":1.3},{"color":"#FFFFFF"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":1.1}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":0.4}]},{},{"featureType":"road.highway","elementType":"labels","stylers":[{"weight":0.8},{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"color":"#ffffff"},{"weight":0.7}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"color":"#6c5b7b"}]},{"featureType":"water","stylers":[{"color":"#f3b191"}]},{"featureType":"transit.line","stylers":[{"visibility":"on"}]}];	

		var mapType1 = new google.maps.StyledMapType(blackstyle, {name: "Toner"});	
		var mapType2 = new google.maps.StyledMapType(retrostyle, {name: "Retro"});
		var mapType3 = new google.maps.StyledMapType(greenstyle, {name: "Green"});
		var mapType4 = new google.maps.StyledMapType(propiastyle, {name: "Red"});	
		
		
        var mapOptions = {
          center: { lat: 40.631336, lng: 22.942715},
          zoom: 12,
          panControl:false,
          zoomControl:false,
          mapTypeControl:true,
          scaleControl:false,
          streetViewControl:false,
          scrollwheel:false,
          overviewMapControl:true,
          rotateControl:true,
          styles: propiastyle,          
          mapTypeControlOptions: {
                          mapTypeIds: ['RETRO','GREEN','RED','BLACK'],
                          style:[google.maps.MapTypeControlStyle.HORIZONTAL_BAR]
                      },
              
              
                                   
        };
        
        
        var map = new google.maps.Map(document.getElementById('map'),mapOptions);
            
		 
        map.mapTypes.set('RETRO', mapType2);
        map.setMapTypeId('RETRO'); 
        map.mapTypes.set('GREEN', mapType3);
        map.setMapTypeId('GREEN');                  
		map.mapTypes.set('RED', mapType4);
        map.setMapTypeId('RED');
        map.mapTypes.set('BLACK', mapType1);
        map.setMapTypeId('BLACK');       
        
        
        
        
        /*if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = new google.maps.LatLng(position.coords.latitude,
                                               position.coords.longitude);
        
              var infowindow = new google.maps.InfoWindow({
                map: map,
                position: pos,
                content: 'Η θέση σας'
              });
        
              map.setCenter(pos);
            }, function() {
              handleNoGeolocation(true);
            });
          } else {
            // Browser doesn't support Geolocation
            handleNoGeolocation(false);
          }
        function handleNoGeolocation(errorFlag) {
          if (errorFlag) {
            var content = 'Error: The Geolocation service failed.';
          } else {
            var content = 'Error: Your browser doesn\'t support geolocation.';
          }
        
          var options = {
            map: map,
            position: new google.maps.LatLng(60, 105),
            content: content
          };
        
          var infowindow = new google.maps.InfoWindow(options);
          map.setCenter(options.position);
        }*/
        
		var center = new google.maps.LatLng(40.631336, 22.942715);
        
        
        
           setTimeout(function() {
              marker = new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: center,
                title: 'Your marker title'
            });
              	google.maps.event.addListener(marker, 'click', function() {
              	      map.setZoom(17);
              	      map.setCenter(marker.getPosition(center));
              	});
              	
              	google.maps.event.addListener(marker, 'click', toggleBounce);
              	
        	}, 2200);
        	            
            function toggleBounce() {
            
              if (marker.getAnimation() != null) {
                marker.setAnimation(null);
              } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
              }
            }
            var zoomControlDiv = document.createElement('div');
			var zoomControl = new ZoomControl(zoomControlDiv, map);
			
			zoomControlDiv.index = 1;
			map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(zoomControlDiv);
      }
// Define initMap function
function initMap() {
    // Move your map initialization code here
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    // Rest of your map setup code
}

// Make initMap globally available
window.initMap = initMap;

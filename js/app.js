function initMap() {
  var uluru = {
    lat: -25.363,
    lng: 131.044
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
$('button').on('click', function() {
  function find() {
    var output = $('#map');
    if (navigator.geolocation) {
      output.html('<p>Tu navegador soporta Geolocalizacion</p>');
    } else {
      output.html('<p>Tu navegador NO soporta Geolocalizacion</p>');
    }
    function localizacion(posicion) {
      var latitude = posicion.coords.latitude;
      var longitude = posicion.coords.longitude;
      output.html('<p>latitud' + latitude + '<br>Longitud' + longitude + '</p>');
    }
    function error() {
      output.html('<p>No se pudo obtener tu ubicacion</p>');
    }
    navigator.geolocation.getCurrentPosition(localizacion, error);
  }
  find();
});

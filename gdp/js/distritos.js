function cargarDistritos(año)
{
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 20, lng: -103.644},
	scrollwheel: true,
	zoom: 8});

	map.data.loadGeoJson('json/DISTRITOS.json',{idPropertyName:'DISTRITO'});

	colorearDistritos(año);

	map.data.addListener('mouseover', function(event) {
		$("#test").text(event.feature.getId());
    	map.data.revertStyle();
    	map.data.overrideStyle(event.feature, {strokeWeight: 1.5, fillOpacity: 0.9});
  	});

	map.data.addListener('mouseout', function(event) {
		map.data.revertStyle();
	});

	map.data.addListener('click', function(event) {
		map.panTo(event.latLng);
		var distrito = parseInt(event.feature.getId().substring(9,11));
		seleccion['id'] = distrito;
		obtenerResultadosDistritos(distrito, año);
		obtenerComentarios(distrito, año, seleccion['nivel']);
	});
}

function colorearDistritos(año){
	$.ajax({
		url: 'php/colorDistritos.php',
		type: 'post',
		data: {año},
		dataType: 'json',
		success: function (result) {
			map.data.setStyle(function(feature) {
		    	var distrito = parseInt(feature.getId().substring(9,11)); //DISTRITO 01
		    	var color = 'white';
		    	for(i = 0; i <= 19; i++){
		    		if(result[i][0] == distrito){
		    			color = o_colorespartidos[result[i][1].trim()];
		    			break;
		    		}
		    	}
		    	return {
		      		fillColor: color,
		      		fillOpacity: 0.6,
		      		strokeWeight: 0.5
		    	};
			});
		}
	});
}

function obtenerResultadosDistritos(distrito, año){
	$.ajax({
		url: 'php/resultadosDistritos.php',
		type: 'post',
		data: {distrito, año},
		dataType: 'text',
		success: function (result) {
			graficar(result);
			llenarTabla(result);
		}
	});
}
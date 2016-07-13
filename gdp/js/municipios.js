function cargarMunicipios(año)
{
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 20, lng: -103.644},
	scrollwheel: true,
	zoom: 8});

	map.data.loadGeoJson('json/MUNICIPIOS.json',{idPropertyName:'NOMBRE'});

	colorearMunicipios(año);

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
		var municipio = normalizar(event.feature.getId());
		seleccion['id'] = municipio;
		obtenerResultadosMunicipios(municipio, año);
		obtenerComentarios(municipio, año, seleccion['nivel']);
	});
}

function obtenerResultadosMunicipios(municipio, año){
	$.ajax({
		url: 'php/resultadosMunicipios.php',
		type: 'post',
		data: {municipio, año},
		dataType: 'json',
		success: function (result) {
			graficar(result);
			llenarTabla(result);
		}
	});
}

function colorearMunicipios(año){
	$.ajax({
		url: 'php/colorMunicipios.php',
		type: 'post',
		data: {año},
		dataType: 'json',
		success: function (result) {
			map.data.setStyle(function(feature) {
		    	var municipio = normalizar(feature.getId());
		    	var color = 'white';
		    	for(i = 0; i <= 124; i++){
		    		if(result[i][0] == municipio){
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
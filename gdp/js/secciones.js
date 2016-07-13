function cargarSecciones(año, geojson)
{
	map = new google.maps.Map(document.getElementById('map'), {scrollwheel: true});

	switch(geojson){
		case 'gdl':
			map.data.loadGeoJson('json/SECCIONES_GDL.json',{idPropertyName:'SECCION'});
			map.setZoom(12);
			map.panTo({lat: 20.666, lng: -103.350});
			break;
		case '01':
			map.data.loadGeoJson('json/SECCIONES/D1S.json',{idPropertyName:'SECCION'});
			map.setZoom(8);
			map.setCenter({lat: 21.492, lng: -103.717});
			break;
		case '02':
			map.data.loadGeoJson('json/SECCIONES/D2S.json',{idPropertyName:'SECCION'});
			map.setZoom(9);
			map.setCenter({lat: 21.561, lng: -102.169});
			break;
		case '03':
			map.data.loadGeoJson('json/SECCIONES/D3S.json',{idPropertyName:'SECCION'});
			map.setZoom(9);
			map.setCenter({lat: 21.007, lng: -102.485});	
			break;	
		case '04':
			map.data.loadGeoJson('json/SECCIONES/D4S.json',{idPropertyName:'SECCION'});
			map.setZoom(11);
			map.setCenter({lat: 20.830, lng: -103.395});	
			break;
		case '05':
			map.data.loadGeoJson('json/SECCIONES/D5S.json',{idPropertyName:'SECCION'});
			map.setZoom(8);
			map.setCenter({lat: 20.231, lng: -104.818});	
			break;
		case '06':
			map.data.loadGeoJson('json/SECCIONES/D6S.json',{idPropertyName:'SECCION'});
			map.setZoom(10);
			map.setCenter({lat: 20.761, lng: -103.514});
			break;	
		case '07':
			map.data.loadGeoJson('json/SECCIONES/D7S.json',{idPropertyName:'SECCION'});
			map.setZoom(11);
			map.setCenter({lat: 20.506, lng: -103.399});	
			break;
		case '10':
			map.data.loadGeoJson('json/SECCIONES/D10S.json',{idPropertyName:'SECCION'});
			map.setZoom(12);
			map.setCenter({lat: 20.676, lng: -103.421});	
			break;
		case '16':
			map.data.loadGeoJson('json/SECCIONES/D16S.json',{idPropertyName:'SECCION'});
			map.setZoom(12);
			map.setCenter({lat: 20.616, lng: -103.310});	
			break;
		case '17':
			map.data.loadGeoJson('json/SECCIONES/D17S.json',{idPropertyName:'SECCION'});
			map.setZoom(9);
			map.setCenter({lat: 20.192, lng: -103.274});	
			break;	
		case '18':
			map.data.loadGeoJson('json/SECCIONES/D18S.json',{idPropertyName:'SECCION'});
			map.setZoom(9);
			map.setCenter({lat: 20.040, lng: -104.078});
			break;	
		case '19':
			map.data.loadGeoJson('json/SECCIONES/D19S.json',{idPropertyName:'SECCION'});
			map.setZoom(9);
			map.setCenter({lat: 19.503, lng: -103.313});
			break;	
		case '20':
			map.data.loadGeoJson('json/SECCIONES/D20S.json',{idPropertyName:'SECCION'});
			map.setZoom(12);
			map.setCenter({lat: 20.627, lng: -103.228});
			break;
		default:
			map.data.loadGeoJson('json/SECCIONES_GDL.json',{idPropertyName:'SECCION'});
			map.setZoom(12);
			map.panTo({lat: 20.666, lng: -103.350});
	}

	colorearSecciones(año);

	map.data.addListener('mouseover', function(event) {
		var n = event.feature.getId();
		$("#test").text(n);
    	map.data.revertStyle();
    	map.data.overrideStyle(event.feature, {strokeWeight: 1.5, fillOpacity: 0.9});
  	});

	map.data.addListener('mouseout', function(event) {
		map.data.revertStyle();
	});

	map.data.addListener('click', function(event) {
		map.panTo(event.latLng);
		var seccion = event.feature.getId();
		seleccion['id'] = seccion;
		obtenerResultadosSecciones(seccion, año);
		obtenerComentarios(seccion, año, seleccion['nivel']);
	});
}

function colorearSecciones(año){
	$.ajax({
		url: 'php/colorSecciones.php',
		type: 'post',
		data: {año},
		dataType: 'json',
		success: function (result) {
			map.data.setStyle(function(feature) {
		    	var seccion = feature.getId();
		    	var color = 'gray';
		    	for(i = 0; i <= 983; i++){
		    		if(result[i][0] == seccion){
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

function obtenerResultadosSecciones(seccion, año){
	$.ajax({
		url: 'php/resultadosSecciones.php',
		type: 'post',
		data: {seccion, año},
		dataType: 'json',
		success: function (result) {
			graficar(result);
			llenarTabla(result);
		}
	});
}
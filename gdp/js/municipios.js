function cargarMunicipios(año)
{
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 20, lng: -103.644},
	scrollwheel: true,
	zoom: 8});

	map.data.loadGeoJson('json/MUNICIPIOS.json',{idPropertyName:'NOMBRE'});

	map.data.addListener('mouseover', function(event) {
		var n = event.feature.getId();
		$("#test").text(n);
    	map.data.revertStyle();
    	map.data.overrideStyle(event.feature, {strokeWeight: 1.5, fillOpacity: 0.5});
  	});

	map.data.addListener('mouseout', function(event) {
		map.data.revertStyle();
	});

	map.data.addListener('click', function(event) {
		map.panTo(event.latLng);
		if(año == 'g2012')
			$("#result").text("No hay detalles de municipios 2012");
		else{
			var municipio = normalizar(event.feature.getId());
			$.ajax({
				url: 'php/queryResultadosMunicipios.php',
				type: 'post',
				data: {año, municipio},
				dataType: 'html',
				success: function (result) {
					console.log(result);
					$("#result").html(result);
				}
			});
		}
	});

	$.ajax({
		url: 'php/queryColorMunicipios.php',
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
		      		strokeWeight: 0.5
		    	};
			});
		}
	});
}
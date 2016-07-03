function cargarSecciones(año)
{
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 20.666, lng: -103.350},
	scrollwheel: true,
	zoom: 12});

	map.data.loadGeoJson('json/SECCIONES_GDL.json',{idPropertyName:'SECCION'});

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
		var seccion = event.feature.getId();
		$.ajax({
			url: 'php/queryResultadosSecciones.php',
			type: 'post',
			data: {año, seccion},
			dataType: 'html',
			success: function (result) {
				console.log(result);
				$("#result").html(result);
			}
		});
	});

	$.ajax({
		url: 'php/queryColorSecciones.php',
		type: 'post',
		data: {año},
		dataType: 'json',
		success: function (result) {
			map.data.setStyle(function(feature) {
		    	var seccion = feature.getId();
		    	var color = 'white';
		    	for(i = 0; i <= 983; i++){
		    		if(result[i][0] == seccion){
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
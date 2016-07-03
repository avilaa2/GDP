function cargarDistritos(año)
{
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 20, lng: -103.644},
	scrollwheel: true,
	zoom: 8});

	map.data.loadGeoJson('json/DISTRITOS.json',{idPropertyName:'DISTRITO'});

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
		$("#result").text("No hay detalles de distritos");
	});

	$.ajax({
		url: 'php/queryColorDistritos.php',
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
		      		strokeWeight: 0.5
		    	};
			});
		}
	});
}
var o_colorespartidos={"PAN":"#1663aa","PRI":"#f9283a","PRD":"#feea26","PT":"#e44b73","PVEM":"#4fbe37","MC":"#fe990d","PANAL":"#28a68e","NA":"#28a68e","MORENA":"#8a0015","ES":"#81228c","H":"#f99acb","PAN-PRD":"#feea26","PRD-PAN":"#feea26","PRI-PVEM":"#f9283a","JFSP":"#000000","JOSM":"#000000","JZC":"#000000","GCP":"#000000","undefined":"#aaaaaa"};

function initialize()
{
	var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 20, lng: -103.644},
	scrollwheel: true,
	zoom: 8});

	map.data.loadGeoJson('json/MUNICIPIOS.json');

	map.data.addListener('mouseover', function(event) {
		var n = event.feature.getProperty('NOMBRE');
		console.log(n);
		$("#test").text(n);
    	map.data.revertStyle();
    	map.data.overrideStyle(event.feature, {strokeWeight: 3});
  	});

	map.data.addListener('mouseout', function(event) {
		map.data.revertStyle();
	});

	$.ajax({
		url: 'php/queryColorMunicipios.php',
		type: 'post',
		data: {"año":"g2015"},
		dataType: 'json',
		success: function (result) {
			map.data.setStyle(function(feature) {
		    	var municipio = normalizar(feature.getProperty('NOMBRE'));
		    	var color = 'white';
		    	for(i = 0; i <= 124; i++){
		    		if(result[i][0] == municipio){
		    			color = o_colorespartidos[result[i][1].trim()];
		    		}
		    	}
		    	return {
		      		fillColor: color,
		      		strokeWeight: 1
		    	};
			});
		}
	});
}

function normalizar(str){
	str = str.split('Á').join('A');
	str = str.split('É').join('E');
	str = str.split('Í').join('I');
	str = str.split('Ó').join('O');
	str = str.split('Ú').join('U');
	str = str.split('Ñ').join('N');
	return str;
}
var o_colorespartidos={"PAN":"#1663aa","PRI":"#f9283a","PRD":"#feea26","PT":"#e44b73","PVEM":"#4fbe37","MC":"#fe990d","PANAL":"#28a68e","NA":"#28a68e","MORENA":"#8a0015","ES":"#81228c","H":"#f99acb","PAN-PRD":"#feea26","PRD-PAN":"#feea26","PRI-PVEM":"#f9283a","PT-MC":"#fe990d","JFSP":"#000000","JOSM":"#000000","JZC":"#000000","GCP":"#000000","undefined":"#aaaaaa"};
var map;
var nivel;
var año;

$(document).ready(function(){
	$("#actualizar").click(function(){
		nivel = $("[name=nivel]").val();
		año = $("[name=año]").val();
		switch(nivel){
			case "distritos":
				cargarDistritos(año);
				break;
			case "municipios":
				cargarMunicipios(año);
				break;
			case "secciones":
				cargarSecciones(año);
				break;
			default:
				cargarMunicipios(año);
		}
	});
	$("#actualizar").click();
	$("#buscar").click(function() {
		var criterio = $("#busqueda").val().toUpperCase();
		var feature = map.data.getFeatureById(criterio);
		if(feature == undefined){
			var coincidencias = false;
			map.data.forEach(function(feature_){
				var normalizado = normalizar(feature_.getId());
				if(criterio == normalizado || normalizado.includes(criterio)){
					map.data.overrideStyle(feature_, {strokeWeight: 3});
					coincidencias = true;
				}
			});
			if(coincidencias == false){
				alert("No se ha encontrado ninguna coincidencia");
			}
		}
		else{
			map.data.overrideStyle(feature, {strokeWeight: 3});
		}
	});
});

function normalizar(str){
	if(typeof str == 'number')
		return str.toString();
	else{
		str = str.split('Á').join('A');
		str = str.split('É').join('E');
		str = str.split('Í').join('I');
		str = str.split('Ó').join('O');
		str = str.split('Ú').join('U');
		str = str.split('Ñ').join('N');
		return str;
	}
}
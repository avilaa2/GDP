var o_colorespartidos={"PAN":"#1663aa","PRI":"#f9283a","PRD":"#feea26","PT":"#e44b73","PVEM":"#4fbe37","MC":"#fe990d","PANAL":"#28a68e","NA":"#28a68e","MORENA":"#8a0015","ES":"#81228c","H":"#f99acb","PAN-PRD":"#feea26","PRD-PAN":"#feea26","PRI-PVEM":"#f9283a","PT-MC":"#fe990d","JFSP":"#000000","JOSM":"#000000","JZC":"#000000","GCP":"#000000","undefined":"#aaaaaa"};
var seleccion = {"nivel":"municipios","año":"2015","id":"undefined"};
var map;

$(document).ready(function(){
	$("#actualizar").click(function(){
		actualizarMapa();
	})
    .click();
    $('#map').mouseleave(function() {
        $('#test').text("SELECCION ACTUAL");
    });
	$("#insertarComentarios").click(function(){
		insertarComentario();
	});
	$("#buscar").click(function() {
		buscar();
	});
    $("[name=nivel]").change(function(){
        var dis = $("[name=distrito");
        $(this).val() == 'secciones'? dis.show() : dis.hide();
    });
    $("[name=distrito").hide();
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

function actualizarMapa(){
    seleccion['nivel'] = $("[name=nivel]").val();
    seleccion['año'] = $("[name=año]").val();
    seleccion['id'] = 'undefined';
    switch(seleccion['nivel']){
        case "distritos":
            cargarDistritos(seleccion['año']);
            break;
        case "municipios":
            cargarMunicipios(seleccion['año']);
            break;
        case "secciones_gdl":
            cargarSecciones(seleccion['año'], 'gdl');
            break;
        case "secciones":
            cargarSecciones(seleccion['año'], $("[name=distrito]").val());
            break;
        default:
            cargarMunicipios(seleccion['año']);
    }
}

function buscar(){
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
}

function graficar(json) {
    $('#chart_container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: seleccion['id']
        },
        subtitle: {
            text: json['ganador']
        },
        xAxis: {
            categories: [
                seleccion['año']
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Votos'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} votos</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'PRI',
            color: o_colorespartidos['PRI'],
            data: [parseInt(json['pri'])]
        },{
        	name: 'PAN',
        	color: o_colorespartidos['PAN'],
        	data: [parseInt(json['pan'])]
        },{
        	name: 'MC',
        	color: o_colorespartidos['MC'],
        	data: [parseInt(json['mc'])]
        },{
        	name: 'PRD',
        	color: o_colorespartidos['PRD'],
        	data: [parseInt(json['prd'])]
        },{
        	name: 'PT',
        	color: o_colorespartidos['PT'],
        	data: [parseInt(json['pt'])]
        },{
        	name: 'MORENA',
        	color: o_colorespartidos['MORENA'],
        	data: [parseInt(json['morena'])]
        },{
        	name: 'H',
        	color: o_colorespartidos['H'],
        	data: [parseInt(json['h'])]
        },{
        	name: 'PANAL',
        	color: o_colorespartidos['NA'],
        	data: [parseInt(json['na'])]
        },{
        	name: 'ES',
        	color: o_colorespartidos['ES'],
        	data: [parseInt(json['es'])]
        },{
        	name: 'PVEM',
        	color: o_colorespartidos['PVEM'],
        	data: [parseInt(json['pvem'])]
        },{
        	name: 'PRI-PVEM',
        	color: o_colorespartidos['PRI-PVEM'],
        	data: [parseInt(json['pri_pvem'])]
        },{
        	name: 'PAN-PRD',
        	color: o_colorespartidos['PAN-PRD'],
        	data: [parseInt(json['pan_prd'])]
        },{
        	name: 'PT-MC',
        	color: o_colorespartidos['PT-MC'],
        	data: [parseInt(json['pt_mc'])]
        },{
        	name: 'IND.',
        	color: o_colorespartidos['undefined'],
        	data: [parseInt(json['independiente'])]
        }]
    });
}

function llenarTabla(json){
    $('#tabla tr').empty();
    for(var key in json){
        $('#tabla').append(
            '<tr><td>'+ key + '</td><td>' + json[key] + '</td></tr>');
    }
}

function llenarNotas(array){
    $('#notas').empty();
    for(var i in array){
        var nota = array[i];
        $('#notas').append('<li class="left clearfix">'
                        +'<div class="chat-body clearfix"><div class="header"><strong class="primary-font">'+ nota['asunto'] 
                        +'</strong><small class="pull-right text-muted"><i class="fa fa-clock-o fa-fw"></i>'+ nota['fecha']
                        +'</small></div><p>'+ nota['comentario'] +'</p><i class="fa fa-trash-o" aria-hidden="true"></i></div></li>');
    }
     $(".fa-trash-o").bind("click",eliminarComentario);
}

function obtenerComentarios(id, año, nivel){
    $.ajax({
        url: 'php/obtenerComentarios.php',
        type: 'post',
        data: {id, año, nivel},
        dataType: 'json',
        success: function (result) {
            llenarNotas(result);
        }
    });
}

function insertarComentario(){
    var asunto = $("#asunto").val();
    var comentario = $("#comentario").val();
    $("#asunto").val('');
    $("#comentario").val('');
    $.ajax({
        url: 'php/insertarComentarios.php',
        type: 'post',
        data: {feature_id:seleccion['id'], nivel:seleccion['nivel'], año:seleccion['año'], asunto, comentario},
        dataType: 'text',
        success: function (result) {
            if(result == true){
                obtenerComentarios(seleccion['id'], seleccion['año'], seleccion['nivel']);
            }
        }
    });
}

function eliminarComentario(){
    var nota = $(this);
    $('#modal').modal();
    $('#btnAceptar').click(function(event) {
        var li = nota.parent().parent();
        var comentario = li.find("p").contents().text();
        var fecha = li.find("small").contents().text();
        $.ajax({
            url: 'php/removerComentario.php',
            type: 'post',
            data: {comentario, fecha},
            dataType: 'text',
            success: function (result) {
                if(result == true)
                    li.remove();
            }
        });
    });
}

function limpiarContenedores(){
    $('#notas').empty();
    $('#tabla tr').empty();
    $('#chart_container').empty();
}
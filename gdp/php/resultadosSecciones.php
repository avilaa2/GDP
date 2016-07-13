<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "gdp";
    $seccion = $_POST['seccion'];
    $año = $_POST['año'];

    $con = mysqli_connect($servername, $username, $password, $dbname);
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    switch($año){
    	case "2012":
    		$tabla = "seccionesgdl2012";
    		break;
    	case "2015":
    		$tabla = "seccionesgdl2015";
    		break;
    	default:
    		$tabla = "seccionesgdl2015";
    }

    $sql="SELECT * FROM $tabla WHERE seccion = '$seccion'";
    $result = mysqli_query($con,$sql);

    if($result == false || $result->num_rows == 0)
        $resultados = (object)[];
    else
        $resultados = mysqli_fetch_assoc($result);

    $js_obj = json_encode($resultados);
    echo $js_obj;

    if($result)
        mysqli_free_result($result);

    mysqli_close($con);
?>
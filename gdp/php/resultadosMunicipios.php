<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "gdp";
    $municipio = $_POST['municipio'];
    $año = $_POST['año'];

    $con = mysqli_connect($servername, $username, $password, $dbname);
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    switch($año){
    	case "2012":
    		$tabla = "municipios2012";
    		break;
    	case "2015":
    		$tabla = "municipios2015";
    		break;
    	default:
    		$tabla = "municipios2015";
    }

    $sql="SELECT * FROM $tabla WHERE municipio = '$municipio'";
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
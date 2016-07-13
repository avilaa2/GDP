<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "gdp";

	$con = mysqli_connect($servername, $username, $password, $dbname);
	if (!$con) {
	    die("Connection failed: " . mysqli_connect_error());
	}

	switch($_POST['año']){
		case "2012":
			$q = "seccionesgdl2012";
			break;
		case "2015":
			$q = "seccionesgdl2015";
			break;
		default:
			$q = "seccionesgdl2015";
	}

	$sql="SELECT seccion, ganador FROM $q";
	$result = mysqli_query($con,$sql);

	$array = mysqli_fetch_all($result);
	$js_array = json_encode($array);
	echo $js_array;
	mysqli_close($con);
?>
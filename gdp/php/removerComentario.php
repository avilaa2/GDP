<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "gdp";

	$comentario = $_POST['comentario'];
	$fecha = $_POST['fecha'];

	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "DELETE FROM observaciones WHERE comentario = '$comentario' and fecha = '$fecha'";

	if (mysqli_query($conn, $sql)) {
	    echo true;
	} 
	else {
	    echo "Error: " . $sql . mysqli_error($conn);
	}

	mysqli_close($conn);
?>
<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "gdp";

	$feature_id = $_POST['feature_id'];
	$nivel = $_POST['nivel'];
	$año = $_POST['año'];
	$asunto = $_POST['asunto'];
	$comentario = $_POST['comentario'];

	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "INSERT INTO observaciones VALUES ('$feature_id', '$nivel', '$año', '$asunto', '$comentario', NOW())";

	if (mysqli_query($conn, $sql)) {
	    echo true;
	} 
	else {
	    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);
?>
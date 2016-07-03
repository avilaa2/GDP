<?php
switch($_POST['año']){
	case "g2012":
		$q = "seccionesgdl2012";
		break;
	case "g2015":
		$q = "seccionesgdl2015";
		break;
	default:
		$q = "seccionesgdl2015";
}

$con = mysqli_connect('localhost','root','','gdp');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"gdp");
$sql="SELECT seccion, ganador FROM $q";
$result = mysqli_query($con,$sql);

$array = mysqli_fetch_all($result);
$js_array = json_encode($array);
echo $js_array;
mysqli_close($con);
?>
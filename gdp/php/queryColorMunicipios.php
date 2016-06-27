<?php
$q = $_POST['año'];
//$q = 'g2012';

$con = mysqli_connect('localhost','root','','gdp');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"gdp");
$sql="SELECT municipio, ".$q." FROM gdp.municipios";
$result = mysqli_query($con,$sql);

$array = mysqli_fetch_all($result);
$js_array = json_encode($array);
echo $js_array;
mysqli_close($con);
?>
<?php
$p = $_POST['seccion'];

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

$sql="SELECT * FROM $q WHERE seccion = '$p'";
$result = mysqli_query($con,$sql);

//OBJETO JSON
//$obj = mysqli_fetch_assoc($result);
//$js_obj = json_encode($obj);
//echo $js_obj;
/*
//TABLA HORIZONTAL
echo("<table>");
$first_row = true;
while ($row = mysqli_fetch_assoc($result)) {
    if ($first_row) {
        $first_row = false;
        echo '<tr>';
        foreach($row as $key => $field) {
            echo '<th>' . htmlspecialchars($key) . '</th>';
        }
        echo '</tr>';
    }
    echo '<tr>';
    foreach($row as $key => $field) {
        echo '<td>' . htmlspecialchars($field) . '</td>';
    }
    echo '</tr>';
}
echo("</table>");*/

//TABLA VERTICAL
echo("<table class='table table-condensed'>");
while ($row = mysqli_fetch_assoc($result)) {
    foreach($row as $key => $field) {
    	echo '<tr>';
        echo '<td>' . htmlspecialchars($key) . '</td>';
        echo '<td>' . htmlspecialchars($field) . '</td>';
        echo '</tr>';
    }
}
echo("</table>");

echo(mysqli_free_result($result));

mysqli_close($con);
?>
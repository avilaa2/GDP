<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "gdp";
    $id = $_POST['id'];
    $año = $_POST['año'];
    $nivel = $_POST['nivel'];

    $con = mysqli_connect($servername, $username, $password, $dbname);
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql="SELECT * FROM observaciones WHERE feature_id = '$id' and nivel = '$nivel' and year = '$año'" ;
    $result = mysqli_query($con,$sql);
 
    $comentarios = array();
    while($row = mysqli_fetch_assoc($result)){
        $comentarios[] = $row;
    }

    $js_array = json_encode($comentarios);
    echo $js_array;
   
    if($result)
        mysqli_free_result($result);

    mysqli_close($con);
?>
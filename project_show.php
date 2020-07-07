<?php

    include_once("project.class.php");
    include_once("project_show.js");

    $index = $_GET["index"];

    $obj_project = new Project;

    $data = $obj_project -> getProject($index);

    $arr_project = explode(";",$data);
    
    $name = (string) $arr_project[0];
    $database = $arr_project[1];
    $host = $arr_project[2];
    $port = $arr_project[3];
    $user = $arr_project[4];
    $password = $arr_project[5];

    echo($index);

    echo($data);

    


    echo("<script>project_complete(\"$host\",\"$database\",\"$port\",\"$user\",\"$password\");</script>");

    




?>
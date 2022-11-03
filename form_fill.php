<?php

     $id=$_GET["id"];
     $table=$_GET["table"];

     include("includes/connection.class.php");
     
     $obj_connection = new Connection();

     $conn = $obj_connection -> getConnection();
     
     $res = $conn -> query("describe $table");

     while ($line = $res -> FETCH(PDO::FETCH_ASSOC))
     {
            
        $field = $line_describe["Field"];

        if ($field != "status"){

            $input_id = $table_$field; 

            $value = $obj_connection -> getValue($table,$field,$id);

            echo("<script>window.parent.document.getElementById('".$input_id."').value = \"$value\"</script>");

        }      
                
     }         

?>
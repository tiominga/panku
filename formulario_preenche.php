<html>

    <head>

      <script>
        function fill(field,value){

              window.parent.document.getElementById(field).value = value;

        }    
      </script>

    </head>

</html>

<?php
ini_set('display_errors', '1');
include_once("connection.class.php");
  

$table=$_GET["tabela"];
$prefix=$_GET["prefixo"]; 
$id=$_GET["id"];

$obj_connection = new Connection();

//describe to show all table fields
$res = $obj_connection -> query("describe $table");

  while ($line= $res -> FETCH(PDO::FETCH_ASSOC)){

    $field=$line["Field"]; //field_name

    $component=$prefix.$field; //component name

    $field_type=$line["Type"];   

      if (substr_count($field_type,'varchar')>0)
      {
                        
        if ($id==0) //se for para LIMPAAAAR
        {   

          $field_value = $obj_connection ->  getValue("$table","$field",$id);

          $component=$prefix.$field;
      
          echo("<script>fill(\"$component\",\"$field_value\");</script>");

        }

      }

    }
?>
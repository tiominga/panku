<?php       
       
       
       $obj_query = new Connection($db,$host,$port,$user,$password);
       
       $conn = $obj_query -> getConnection();

       $res = $conn -> query("show tables from $db");

       $tables = "";
       $top = 0;
       
       $html_table = "<table class='table table-sm table-hover table-dark'><tr>"; 

       while ($linha = $res -> fetch(PDO::FETCH_BOTH)) 
       {
        
            $table_name = $linha[0];

            $key = 0;
            $res2 = $conn -> query("show columns from $table_name where `Key` = 'PRI'");
            while ($linha2 = $res2 -> fetch(PDO::FETCH_BOTH))
            {

                $key = $linha2[0];

            } 
            
            $html_table .= "<tr><td onclick=left_popup('".$table_name."','".$key."'); style='width:20%; cursor:pointer'><font class='font_m'>$table_name</font></td></tr>";
           
            //$tables.="<div onclick=left_popup('".$table_name."','".$key."'); class='grid_left' style='top:$top%'><font class='font_m'>$table_name</font></div>";

            $top = $top + 4;
        }

       $html_table .="</tr>";
       
       echo("<script>connect_show_tables(\"$html_table\");</script>");
?>       
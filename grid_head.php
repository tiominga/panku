<?php

    //run all array with fields name and make the head
        $columns = "<div class='table-responsive'><table class='table table-sm  table-hover table-dark'><thead><tr>";
        $left = 0;
        
        for ($i=0;$i < $column_count;$i++)
        {
            
            $column_name = substr($arr_columns[$i],0,14);
            

            if (strlen($column_name)<=4){

                $column_name .= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

            }


            $columns .= "<th style='width:20%'><font class='font_m'>$column_name</font></th>";             //$columns .= "<div style='position:absolute;width:11%; height:5%; background-color:silver; left:".$left."%; top:0%; border: 0.5px solid'><font class='font_m'>$column_name</font></div>";
            $left = $left + 11;

        }

        $columns .="</tr></thead><tbody>";


?>
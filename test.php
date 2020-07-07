<?php
       include_once("files.class.php");

       $obj_file_projects = new File("conections.txt");

       $nlines = $obj_file_projects -> getNlines();

       $content = $obj_file_projects -> getContent();

       $arr_conections = explode("<br>",$content);

       $quant = count($arr_conections)-2;

       $option = "";

       for ($i=0;$i<=$quant;$i++){

         $arr_option = explode(";",$arr_conections[$i]);

         $option .= "<option value=\"".$arr_option[0]."\">".$arr_option[0]."</option>";




       }


       echo"

        <select name=\"select_project\">

            $option


        </select>


       ";
       


?>
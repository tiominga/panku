<?php
           
            $top = 0;  
            $core="";  
            $line="";
            $general=0;

            if ($show_result == 100) //php propertyes
            {
               $prefix = "private $";
               $suffix ="; <br>";  
               $general = 1;    
            }    

            if ($show_result == 101) //php get
            {
               
               for ($i=0;$i < sizeof($arr_columns);$i++)
                {

                    $line = "$".$arr_columns[$i]." = $"."_GET[".'\"'.$arr_columns[$i].'\"'."]; <br>";

                    $core .= $line;

                    $top=$top+5;

                }

            }   


            if ($show_result == 102) //php POST
            {
               
               for ($i=0;$i < sizeof($arr_columns);$i++)
                {

                    $line = "$".$arr_columns[$i]." = $"."_POST[".'\"'.$arr_columns[$i].'\"'."]; <br>";

                    $core .= $line;

                    $top=$top+5;

                }


                

            }   

            if ($show_result == 103) //php __set
            {
               
               for ($i=0;$i < sizeof($arr_columns);$i++)
                {

                    $line = "$"."obj_$table_name -> __set(".'\"'.$arr_columns[$i].'\",\"$'.$arr_columns[$i].'\")'."; <br>";

                    $core .= $line;

                    $top=$top+5;

                }


                

            }   

            if ($show_result == 104) //php_set_properties
            {
               
               for ($i=0;$i < sizeof($arr_columns);$i++)
                {
                   
                    $line = "$"."this -> ".$arr_columns[$i]."= "."$"."row[".'\"'.$arr_columns[$i].'\"]<br>';

                    $core .= $line;

                    $top=$top+5;

                }


                

            }   

            if ($show_result == 105) //php_properties_to_var
            {
               
               for ($i=0;$i < sizeof($arr_columns);$i++)
                {
                    
                    $line = "$".$arr_columns[$i]." = "."$"."this ->".$arr_columns[$i].";<br>";

                    $core .= $line;

                    $top=$top+5;

                }


                

            }   

            if ($show_result == 106) //mysql insert
            {

               $line = "insert into $table_name (";
               $line2= " values ("; 
               
               for ($i=0;$i < sizeof($arr_columns);$i++)
                {
                    
                    $line .= $arr_columns[$i].",";
                    $line2 .= '\"$'.$arr_columns[$i].'\"'.",";

                    

                    $top=$top+5;

                }

                $line = $line.")".$line2.");";

                $line = str_replace(",)",")",$line);

                $core = $line;

            }   

            if ($show_result == 107) //mysql update
            {

               $line = "update $table_name set ";
               
               
               for ($i=0;$i < sizeof($arr_columns);$i++)
                {
                    
                    $line .= $arr_columns[$i]."=".'\"$'.$arr_columns[$i].'\"'.",";
                    
                    $top=$top+5;

                }

                $line .=" where $key =".'$'.$key;

                
                $line = str_replace(", where"," where",$line);

                $core = $line;

            }   


            print_r("aaaa $arr_columns");

                 


               
                if ($general == 1)
                {
                    for ($i=0;$i < $column_count;$i++)            
                    {
                       
                        $line = $prefix.$arr_columns[$i].$suffix;

                        $core .= $line;

                        $top=$top+5;

                    }
                }    

               

           

            echo("<script>

                    
              window.parent.document.getElementById('dv_grid').innerHTML = \"$core\";
              

                    
                    
                </script>");
?>                
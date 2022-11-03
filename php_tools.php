<?php //included in connect.php
        
            include_once("php_tools.js");

            function file_to_model($path){

                $file = fopen ($path, 'r');
                // read the file content
                while(!feof($file))
                {

                    $line = fgets($file, 1024);

                    $have = strpos( $line, "{" );

                    if ($have == false){

                        $have = strpos($line, "{" );

                    }    

                    if ($have == true){

                        $line = $line."<br>";

                    }  
                    else
                    {  

                        $line = "&nbsp&nbsp".$line."<br>";     

                    }

                    $model .=  $line;
                }
                    return $model;
            }
           
            $top = 0;  
            $core="";  
            $line="";
            $general=0;
            $type=1;

            if ($show_result == 100) //php propertyes
            {
               $prefix = "private $";
               $suffix ="; <br>";  
               $answer = "<br>public function __get("."$"."property"."){<br><br> &nbsp&nbsp&nbsp   return "."$"."this ->"."$"."property;<br><br>}";
               $answer .= "<br><br>public function __set("."$"."property,\$value"."){<br><br> &nbsp&nbsp&nbsp"."$"."this -> \$property = \$value;<br><br>}";
               $general = 1;

            }    

            if ($show_result == 101){ //php get
            
                $line = "$"."panku_describe_field"." = $"."_GET[".'\"'."panku_describe_field".'\"'."]; <br>";
              
            }   

            if ($show_result == 102){ //php POST
            
                    $line = "$"."panku_describe_field"." = $"."_POST[".'\"'."panku_describe_field".'\"'."]; <br>";

            }

            if ($show_result == 103){ //php __set
            
                    $line = "$"."obj_$table_name -> __set(".'\"'."panku_describe_field".'\",\"$'."panku_describe_field".'\")'."; <br>";

                }

            if ($show_result == 104){ //php_set_properties

                    $line = "$"."this -> "."panku_describe_field"."= "."$"."row[".'\"'."panku_describe_field".'\"];<br>';

                }

            if ($show_result == 105){ //php_properties_to_var
            
                    $line = "$"."panku_describe_field"." = "."$"."this ->"."panku_describe_field".";<br>";

            }   

            if ($show_result == 106){ //mysql insert
            
                $line = $table_name;
                $type = 2; 
              
            }   

            if ($show_result == 107) //mysql update
            {

                $line = "$table_name,$key";
                $type=3;

            }   

           
            if ($show_result == 108) //Magic Form
            {

                $nlines = $column_count / $answer;
                $points = $column_count % $answer;

                
                $fr_lines = "";
                $fr_cols = "";

                for ($i=0; $i<$answer; $i++){

                    $fr_cols .= "1fr ";

                }

                
                for ($i=0; $i<$nlines; $i++){

                    $fr_lines .= "1fr ";

                }


                $line = $table_name;

                $type = 4;

                $model = file_to_model('form_model.txt'); 

                echo("
               
                <textarea rows=10 cols=30 id='memo_aux_html'>$model</textarea> 
               

                <script>pass_html_model(\"$table_name\",\"$fr_cols\",\"$fr_lines\");</script>
               
               
              ");

            } 
            
            

            if ($show_result == 109){ //connect
                
               $line = "see panku.js";

               $model = file_to_model('db_model.txt');               
             
                $type=5;

               echo("
               
                <textarea rows=10 cols=30 id='memo_aux'>$model</textarea> 

                <script>pass_db_model()</script>
               
              ");

             
            }   
            
            
            if ($show_result == 110) //window
            {

                $window_name = $answer;
                

                $line = $table_name;

                $type = 6;

                $model = file_to_model('window_model.txt'); 

                echo("
               
                <textarea rows=10 cols=30 id='memo_aux_window'>$model</textarea> 
               

                <script>pass_window_model(\"$table_name\",\"$window_name\");</script>
               
               
              ");

            } 

           
             
            if ($show_result == 111) //index
            {

                $project_title = $answer;
           
                $line = $table_name;

                $type = 7;

                $model = file_to_model('index_model.txt'); 

                $model = str_replace('@window_title@',$project_title,$model);

                echo("
               
                <textarea rows=10 cols=30 id='memo_aux_index'>$model</textarea> 

                <script>pass_index_model(\"$table_name\",\"$project_title\");</script>

              ");

            } 

            if ($show_result == 113){ //php __obj_get
            
                $line = "$"."panku_describe_field = $"."obj_$table_name -> __get(".'\"'."panku_describe_field".'\")'."; <br>";

            }

            if ($show_result == 114){ //mysql structure
                            
                $type=8;

                $query = "describe agendas";

                $obj_dbtools = new DBtools();

                $obj_dbtools -> getInformation($query,$db,$host,$port,$user,$password);

                $line = $obj_dbtools -> getStructure();

                $message = "Warning: This is a simple tool and don't have support to all table properties. Never use this how a Backup tool.";

                echo("<script>window.parent.status(\"<font color='blue' class='font_m'>$message</font>\",1);</script>"); 

            }

            if ($show_result == 115){ //mysql data
                            
                $type=9;               

                $obj_dbtools = new DBtools();

                $obj_dbtools -> getInformation($query,$db,$host,$port,$user,$password);

                $line = $obj_dbtools -> getData(); 
               
                $message = "Warning: This is a simple tool and don't have support to all table properties. Never use this how a Backup tool.";

                echo("<script>window.parent.status(\"<font color='blue' class='font_m'>$message</font>\",1);</script>"); 

            }

            if ($general == 1)
            {
                for ($i=0;$i < $column_count;$i++)            
                {
                    
                    $line = $prefix."panku_describe_field".$suffix;

                    $core .= $line;

                    $top=$top+5;

                }

                
            }    

               

           

            echo("<script>

                    
              //window.parent.document.getElementById('dv_grid').innerHTML = \"$core\";
              window.parent.php_tool(\"$line\",\"$type\",\"$answer\");
              

                    
                    
                </script>");
?>                
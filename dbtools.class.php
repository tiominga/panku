<?php 

    include_once("conn.class.php");
    include_once("files.class.php");


    class DBtools{

        private $table_name;
        private $n_columns;
        private $type;
        private $res;
        private $arr_columns;
        private $key;
        private $error;
        private $answer;
        private $general_conn;
        private $last_query_select;

        public function __get($param){

            return $this -> $param;

        }
        
        private function setInformation($query,$db,$host,$port,$user,$password)
        {

            $type = $this -> getQueryType($query);
            $this -> getTableName($query);
            $table_name = $this -> table_name;



            if ($type >= 100){

               $query = "select * from $table_name limit 0";
            }

           

            if ($type > 0)
            {

                $obj_query = new Connection($db,$host,$port,$user,$password);

                $conn = $obj_query -> getConnection();

                $this -> general_conn = $conn;

                
                $res = $conn -> query($query);

                if (!$res) { //error

                    $this -> error = $conn->errorInfo(); 
                    echo("Error");

                } 
                else {

                    $this -> error = 0;

                    ////Informations about query

                    $this -> res = $res;

                    $this ->  n_columns = $res ->columnCount();

                    $column_count = $this -> n_columns;

                    if ($type !=2)
                    {
                    
                        //primary key    
                        $res2 = $conn -> query("show columns from $table_name where `Key` = 'PRI'");
                        while ($linha2 = $res2 -> fetch(PDO::FETCH_BOTH))
                        {

                            $key = $linha2[0];

                        } 

                        $this -> key = $key;

                    }

                    //all columns name
                    for ($i=0;$i < $column_count;$i++)
                    {
                        
                        $meta = $res->getColumnMeta($i);           
                        $column_name = $meta['name'];
                        $arr_columns[$i]=$column_name;

                        if ($table_name == ""){

                            $table_name = $meta['table'];
                            $this -> table_name = $table_name;
                        }
            
                    }    

                    $this -> arr_columns = $arr_columns;


                    
                }    
                
            }    

        }


       

        private function setData(){

            $last_query = $this -> last_query_select;

            $conn = $this -> general_conn;

            $res = $conn -> query($last_query);

            $core = "";

            $tot = $res ->columnCount();

             //all columns name
             for ($i=0;$i < $tot;$i++)
             {
                 
                 $meta = $res->getColumnMeta($i);           
                 $column_name = $meta['name'];
                 $core .= $column_name.",";  

             } 
            
             $core2 = "";

             while ($line_arr = $res -> fetch(PDO::FETCH_ASSOC)){

                for ($i=0;$i < $tot;$i++)
                {
                    
                    $meta = $res->getColumnMeta($i);           
                    $column_name = $meta['name'];

                    if ($i == 0){

                        $core2 .="(";

                    }

                    $core2 .= "*°*".$line_arr[$column_name]."*°*,";


                   
                }  

                $core2 .= ")";

             }

             $table_name = $meta['table'];

             $pre = "insert into $table_name ( $core ) values $core2";

             

             $pre = str_replace(',)','),',$pre);

             $pre = str_replace(', values',' values',$pre);

             $pre = str_replace(', )',' )',$pre);

             

            return   $pre;

        }


        private function setStructure(){

            $table_name = $this -> __get("table_name");

            $before = "Create table$table_name (";

            $res =  $this -> __get("res");

            $structure = "";

                while ($line_arr = $res -> fetch(PDO::FETCH_ASSOC)){

                    $field = $line_arr['Field'];
                    $type = $line_arr['Type'];
                    
                    $null = $line_arr['Null'];
                    if ($null == "YES" ){

                        $null ="";

                    }else{

                        $null ="not null";    

                    }


                    
                    $key = $line_arr['Key'];
                    if ($key ==  "PRI"){

                        $key = "primary key";
                            
                    }elseif($key ==  "UNI"){

                        $key = "unique key";

                    }elseif($key ==  "MUL"){

                        $key = "";
                    }    



                    $default = $line_arr['Default'];
                    if (strlen($default)>0){

                        $default = " default '$default'";

                    }
                    $extra = $line_arr['Extra'];

                    $structure .= "$field $type $null $key $extra $default,";
                    

                }

                $structure = $before . $structure . ");";

                $structure = str_replace("  ","",$structure);

                $structure = str_replace(",)",")",$structure);

                return $structure;

        }


        private function SetQueryType($query) //called to connect.php
        {

           $array_a = array("show databases","describe","@php_property@;","@php_get@;","@php_post@;","@php_set@;","@new_panku_connection@","@php_set_properties@");
           $array_b = array("@php_properties_to_var@","@panku_mysql_insert@","@panku_mysql_update@","@form_magic@;","@panku_connection@","@window@","@index@");
           $array_c = array("@form_fill@","@php_obj_get@","@panku_structure@","@panku_data@");
           
           $arr_words = array_merge($array_a, $array_b, $array_c);
           
           $arr_cod = array(2,2,100,101,102,103,0,104,105,106,107,108,109,110,111,112,113,114,115); //go to php_tools.php
    
            for ($i=0; $i< count($arr_words);$i++)
            {

                if (substr_count($query,$arr_words[$i])>0){

                    return $arr_cod[$i]; 

                }

            }
            
            return 1;
        }    


        private function  setTableName($param)
        {

            if ( substr_count($param,"@")==2 && substr_count($param,";")>=1) { //it's a php tool
                
                $arr_obj_table = explode(";",$param);

                $table_name = $arr_obj_table[1];

                if (count($arr_obj_table) == 3){
                    $this -> answer = $arr_obj_table[2];
                }

                if (count($arr_obj_table) == 4){
                    $this -> last_query_select = $arr_obj_table[3];
                }
            }
            else
            {

                $this -> answer = "null_panku";
                 
                $arr_obj_table = explode("from",$param); //select x from y where z=3

                $table_name = $arr_obj_table[1]; //from y where z=3
                
                $arr_obj_table2 = explode(" ",$table_name);

                $table_name = $arr_obj_table2[1]; //y
                

                if ($table_name == ""){

                $arr_obj_table = explode("describe",$param); //select x from y where z=3

                $table_name = $arr_obj_table[1]; //from y where z=3

                }


            }

            $this -> table_name = $table_name;

            return $table_name;

           
        
            //return "select * from $table_name limit 0";

        }

        private function setColumnType($field_name){

            $conn = $this -> general_conn;

            $table_name = $this -> table_name;

            $res = $conn -> query("describe $table_name $field_name");

            while ($line = $res -> fetch(PDO::FETCH_BOTH)){

              $type = $line[1];
                
            }

            return $type;

        }
//******************************************************************************************** */
/////////////////////////////////////////////GETS///////////////////////////////////////////////

        public function  getTableName($param) //just work to php tools
        {
           
            return $this -> setTableName($param);

        }

        public function getQueryType($query)
        {

            return $this -> SetQueryType($query);

        }

        public function getInformation($query,$db,$host,$port,$user,$password){

            
            $this -> setInformation($query,$db,$host,$port,$user,$password);

        }

        public function getN_columns(){

            return $this -> n_columns;

        }

        public function getColumns(){

            return $this -> arr_columns;

        }

        public function getKey(){

            return $this -> key;

        }

        public function getRes(){

            return $this -> res;

        }

        public function getError(){

            return $this -> error;
        }

        public function getAnswer(){

            return $this -> answer;
        }

        public function getColumnType($field_name){

            return $this -> setColumnType($field_name);
            
        }

        public function getStructure(){

            return $this ->setStructure();

        } 
        
        public function getData(){

            return $this -> setData();

        }


    }




?>
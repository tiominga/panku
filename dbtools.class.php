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

                //error
                $res = $conn -> query($query);

                if (!$res) {

                    $this -> error = $conn->errorInfo(); 
                    echo("deu erro");

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


        private function SetQueryType($query)
        {
            $arr_words = array("show databases","describe","@php_property@;","@php_get@;","@php_post@;","@php_set@;","@new_panku_connection@","@php_set_properties@","@php_properties_to_var@","@panku_mysql_insert@","@panku_mysql_update@");
            $arr_cod = array(2,2,100,101,102,103,0,104,105,106,107);
    
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

            if ( substr_count($param,"@")==2 && substr_count($param,";")==1) { //it's a php tool
                
                $arr_obj_table = explode(";",$param);

                $table_name = $arr_obj_table[1];
            }
            else
            {
                 
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


        











    }




?>
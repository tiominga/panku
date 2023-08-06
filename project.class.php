<?php

    include_once("files.class.php");


    class Project{

        private $db; 
        private $host;
        private $port;
        private $user;
        private $password;
        private $arr_projects = array();
        

        function __construct(){

            $obj_file_projects = new File("projects.txt");

            $content = $obj_file_projects -> getContent();

            $arr_projects = explode("<br>",$content);

            $quant = count($arr_projects)-2;

            $option = "";

            for ($i=0;$i<=$quant;$i++){            

            $this -> arr_projects[$i] = $arr_projects[$i];

            }

        }



        private function setOptions(){

            $quant = count($this -> arr_projects)-1;

            $option = "";

            for ($i=0;$i<=$quant;$i++){

                $arr_option = explode(";",$this -> arr_projects[$i]);         
           

                $option .= "<option value=\"".$arr_option[0]."\">".$arr_option[0]."</option>";

            }


            return $option;

        }

              


        private function setProject($index){


                return $this -> arr_projects[$index];  
        }


        public function getProject($index){

            return $this -> setProject($index);

        }


        public function getOptions()
        {

           return $this -> setOptions();     

        }















    }





?>
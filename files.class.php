<?php

    Class File{

            private $name;
            private $nLines;
            private $content;

    


        function __construct($filename){


            $file_content = fopen("$filename","r");

            $this -> name = $filename;
            $this -> content = $file_content;       

        }


        private function setNlines(){


            $cont = 0;

            $file_content = $this -> content;

            while(!feof($file_content)){
                $line = fgets($file_content);
                $cont++;
            }


            return $cont;


        }


        private function saveContent($content)
        {

            $file_name = $this -> name; 
            $fp = fopen("$file_name", 'w');
            fwrite($fp, $content);            
            fclose($fp);

        }


        public function getNlines(){

            return $this -> setNlines();

        }

        public function getContent(){

            $file_name = $this -> name; 
            $content = file_get_contents($file_name);
            return $content;

        }

        public function getSaveContent($content){

            $this -> saveContent($content);



        }

        
    }    


?>
<?php
//vai mostrar a foto, precisa portanto rodar dentro de um iframe que vai ser na verdade a foto. 

     //pega o código da foto caso tenha vindo e seja diferente de zero
     if (isset($_GET["cod_foto"])){

          $cod_foto=$_GET["cod_foto"];

     }
     else{

      $cod_foto=1;

     }
     
     if ($cod_foto=="0"){
          
      $cod_foto="1";

     }
     
    
     
     //faz a consulta
     include("conexao/iconecta.php");
     $res=mysqli_query($conn,"select foto from fotos where cod_id=\"$cod_foto\"");
     
     $cont=0;
     while ($linha=mysqli_fetch_array($res))
     {
      //joga o código da foto na variável
      $foto=$linha["foto"];
      $cont++;
      
     
     } 
     
     
      //faz a consulta se não tem foto para mostrar a padrão    
      if ($cont==0)
      {
             $res=mysqli_query($conn,"select foto from fotos where cod_id=1");
     
           
             while ($linha=mysqli_fetch_array($res))
             {
                  //joga o código da foto na variável
                  $foto=$linha["foto"];
                  $cont++;      
     
             } 
     }
      
      
      echo("<img id=\"image_64_to_png\" style=\"width:100%; height:100%;border:2px;\"  src=\"$foto\">");
      
      
     
?>
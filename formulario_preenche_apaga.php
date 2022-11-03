                

              

              



                     

 

 

 //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//$$aqui cuida dos campos data para que apareçam no padrão certo para o usuário

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                       

//se o campo era do tipo data, ele colocou o valor iso no campo correto, mas vai ter que colocar no padrão br no campo visível para o usuário

if ($field_tipo=='date' && $id!=0)

{

 

 $component_data=$component.'_br';



 //mysql por algum motivo pode retornar "0000-00-00" ai da lambança.

 if ($valor != "0000-00-00" && $valor != NULL && $valor !="")

 {

 

 //coloca a data no padrão tupinikin

 $data_br = date('d/m/Y', strtotime($valor));

 

 

 

 //coloca a data no lugar certo,só para ingles ver pois a data mesmo já está em um campo oculto

  echo("<script>window.parent.document.getElementById(\"$component_data\").value=\"$data_br\";</script>");

 

  }

  else

  {

  

   //coloca em branco pois está 0000-00-00

  echo("<script>window.parent.document.getElementById(\"$component_data\").value=\" \";</script>");

 



  

  }



}                   


                

                

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//$$aqui cuida dos radios. o nome do radio que tem que selecionar é sempre prefixo_campo_valor, exemplo tabela animais, prefixo animais, campo sexo vai ser animais_sexo_m e animais_sexo_f

//$$e o campo a ser marcado vai tempender fo valor do enum,  

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                               

 if (substr_count($field_tipo,'enum')>0)
 {

     $field_radio_checked=$component.'_'.$valor;

      //echo("<script>alert('$field_radio_checked');</script>");

      echo("<script>window.parent.document.getElementById(\"$field_radio_checked\").checked=true;</script>");

 } 

                

                

                

                

                

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

 //$$se preocupa com a foto

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                     

                

                

          

           

           if ($field=="cod_pictures")
           {

            $completa=$prefix;

           $letrafinal = substr($completa, -1);

           //tira o _ do final do prefixo que ele coloca caso tenha vindo somente a tabela
           if ($letrafinal=='_'){

             $completa=substr($completa,0,-1);

           }

           //pega o nome do frame             
           $frame="iframe_foto_".$completa;
                   //echo("<script>alert(\"$frame --> id foto: $valor\");</script>");

           //se tem valor válido
           if ($valor>0)

                   {

                   

                   

//mostra foto                    

                      echo("          



                      <script>window.parent.document.getElementById('$frame').src='webcam_mostra.php?cod_foto=$valor'</script>;

                      

                      "); 

                      

                   }

                   else

                   {

//mostra foto padrão (sem foto)

                   

                     echo("<script>window.parent.document.getElementById('$frame').src='webcam_mostra.php?cod_foto=1'</script>");

                   

                   }

            

           }        

 //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

 //$$relacionamento entre tabelas (combos)

 //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                               

                             

                             

                          

//se tem cod_ ele pega de outra tabela, ai começa a brincadeira.                              

                           if (substr_count($field,'fk_')>0 && $id>0)   

                           {

             

                           

                                   

//pega o nome da tabela, que é o campo tirando a substring cod_ , cod_bancos vira bancos por exemplo

                                     $table_mestre=str_replace("cod_","",$field);

                                      $component_nome=$prefix.$table_mestre;

                                      echo("<br>componente_detalhe com id deveria ser $component");

//echo("<script>alert(\"$component_nome\");</script>");

                                       

//prepara a consulta

                                     

                                      $table_mestre = str_replace(array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'), '', $table_mestre); 

                                     



                                                                        

                                      $query="select nome from $table_mestre where cod_id=\"$valor\"";  

                                      $res3=mysqli_query($conn,$query);                              

                                      while ($line3=mysqli_fetch_array($res3))
                                      {

                                            $valor_nome=$line3["nome"];

//componente com o nome recebe o valor normalmente
                                           echo("<script>formulario_preenche_componente_existe(\"$component\");</script>");  


                                             echo("<script>window.parent.document.getElementById(\"$component_nome\").value=\"$valor_nome\";</script>");   

                                            

                                            

                                            

                                            

                                            

                                            

                                            

                                            

                                                

                                      

                                      

                                      }

                                      

                              

                              

             

                           } //do ter cod_ no nome do campo   

                           

                           

                           

                           

                           

                                       

                             

                             

         }//<> cod_id

   

    
     
     

   

   } //primeiro while , do describe


//depois que preenche tudo procura por um edit que execute funções no formulário e caso exista ele engatilha o onfocus dele. exemplo, o hemograma depois de ser preenchido tem que calcular valores etc
     $component_gatilho=$prefix."gatilho";    
      
            

echo("<script>
     var componente=\"$component_gatilho\";
   
   
     if (window.parent.document.getElementById(componente))
     {
               setTimeout(\"window.parent.document.getElementById(componente).focus();\", 500);  
              
     }
     
     </script>");

   



    





echo("<script>window.parent.aguarde(0);</script>");

     









?>

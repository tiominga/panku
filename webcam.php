<?php
$tabela=$_GET["tabela"];

include_once("webcam.js");






if (isset($_GET["i_frame"]))
{


    $i_frame=$_GET["i_frame"];


}
else
{


    $i_frame=$tabela;




}

$parametros = "'".$tabela."','".$i_frame."'";


?>
       
                <!DOCTYPE html>
                <html>
                <head>
                  
                        
                </head>
                  
                <body>
                
                          <div id="dv_webcam" style=" position:absolute; display:block; width:98%; height:90%; left:0%; top:0.5%;z-index:1">  <!-- a camada que captura o vídeo-->
                        
                            <video autoplay="true" id="videoElement" width="265">
                             
                            </video>
                            
                
                          </div>
                          
                            
                             
                             
                             
                             
                               
                       
                      
                                	
                <!--Botão que captura da webcam-->	
                                        	<div  style="position:absolute; display:block; top:89%; left:0%; cursor:pointer; z-index:15">  
                                              <img src="../images/<?=$image_folder?>/webcam2.png" id="snap"  onclick="captura(<?=$parametros?>);" >        
                                          </div>

                <!--Botão de upload de imagem (fake, só aparece, quem faz o trabalho é o de baixo)-->	
                                        	<div  style="position:absolute;display:block; top:89%; left:45%; cursor:pointer; z-index:15">  
                                              <img src="../images/<?=$image_folder?>/upload.png" id="snap">        
                                          </div>

                <!--Botão de upload de imagem-->                        

                                           <div  style="position:absolute;display:block; top:89%; left:45%; cursor:pointer; z-index:15"> 
                                              <input type="file" name="imagem" id="imagem" style="opacity:0.0" accept=".png,.jpg" onchange="VerImagem()">
                                           </div>
                                
                                
                              
                                                
                             
                             
                           
                            
                            
                            
                        
                  <!--camada do canvas-->       
                       <div id="dv_webcam_canvas" style=" position:absolute; display:none; width:98%; height:50%; left:0%; top:0%;z-index:19">  
                
                          <canvas id="canvas">
                        
                            </canvas>
                            
                       </div> 

                  <!--camada da imagem-->       
                  <div id="dv_imagem_canvas" style="position:absolute; display:none; width:100%; height:89%; left:0%; top:0.5%;z-index:20">  <!-- a camada da foto em si--> 
                
                
                  <img id="imgElement" src="" style="max-width: 100%; max-height: 100%;width:99%;height:99%">
                
                     
                </div> 
                  
                      
                       
                       
                       
                       
                  <!--formulário -->        
                       <div id="dv_textarea_64" style="position:absolute; display:none; z-index:20">
                         
                                                                                                                  
                            <form name="form_foto_64" id="form_foto_64" action="webcam_salva.php" target="iframe_geral" method="post" >    
                                
                                <textarea rows="5" cols="15" id="foto_cod_64" name="foto_cod_64">
                                    
                                </textarea>
                                
                                <br>
                                
                                <input type="text" name="ed_tabela_foto" id="ed_tabela_foto" value=0>
                                
                               <input type="text" name="ed_iframe_foto" id="ed_iframe_foto" value=0>
                              
                                
                           </form>  
                           
                           
                           
                          
                           
                                               
                        
                        </div>
                        
                        
                <!--cria um iframe para poder inserir a foto na base de dados-->
                       
                                
                
                        
                        <script>
                        
                        var video = document.querySelector("#videoElement");
                         
                        if (navigator.mediaDevices.getUserMedia) {       
                            navigator.mediaDevices.getUserMedia({video: true})
                          .then(function(stream) {
                            video.srcObject = stream;
                          })
                          .catch(function(err0r) {
                            console.log("Something went wrong!");
                          });
                        }
                         
                        </script>
                        
                        
                        
                
                        
                        
                </body>
                </html>
     
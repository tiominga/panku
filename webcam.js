<script>
                        
                        function captura(tabela,i_frame){

                         let ehvideo = 1;

                         if (document.getElementById('dv_imagem_canvas').style.display=="block"){
                            ehvideo = 0;
                         }  
                            

                           
                        
                         var canvas = document.getElementById('canvas'); <!--Joga o elemento canvas para uma variável -->
                         var context = canvas.getContext('2d'); <!--vincula a variável context com o canvas, definindo o canvas como 2d (foto) -->
                         


                         if (ehvideo == 1){

                            
                            var video = document.getElementById('videoElement'); <!-- joga o elemento video para uma variável -->
                            context.drawImage(video,0,0,300,150);<!-- pega a imagem da câmera e passa para o canvas -->  
                            

                         } else {

                          
                            var imagem_selecionada = document.getElementById("imgElement");<!-- joga o elemento video para uma variável -->                            
                            context.drawImage(imagem_selecionada,0,0,300,150);<!-- pega a imagem da câmera e passa para o canvas --> 
                            


                           
                           
                          
                          
                           

                         }
                         
                          
                         
                         var dataURL = canvas.toDataURL(); <!-- joga em uma variável o conteúdo do canvas em base64-->     
                         
                                     
                                 
                        document.getElementById('foto_cod_64').value=dataURL; <!-- joga em um textarea o conteúdo do canvas em base64-->  
                        
                        document.getElementById('ed_tabela_foto').value=tabela;
                        
                        document.getElementById('ed_iframe_foto').value=i_frame;
                        
                        
                                                  
                         
                        
                        
                        var formulario=document.getElementById('form_foto_64');
                        formulario.submit();

                        
                        
                        
                        
                              
                           
                        window.parent.document.getElementById('webcam').style.display='none'; 
                        document.getElementById('dv_imagem_canvas').style.display="none"; 
                        
                        
                           
                         
                         
                        }


              


                function VerImagem(){

                    document.getElementById('dv_imagem_canvas').display="block";
                    
                    var imagem = document.querySelector('input[name=imagem]').files[0];
                    var preview = document.getElementById('imgElement');
                    
                    var reader = new FileReader();
                    
                    reader.onloadend = function () {
                        preview.src = reader.result;
                    }
                    
                    if(imagem){
                        reader.readAsDataURL(imagem);
                    }else{
                        preview.src = "";
                    }

                    document.getElementById('dv_imagem_canvas').style.display="block";  

			}


                     
                                            
                      
                      
                      
                      </script>
                      
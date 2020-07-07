<?php

$cor="#E3E4DF";
$cor2="#A8A8A8";

echo("



             <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">
               
<html lang=\"pt-br\">



	<head>
	 
	  <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">	

	  <title>Panku</title>
	  
	  <link rel=\"shortcut icon\" href=\"images/panku.ico\" type=\"image/x-icon\"/>

	 
          <!-- JS JSJS JSJS JSJS JSJS JSJS JSJS JSJS JSJS JSJS JSJS JSJS JSJS JS-->
          <script type=\"text/javascript\" src=\"editor.js?102\">
          

                             
          
          
         
          
          
          
          </script>   
");          


//pega todas as palavras reservadas, com seus fechamentos e insere nos selects para que se consulte depois
                include("conecta.php");
                $res=mysql_query("select * from reservadas where status>0 order by ordem,palavra"); //ordem garante que no array das palavras reservadas a primeira será sempre a da pesquisa
                $lista_palavras="";
                $lista_prefixo="";
                $lista_sufixo="";
                $lista_acrescenta="";
                
                $palavrax="";                                                   
                $prefixox="";
                $sufixox="";
                $acrescentax="";
                
                
                $cont=0;
                while ($linha=mysql_fetch_array($res))
                {
                
                   $palavrax=htmlspecialchars($linha["palavra"]);
                   $prefixox=htmlspecialchars($linha["prefixo"]);
                   $sufixox=htmlspecialchars($linha["sufixo"]);
                   $acrescentax=htmlspecialchars($linha["pos"]);
                   $linguagemx=htmlspecialchars($linha["linguagem"]);
                   $explicacaox=htmlspecialchars($linha["explicacao"]);
                
                   
                   echo("<script>
                   
                   window.parent.arr_completa[$cont]=\"$acrescentax\";
                   window.parent.arr_palavras[$cont]=\"$palavrax\";
                   window.parent.arr_sufixo[$cont]=\"$sufixox\";
                   window.parent.arr_prefixo[$cont]=\"$prefixox\";
                   
                   window.parent.arr_linguagem[$cont]=\"$linguagemx\";
                   window.parent.arr_explicacao[$cont]=\"$explicacao\";
                   window.parent.arr_temporario[$cont]=0;
                   
                   
                   
                   </script>");
                   $cont++;
                
                
                }
                
                
                $posicao = array("15","15");
                $posicaoy=15;
                $altura=15;
                
                    
                    
                    for ($i=0;$i<50;$i++) 
                    {
                     
                     $posicao[$i]=$altura;
                     $altura=$altura+$posicaoy;
                    
                    }    
                
                
                
               

echo("
          
          
          <style>
          
              
          
          
          
                 .invisivel:-webkit-scrollbar 
                 {
                 display: none;
                 }
                 
                 
                
                 .marcatexto
                 {
								box-shadow: 0px 0 0 0 #000, 0px 0 0 0 #000;
								background: red;
								display: inline;
								padding: 3px 0 !important;
								position: relative;
  								color:#FFF;
					  }            
                             
                             
                
                        
                        
             
                
          
          </style>
	
	
	</head>
	
	<body onload=\"aba_cria(); turn_on(1); muda_aba_projeto('miolo_project'); muda_aba_nuvem('miolo_ftp'); document.oncontextmenu=desabilitar;\">
	
	<audio id='playAudio'>
        <source src=\"error.mp3\" type=\"audio/mpeg\">
        </audio>
        
<div id=\"principal\" style=\"position:absolute; width:100%; height:100%; left:0%; top:0%; background-color:$cor2\">	

	         <div id=\"dv_completar\" style=\"position:absolute; white-space: nowrap; font-family:ubuntu,arial; font-size:14; background-color:red; display:none; overflow: auto;  width:15%; height:15%; top:10%; left:15%;  border-style:solid; border-width:0.3px;z-index:101\">
	         
	             <select id=\"cb_completar\" onkeydown=\"tecla_completar(event,this.value);\" name=\"cb_completar\" size=10 style=\"width:100%\">
	             
	             </select>
	         
	         </div>
	
	
	
	
	         <div id=\"dv_iframe_geral\"style=\"position: absolute; background-color:red; top:40%;width:33%; left:50%; height:18%; z-index:100;  display:none \">
                               
                               
                               <div  onclick=\"document.getElementById('dv_iframe_geral').style.display='none';\" style=\"position:absolute; display:block; left:97%; width:3%; height:3%; top:0%; z-index:100\">
                                    X geral
                               </div>
                               
                               
                               
                                <iframe id=\"iframe_geral\"    name=\"iframe_geral\" scrolling=\"auto\" src=\"orange.html\" width=\"99%\" height=\"50%\"></iframe> 
                               
	         </div>
	         
	         
	        
	       
	        
	         
	         
	         
	         
	          <div id=\"dv_iframe_geral_ftp\"  style=\"position: absolute;background-color:#F8FAFB; top:75%;width:33%; left:33%; height:18%; z-index:30;  display:none \">
                               
                               
                               <div  onclick=\"document.getElementById('dv_iframe_geral_ftp').style.display='none';\" style=\"position:absolute; display:block; left:97%; width:3%; height:3%; top:0%; z-index:100\">
                                    X ftp
                               </div>
                               
                               
                               
                                <iframe id=\"iframe_geral_ftp\"    name=\"iframe_geral_ftp\" scrolling=\"auto\" src=\"orange.html\" width=\"99%\" height=\"100%\"></iframe> 
                               
	         </div>
	         
	         
	         
	         
	           <div id=\"dv_iframe_geral_arquivo\"  style=\"position: absolute;background-color:#F8FAFB; top:75%;width:33%; left:66%; height:18%; z-index:30;  display:none \">
                               
                               
                               <div  onclick=\"document.getElementById('dv_iframe_geral_arquivo').style.display='none';\" style=\"position:absolute; display:block; left:97%; width:3%; height:3%; top:0%; z-index:100\">
                                    X file
                               </div>
                               
                               
                               
                                <iframe id=\"iframe_geral_arquivo\" onload=\"window.parent.abre_arquivo();\"   name=\"iframe_geral_arquivo\" scrolling=\"auto\" src=\"orange.html\" width=\"99%\" height=\"100%\"></iframe> 
                               
	         </div>
	         
	         
	           <div id=\"dv_iframe_geral_sql\"  style=\"position: absolute;background-color:#F8FAFB; top:75%;width:33%; left:66%; height:18%; z-index:30;  display:none \">
                               
                               
                               <div  onclick=\"document.getElementById('dv_iframe_geral_arquivo').style.display='none';\" style=\"position:absolute; display:block; left:97%; width:3%; height:3%; top:0%; z-index:100\">
                                    X file
                               </div>
                               
                               
                               
                                <iframe id=\"iframe_geral_sql\" onload=\"window.parent.abre_arquivo();\"   name=\"iframe_geral_asql\" scrolling=\"auto\" src=\"orange.html\" width=\"99%\" height=\"100%\"></iframe> 
                               
	         </div>
	         
	         
	         
	        <!--componentes que quardam valores importantes que não aparecem para o usuário oculto-->
        	<div id=\"componentes_ocultos\"style=\"position:absolute; display:none; left:50%; width:10%; height:50%; top:1%; z-index:100\">
                
                        
                        
                          <div style=\"position:absolute; top:100%; left:100%\"> 
                               
                               <input type=\"text\" id=\"focar\"><br>
                               <input type=\"text\" id=\"ultima_palavra\">
                               <input type=\"text\" id=\"nlinhas\">
                               <input type=\"text\" id=\"aba_ativa\" value=\"1\">
                               <input type=\"text\" id=\"nabas\" value=\"1\">
                               <input type=\"text\" id=\"direita\" value=\"1\">
                               x<input type=\"text\" id=\"pos_x\" value=\"0\">
                               y<input type=\"text\" id=\"pos_y\" value=\"0\">
                               <input type=\"text\" id=\"popup_abrir\" value=\"0\"> 
                                <input type=\"text\" id=\"tabela_clicada\" value=\"0\">
                               
											<textarea rows=\"20\" cols=\"105\"   id=\"ed_query\" style=\"white-space: nowrap;\">
                                     query
                               </textarea>                                
                                
                                
                                
                          </div>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                     
                               
<!--aqui os edits úteis , os id são sugestíveis-->                
                               
                               
                            
                                 
                                 
                               <button onclick=\"StoreSelection ();\">testa teste</button>  
                               <button onclick=\"ShowStoredSelections ();\">testa2 teste2</button>
                                <button onclick=\"alert(arr_palavras[0]);\">testa4 teste44444444444444444444</button>
                                  
                               <textarea rows=\"20\" cols=\"105\"   id=\"auxiliar\" style=\"white-space: nowrap;\">
                                      aux
                               </textarea>
                               
                                <textarea rows=\"20\" cols=\"105\"   id=\"query_auxiliar\" value=\"0\" style=\"white-space: nowrap;\">
        
                          
                               </textarea>
                               
                               
                                                   
                              
                                   
                                  <!--SQL QUERY formulário que executa querys em todo o programa formulario_sql_executa.php-->  
                                   <form name=\"form_query\" id=\"form_query_geral\" action=\"formulario_sql_executa.php\" method=\"post\" target=\"iframe_geral\" enctype=\"multipart/form-data\"> 
                                   
                                   
                                             
                                           
                                          
                                            
                                            <!--cada query tem que pegar os dodos e jogar no formulário para ir via post, a função consulta preenche estes dados-->  
                                            <input type=\"text\" id=\"query_host\" name=\"host\" value=\"1\">   
                                            <input type=\"text\" id=\"query_database\" name=\"database\" value=\"1\">   
                                            <input type=\"text\" id=\"query_password\" name=\"password\" value=\"1\">   
                                            <input type=\"text\" id=\"query_user\" name=\"user\" value=\"1\">   
                                            <input type=\"text\" id=\"query_aba\" name=\"aba\" value=\"1\">    
                                            <input type=\"text\" id=\"tipo_query\" name=\"tipo\" value=\"0\">
                                            <input type=\"text\" id=\"query_id_usuario\" name=\"id_usuario\" value=\"0\">
                                          <label>Backup: </label>
			                  <input type=\"file\" name=\"arquivo\" onchange=submete_dump();><br><br>
                                            <input type=\"submit\" value=\"submit\">


                                           
                                                                                    
                                                          
                                   
                                   
                                           <textarea name=\"query_guarda\" id=\"query_guarda_geral\" style=\"width:80%;height:20%;border:1px solid #000;font:12px Verdana;\" >
                						  
                                      	   </textarea>
                                      	   
                                      	   <textarea name=\"query_guarda2\" id=\"query_guarda_geral2\" style=\"width:80%;height:20%;border:1px solid #000;font:12px Verdana;\" >
                						  
                                      	   </textarea>
                                                 
                                           <textarea name=\"query_guarda3\" id=\"query_guarda_geral3\" style=\"width:80%;height:20%;border:1px solid #000;font:12px Verdana;\" >
                						  
                                      	   </textarea>                           	   
                              	   
                     	            
		
                              	   
                              	   </form>
                              	   
                              	   
                              	    <!--FTP COMANDO formulário que executa comandos ftp em todo o programa-->  
                              	    <form name=\"form_ftp\" id=\"form_ftp_geral\" action=\"formulario_ftp_executa.php\" method=\"post\" target=\"iframe_geral_ftp\"> 
                                   
                                   
                                             
                                           
                                          
                                            
                                            <!--cada comando tem que pegar os dodos e jogar no formulário para ir via post, a função ftp_executa preenche estes dados-->  
                                            <input type=\"text\" id=\"ftp_host\" name=\"host\" value=\"1\">   
                                            <input type=\"text\" id=\"ftp_caminho_local\" name=\"folder_local\" value=\"1\">   
                                            <input type=\"text\" id=\"ftp_folder\" name=\"folder\" value=\"1\"> 
                                            <input type=\"text\" id=\"ftp_password\" name=\"password\" value=\"1\">  
                                            <input type=\"text\" id=\"ftp_user\" name=\"user\" value=\"1\">   
                                            <input type=\"text\" id=\"ftp_aba\" name=\"aba\" value=\"1\">    
                                            <input type=\"text\" id=\"tipo_ftp\" name=\"tipo\" value=\"0\">
                                            <input type=\"text\" id=\"ftp_id_usuario\" name=\"id_usuario\" value=\"0\">
                                            <input type=\"text\" id=\"ftp_parametro\" name=\"parametro\" value=\"0\">
                                                                                    
                                                          
                                   
                                   
                                           <textarea name=\"ftp_guarda\" id=\"ftp_guarda_geral\" style=\"width:80%;height:20%;border:1px solid #000;font:12px Verdana;\" >
                						  
                                      	   </textarea>
                                      	   
                                      	                         	   
                              	   
                              	   
                              	   
                              	   </form>
                      	   
                      	</div>   
                              	   
                              	   
                      	   
                      	</div>   
                                               
                                                                      	   
                       
                </div> <!--div test-->
                      
                 
                      
                       
                      
                      
 
             
        
 <!--aqui os editores de texto propriamente ditos-->                  
               
                <div id=\"editores\" name=\"editores\"  style=\"position:absolute; background-color:$cor2; font-family:ubuntu,arial;  left:0.2%; width:98.7%; height:92%; top:7%; z-index:11\">
                
                	
                
                        <!--aqui a div popup que mostra opçoes para colocar no editor referente ao banco de dados--> 
                        <div id=\"popup_banco\" onmouseover=\"document.getElementById('popup_banco').style.display='block';\" onmouseleave=\"document.getElementById('popup_banco').style.display='none';\" name=\"popup_banco\"  style=\"position:absolute;  background-color:#FFFFFF; font-family:ubuntu,arial; border:1px solid; display:none;  left:1%; width:40%; height:20%; top:7%; z-index:110\">
                             
									<div   style=\"position:absolute;  background-color:#F8FAFB; font-family:ubuntu,arial;  cursor:pointer; left:0%; width:100%; height:$posicao[0]%; top:0%; z-index:11\">
                             <label><strong>Mysql:</strong></label>
                             </div>					                             
                             
                             
                             <div  onclick=editor_adiciona(this.innerText,1); style=\"position:absolute;  background-color:#F8FAFB; font-family:ubuntu,arial;  cursor:pointer; left:0%; width:100%; height:$posicao[0]%; top:$posicao[0]%; z-index:11\">
                             <label>Select * from <text id=\"pop_tabela_nome\" name=\"nome_tabela\">xxx</text> limit 10</label>
                             </div>
                             
                             <div onclick=editor_adiciona(this.innerText,1); style=\"position:absolute; background-color:#F8FAFB; font-family:ubuntu,arial; cursor:pointer; left:0%; width:100%; height:$posicao[0]%; top:$posicao[1]%; z-index:11\">
                             <label>Select * from <text id=\"pop_tabela_nome2\" name=\"nome_tabela\">xxx</text> limit 100</label>
                             </div>
                             
                             <div onclick=editor_adiciona(this.innerText,1);  style=\"position:absolute; background-color:#F8FAFB; font-family:ubuntu,arial; cursor:pointer; left:0%; width:100%; height:$posicao[0]%; top:$posicao[2]%; z-index:11\">
                             <label>Describe <text id=\"pop_tabela_nome3\" name=\"nome_tabela\">xxx</text></label>
                             </div>
                             
                              <div onclick=editor_adiciona(this.innerText,0,4); style=\"position:absolute; background-color:#F8FAFB; font-family:ubuntu,arial; cursor:pointer;  left:0%; width:100%; height:$posicao[0]%; top:$posicao[3]%; z-index:11\">
                             <label> <text id=\"pop_tabela_nome4\" name=\"nome_tabela\">xxx</text></label>
                             </div>
                         
                         
                
                        </div>
                
                
                
                </div>	
                
                 	
 <!--aqui a janela de replace-->                
  <div id=\"dv_replace\" style=\"position:absolute; display:none; left:37.5%; width:25%; height:25%; top:25%; background-color:$cor2; z-index:100\">
	        
	        
	        <div onclick=\"document.getElementById('dv_replace').style.display='none'\" style=\"position:absolute; width=2%; height:2%; top:1%; left:96%; cursor:pointer\">
	        				
	        					X	
	        				
	        	</div>
	        
	        
	        				<div  style=\"position:absolute; width=15%; font-family:ubuntu,arial; height:15%; top:14%; left:3%\">
	        				
	        					Search:	
	        				
	        				</div>
	        
	        
	        			
							<div  style=\"position:absolute;  width=60%; height:15%; top:14%; left:33%\">
							
								<input type=\"text\" id=\"ed_este\">  
							
							</div>
							
							<div  style=\"position:absolute;  font-family:ubuntu,arial; width=15%; height:15%; top:35%; left:3%\">
	        				
	        					Replace:
	        				
	        				</div>
	        				
	        				
							<div  style=\"position:absolute; width=80%; height:15%; top:35%; left:33%\">
							
								<input type=\"text\" id=\"ed_poreste\">  
							
							</div>     
     
							 <div  id=\"bt_ok\"  onclick=\"substitui(document.getElementById('ed_este').value,document.getElementById('ed_poreste').value);\" style=\"position:absolute; cursor:pointer;   background-color:#E3E4DF;  left:33%; width:33%; height:10%; top:60%; z-index:11\">
                         
                                <div   style=\"position:absolute; background-color:#E3E4DF;   cursor:pointer;  left:5%; width:90%; height:10%; top:20%; z-index:11\">  
                                <label><center>OK</center></label>    
                                </div>
                                
                            </div>    

							
							
	        
	        
	        </div>          
	        
	        
 <!--aqui a janela de procura search-->  	        
	       <div id=\"dv_search\" style=\"position:absolute; display:none; left:37.5%; width:25%; height:25%; top:25%; background-color:$cor2; z-index:100\">
	        
	        
	        <div onclick=\"document.getElementById('dv_search').style.display='none'\" style=\"position:absolute; width=2%; height:2%; top:1%; left:96%; cursor:pointer\">
	        				
	        					X	
	        				
	        	</div>
	        
	        
	        				<div  style=\"position:absolute; width=15%; height:15%; top:14%; left:3%\">
	        				
	        					Search:	
	        				
	        				</div>
	        
	        
	        			
							<div  style=\"position:absolute; width=60%; height:15%; top:14%; left:33%\">
							
								<input type=\"text\" id=\"ed_este2\">  
							
							</div>
							
							
							<div  style=\"position:absolute; width=60%; height:15%; top:90%; left:3%\">
							
								<label id=\"Found\">Found: 0</label>   
							
							</div>
						
     
							 <div  id=\"bt_ok\"  onclick=\"procura(document.getElementById('ed_este2').value);\" style=\"position:absolute; cursor:pointer;   background-color:#E3E4DF;  left:33%; width:33%; height:10%; top:60%; z-index:11\">
                         
                                <div   style=\"position:absolute; background-color:#E3E4DF;   cursor:pointer;  left:5%; width:90%; height:10%; top:20%; z-index:11\">  
                                <label><center>OK</center></label>    
                                </div>
                                
                      </div>    

							
							
	        
	        
	        </div>                       
                	
                	
 <!--aqui a janela dos projetos-->                  
               
                <div id=\"projeto\" name=\"projeto\"  style=\"position:absolute; background-color:#F8FAFB; font-family:ubuntu,arial;  left:37.5%; width:25%; height:50%; top:25%; z-index:11\">
                
                      <div id=\"barra_projeto\" name=\"barra_projeto\"  style=\"position:absolute; background-color:#E3E4DF; font-family:ubuntu,arial;  left:0%; width:100%; height:10%; top:0%; z-index:11\">
                      
                         
                         <div id=\"titulo_projeto\"  onclick=\"document.getElementById('projeto').style.display='none'\"  style=\"position:absolute; background-color:#E3E4DF; cursor:pointer;  left:12%; width:33%; height:80%; top:20%; z-index:11\">
                         
                                <label>Panku Beta 0.1</label>    
                         
                         </div>
                      
                         <div  name=\"barra_projeto\" onclick=\"document.getElementById('projeto').style.display='none'\"  style=\"position:absolute; background-color:#E3E4DF; cursor:pointer;  left:0%; width:12%; height:90%; top:10%; z-index:11\">
                         
                                <center><img src=\"images\panku.png\" width=70%; height=60% ></a></center>
                         
                         </div> 
                         
                         
                         
                         <div  name=\"barra_projeto\" onclick=\"document.getElementById('projeto').style.display='none'\"  style=\"position:absolute; background-color:#E3E4DF; cursor:pointer;  left:90%; width:10%; height:80%; top:20%; z-index:11\">
                         
                                <center><img src=\"images\close.png\" width=55%; height=60% ></a></center>
                         
                         </div>
                         
                         
                      
                      </div>//da barra do projeto  #E3E4DF
                      
                      
                       <div id=\"login\"  style=\"position:absolute; background-color:#F8FAFB;   left:0%; width:100%; height:85%; top:10%; z-index:20\">
                         
                           <div   style=\"position:absolute; background-color:#F8FAFB;   left:1%; width:98%; height:10%; top:1%; z-index:11\">
                         
                                <label id=\"mensagem\" style=\"font-face:arial; font-size:12px; color:red\"></label>    
                         
                            </div>
                          
                          
                          
                          
                           <!--email---------------------------------------------------------------->     
                            
                          
                            <div   style=\"position:absolute; background-color:#F8FAFB;   left:15%; width:20%; height:10%; top:20%; z-index:11\">
                         
                                <label>Email:</label>    
                         
                            </div>
                            
                            
                            
                            <div   style=\"position:absolute; background-color:#F8FAFB;   left:30%; width:20%; height:10%; top:20%; z-index:11\">
                                                                               
                                <input id=\"email\" type=\"text\" name=\"email\" value=\" \">    
                         
                            </div>
                            
                            <!--password----------------------------------------------------------------->     
                            
                              <div   style=\"position:absolute; background-color:#F8FAFB;   left:8.7%; width:20%; height:10%; top:35%; z-index:11\">
                         
                                <label>Password:</label>    
                         
                            </div>
                            
                            
                            
                            
                            
                              <div   style=\"position:absolute; background-color:#F8FAFB;   left:30%; width:20%; height:10%; top:35%; z-index:11\">
                                                                               
                                <input id=\"senha\" type=\"password\" name=\"password\" value=\"\">    
                         
                            </div>
                            
                            
                            
                            
                            <!--confirm----------------------------------------------------------------->     
                            
                              <div id=\"lb_confirm\"  style=\"position:absolute; background-color:#F8FAFB; display:none;  left:12%; width:20%; height:10%; top:50%; z-index:11\">
                         
                                <label>Confirm:</label>    
                         
                            </div>
                            
                            
                            
                            
                            
                              <div  id=\"dv_confirm\"  style=\"position:absolute; background-color:#F8FAFB; display:none;   left:30%; width:20%; height:10%; top:50%; z-index:11\">
                                                                               
                                <input id=\"senha_confirma\" type=\"password\" name=\"confirm\">    
                         
                            </div>      
                            
                            
                        <!--buttons----------------------------------------------------------------->       
                           
                        <div  id=\"bt_ok\"  onclick=\"login();\" style=\"position:absolute; cursor:pointer;   background-color:#E3E4DF;  left:33%; width:33%; height:10%; top:50%; z-index:11\">
                         
                                <div   style=\"position:absolute; background-color:#E3E4DF;   cursor:pointer;  left:5%; width:90%; height:10%; top:20%; z-index:11\">  
                                <label><center>OK</center></label>    
                                </div>
                                
                            </div>    
                           
                            
                            
                            
                             <div   style=\"position:absolute; background-color:#E3E4DF;   cursor:pointer;  left:6%; width:33%; height:10%; top:85%; z-index:11\">
                         
                                 <div  onclick=\"new_login();\" style=\"position:absolute; background-color:#E3E4DF;   cursor:pointer;  left:5%; width:90%; height:10%; top:20%; z-index:11\">    
                                        <label><center>New Account</center></label>    
                                 </div>
                         
                            </div>
                            
                            
                            
                             <div   style=\"position:absolute; background-color:#E3E4DF; cursor:pointer;  left:60%; width:33%; height:10%; top:85%; z-index:11\">
                         
                                <div   style=\"position:absolute; background-color:#E3E4DF;   cursor:pointer;  left:5%; width:90%; height:10%; top:20%; z-index:11\">      
                                          <label><center>Forgot Pass.</center></label>
                                </div>              
                         
                            </div>
                                  
                         
                       </div> <!--div do login-->
                       
                        <!--div  das 3 abas principais, mais acima (janela de login)-->
                        <div id=\"escolha\"  style=\"position:absolute; background-color:#F8FAFB;   left:0%; width:100%; height:85%; top:10%; z-index:19\">
                        
                                     
                                     
                                      <div id=\"aba_project\" onclick=\"muda_aba_projeto('miolo_project');\" class=\"clicado\" style=\"position:absolute; cursor:pointer;   left:0%; width:10%; height:10%; top:2%\">
                                     
                                     
                                     
                                            <center><img src=\"images\project.png\" width=70%; height=75% ></a></center>
                                     
                                                  
                                     
                                     
                                     </div>     
                                     
                                     
                                     
                                     
                                     
                                     <div id=\"aba_sql\"  onclick=\"muda_aba_projeto('miolo_sql');\"  class=\"n_clicado\" style=\"position:absolute; cursor:pointer;   left:10%; width:10%; height:10%; top:2%\">
                                     
                                     
                                     
                                            <center><img src=\"images\database.png\" width=70%; height=80% ></a></center>
                                     
                                     
                                     
                                     
                                     </div> 
                                     
                                      
                                     
                                      <div id=\"aba_nuvem\" onclick=\"muda_aba_projeto('miolo_nuvem');\" class=\"n_clicado\" style=\"position:absolute;  cursor:pointer;   left:20%; width:10%; height:10%; top:2%\">
                                     
                                     
                                     
                                          <center><img src=\"images\cloud.png\" width=70%; height=90% ></a></center>
                                     
                                     
                                     
                                     
                                     </div>
                                     
                                     
                                                
                        
                        
                             
                        
                        
                        
                        </div>
                        
                        
                  <!--- div oculto com dados que não aparecem para o usuário-->
                        <div id=\"oculta\"  style=\"position:absolute; background-color:#F8FAFB; display:none;   left:0%; width:100%; height:79%; top:70%; z-index:50\">
                        
                                 <input id=\"projetos_cod_id\" type=\"text\">
                                 <input id=\"projetos_cod_login\" type=\"text\">
                                 <input id=\"projetos_inserindo\" type=\"text\" value=1>
                                 <input id=\"projetos_base_protocolo\" type=\"text\" value='mysql'>
                                  <input id=\"projetos_preferido\" type=\"text\" value='1000'>
                                 
                                 
                                 
                                                  
                        
                        
                        </div>
                  <!--div  dos botões de salva, apagar novo e preferido DA JANELA DE PROJETO-->
                        <div id=\"barra_lateral\"  style=\"position:absolute; background-color:#F8FAFB; display:none;  left:85%; width:14%; height:77%; top:21%; z-index:20\">
                        
                         <!--aqui o botão novo na janela de LOGIN-->
                         <div  onclick=\"novo_projeto();\"  style=\"position:absolute; background-color:#F8FAFB; cursor:pointer;  left:5%; width:90%; height:10%; top:1%; z-index:11\">
                         
                                <center><img src=\"images\add.png\" width=70%; height=90% ></a></center>
                         
                         </div> 
                         
                         <div  onclick=\"salva_alias()\"  style=\"position:absolute; background-color:#F8FAFB; cursor:pointer;  left:5%; width:90%; height:10%; top:12%; z-index:11\">
                         
                                <center><img src=\"images\save.png\" width=60%; height=90% ></a></center>
                         
                         </div> 
                         
                         
                          <div  onclick=\"consulta_interna('update projetos set status=0 where cod_id='+document.getElementById('projetos_cod_id').value); setTimeout('atualiza_combo_projetos()',100);\"  style=\"position:absolute; background-color:#F8FAFB; cursor:pointer;  left:5%; width:90%; height:10%; top:23%; z-index:11\">
                         
                                <center><img src=\"images\del.png\" width=70%; height=90% ></a></center>
                         
                         </div> 
                         
                         
                           <div id=\"bt_projetos_edita\" onclick=\"altera_projeto();\"  style=\"position:absolute; background-color:#F8FAFB; cursor:pointer; display:none; left:5%; width:90%; height:10%; top:34%; z-index:11\">
                         
                                <center><img src=\"images\alter.png\" width=70%; height=90% ></a></center>
                         
                         </div> 
                         
                          <div id=\"bt_projetos_preferido\"  onclick=\"consulta_interna('update projetos set preferido=10 where cod_id='+document.getElementById('projetos_cod_id').value);\"  style=\"position:absolute; background-color:#F8FAFB; cursor:pointer; display:none;  left:5%; width:90%; height:10%; top:44%; z-index:11\">
                         
                                <center><img src=\"images\star.png\" width=70%; height=90% ></a></center>
                         
                         </div> 
                         
                         
                          
                         
                        
                        
                        
                        </div>        
                        
                        
                        
                        <div id=\"bt_projetos_plug\"  onclick=\"connect();\"  style=\"position:absolute; background-color:#F8FAFB; cursor:pointer; display:none;  left:44%; width:10%; height:10%; top:85%; z-index:100\">
                         
                                <center><img src=\"images\start.png\" width=100%; height=80% ></a></center>
                         
                         </div> 
                        
                        
                        
                       
                 <!--div  dos 3 miolos principais, das abas principais-->
                        <div id=\"escolha_miolo\"  style=\"position:absolute; background-color:#F8FAFB;   left:0%; width:100%; height:79%; top:20%; z-index:19\">
                               
                       	      <form id=\"projetos_form_insere\">
                                            
                                      <!--miolo projeto---------------------------------------------------------------->        
                                     <div id=\"miolo_project\"  style=\"position:absolute; background-color:#F8FAFB; display:block;  left:0%; width:100%; height:100%; top:0%; z-index:19\">
                               	      
                               	    
                                             <!--alias---------------------------------->   
                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:10%; z-index:11\">
                                                 
                                                        <label class=\"rotulos\">Project Alias:</label>    
                                                 
                                                    </div>
                                                    
                                                  
                                                    
                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:10%; z-index:11\">
                                                                                                       
                                                        <select id=\"projetos_nome_select\" name=\"projetos_nome_select\" onchange=\"preenche('projetos',this.value);\" size=0 style=\"width:100%\">
        
        
                                                               
        
                                                        </select>
                                                 
                                                    </div>   
                                    
                                    
                                    
                                                    <div id=\"dv_projeto_nome\"   style=\"position:absolute; background-color:#F8FAFB; display:none;  left:32%; width:50%; height:10%; top:10%; z-index:11\">
                                                    
                                                    
                                                            <input type=\"text\" class=\"projetos_obrigatorio\" id=\"projetos_nome\" name=\"alias\">
                                                    
                                                    
                                                    </div>
                                            
                                                        
                                                          
                               	      
                               	      
                               	      </div>
                               	      
                               	        <!--miolo sql---------------------------------------------------------------->
                               	       <div id=\"miolo_sql\"  style=\"position:absolute; background-color:#F8FAFB; display:none;  left:0%; width:100%; height:100%; top:0%; z-index:19\">
                               	      
                               	            
                                                    
                                                    
                                                 <!--database name---------------------------------->        
                                                   <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:20%; z-index:11\">
                                                 
                                                        <label class=\"rotulos\">Database:</label>    
                                                 
                                                    </div>
                                                    
                                                    
                                                    
                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:20%; z-index:11\">
                                                                                                       
                                                          <input id=\"projetos_base\" type=\"text\" name=\"database_name\">    
                                 
                                 
                                                 
                                                    </div>  
                                                    
                                                    
                                                  <!--host---------------------------------->        
                                                   <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:30%; z-index:11\">
                                                 
                                                        <label class=\"rotulos\">Host:</label>    
                                                 
                                                    </div>
                                                    
                                                    
                                                    
                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:30%; z-index:11\">
                                                                                                       
                                                          <input id=\"projetos_base_host\" type=\"text\" name=\"host\">    
                                 
                                                 
                                                    </div>  
                                                       
                                               	      
                                               	  <!--login---------------------------------->        
                                                   <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:40%; z-index:11\">
                                                 
                                                        <label class=\"rotulos\">Login:</label>    
                                                 
                                                    </div>
                                                    
                                                    
                                                    
                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:40%; z-index:11\">
                                                                                                       
                                                          <input id=\"projetos_base_usuario\" type=\"text\" name=\"pj_login\">    
                                 
                                                 
                                                    </div>  
                                                         
                                               	 <!--database passwor---------------------------------->        
                                                   <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:50%; z-index:11\">
                                                 
                                                        <label class=\"rotulos\">Password:</label>    
                                                 
                                                    </div>
                                                    
                                                    
                                                    
                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:50%; z-index:11\">
                                                                                                       
                                                          <input id=\"projetos_base_senha\" type=\"password\" name=\"pj_password\">    
                                 
                                                 
                                                    </div>  
                                                    
                                                    
                                                 <!--database port---------------------------------->        
                                                   <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:60%; z-index:11\">
                                                 
                                                        <label class=\"rotulos\">Port:</label>    
                                                 
                                                    </div>
                                                    
                                                    
                                                    
                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:60%; z-index:11\">
                                                                                                       
                                                          <input id=\"projetos_base_porta\" type=\"text\" name=\"pj_port\">    
                                 
                                                 
                                                    </div>  
                               	            
                               	      
                               	      
                               	      </div>
                                       
                                       
                                      <!--principal  nuuvem---------------------------------------------------------------->  
                                      <div id=\"miolo_nuvem\"  style=\"position:absolute; background-color:red; display:none;  left:0%; width:100%; height:100%; top:0%; z-index:19\">
                               	      
                               	                  
                                                    
                                                 <!--div  das 3 abas nuvem-->
                                                 <div id=\"escolha_nuvem\"  style=\"position:absolute; background-color:#F8FAFB;   left:0%; width:100%; height:12%; top:0%; z-index:19\">
                                
                                                                     
                                                                      <!--div aba ftp-->
                                                                      <div id=\"aba_ftp\" onclick=\"muda_aba_nuvem('miolo_ftp');\" class=\"clicado\" style=\"position:absolute; cursor:pointer;   left:0%; width:10%; height:100%; top:2%\">
                                                                     
                                                                     
                                                                     
                                                                            <center><img src=\"images\dtp.png\" width=70%; height=75% ></a></center>
                                                                     
                                                                                  
                                                                     
                                                                     
                                                                     </div>     
                                                                     
                                                                     
                                                                     
                                                                     
                                                                     <!--div aba dropbox-->
                                                                     <div id=\"aba_dropbox\"  onclick=\"muda_aba_nuvem('miolo_dropbox');\"  class=\"n_clicado\" style=\"position:absolute; cursor:pointer;   left:10%; width:10%; height:94%; top:%\">
                                                                     
                                                                     
                                                                     
                                                                            <center><img src=\"images\dropbox.png\" width=70%; height=80% ></a></center>
                                                                     
                                                                     
                                                                     
                                                                     
                                                                     </div> 
                                                                     
                                                                      
                                                                      <!--div aba google-->
                                                                      <div id=\"aba_google\" onclick=\"muda_aba_nuvem('miolo_google');\" class=\"n_clicado\" style=\"position:absolute;  cursor:pointer;   left:20%; width:10%; height:100%; top:2%\">
                                                                     
                                                                     
                                                                     
                                                                          <center><img src=\"images\google.png\" width=70%; height=75% ></a></center>
                                                                     
                                                                     
                                                                     
                                                                     
                                                                     </div>
                                                                     
                                                                     
                                                                   
                                
                                
                                
                                
                                </div>   
                                                    
                                                                     <!--miolo nuvem ftp---------------------------------------------------------------->
                               	                                               <div id=\"miolo_ftp\"  style=\"position:absolute; background-color:#F8FAFB; display:block;  left:0%; width:100%; height:88%; top:12%; z-index:19\">
                                
                                                                                      <!--Ftp User---------------------------------->        
                                                                                           <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:5%; z-index:11\">
                                                                                         
                                                                                                <label class=\"rotulos\">Ftp User:</label>    
                                                                                         
                                                                                            </div>
                                                                                            
                                                                                            
                                                                                            
                                                                                            <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:5%; z-index:11\">
                                                                                                                                               
                                                                                                  <input id=\"projetos_ftp_user\" type=\"text\">    
                                                                         
                                                                                         
                                                                                            </div>  
                                                                                            
                                                                                     <!--Ftp password---------------------------------->        
                                                                                   <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:17%; z-index:11\">
                                                                                 
                                                                                        <label class=\"rotulos\">Ftp Password:</label>    
                                                                                 
                                                                                    </div>
                                                                                    
                                                                                    
                                                                                    
                                                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:17%; z-index:11\">
                                                                                                                                       
                                                                                          <input id=\"projetos_ftp_senha\" type=\"text\">    
                                                                 
                                                                                 
                                                                                    </div>  
                                                                                    
                                                                                    
                                                                                    
                                                                                      <!--Ftp host---------------------------------->        
                                                                                   <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:29%; z-index:11\">
                                                                                 
                                                                                        <label class=\"rotulos\">Ftp Host:</label>    
                                                                                 
                                                                                    </div>
                                                                                    
                                                                                    
                                                                                    
                                                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:29%; z-index:11\">
                                                                                                                                       
                                                                                          <input id=\"projetos_ftp_host\" type=\"text\">    
                                                                 
                                                                                 
                                                                                    </div>
                                                                                    
                                                                                    
                                                                                    
                                                                                      <!--Ftp folder---------------------------------->        
                                                                                   <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:41%; z-index:11\">
                                                                                 
                                                                                        <label class=\"rotulos\">Ftp Folder:</label>    
                                                                                 
                                                                                    </div>
                                                                                    
                                                                                    
                                                                                    
                                                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:41%; z-index:11\">
                                                                                                                                       
                                                                                          <input id=\"projetos_ftp_folder\" type=\"text\">    
                                                                 
                                                                                 
                                                                                    </div>  
                                                                                              
                                                                                         <!--local folder---------------------------------->        
                                                                                   <div   style=\"position:absolute; background-color:#F8FAFB;   left:5%; width:25%; height:7%; top:52%; z-index:11\">
                                                                                 
                                                                                        <label class=\"rotulos\">Local Folder:</label>    
                                                                                 
                                                                                    </div>
                                                                                    
                                                                                    
                                                                                    
                                                                                    <div   style=\"position:absolute; background-color:#F8FAFB;   left:32%; width:50%; height:10%; top:52%; z-index:11\">
                                                                                                                                       
                                                                                          <input id=\"projetos_caminho\" type=\"text\">    
                                                                 
                                                                                 
                                                                                    </div>         
                                                                                            
                                                                                            
                                                                                            
                                                                                            
                                                                                            
                                                                               </div>
                                
                                
                                
                                                                    <!--miolo nuvem dropbox---------------------------------------------------------------->
                               	                                               <div id=\"miolo_dropbox\"  style=\"position:absolute; background-color:#F8FAFB; display:none;  left:0%; width:100%; height:100%; top:12%; z-index:19\">
                                
                                                                                    dropbox
                                                                               </div>
                                                                                     
                                
                                
                                                                     <!--miolo nuvem google---------------------------------------------------------------->
                               	                                               <div id=\"miolo_google\"  style=\"position:absolute; background-color:#F8FAFB; display:none;  left:0%; width:100%; height:100%; top:12%; z-index:19\">
                                
                                                                                     google
                                                                               </div>
                                
                                           
                                                    
                               	      
                               	      
                               	      </div> //miolo nuvem
                                         
                                       
                                       
                                       
                                       
                                       
                                       
                                </div>
                          </form>
                </div> <!--da janela de projetos-->
                
                
<!--*********************************************-->   
<!--janela de mensagens canto inferior direto-->
<!--*********************************************-->          
                <div id=\"smokd\";  style=\"position:absolute;background-color:#8F8F8F; width:15%; height:10%; left:84.5%; top:90%;  display:none; z-index:100  \">
            
            
                      <div id=\"fechard\" ONCLICK=div_esconde('smokd'); style=\"position:absolute;background-color:#8F8F8F; width:2%; height:5%; left:95.5%; top:0%; cursor:pointer;  z-index:11\">   
                            <b>X</b><
                      </div>
            
            
                      <div style=\"position: absolute;background-color:#5F5F5F; left:0%; top:15%;width:100%; height:85%; z-index:11 \">
            
                              <text  class=\"fonte_branca\" id=\"avisod\" >
                                   
                                      
                                   
                              </text>      
                     
                      </div>
                     
                </div>
               
               
<!--*********************************************-->   
<!--fim janela tipo showmessage alert-->
<!--********************************************--> 


<!--aqui o trilho dos botões específicos para base de dados F8FAFB-->                                                        	         
                	<div id=\"botoes_db\"  style=\"position:absolute;  overflow: auto;  font-family:ubuntu,arial; background-color:$cor; overflow-y: hidden;  font-size:12; left:13%; width:86.5%; height:3%; top:0.5%; z-index:11\">
                              
 <!--dentro do trilho os botoes-->                              
                                             
                	  <!--run-->
                           <div  title=\"Run Query (f9)...\" onclick=\"consulta_atual();\"  style=\"position:absolute; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/play.png);  background-position: center; background-repeat: no-repeat; background-size: 50% 75%;  display:block; overflow: auto; width:2.5%; height:90%; left:0%; top:0.5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>
                	                        
                           
                           <!--all tables -->
                           <div  title=\"Make a script with All tables (use @table@ or @PK@) Exemplo: update @table@ set name='Bart' where @pk@=1\" onclick=\"all_tables();\"  style=\"position:absolute; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/dbtab.png);  background-position: center; background-repeat: no-repeat; background-size: 50% 75%;  display:block; overflow: auto; width:2.5%; height:99%; left:2.5%; top:0.5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>
                	   
                	   
                	   <!--importar dump -->
                           <div  title=\"Run Mysql Script\" onclick=\"mysql_script();\"   style=\"position:absolute; white-space: nowrap; cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/import.png);  background-position: center; background-repeat: no-repeat; background-size: 50% 75%;  display:block; overflow: auto; width:2.5%; height:99%; left:5%; top:0.5%; border-style:solid; border-width:0.0px;z-index:11\">
                	        
                                                               
                	   </div>
                	   
                	                        
                        
                        
                        
                        
                        </div>  
                        
                        
                        
                        
                        <!--aqui o trilho dos botões específicos para arquivos F8FAFB-->                                                        	         
                	<div id=\"botoes_file\"  style=\"position:absolute;  overflow: auto;  font-family:ubuntu,arial; background-color:$cor; overflow-y: hidden;  font-size:12; left:13%; width:86.5%; height:3%; top:0.5%; z-index:11\">
                              
 <!--dentro do trilho os botoes dos arquivos-->                              
                                             
                	  <!--run-->
                     <div  title=\"change ?...\" onclick=\"substitui2();\"  style=\"position:absolute; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/play.png);  background-position: center; background-repeat: no-repeat; background-size: 50% 75%;  display:block; overflow: auto; width:2.5%; height:90%; left:0%; top:0.5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>
                	   
							 <div  title=\"Find...\" onclick=\"document.getElementById('dv_search').style.display='block';\"  style=\"position:absolute; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/find.png);  background-position: center; background-repeat: no-repeat; background-size: 50% 75%;  display:block; overflow: auto; width:2.5%; height:90%; left:2.5%; top:0.5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>                	   
                	   
                	   
                	   <div  title=\"Replace...\" onclick=\"document.getElementById('dv_replace').style.display='block';\"  style=\"position:absolute; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/replace.png);  background-position: center; background-repeat: no-repeat; background-size: 50% 75%;  display:block; overflow: auto; width:2.5%; height:90%; left:5%; top:0.5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>
                	   
                	                        
               
                	   
                	
                	                        
                        
                        
                        
                        
                        </div>  





                
                	               	
                	
 <!--aqui o botão adicionar aba-->  
 
                        <div id=\"aba_add\" name=\"aba_add\" onclick=\"aba_cria(); conexao_anterior(); turn_on(3); \"  style=\"position:absolute; cursor:pointer; background-color:$cor; font-family:ubuntu,arial;  font-size:12; left:13%; width:2%; height:3%; top:4%; z-index:11\">                       
                                  
                                 <div id=\"aba_add_imagem\" name=\"aba_add_imagem\"  style=\"\">
                                 
                                     <center><img src=\"images\add.png\" width=70%; height=85% ></a></center>
                                 
                                 </div> 
                                  
                        </div>
 

 <!--aqui o trilho das abas-->                                                        	
                	<div id=\"abas\"  class=\"invisivel\" style=\"position:absolute;  overflow: auto;  font-family:ubuntu,arial; background-color:$cor; overflow-y: hidden;  font-size:12; left:15%; width:82.5%; height:3%; top:4%; z-index:11\">
                              
 <!--dentro do trilho uma aba transparente que vai mostrar qual aba está clicada-->                              
                                          <div id=\"aba_clicada\"  class=\"invisivel\" style=\"position:absolute;  overflow: auto; border-style:solid; border-width:4px; border-color:red; font-family:ubuntu,arial; background-color:blue; opacity: 0.6; font-size:12; left:0%;  top:90%; width:7.5%; height:90%; cursor:pointer; z-index:100\">
                                          
                                           
                                          </div>                        
                        
                        
                        
                        
                        
                        </div>  
                        
                        
                        
<!--botão salvar, salvar como etc-->                                                        	
                	<div id=\"botoes_editor\"  class=\"invisivel\" style=\"position:absolute;  overflow: hidden;  font-family:ubuntu,arial; background-color:$cor; overflow-y: hidden;  font-size:12; left:0.2%; width:11.5%; height:6%; top:0.5%; z-index:11\">
                         
                	  <!--save-->
                           <div  title=\"Save...\" onclick=\"ftp_executa('save',6);\"  style=\"position:absolute; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/save.png);  background-position: center; background-repeat: no-repeat; background-size: 45% 50%;  display:block; overflow: auto; width:25%; height:90%; left:1.5%; top:5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>
                	   
                	  <!--save as--> 
                	   <div  title=\"Save as...\" onclick=\"ftp_executa('save as',7);\"  style=\"position:absolute; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/saveas.png);  background-position: center; background-repeat: no-repeat; background-size: 45% 50%;  display:block; overflow: auto; width:25%; height:90%; left:26.5%; top:5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>
                	   
                	  <!--outro projeto--> 
                	   <div  title=\"New project...\" onCLick=\"div_mostra('projeto');\"  style=\"position:absolute; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/start.png);  background-position: center; background-repeat: no-repeat; background-size: 60% 65%;  display:block; overflow: auto; width:25%; height:90%; left:51.5%; top:5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>  
                	   
                	   <!--on--> 
                	   <div  title=\"Black...\" id=\"turn_off\" onmousedown=\"turn_on(1);\" style=\"position:absolute; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/turnon.png);  background-position: center; background-repeat: no-repeat; background-size: 30% 100%;  display:block; overflow: auto; width:30%; height:90%; left:76.5%; top:5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>  
                	   
                	   <!--off--> 
                	   <div  title=\"Black...\" id=\"turn_on\" onmousedown=\"turn_on(0);\" style=\"position:absolute; background-color:red; white-space: nowrap;cursor:pointer; font-family:ubuntu,arial;background-color:$cor; background-image:url(images/turnoff.png);  background-position: center; background-repeat: no-repeat; background-size: 30% 100%;  display:block; overflow: auto; width:30%; height:90%; left:76.5%; top:5%; border-style:solid; border-width:0.0px;z-index:11\">
                	   
                	   </div>  
                	 
                	 
                	     
                	  
                	   
                	   
           
        	       </div>
</div>//a principal que engloba todas as outras        
       </body>
       
       
       
        
</html>

");

?>http://br920.teste.website/~tiomi768/tiominga.com.br/editor/images/start.png

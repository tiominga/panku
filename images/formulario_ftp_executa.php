<?php

// Dados do servidor
$query=$_POST["ftp_guarda"];
$mostrar=$_POST["tipo"];
$aba=$_POST["aba"];
$id_usuario=$_POST["id_usuario"];



$host = $_POST["host"];
$folder = $_POST["folder"];
$local_folder = $_POST["folder_local"];
$user = $_POST["user"];
$password = $_POST["password"];

$parametro = $_POST["parametro"]; 

$comando = $parametro; //as vezes parametro as vezes comando então já mando assim

$componente="arquivos_main$aba"; //janela a esquerda com a lista de arquivos


$atualiza_lista=1;

 









//se veio pra salvar, ele usa o salvar como, mas não atualiza a lista
if ($mostrar==6)
{
   $atualiza_lista=0;
   $mostrar=7;
  

} 


if ($mostrar==8)  //salvou, mas não tinha nome do arquivo, então perguntou e veio pra k e tem que atulizar
{
   $atualiza_lista=1;
   $mostrar=7;
   
   
  

} 




//o que é para atualizar e o que não é
if ($mostrar==4 || $mostar==5 || $mostrar==9) //4 já é o atualizar e tem que zerar para não entrar em loop, se veio 4 já atualizou, 5 é abrir, não precisa, 9 é só atualizar sem mensagens
{

  
   $atualiza_lista=0;

} 



$continua=1;



if (strlen($host)==0)
{

$continua=0;
echo("<script>window.parent.document.getElementById(\"$componente\").innerHTML=\"Project Without FTP\";</script>");  //joga os arquivos  

}


if ($continua==1)
{

$ftp = ftp_connect($host);

// Abre a conexão com o servidor FTP
if (!$ftp) 
{
   $password_count = strlen($password);
   echo("<script>alert('FTP Connection Fail in $host. Are your internet and permission ok?... Host: $host User: $user Password with $password_count caracters.');</script>");
   $continua=0;
}


$login = ftp_login($ftp, $user, $password);

          
          
          
          
        
// Faz o login no servidor FTP
if (!$login) 
{

  echo("<script>alert('FTP user $user or password wrong....');</script>");
  $continua=0;

}

} //continua==1

if ($continua==1)
{

   //echo("<script>window.parent.swd('FTP conected on $host ');</script>"); no futuro colocar na barra de status
   
   
   if ($mostrar==4 || $mostrar==9) //conectar e listar (4 conecta e lista, 9 é só para dar refresh)
   {
   
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //listar (lista os arquivos para que o usuário clique no que quer abrir)
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++            
   
      
      
      //troca a pasta para a que o usuário definiu
      
      
     if (strlen($folder) > 0)
     { 
      
      if (ftp_chdir($ftp, $folder)) 
      {
        if ($mostrar==4)
        {
        echo("<script>window.parent.swd(\"Folder Connected $folder\");</script>");
        }
          
      } 
      else 
      {
         echo("<script>window.parent.swd(\"Folder Connected fail in  $folder\");</script>");  
      }
      }
   
   
  
  
   
   
      // Habilita o modo Passivo
      ftp_pasv($ftp, true);
      
      //ftp_nlist mostra o nome
      //ftp_rawlist mostra detalhes
      $arr_arquivos = ftp_nlist($ftp, '.');
      
      

     
      $n_arquivos = count($arr_arquivos);
      
      
      
       $top=0;
       $miolo="";
       $files="";
       
      //enquanto tiver arquivos
      for ($i = 0;$i < $n_arquivos; $i++)
      {
        //atenção: no arquivo ver aqui ftp detalhes de arquivos eu quase consegui colocar em um array tudo de um arquivo com o explode, mas parece que o "" não é espaço lá. veja se consegue usar explode e replace para ir eliminando e pegando os dados no futuro        
               
        $id_corpo_ftp='id_celula_ftp'.$i;    
        
        $nome_arquivo_ftp=$arr_arquivos[$i];
        $nome_arquivo_ftp=str_replace("./", "",$nome_arquivo_ftp);
        
       
        $extensao="new";
        
         if (substr_count($nome_arquivo_ftp,'.php')>0) $extensao="php";
         elseif (substr_count($nome_arquivo_ftp,'.txt')>0) $extensao="txt";
         elseif (substr_count($nome_arquivo_ftp,'.doc')>0) $extensao="doc";
         elseif (substr_count($nome_arquivo_ftp,'.gif')>0) $extensao="gif";
         elseif (substr_count($nome_arquivo_ftp,'.html')>0) $extensao="html";
         elseif (substr_count($nome_arquivo_ftp,'.jpg')>0) $extensao="jpg";
         elseif (substr_count($nome_arquivo_ftp,'.jpeg')>0) $extensao="jpeg";
         elseif (substr_count($nome_arquivo_ftp,'.mp3')>0) $extensao="mp3";
         elseif (substr_count($nome_arquivo_ftp,'.mpg')>0) $extensao="mpg";
         elseif (substr_count($nome_arquivo_ftp,'.pdf')>0) $extensao="pdf";
         elseif (substr_count($nome_arquivo_ftp,'.mpg')>0) $extensao="mpg";
         elseif (substr_count($nome_arquivo_ftp,'.wav')>0) $extensao="wav";
         elseif (substr_count($nome_arquivo_ftp,'.xls')>0) $extensao="xls";
         elseif (substr_count($nome_arquivo_ftp,'.zip')>0) $extensao="zip";
         elseif (substr_count($nome_arquivo_ftp,'.rar')>0) $extensao="rar";
         elseif (substr_count($nome_arquivo_ftp,'.js')>0) $extensao="js";
         elseif (substr_count($nome_arquivo_ftp,'.tif')>0) $extensao="tif";
         elseif (substr_count($nome_arquivo_ftp,'.sql')>0) $extensao="sql";
         elseif (substr_count($nome_arquivo_ftp,'.fla')>0) $extensao="fla";
         elseif (substr_count($nome_arquivo_ftp,'.bmp')>0) $extensao="bmp";
         elseif (substr_count($nome_arquivo_ftp,'.3ds')>0) $extensao="3ds";
        

        
         	
         


			$imagem="<img src='images/files/$extensao.png' width:95%; height=90%;>";
		 
        
        
   
        $miolo.="<div  onclick='window.parent.abre_arquivo(this.innerText);' style='position:absolute; width:30%; top:$top%; height:2.5%; left:0%; border: 0px solid white;  cursor:pointer'>".$imagem."</div>";       
        $miolo.="<div  onclick='window.parent.abre_arquivo(this.innerText);' style='position:absolute; width:90%; top:$top%; height:2.5%; left:10%; border: 0px solid; cursor:pointer'><font>$nome_arquivo_ftp</font></div>";
        
       $top=$top+2.5;
       
       
       $files.="$nome_arquivo_ftp".";";
       
        
       
       
  
       
      
         
                
                
                
                
       } 

        
        echo("<script>window.parent.document.getElementById(\"$componente\").removeAttribute(\"tabIndex\");</script>");
        echo("<script>window.parent.document.getElementById(\"$componente\").innerHTML=\"$miolo\";</script>");  //joga os arquivos            
     
        echo("<script>
		  
		  var aba=$aba;			        
        window.parent.arr_allfiles[aba]=\"$files\";
        
        </script>");                        
        
        
      
      

   
   
   }//fim do conectar e listrar (if mostrar==4)
   else if($mostrar==5) //se for para abrir o arquivo no editor
   {
   
     //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     //Abrir 
     //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++            
    
        
                                       
         
                        //faz download do arquivo
         
         
         
                                     $origem="$folder/$comando";
                                    
                                     $destino="arquivos/".$comando."_".$id_usuario."_".date ("d_m_Y")."_".date("H_i_s").".txt";
                                    
                                     
                                  
                                     
                                    
                                     
                                     
                                     if (ftp_get($ftp, $destino, $origem  , FTP_ASCII)) //FTP_ASCII ou FTP_BINARY
                                     {
                                     
                                            
                                          
                                            
                                            
                                            
                                              //coloca o conteúdo do arquivo na variável
                                              $conteudo =  file_get_contents("$destino"); 
                                              
                                            
                                             
                                              $conteudo=str_replace("<", "&lt;",$conteudo);
                                              $conteudo=str_replace(">", "&gt;",$conteudo);
                                              
                                              
 
                                           
                                           
                                              
                                               //cria um textarea com o conteúdo do arquivo todo
                                               echo("                                          
                                               <textarea name=\"file_opened\" id=\"file_opened\"  rows=\"60\" cols=\"15\">$conteudo</textarea>
                                              ");
                                              
                                              
                                              //envia o conteúdo do arquivo para o editor
                                              echo("<script>
                                              
                                              window.parent.document.getElementById(\"auxiliar\").value=document.getElementById('file_opened').value;
                                              
                                              <!--agora o array de nomes de arquivos tem que receber o nome deste arquivo-->
                                              
                                              
                                              
                                              window.parent.nome_arquivos[$aba]=\"$comando\";
                                              
                                              
                                              <!--agora o texto da guia precisa mudar-->
                                              
                                              var titulo_aba = window.parent.nome_arquivos[$aba];
                                              
															  window.parent.document.getElementById(\"status_$aba\").innerText= titulo_aba;                                              
                                              
                                              titulo_aba=' '+titulo_aba.substring(0,12);
                                              
                                              window.parent.document.getElementById(\"texto_$aba\").innerText= titulo_aba;
                                              window.parent.document.getElementById(\"aba_$aba\").title=window.parent.nome_arquivos[$aba];
                                              
                                              
                                             <!--humildemente chama a função que vai pintar as palavras reservadas--> 
                                             window.parent.reservada_arquivo(); 
                                              
                                              <!--agora conta as linhas e coloca o número correto delas-->
                                              window.parent.conta_linhas_forca();
                                              
                                              
                                              </script>");
                                              
                                              
                                              
                                              
                                             
                                     
                                     }
                                     else
                                     {
                                     
                                     
                                     }
                                     
                                     
                                      
                                   
                                     
     
    
    
     
      
     

   
   
   
   }
   else if($mostrar==6) //salvar
   {
   
                        
                        
       //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       //Salvar (download do conteúdo seguido de upload)
       //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++                 
        
       //desabilitado pois al clicar em salvar como pergunta o nome do arquivo e vem pra k , ao clicar em salvar muda pra 7 aqui no cabeçalho mas bota que não é pra atualizar a lista
       //quem pergunta o nome do arquivo, verifica antes de mandar pra k é a função ftp_executa no editor.js
        
                       
                        
                        
                              
                             
                           
                           
                           
                           
     
   
   
   } 
    else if($mostrar==7) //salvar como e salvar, ver cabeçalho
   {
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //Salvar Como (download do conteúdo seguido de upload)                                       ++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    
                
        



                                  $query=trim($query);
                                  
                                  
                                    
                                  
                                   
                                 
                                     
                                
                                
                                //Variável arquivo armazena o nome e extensão do arquivo.
                                    $arquivo="arquivos/"."$comando"."_"."$id_usuario"."_".date ("d_m_Y")."_".date("H_i_s").".html";
                                     
                                    //Variável $fp armazena a conexão com o arquivo e o tipo de ação.
                                    $fp = fopen($arquivo, "w");
                                 
                                    //Escreve no arquivo aberto
                                    fwrite($fp, $query);
                                     
                                    //Fecha o arquivo.
                                    fclose($fp);
                                    
                                    //$destino = "/www/guano/tento2.txt";
                                    $destino="$folder/$comando";
                                    
                                    
                                    
                                    
                                      
                                   
                                     //FTP_ASCII ou FTP_BINARY
                                     $enviado=0;
                                     if (ftp_put($ftp, $destino, $arquivo  , FTP_ASCII)) 
                                     {
                                      $enviado=1;
                                     } 
                                    
                                     
                                     
                                     if ($enviado == 1)
                                     {
                                     //apaga o arquivo na origem
                                      ftp_delete($ftp, $arquivo);
                                      echo("<script>window.parent.swd('file $arquivo is saved in $destino... :)');</script>");
                                      
                                      
                                      //pega apenas os 12 primeiros caracters
                                      
                                      
                                      $titulo =substr($comando,0,12);
                                      
                                      echo("<script>
                                      
                                      window.parent.document.getElementById(\"texto_$aba\").innerText=\"$titulo\";
                                      window.parent.document.getElementById(\"aba_$aba\").title=\"$comando\";
                                      
                                      
                                      </script>");
                                      
                                      
                                      
                                      
                                      
                                      
                                     
                                     }
                                     else
                                     {
                                     
                                      echo("<script>window.parent.swd('Error: Save file failed. Review your permission and path:  $destino');</script>");
                                     }
                                    
                                    
                                    
       
        
        $caminho_completo = getcwd();
      
   
   
   }
   
   
   
   
    if ($atualiza_lista == 1)
    {
    echo("<script>window.parent.ftp_executa('refresh',9);</script>");
    }
   
   
   
}//do continua ==1






ftp_close($ftp);

?>
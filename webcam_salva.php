<?php
$veio=0;

       

//o index.php que é quem tira a foto, vai submeter o formulário com o código da foto que está no textarea com nome foto_cod_64
//este cara recebe e mostra a foto onde tenha que mostrar
//repara que eu vou ser aberto no iframe do formulário original, mostrando a foto 

if (isset($_POST["foto_cod_64"]))
{

         //veio da camera ou imagem nova, diretamente, ou seja, � foto nova, veio com post
        $foto=$_POST["foto_cod_64"];
        $tabela=$_POST["ed_tabela_foto"];
        $i_frame=$_POST["ed_iframe_foto"];

       //insere no banco de dados
       include("conexao/iconecta.php");
       mysqli_query($conn,"insert into fotos (status,foto) values (\"0\",\"$foto\")");

       //pega o ultimo id
        $id=mysqli_insert_id($conn);      

       //coloca o id no campo correto que � a tabela_cod_foto
       $ed_cod_foto=$tabela.'_cod_fotos';

       echo("<script>window.parent.document.getElementById('$ed_cod_foto').value=$id;</script>");
       
       //mostra a imagem onde tem que mostrar
       $iframe_destino='iframe_foto_'.$i_frame;
       // echo("<script>alert(\"$iframe_destino --> $id\");</script>");
       
       echo("<script>window.parent.document.getElementById('$iframe_destino').src='webcam_mostra.php?cod_foto=$id'</script>");
       
       
       //agora se preocupa em apagar fotos antigas que s� clicaram para bater mas na verdade não confirmaram no formulário (cancelaram uma inser��o ou uma altera��o por exemplo)
       
        mysqli_query($conn,"delete from fotos where date(data)<= ADDDATE( curdate(), INTERVAL -2 DAY) and status=0"); 

}


?>
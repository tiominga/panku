                                                       	
var palavra_digitando="";
var palavra_anterior="";

var cor="#E3E4DF"; //botoes, fundo em geral
var cor2="#A8A8A8"; //botão clicado
var cores=[cor2,cor2,cor2,cor2];  

var ncores =0;                    
var indexador =1;
var variavel_div;
var variavel_id;
var tabs = 0;
var nova_linha=1; 
var n_linhas = 0; //pega p número de linhas no editor
var turn = 1; //variável que guarda o padrão do usuário
var ultimo_taboufile=1; //quando se clica em nova aba tem que vir já selecionado arquivo ou base, este cara guarda a ultima opção do usuário  

var nome_arquivos=["0"];

var diferenca = 0;
                                                                                  
posicao_x = 0;
posicao_y=0;

var arr_palavras=["0"];
var arr_completa=["0"];
var arr_prefixo=["0"];
var arr_sufixo=["0"];
var arr_linguagem=["0"];
var arr_explicacao=["0"];
var arr_temporario=["0"];
var arr_book=["0"];

var ftp = 0;

//BETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETA
//BETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETA
var storedSelections = [];
       function getSelectionHtml() {
  var selection = window.document.selection,
    range, oldBrowser = true;

  if (!selection) {
    selection = window.getSelection();
    range = selection.getRangeAt(0);
    oldBrowser = false;
  } else
    range = document.selection.createRange();

  selection.modify("move", "backward", "lineboundary");
  selection.modify("extend", "forward", "lineboundary");

  if (oldBrowser) {
    var html = document.selection.createRange().htmlText;
    range.select();
    return html;
  }

  var html = document.createElement("div");

  for (var i = 0, len = selection.rangeCount; i < len; ++i) {
    html.appendChild(selection.getRangeAt(i).cloneContents());
  }

  selection.removeAllRanges();
  selection.addRange(range);
  return html.innerHTML;
}
       
        function StoreSelection () {
            if (window.getSelection) {
                var currSelection = window.getSelection ();
                for (var i = 0; i < currSelection.rangeCount; i++) {
                    storedSelections.push (currSelection.getRangeAt (i));
                }
                currSelection.removeAllRanges ();
                alert('guardei2');
            } else {
                alert ("Your browser does not support this example!");
            }
        }

        function ClearStoredSelections () {
            storedSelections.splice (0, storedSelections.length);
        }

        function ShowStoredSelections () {
            if (window.getSelection) {
                var currSelection = window.getSelection ();
                currSelection.removeAllRanges ();
                for (var i = 0; i < storedSelections.length; i++) {
                    currSelection.addRange (storedSelections[i]);
                }
                alert('restaurei2');
            } else {
                alert ("Your browser does not support this example!");
            }
        }

function saveSelection() {
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            return sel.getRangeAt(0);
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }
    return null;
}

function restoreSelection(range) {
    if (range) {
        if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (document.selection && range.select) {
            range.select();
        }
    }
}

//FIM BETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETA
//FIM BETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETABETA

function substitui2()
{
	
 document.getElementById('auxiliar').value=document.getElementById('editor_main'+indexador).innerText;	
	
 var conteudo_arquivo = document.getElementById('auxiliar').value; 

conteudo_arquivo=conteudo_arquivo.replace(/bal�o/g, "balão");
    conteudo_arquivo=conteudo_arquivo.replace(/confirma��o/g, "confirmação");
     conteudo_arquivo=conteudo_arquivo.replace(/bot�oes/g, "botões");
      conteudo_arquivo=conteudo_arquivo.replace(/calend�rio/g, "calendário");
       conteudo_arquivo=conteudo_arquivo.replace(/sele��o/g, "seleção");
        conteudo_arquivo=conteudo_arquivo.replace(/c�digo/g, "código");
         conteudo_arquivo=conteudo_arquivo.replace(/fun��o/g, "função");
          conteudo_arquivo=conteudo_arquivo.replace(/formul�rio/g, "formulário");
           conteudo_arquivo=conteudo_arquivo.replace(/propriet�rio/g, "proprietário");
            conteudo_arquivo=conteudo_arquivo.replace(/esp�cie/g, "espécie");
             conteudo_arquivo=conteudo_arquivo.replace(/ra�a/g, "raça");
              conteudo_arquivo=conteudo_arquivo.replace(/in�cio/g, "início");
               conteudo_arquivo=conteudo_arquivo.replace(/n�vel/g, "nível");
                conteudo_arquivo=conteudo_arquivo.replace(/p�lo/g, "pêlo");
                 conteudo_arquivo=conteudo_arquivo.replace(/funcion�rio/g, "funcionário");
                  conteudo_arquivo=conteudo_arquivo.replace(/bot�o/g, "botão");
						 conteudo_arquivo=conteudo_arquivo.replace(/voc�/g, "você");
						 conteudo_arquivo=conteudo_arquivo.replace(/se��o/g, "seção");
						 conteudo_arquivo=conteudo_arquivo.replace(/hist�rico/g, "histórico");
						 conteudo_arquivo=conteudo_arquivo.replace(/endere�o/g, "endereço");
						 conteudo_arquivo=conteudo_arquivo.replace(/j�/g, "já");

		conteudo_arquivo=conteudo_arquivo.replace(/cabe�alho/g, "cabeçalho");
		conteudo_arquivo=conteudo_arquivo.replace(/inv�s/g, "invés");
		conteudo_arquivo=conteudo_arquivo.replace(/n�mero/g, "número");
		conteudo_arquivo=conteudo_arquivo.replace(/n�o/g, "não");
		conteudo_arquivo=conteudo_arquivo.replace(/p�gina/g, "página");
		conteudo_arquivo=conteudo_arquivo.replace(/m�s/g, "mês");
		conteudo_arquivo=conteudo_arquivo.replace(/sess�o/g, "sessão");
		conteudo_arquivo=conteudo_arquivo.replace(/observa��o/g, "observação");
		conteudo_arquivo=conteudo_arquivo.replace(/observa��es/g, "observações");
		conteudo_arquivo=conteudo_arquivo.replace(/padr�o/g, "padrão");
		conteudo_arquivo=conteudo_arquivo.replace(/tamb�m/g, "também");
		conteudo_arquivo=conteudo_arquivo.replace(/vari�vel/g, "variável");
		conteudo_arquivo=conteudo_arquivo.replace(/c�mera/g, "câmera");
		conteudo_arquivo=conteudo_arquivo.replace(/conte�do/g, "conteúdo");
		conteudo_arquivo=conteudo_arquivo.replace(/v�deo/g, "vídeo");
		conteudo_arquivo=conteudo_arquivo.replace(/par�metro/g, "parâmetro");
		conteudo_arquivo=conteudo_arquivo.replace(/est�/g, "está");
		conteudo_arquivo=conteudo_arquivo.replace(/impress�o/g, "impressão");
		conteudo_arquivo=conteudo_arquivo.replace(/exclus�o/g, "exclusão");
		conteudo_arquivo=conteudo_arquivo.replace(/vis�veis/g, "visíveis");
		conteudo_arquivo=conteudo_arquivo.replace(/Aten��o/g, "atenção");
		conteudo_arquivo=conteudo_arquivo.replace(/bin�ria/g, "binária");
		conteudo_arquivo=conteudo_arquivo.replace(/�tico/g, "ético");
		conteudo_arquivo=conteudo_arquivo.replace(/�tica/g, "ética");
		conteudo_arquivo=conteudo_arquivo.replace(/ permiss�es/g, "permissões");
		conteudo_arquivo=conteudo_arquivo.replace(/usu�rio/g, "usuário");
		conteudo_arquivo=conteudo_arquivo.replace(/cabe�alho/g, "cabeçalho");
		conteudo_arquivo=conteudo_arquivo.replace(/laborat�rio/g, "laboratório");
		
//maiúsculas

conteudo_arquivo=conteudo_arquivo.replace(/Bal�o/g, "Balão");
    conteudo_arquivo=conteudo_arquivo.replace(/Confirma��o/g, "Confirmação");
     conteudo_arquivo=conteudo_arquivo.replace(/Bot�oes/g, "Botões");
      conteudo_arquivo=conteudo_arquivo.replace(/Calend�rio/g, "Calendário");
       conteudo_arquivo=conteudo_arquivo.replace(/Sele��o/g, "Seleção");
        conteudo_arquivo=conteudo_arquivo.replace(/C�digo/g, "Código");
         conteudo_arquivo=conteudo_arquivo.replace(/Fun��o/g, "Função");
          conteudo_arquivo=conteudo_arquivo.replace(/Formul�rio/g, "Formulário");
           conteudo_arquivo=conteudo_arquivo.replace(/Propriet�rio/g, "Proprietário");
            conteudo_arquivo=conteudo_arquivo.replace(/Esp�cie/g, "Espécie");
             conteudo_arquivo=conteudo_arquivo.replace(/Ra�a/g, "Raça");
              conteudo_arquivo=conteudo_arquivo.replace(/In�cio/g, "Início");
               conteudo_arquivo=conteudo_arquivo.replace(/N�vel/g, "Nível");
                conteudo_arquivo=conteudo_arquivo.replace(/P�lo/g, "Pêlo");
                 conteudo_arquivo=conteudo_arquivo.replace(/Funcion�rio/g, "Funcionário");
                  conteudo_arquivo=conteudo_arquivo.replace(/Bot�o/g, "Botão");
						 conteudo_arquivo=conteudo_arquivo.replace(/Voc�/g, "Você");
						 conteudo_arquivo=conteudo_arquivo.replace(/Se��o/g, "Seção");
						 conteudo_arquivo=conteudo_arquivo.replace(/Hist�rico/g, "Histórico");
						 conteudo_arquivo=conteudo_arquivo.replace(/Endere�o/g, "Endereço");
						 conteudo_arquivo=conteudo_arquivo.replace(/J�/g, "Já");

		conteudo_arquivo=conteudo_arquivo.replace(/Cabe�alho/g, "Cabeçalho");
		conteudo_arquivo=conteudo_arquivo.replace(/Inv�s/g, "Invés");
		conteudo_arquivo=conteudo_arquivo.replace(/N�mero/g, "Número");
		conteudo_arquivo=conteudo_arquivo.replace(/N�o/g, "Não");
		conteudo_arquivo=conteudo_arquivo.replace(/P�gina/g, "Página");
		conteudo_arquivo=conteudo_arquivo.replace(/M�s/g, "Mês");
		conteudo_arquivo=conteudo_arquivo.replace(/Sess�o/g, "Sessão");
		conteudo_arquivo=conteudo_arquivo.replace(/Observa��o/g, "Observação");
		conteudo_arquivo=conteudo_arquivo.replace(/Observa��es/g, "Observações");
		conteudo_arquivo=conteudo_arquivo.replace(/Padr�o/g, "Padrão");
		conteudo_arquivo=conteudo_arquivo.replace(/Tamb�m/g, "Também");
		conteudo_arquivo=conteudo_arquivo.replace(/Vari�vel/g, "Variável");
		conteudo_arquivo=conteudo_arquivo.replace(/C�mera/g, "Câmera");
		conteudo_arquivo=conteudo_arquivo.replace(/Conte�do/g, "Conteúdo");
		conteudo_arquivo=conteudo_arquivo.replace(/V�deo/g, "Vídeo");
		conteudo_arquivo=conteudo_arquivo.replace(/Par�metro/g, "Parâmetro");
		conteudo_arquivo=conteudo_arquivo.replace(/Est�/g, "Está");
		conteudo_arquivo=conteudo_arquivo.replace(/Impress�o/g, "Impressão");
		conteudo_arquivo=conteudo_arquivo.replace(/Exclus�o/g, "Exclusão");
		conteudo_arquivo=conteudo_arquivo.replace(/Vis�veis/g, "Visíveis");
		conteudo_arquivo=conteudo_arquivo.replace(/Aten��o/g, "Atenção");
		conteudo_arquivo=conteudo_arquivo.replace(/Bin�ria/g, "Binária");
		conteudo_arquivo=conteudo_arquivo.replace(/�tico/g, "Ético");
		conteudo_arquivo=conteudo_arquivo.replace(/�tica/g, "Ética");
		conteudo_arquivo=conteudo_arquivo.replace(/Permiss�es/g, "Permissões");
		conteudo_arquivo=conteudo_arquivo.replace(/Usu�rio/g, "Usuário");
		conteudo_arquivo=conteudo_arquivo.replace(/Cabe�alho/g, "Cabeçalho");
		conteudo_arquivo=conteudo_arquivo.replace(/Laborat�rio/g, "Laboratório");
		
document.getElementById('editor_main'+indexador).innerText=conteudo_arquivo;

}

function substitui(esta,poresta)
{
	
 document.getElementById('auxiliar').value=document.getElementById('editor_main'+indexador).innerText;	
	
 var conteudo_arquivo = document.getElementById('auxiliar').value; 
 
 conteudo_arquivo=conteudo_arquivo.replace(/+esta+/g, poresta);
 
document.getElementById('editor_main'+indexador).innerText=conteudo_arquivo;

}

function book_cria(linha)
{

	//se clicou e não estiver em vermelho, é para botar
	if (document.getElementById('dv_linha_'+indexador+'_'+linha).style.backgroundColor!='red')
	{
	
	//put the line number red	"dv_linha_'+indexador+'_'+n_linhas+'"
	document.getElementById('dv_linha_'+indexador+'_'+linha).style.backgroundColor='red';
	
	var posicao_book= document.getElementById('editor_main'+indexador).scrollTop;
	
	//add a value on the array
	arr_book.push(indexador+';'+posicao_book+';'+linha);
	
	swd('BookMark created. Press CTRL + SHIFT + UP or DOWN');
	
	}
	else
	{
				//coloca o background igual do editor
			 document.getElementById('dv_linha_'+indexador+'_'+linha).style.backgroundColor=document.getElementById('div_linha'+indexador).style.backgroundColor;
			 
			 //coloca zero na posição que eu cliquei, pois quero apagar o bookMark
			 var book_cont=arr_book.length;
			 
			 for(var i=0;i < book_cont;i++)
			 {
			 	
			 	var retorno = arr_book[i].split(";");
			 	
			 	if (retorno[0]==indexador && retorno[2]==linha) 
			 	{
					
				alert('achei');
				arr_book[i]="0";

	 	      }
	 
	       }	
		
	}	
		
}

function book_aponta_cima()
{

//pega a posição do momento			
			var now_book= document.getElementById('editor_main'+indexador).scrollTop;
	
//verifica quantos bookmarks ele tem (lembrando que é total mesmo, inclusive de outras guias)	
			 var book_cont=arr_book.length;
			 
			 var segura=-1;
//enquanto tiver bookmarks			 
			 for(var i=0;i < book_cont;i++)
			 {
			 	
			 	var retorno = arr_book[i].split(";");
			 	
//se é na aba que estou e a posição é maior da que eu estou && retorno[1]<now_book
			 	if (retorno[0]==indexador ) 
			 	{
					
					var div_editor_scrool=document.getElementById('editor_main'+indexador);
					
					//se é para apontar para o marcador acima da posição que eu estou	
					if (retorno[1]<now_book)
					{
					segura=retorno[1];
					}
					
	 	      }
	 
	       }	
	
	//se achou
	if (segura>=0)
	div_editor_scrool.scrollTop =segura;
	
}

function book_aponta(cima)
{

//pega a posição do momento			
			var now_book= document.getElementById('editor_main'+indexador).scrollTop;
	
//verifica quantos bookmarks ele tem (lembrando que é total mesmo, inclusive de outras guias)	
			 var book_cont=arr_book.length-1;
			 
			  var segura=now_book;
			  var maior=0;
			  var menor=100000;
//enquanto tiver bookmarks			 
			 for(var i=book_cont;i >=0;i--)
			 {
			 	
			 	var retorno = arr_book[i].split(";");
			 	
//se é na aba que estou 
			 	if (retorno[0]==indexador ) 
			 	{
					
					var div_editor_scrool=document.getElementById('editor_main'+indexador);
					
							if (cima==1)
							{
								//alert('cima');
								if (retorno[1]<now_book) //se está acima de onde estou, ou seja, se a linha é menor do que a linha corrente 
								{
								
										if (retorno[1]>maior) //pega o menor valor do array, desde que este valor seja maior do que o valor da posição atual
										{
											maior=retorno[1];
										}	
										
								}
							}	
							else 
							{
								//alert('baixo');
								if (retorno[1]>now_book) //se está abaixo de onde estou, ou seja, se a linha é maior do que a linha corrente 
								{
									
										if (retorno[1]<menor) //pega o menor valor do array, desde que este valor seja maior do que o valor da posição atual
										{
											menor=retorno[1];
										}	
										
								}
							}
							
	 	      }
	 
	       }//laco	
	       
	      if (cima==1)							
		   {
		   	segura=maior; 
		   
			}
			else 
			{
			
				segura=menor;			
			}
	
		//se achou
	if (segura>=0)
	div_editor_scrool.scrollTop =segura;
	
}

function book_marca()//usado pela função que preenche os números de linhas para poder colocar as linhas em vermelho depois de destruir elas
{

//verifica quantos bookmarks ele tem (lembrando que é total mesmo, inclusive de outras guias)	
			 var book_cont=arr_book.length;
			 
//enquanto tiver bookmarks			 
			 for(var i=0;i < book_cont;i++)
			 {
			 	
			 	var retorno = arr_book[i].split(";");
			 	
//se é na aba que estou 
			 	if (retorno[0]==indexador ) 
			 	{
					
					document.getElementById('dv_linha_'+indexador+'_'+retorno[2]).style.backgroundColor='red';
					
	 	      }
	 
	       }	
	
}

function turn_on(on)
{
                   
      if (on == 3)
      {
      
        on = turn;
      
      }               

         if (on!=0)
         {
         document.getElementById('turn_on').style.display='block';
         document.getElementById('turn_off').style.display='none';
         document.getElementById('editor_main'+indexador).style.backgroundColor='#1F1B1B';
         document.getElementById('editor_main'+indexador).style.color='#D6CBC0';
         
         }
         else
         {
         document.getElementById('turn_on').style.display='none';
         document.getElementById('turn_off').style.display='block'; 
         document.getElementById('editor_main'+indexador).style.backgroundColor='#F0F4F8';
         document.getElementById('editor_main'+indexador).style.color='#1F1B1B';
         
         }
         
               document.getElementById('div_linha'+indexador).style.backgroundColor=document.getElementById('editor_main'+indexador).style.backgroundColor;
                document.getElementById('tabelas_main'+indexador).style.backgroundColor=document.getElementById('editor_main'+indexador).style.backgroundColor;
                 document.getElementById('arquivos_main'+indexador).style.backgroundColor=document.getElementById('editor_main'+indexador).style.backgroundColor;
                 
                  document.getElementById('div_linha'+indexador).style.color=document.getElementById('editor_main'+indexador).style.color;
                    document.getElementById('tabelas_main'+indexador).style.color=document.getElementById('editor_main'+indexador).style.color;
                     document.getElementById('arquivos_main'+indexador).style.color=document.getElementById('editor_main'+indexador).style.color;
                     
                     //document.getElementById('botoes_editor').style.backgroundColor="#2F2A2A";
                        
                     turn = on;   
                        
}

//tira as tags html
function html_txt(s, space) {
  var span= document.createElement('span');
  span.innerHTML= s;
  if(space) {
    var children= span.querySelectorAll('*');
    for(var i = 0 ; i < children.length ; i++) {
      if(children[i].textContent)
        children[i].textContent+= ' ';
      else
        children[i].innerText+= ' ';
    }
  }
  return [span.textContent || span.innerText].toString().replace(/ +/g,' ');
};

function tecla_completar(event,valor)  //ao pressionar enter no cb_completar vem pra k
{

   nova_linha = 0; //sem isso ele acha que quero uma nova linha e faz a identação . Uma bagunça

   if (event.keyCode==13)
   {
   
     var retorno = valor.split(';§;');
     var indice=retorno[0];
     var valor =retorno[1]; 
     
    var prefixo = arr_prefixo[indice];
    var sufixo =  arr_sufixo[indice];
    var palavra = arr_palavras[indice];
    
    prefixo=prefixo.replace(/&lt;/g, "<");
    prefixo=prefixo.replace(/&gt;/g, ">");
 
    sufixo=sufixo.replace(/&lt;/g, "<");
    sufixo=sufixo.replace(/&gt;/g, ">");
                                                 
     //pega o elemento que estava o cursor antes de vir pra k
     var elt = event.target;
     
     //anula a tecla pressionada
     event.preventDefault();
     
    elt.focus(); //foca no componente que o cursos estava
    sel = document.getSelection();//pega a seleção
    sel.modify("extend", "backward", "word");
    range = sel.getRangeAt(0);
    //console.log(range.toString().trim());
    range.deleteContents();  //apaga o texto 
    var el = document.createElement("div");  //cria uma div                                                  

    el.innerHTML = prefixo+valor+sufixo+' ';
    
    var frag = document.createDocumentFragment(), node;
    while (node = el.firstChild)
     {
        frag.appendChild(node);
    }
    range.insertNode(frag);
    range.collapse();

    div_esconde('dv_completar');  
    
   }

}

function apaga_temporarios()  //apaga todos os valores temporários dos arrays de palavras reservadas
{

  //percorre todo o elemento em busca de palavras reservadas   
                                var n_palavras=arr_palavras.length;
                                n_palavras=n_palavras-1;
                                
                                var achou=0;
       
        //enquanto tiver palavras para percorrer no select ele vai percorrendo e apagando as temporarias                                                         
                                for (var i=n_palavras;i>=0;i--)
                                {    
        
                                         var temporario=arr_temporario[i];
                                        
                                         if(temporario==1) //se achou a ultima palavra digitada na lista ignorando maiuscula e minuscula muda ela 
                                         {
                                         
                                         arr_palavras[i].splice(i,1);;
                                         arr_completa[i].splice(i,1);;
                                         arr_prefixo[i].splice(i,1);;
                                         arr_sufixo[i].splice(i,1);;
                                         arr_linguagem[i].splice(i,1);;
                                         arr_explicacao[i].splice(i,1);;
                                         arr_temporario[i].splice(i,1);;

                                         }
                                        
        			}
        			
}

function zera_palavra()
{

  palavra_anterior=palavra_digitando;
  palavra_digitando='';
  document.getElementById('ultima_palavra').value=palavra_digitando;

}
         
//verifica se tem texto selecionado no editor, somente verifica a quantidade de caracters selecionados e retorna (seleção)
function tem_texto_selecionado()
{

var selection = window.getSelection();
// Atribuindo a variável selectedText o texto do objeto selecionado
var texto = selection.toString();

return texto.length;

}

//retorna apenas o texto selecionado
function texto_selecionado()
{

var selection = window.getSelection();
// Atribuindo a variável selectedText o texto do objeto selecionado
var selectedText = selection.toString();
return selectedText;

}

 //adiciona o nome do arquivo no array para poder gerenciar , vem do formulario_ftp_executa que tem a lista de arquivos com o onclick
 function adiciona_arquivo(nome)
 {
 
    nome_arquivos[indexador]=nome;
 
 } 

function replaceSelectedText(event,replacementText) 
{

    if (event.keyCode === 32)
    {
            var sel, range;
            if (window.getSelection) 
            {
                sel = window.getSelection();
                if (sel.rangeCount) 
                {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    
                   highlight('teste'); 
                    
                    range.insertNode(document.createTextNode(replacementText));
                }
            } 
            else if (document.selection && document.selection.createRange)
            {
                range = document.selection.createRange();
                
                 highlight('teste'); 
                
                range.text = replacementText;
            }
            
    }        
            
}

function getPosCursor(el) 
{
    
    var pos = 0;
    
    if (typeof(el.selectionStart) != "undefined") {
        pos = el.selectionStart;
    } else if (document.selection) {
        var r = document.selection.createRange();
        var rd = r.duplicate();
        pos = 0 - rd.moveStart("character",-1e5);
    }
   // alert(pos);
}

function setPosCursor(el, pos) {
  
  if (el.setSelectionRange) {
    el.focus();
    el.setSelectionRange(pos, pos);
  } else if (el.createTextRange) {
    var r = el.createTextRange();
    r.collapse(true);
    r.moveEnd('character', pos);
    r.moveStart('character', pos);
    r.select();
  }
}

function move(win, charCount) 
{

    //alert('função move 4.7');
    var sel, range;
    if (win.getSelection) 
    {
        sel = win.getSelection();
        if (sel.rangeCount > 0) 
        {
            var textNode = sel.focusNode;
            
             var newOffset = sel.focusOffset + charCount;
             
                          highlight('teste');
             
             sel.collapse(textNode, Math.min(textNode.length, newOffset));
             
             //setTimeout("sel.collapse(textNode, Math.min(textNode.length, newOffset));", 2000);
            
            //highlight('teste');
            
            //setTimeout("", 2000);
           
        }
    }  
   
}

function getSelectionCoords2() {
       
    var sel = document.selection, range, rect;
    var x = 0, y = 0;
    if (sel) {
        if (sel.type != "Control") {
            range = sel.createRange();
            range.collapse(true);
            x = range.boundingLeft;
            y = range.boundingTop;
        }
    } else if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();
            if (range.getClientRects) {
                range.collapse(true);
                if (range.getClientRects().length>0){
                    rect = range.getClientRects()[0];
                    x = rect.left;
                    y = rect.top;
                }
            }
            // Fall back to inserting a temporary element
            if (x == 0 && y == 0) {
                var span = document.createElement("span");
                if (span.getClientRects) {
                    // Ensure span has dimensions and position by
                    // adding a zero-width space character
                    span.appendChild( document.createTextNode("\u200b") );
                    range.insertNode(span);
                    rect = span.getClientRects()[0];
                    x = rect.left;
                    y = rect.top;
                    var spanParent = span.parentNode;
                    spanParent.removeChild(span);

                    // Glue any broken text nodes back together
                    spanParent.normalize();
                }
            }
        }
    }
    //alert(x);
    //alert(y);
    var elemento = document.getElementById('editor_fake'+indexador);
   
    //return { x: x, y: y };
}

function highlight(text) {
  var inputText = document.getElementById("editor_fake"+indexador);
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) { 
   innerHTML = innerHTML.substring(0,index) + "<label class='highlight'>" + innerHTML.substring(index,index+text.length) + "</label>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}

//ao carregar o iframearquivo sei que é pra jogar aquele arquivo no editor
function abre_arquivo()
{
    
    //define quem vai abrir o arquivo (iframe)
    var x = window.parent.document.getElementById("iframe_geral_arquivo");
    
    //pega o conteúdo do documento do iframe
    var y = (x.contentWindow || x.contentDocument);
    
    //coloca o iframe como vermelho para avisar que achou
    y.body.style.backgroundColor = "red";
    
    if (y.document)y = y.document;
    
    //coloca o texto do documento no editor correto 
    
  //  window.parent.document.getElementById("auxiliar").innerText=y.body.innerText;
//    window.parent.document.getElementById("editor_main"+indexador).innerText=y.body.innerText;
      
}

//executa qualquer comando ftp (comando é parametro no formulario_ftp_executa) VIA POST, submete para formulario_ftp_executa
function ftp_executa(comando,tipo)
{

         var pode_executar_ftp=1;
         comando=comando.replace(/"/g, "§¦§");
         comando=comando.replace(/'/g, "¦§¦");
         comando=comando.replace(/'/g, "§");
         //''agora passa tudo para o formulário
         
         window.parent.document.getElementById('query_guarda_geral').value=comando;
         
        var n_mostra=0;
          //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         //o tipo se vier 3 tem que ser definido, se for 1 ele força mostrar para o usuário, se for 2 mostra somente o swd se for 3 tenho que verificar pois voi o usuário que mandou, 0 não mostra nada, é interno
          //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         if (tipo==3)
         {
         
            //array com todas as palavras que barram mostrar o resultado para o usuário
            var nao_mostrar = ["ftp_fput"]; 
            
             //explode a palavra em um array
             var retorno = comando.split(" ");
             
             //pega a primeira palavra
             var primeira = retorno[0];
             
             //coloca em maiúscula, igual o que ta no array
             primeira=primeira.toUpperCase();
           
            //enquanto tiver palavras no array ele vai comparar a primeira com ela para saber se é para impedir a visualização do usuário      
                  for (var i = 0;i < nao_mostrar.length;i++)
                  {
                  
                     //alert('compara '+primeira+' com:'+nao_mostrar[i]);
                  
                     if (primeira == nao_mostrar[i].toUpperCase())
                     {
                     n_mostra = n_mostra+1;
                   
                     }
                    
                  }
                     
            //é inocente até provar o contrário      
                  tipo=1;
                    
                  if (n_mostra>0)
                  {
                   tipo=2;
                  }
         }
         
         //passa aqui os valores definitivos de tipo e comando, pois eles vão mudar depois
         window.parent.document.getElementById('tipo_ftp').value=tipo;
         
         window.parent.document.getElementById('ftp_parametro').value=comando;
         
          //pega a aba ativa

         window.parent.document.getElementById('ftp_aba').value=window.parent.document.getElementById('aba_ativa').value;
         var aba=window.parent.document.getElementById('query_aba').value;
         
         /////////////////////////////////////////////////////////++++++++++++++++++++++++
         //salvar
         //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         if (tipo==6) 
         {
         
                  //se tem um nome para o arquivo no array
                  if (nome_arquivos[indexador]!= undefined )
                  {
                  
                           //joga o conteúdo do arquivo no textarea
                           document.getElementById('ftp_guarda_geral').value=document.getElementById('editor_main'+indexador).innerText;
                 
                           window.parent.document.getElementById('ftp_parametro').value=nome_arquivos[indexador];
                  }
                  
                  else //não tendo o arquivo ele encara como 8
                  {
                  
                   tipo=8;
                  
                  }
            
         }
         
          /////////////////////////////////////////////////////////++++++++++++++++++++++++
         //salvar como
         //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         if (tipo==7 || tipo==8) 
         {
         
            var file_name;
            var pode=1;
         
            file_name = prompt ("File Name:");
            
            if (file_name) //se confirmou
            {
               
                if (file_name.length > 0) //se digitou alguma coisa
                {
                  
                   //joga o conteúdo do arquivo no textarea
                   document.getElementById('ftp_guarda_geral').value=document.getElementById('editor_main'+indexador).innerText;
         
                   nome_arquivos[indexador]=file_name;                                                                                                                                
         
                   window.parent.document.getElementById('ftp_parametro').value=nome_arquivos[indexador];
          
                }
                else
                {
                
                 pode_executar_ftp=0;
                 swd('Error: File name empty.');
            
                }
            
            } 
            else
            {
            
             pode_executar_ftp=0;
             swd('Error: Calceled for user');
            
            }
         
         }
         
  /////////////////////////////////////////////////////////++++++++++++++++++++++++
  //FIM dO salvar como
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++        
         
 /////////////////////////////////////////////////////////++++++++++++++++++++++++
  //Se preocupa em preencher o formulário que vai ser submetido
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++        
         
          window.parent.document.getElementById('tipo_ftp').value=tipo;
         
         //pega o id do componente select que vai ter a conexão da aba ativa
         var id_select_dados = 'select_dados_main'+aba;
         
           //pega os dados para conexão em si no select
           
          window.parent.document.getElementById('ftp_host').value=window.parent.document.getElementById(id_select_dados).options[12].value;
          window.parent.document.getElementById('ftp_user').value=window.parent.document.getElementById(id_select_dados).options[10].value;
          window.parent.document.getElementById('ftp_password').value=window.parent.document.getElementById(id_select_dados).options[11].value;
          window.parent.document.getElementById('ftp_folder').value=window.parent.document.getElementById(id_select_dados).options[13].value;
          window.parent.document.getElementById('ftp_caminho_local').value=window.parent.document.getElementById(id_select_dados).options[9].value;
          
         //submete o formulário com todos os dados, tanto de conexão quanto de comando e se mostra resultado para o usuário 
         var formulario =window.parent.document.getElementById('form_ftp_geral');
         
         if (pode_executar_ftp==1)
         {
         formulario.submit();
         }
         
}

function tabelas_ou_arquivos(qual) //troca_aba troca abas entre arquivos, tabelas e no futuro ferramentas
{

			ultimo_taboufile=qual;
			
         if (qual==1) //tabela                              
         {
         
            div_mostra('tabelas_main'+indexador);
            div_esconde('arquivos_main'+indexador);
            document.getElementById('bt_aba_database'+indexador).style.backgroundColor=cor2;
            document.getElementById('bt_aba_arquivos'+indexador).style.backgroundColor=cor;
            
            //mostra a barra de ferramentas correta
             document.getElementById('botoes_db').style.display='block';
             document.getElementById('botoes_file').style.display='none';
         
         }
         else if(qual==2)
         {
         
           div_mostra('arquivos_main'+indexador);
           div_esconde('tabelas_main'+indexador);
           document.getElementById('bt_aba_arquivos'+indexador).style.backgroundColor=cor2;
           document.getElementById('bt_aba_database'+indexador).style.backgroundColor=cor;
           
           //mostra a barra de ferramentas correta
             document.getElementById('botoes_db').style.display='none';
             document.getElementById('botoes_file').style.display='block';
         }

}

 function query_scrool_sincroniza()
    {
     
         //cria um array com todo o grupo do cabeçalho name=\"corpo_grupo\"
         var grupo_cab = window.parent.document.getElementsByName('cabecalho_grupo');
         var grupo_corpo = window.parent.document.getElementsByName('corpo_grupo');
         
             for(var i = 0; i < grupo_cab.length; i++) 
             {
             
                window.parent.document.getElementById(grupo_cab[i]).scrollLeft = window.parent.document.getElementById(grupo_corpo[i]).scrollLeft;
               
             }                           
         
         //vai sincronizando  
    
    }

//se um valor é muito grande para o grid eu jogo um update na aba aberta. Chamado pelo evento onclick  da celula do grid no formulario_sql_executa
function mostra_update(id)
{

   var retorno = id.split("§");
           
           var tabela = retorno[4];
           var id = retorno[2];
           var campo = retorno[3];
           var campo_chave = retorno[5];
           var truncado = retorno[6]; 
           
           if (truncado==1)
           {
           
            consulta("select "+campo+" as  '@truncado3679#'  from "+tabela+" where "+campo_chave+"="+id,0);         
           
           }
           
}

//muda a situação da div que mostra o iframe com resultado da query por exemplo. se vier 1 mostra se vier 0 esconde e 3 inverte
function verifica_resultado(mostrar)
{

         var id_ferramentas_query='ferramentas_query'+indexador;
         var id_query='query_main'+indexador;                      

        //se não estiver oculta , se estiver mostrando
        if (document.getElementById(id_ferramentas_query).style.top!="97.2%")
        {
                if (mostrar!=1) //se mandaram forçar mostrar não pode esconder mesmo que já esteja mocstrando
                {
                        div_esconde(id_query);
                        document.getElementById(id_ferramentas_query).style.top="97.2%";
                        document.getElementById(id_ferramentas_query).style.left="12.3%";
                        document.getElementById(id_ferramentas_query).style.width="89.4%";
                }
        }
        else                                     
        {
                div_mostra(id_query);
                document.getElementById(id_ferramentas_query).style.top="52%";
                document.getElementById(id_ferramentas_query).style.left="14.4%";
                document.getElementById(id_ferramentas_query).style.width="87.5%";
        }

}

function inserirHtml(html) {
    var range, node;
    if (window.getSelection && window.getSelection().getRangeAt) {
        range = window.getSelection().getRangeAt(0);
        node = range.createContextualFragment(html);
        range.insertNode(node);
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().pasteHTML(html);
    }
}

//adiciona qualquer texto no editor corrente  ###############################################################
function editor_adiciona(conteudo_add,f9,nova,html)
{

          if (nova ==4)
          {
             var selectionRange = saveSelection(); 
               
          }
          
           conteudo_add=conteudo_add.replace(/§¦§/g, "\"");
           conteudo_add=conteudo_add.replace(/¦§¦/g, "'");
           
           conteudo_add=conteudo_add.replace(/§<§/g, "\<");
          
           //se é pra colocar em uma nova guia pra não perder a atual
           if (nova==1)
           {
           
             var segura_aba=indexador;
             aba_cria();
             conexao_anterior();
             verifica_resultado(1);
             document.getElementById('query_iframe_main'+indexador).src=document.getElementById('query_iframe_main'+segura_aba).src;
             document.getElementById('ftp_iframe_main'+indexador).src=document.getElementById('ftp_iframe_main'+segura_aba).src;
             
           }
          
          editor_id='editor_main'+indexador;  

          var editor = document.getElementById(editor_id);
          
          //se não perdesse o focu isso aqui funcionaria, deixarei aqui pois o futuro ...  
          //   var segur = editor.innerText.substring(0, editor.selectionStart) +
          //   conteudo_add +
          //   editor.innerText.substring(editor.selectionEnd);
             
          document.getElementById('auxiliar').value=conteudo_add;
          
         // document.getElementById(editor_id).innerText=conteudo_add;
           
          if (nova != 3) //se o nova vem como 3 não é pra jogar no editor, só pra tirar o lixo tipo § e jogar no auxiliar  (o formulario_ftp isa isso por exemplo)
          {
                  
                  if (html != 1)
                  {
                  editor.innerText=conteudo_add;
                  }
                  else
                  {
                  
                  editor.innerHTML=conteudo_add;
                  
                  }
                  
                  //inserirHtml(texto);  
                     
                  if (f9==1)
                  {
                  
                   consulta(conteudo_add,3);
                  }
          }
          
          if (nova == 4)
          {
       
                restoreSelection(selectionRange);
          }
          
}

function resultado_query(texto)
{

window.parent.document.getElementById('query_main1').innerHTML=texto;

}

function conexao_anterior() //ao clicar em nova aba eu sei que é o mesmo projeto, ai pego os dados da conexão anterior
{

                        select_dados='select_dados_main'+indexador;
                        select_dados_anterior='select_dados_main'+(indexador-1);
                        
                        var combo = window.parent.document.getElementById(select_dados_anterior);
                        var combo_novo = window.parent.document.getElementById(select_dados);
                        
                        //limpa o combo
                        while (combo_novo.length) {
                        combo_novo.remove(0);
                        }
                            
                       //coloca no novo combo todos os valores do anterior
                       for (var i = 0;i < combo.length;i++) 
                           {
                        
                            option = document.createElement('option');
                            option.value = combo.options[i].value;            
                            combo_novo.add(option );

                           }

                         document.getElementById('tabelas_main'+indexador).innerHTML= document.getElementById('tabelas_main'+(indexador-1)).innerHTML;
                            document.getElementById('arquivos_main'+indexador).innerHTML= document.getElementById('arquivos_main'+(indexador-1)).innerHTML;

}

//desabilita o b direito do mouse do browser a habilita o que eu quero , de acordo com onde esteja o mouse
function desabilitar(event)
{
 event.stopPropagation();

var menu=document.getElementById('popup_abrir').value;

 var retorno = menu.split("§");
           
           var tipo = retorno[0];
           var label = retorno[1];

   	  //se clicou com o botão direito do mouse
          if(3 === event.which)
          {  
           
                   if (tipo=='base')
                    {        
                    popup_banco(label);
                    }
                   
          } 

      return false

}

//popup que aparece ao clicar nas tabelas que ficam na parte esquerda
function popup_banco(nome_tabela)
{

    var y = event.clientY;	
    var x = event.clientX;
    y=y-55; //corrige pois ele não está pegando da janela
    
    document.getElementById('popup_banco').style.top=y;
    document.getElementById('popup_banco').style.left=x;
    document.getElementById('popup_banco').style.display='block';
    
    //muda xxxxx para o nome da tabela clicada
     var grupo_pop_base = document.getElementsByName('nome_tabela');
     
     for(var i = 0; i < grupo_pop_base.length; i++) 
     {
     
        document.getElementById(grupo_pop_base[i].id).innerText=nome_tabela;
       
     }                           
                                   
  }

//conecta com o banco de dados quando o cabra da ok no projeto
function connect()
{

   var host = document.getElementById('projetos_base_host').value;
   var user = document.getElementById('projetos_base_usuario').value;
   var password = document.getElementById('projetos_base_senha').value;  
   var base = document.getElementById('projetos_base').value;
   var aba =  document.getElementById('aba_ativa').value;
   
   document.getElementById('iframe_geral').src='database_connect.php?host='+host+'&database='+base+'&password='+password+'&user='+user+'&aba='+aba;

}

function consulta_interna(query)
{

         query=query.replace(/"/g, "§¦§");
         query=query.replace(/'/g, "¦§¦");
         query=query.replace(/'/g, "§");
         //''agora passa tudo para o formulário 

        //pega o formulário para mudar o action dele
        var formulario = document.getElementById('form_query_geral');
        
        //muda a página que vai receer, pois é interno
        formulario.action='formulario_sql_executa_interno.php';    
        
        //
        document.getElementById('query_guarda_geral').value=query;
                        
        formulario.submit();
       
        formulario.action='formulario_sql_executa.php';     
             
}

function submete_dump()
{
          
          //faz uma consulta besta qualquer só para que ele jogue os dados no formulário
          //consulta('select curdate()',0);
          
         //pega o formulário para mudar o action dele
        var formulario = document.getElementById('form_query_geral');       
        
        //muda a página que vai receer, pois é interno
        formulario.action='upload_dump.php'; 
        
        formulario.submit();
       
       formulario.action='formulario_sql_executa.php';    
        
        swd('Uploading...');                    
          
}     

function all_tables()
{

          //faz uma consulta besta qualquer só para que ele jogue os dados no formulário
          consulta('select curdate()',0);

         //paga a frase digitada pelo usuário que tem que ser substituida
         var parametro = window.parent.document.getElementById('editor_main'+indexador).innerText;
         
                //tudo em maiúsculo:
                
               var caracters=parametro.toUpperCase();

                //Saber quantas vezes table ou pk aparecem
                
                if (caracters.indexOf('@TABLE@') > -1 || caracters.indexOf('@PK@') > -1)
                {
                
                        //pega o formulário para mudar o action dele
                        var formulario = document.getElementById('form_query_geral');
                        
                        //muda a página que vai receer, pois é interno
                        formulario.action='database_lote.php';    
                        
                        document.getElementById('query_guarda_geral').value=parametro;
                                        
                        formulario.submit();
                       
                        formulario.action='formulario_sql_executa.php';    
                        
                        swd('Press F9 to apply...');
                        
              }
              else
              {
              
               swd('ERROR: You need to write the tag @table@ or @pk@ to replace this tag for table name or primary key name.');
              
              }               
                  
}

function consulta_atual()
{

  consulta(window.parent.document.getElementById('editor_main'+indexador).innerText,3);

}

function consulta(query,tipo) //tipo=0 não mostra nada, é query interna 1 mostra resultado 2 mostra só que fez 3 é o valor padrão que vai descobrir (o usuário que criou , não da pra saber)
{

                  document.getElementById('ed_query').value=query;
                  
                  query = document.getElementById('ed_query').value;

		 query=query.replace(/"/g, "@|@");
         	 query=query.replace(/'/g, "|@@");

		query=query.replace(/"/g, "§¦§");
         	query=query.replace(/  /g, "§¦§");
         	query=query.replace(/   /g, "§¦§");
         	query=query.replace(/'/g, "¦§¦");
         	query=query.replace(/'/g, "§");	
	
         //''agora passa tudo para o formulário
         
         window.parent.document.getElementById('query_guarda_geral').value=query;
         
        var n_mostra=0;
         
         //o tipo vou definir agora, se for 1 ele força mostrar para o usuário, se for 2 mostra somente o swd se for 3 tenho que verificar pois voi o usuário que mandou, 0 não mostra nada, é interno
         if (tipo==3)
         {
         
            //array com todas as palavras que barram mostrar o resultado para o usuário
            var nao_mostrar = ["CREATE","ALTER","INSERT","DELETE","DROP","UPDATE","USE","FLUSH"]; //INTO OUTFILE e  LOAD DATA ficaram de fora pois não estão no começo
            
             //explode a palavra em um array
             var retorno = query.split(" ");
             
             //pega a primeira palavra
             var primeira = retorno[0];
             
             //coloca em maiúscula, igual o que ta no array
             primeira=primeira.toUpperCase();
           
            //enquanto tiver palavras no array ele vai comparar a primeira com ela para saber se é para impedir a visualização do usuário      
                  for (var i = 0;i < nao_mostrar.length;i++)
                  {
                  
                     //alert('compara '+primeira+' com:'+nao_mostrar[i]);
                  
                     if (primeira == nao_mostrar[i])
                     {
                     n_mostra = n_mostra+1;
                   
                     }
                    
                  }
                     
            //é inocente até provar o contrário      
                  tipo=1;
                    
                  if (n_mostra>0)
                  {
                   tipo=2;
                  }
                  
         }
         
         window.parent.document.getElementById('tipo_query').value=tipo;
         
          //pega a aba ativa

         window.parent.document.getElementById('query_aba').value=window.parent.document.getElementById('aba_ativa').value;
         var aba=window.parent.document.getElementById('query_aba').value;
         
         //pega o id do componente select que vai ter a conexão da aba ativa
         var id_select_dados = 'select_dados_main'+aba;
         
           //pega os dados para conexão em si
           
          window.parent.document.getElementById('query_host').value=window.parent.document.getElementById(id_select_dados).options[6].value;
          window.parent.document.getElementById('query_user').value=window.parent.document.getElementById(id_select_dados).options[4].value;
          window.parent.document.getElementById('query_password').value=window.parent.document.getElementById(id_select_dados).options[5].value;
          window.parent.document.getElementById('query_database').value=window.parent.document.getElementById(id_select_dados).options[3].value;
          
         //submete o formulário com todos os dados, tanto de conexão quanto de query e se mostra resultado para o  
         var formulario =window.parent.document.getElementById('form_query_geral');
         
         formulario.submit();
         
         //se tipo é igual a 2 já mostra o frame com o resultado, senão esconde
         if (tipo==1)
         {
         
            verifica_resultado(1); //a barra já aparece automaticamente
         
         }
         
}

//executa as alterações no grid
function query_grid(event,celula,valor)
{
  
   if (event.keyCode == 13)
   { 
           var retorno = celula.split("§");
           
           var tabela = retorno[4];
           var id = retorno[2];
           var campo = retorno[3];
           var campo_chave = retorno[5];
           
           var query="update "+tabela+" set "+campo+"=@|@"+valor+"@|@ where "+campo_chave+"="+id;
           
           consulta(query,0);
           
           swd(query);
           
   }
   else
   {
   
    swd('Press RETURN to apply this update.');
   
   }
   
}

function salva_alias()
{

 salva('projetos');

}

function atualiza_combo_projetos()
{

  var combo= document.getElementById('projetos_nome_select');
  var email=document.getElementById('email').value;
  var senha=document.getElementById('senha').value;
  var inserindo=0;
 
  while (combo.length) {
        combo.remove(0);
    }
  
  document.getElementById('iframe_geral').src='login.php?email='+email+'&senha='+senha+'&inserindo='+inserindo;
  
}

 function div_esconde(div_id) 
{
        
        document.getElementById(div_id).style.display = 'none';
                                       
}

function div_mostra(div_id) 
{
        
        document.getElementById(div_id).style.display = 'block';
                                       
}

function preenche(tabela,id,prefixo)
{
  
  if (prefixo==undefined)
  {
   
   prefixo=tabela+'_';
  
  }
  
  window.parent.document.getElementById('iframe_geral').src='formulario_preenche.php?tabela='+tabela+'&prefixo='+tabela+'_&id='+id; //reseta os campos binários e combobox
  
  document.getElementById('bt_projetos_preferido').style.display='block';
  document.getElementById('bt_projetos_edita').style.display='block';
  document.getElementById('bt_projetos_plug').style.display='block';
  
  cb_projetos=document.getElementById('projetos_nome_select');
  
  if (cb_projetos.options[0].value=='0')
  { 
  cb_projetos.remove(0);
  }
  
}

function altera_projeto()
{
//mostra o edit ou esconde de acordo com o estado dele
 if ( window.parent.document.getElementById('dv_projeto_nome').style.display=='none')
 { 
   window.parent.document.getElementById('dv_projeto_nome').style.display='block';

 }
  else
  {
   
   window.parent.document.getElementById('dv_projeto_nome').style.display='none';
     
  }
  
 window.parent.document.getElementById('projetos_nome').focus();
 
}

//na janela de conexão e login, ao clicar em novo
function novo_projeto()
{

        //mostra o edit ou esconde de acordo com o estado dele
         if ( window.parent.document.getElementById('dv_projeto_nome').style.display=='none')
         { 
           window.parent.document.getElementById('dv_projeto_nome').style.display='block';
           novo('projetos');
         }
          else
          {
           window.parent.document.getElementById('dv_projeto_nome').style.display='none';
           componente=tabela+'_inserindo';
           window.parent.document.getElementById(componente).value='1'; //coloca em modo de inserção     
          }
          
         window.parent.document.getElementById('projetos_nome').focus();
         
}

//limpa os campos e prepara para uma nova inserção
function novo(tabela)
{
    
     var componente=tabela+'_form_insere';
    
     window.parent.document.getElementById(componente).reset();  //reseta
     
     componente=tabela+'_inserindo';
     
     window.parent.document.getElementById(componente).value='1'; //coloca em modo de inserção     
    
     window.parent.document.getElementById('iframe_geral').src='formulario_preenche.php?tabela='+tabela+'&prefixo='+tabela+'_&id=0'; //reseta os campos binários e combobox

}

<!--mostra uma janela de confirmação antes de apagar um registro de um formulário.  -->
                         function apaga(tabela,id)
                        {
                         
                                 var id_tamanho=id.length;
                                 var continua=1;
                               
                                  if ( parseInt(id_tamanho)>0)    <!--uma bruxaria me impediu de fazer este if ir até o final da função  -->
                                 {
                                  
                                     if (confirm('Are you sure?')==true)
                                     {
                                      
                                       consulta('update '+tabela+' set status=0 where cod_id='+id);
                                     
                                     }
                                         
                                 }
                                 else
                                 {
                                 
                                swd('Save this record first....');
                                 continua = 0;
                                  
                                 }                
                       }

 function salva(tabela)
{

//descobre se está editando ou inserindo
    var inserindo =  window.parent.document.getElementById(tabela+'_inserindo').value;    
    var mensagem2='';
    
//pega todos os campos da classe obrigatorio, que tem que ter valor
   var obrigatorios = document.getElementsByClassName(tabela+'_obrigatorio');
   
//pega todos os campos ta classe verificar, ou seja, campos como telefone, celular ou email precisam ser verificados  
   var verificar = document.getElementsByClassName(tabela+'_verificar');
  
   var id = '';
   var id_mensagem='';
   var continua = 1;
   var campos='';
   var nomes='';
  
                                  ////////////*******************************************************************************************************//// ////////////// 
                                  //AQUI pega todos os que tenho apenas que verificar, ou seja , se vier algo verifica, mas se não vem nada tudo bem (classe verificar)//
                                  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 
//percorre todos os componentes que tem nome da tabela como prefixo e verificar como sufixo na classe                                
                                for(var i = 0; i < verificar.length; i++) 
                                {
                                 
//pega o valor do campo obrigatório                                 
                                 valor=verificar[i].value; 
                                                                
//pega o id do campo obrigatório                                 
                                 id=verificar[i].id;
                                 
                                  campos=id;
                                  campos=campos.replace(tabela+'_','');
                                  campos=campos.replace('cod_','');
                                  campos=campos.toUpperCase();
                                  
                                  /////////////////////////////////////// 
                                  //testa o campo telefone            //
                                  /////////////////////////////////////
                                  if (campos.indexOf('FONE')>=0 && valor.length>0)
                                  {
                                  
                                     if (valor.length<8)
                                     {
                                     
                                        continua=0;
                                        mensagem2='Campos do tipo telefone precisam ter no mínimo 8 caracters, compostos apenas por números.'; 
                                        id_mensagem=id;                                    
                                     
                                     }
                                  
                                     //se não veio só número
                                     if(isNaN(valor))
                                     {
                                     
                                      continua=0;
                                      mensagem2='O campo telefone deve conter apenas números. Reveja.';
                                      id_mensagem=id;
                                       
                                     }
                                  
                                  }
                                 
                                  /////////////////////////////////////// 
                                  //testa o campo celular             //
                                  /////////////////////////////////////
                                  if (campos.indexOf('CELULAR')>=0 && valor.length>0)
                                  {
                                  
                                     if (valor.length<9)
                                     {
                                      continua=0;
                                      mensagem2='O campo celular precisa ter no mínimo 9 números.'; 
                                      id_mensagem=id;                                    
                                     
                                     }
                                  
                                     //se não veio só número
                                     if(isNaN(valor) && valor.length>0)
                                     {
                                     
                                      continua=0;
                                      mensagem2='O campo celular deve conter apenas números. Reveja.'; 
                                      id_mensagem=id;
                                     
                                     }
                                  
                                  }
                                 
                                   ////////////////////////////////////////////
                                  //testa o email caso venha com algum valor//
                                  ///////////////////////////////////////////
                                  if (campos.indexOf('EMAIL')>=0 && valor.length>0)
                                  {
                                  
                                     if (valor.indexOf('@')==-1 || valor.indexOf('.')==-1)
                                     {
                                      continua=0;
                                      mensagem2='O campo email precisa ter "@" e ".". Reveja o campo email.';   
                                      id_mensagem=id;                                  
                                     
                                     }
                                     
                                  }
                                 
                              }
                              
                                  ////////*************************************************************************************************//////////// 
                                  //AQUI  todos os obrigatórios (classe obrigatorio)                                                                   //
                                  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                               
//percorre todos os componentes que tem nome da tabela como prefixo e obrigatorio como sufixo na classe                                
                               for(var i = 0; i < obrigatorios.length; i++) 
                               {
                                                                
//pega o valor do campo obrigatório                                 
                                                                 valor=document.getElementsByClassName(tabela+'_obrigatorio')[i].value; 
                                                                                               
//pega o id do campo obrigatório                                 
                                                                 id=document.getElementsByClassName(tabela+'_obrigatorio')[i].id;
                                                                 
//pega o nome do campo obrigatório para poder dar a mensagem para o usuário                                
                                                                 nome=document.getElementsByClassName(tabela+'_obrigatorio')[i].name;
                                                                 
//pega somente o nome do campo para dar a mensagem para o usuário, tira o cod_ e coloca maiúsculo                                  
                                                                                                
                                                                  nome=nome.toUpperCase();
                              
                                  ////////////////////////////////////////////
                                  //se é obrigatório e não veio nada //
                                  ///////////////////////////////////////////
                                                                 
                                 if (valor.length<=0)
                                 {
                                 
                                  continua=0;
                                  mensagem2=nome+' field is required';
                                  id_mensagem=id;
                                  
                                 }
                                 
                               }
                                
   //se estiver editando salva
   
        if (continua==1)
        {
            
            //se inserindo for diferente de 1 ele da update, senão ele insere
            if (inserindo!='1')
            {
               
               window.parent.document.getElementById('iframe_geral').src='formulario_altera.php?tabela='+tabela;
               window.parent.document.getElementById('dv_projeto_nome').style.display='none';
                   
            }
            else
            {
            
               window.parent.document.getElementById('iframe_geral').src='formulario_insere.php?tabela='+tabela;
               mensagem='Sucess...'; 
               window.parent.document.getElementById('dv_projeto_nome').style.display='none';
            
            }
            
          //coloca que não está inserindo pois o usuário pode salvar e sair mudando, ai tem que entrar como alterando
          window.parent.document.getElementById(tabela+'_inserindo').value='0';
          
          swd(mensagem);
          
          return 1;

        }
        else
        {
            
              swd(mensagem2);
                
              return 0;
        }
}                           

 <!--mostra uma janela com mensagem no canto inferior direito da tela -->
                         function swd(mensagem)
                        {
                          
                             // alert(mensagem); //libere esta linha para tratamento de erros
                           
                              var display = document.getElementById('smokd').style.display;        
                               
                              document.getElementById('smokd').style.display = 'block';
                            
                             mensagem=mensagem.replace(/_/g, " ");
                            document.getElementById("avisod").innerText = mensagem;
                            
                            setTimeout("document.getElementById('smokd').style.display = 'none';", 6000);
                            
                        }

   function muda_aba_projeto(miolo_mostra)  //mostra o miolo correto e também a aba correta do miolo
   {
   
       document.getElementById('miolo_project').style.display='none';
       document.getElementById('miolo_sql').style.display='none';
       document.getElementById('miolo_nuvem').style.display='none';
       
       document.getElementById('aba_project').style.background='#EEEEEE';
       document.getElementById('aba_sql').style.background='#EEEEEE';
       document.getElementById('aba_nuvem').style.background='#EEEEEE';
       
        document.getElementById('aba_project').style.opacity='0.8';
       document.getElementById('aba_sql').style.opacity='0.8';
       document.getElementById('aba_nuvem').style.opacity='0.8';
       
       if (miolo_mostra == 'miolo_project')
       {
          document.getElementById('aba_project').style.background='#F8FAFB';
            document.getElementById('aba_project').style.opacity='1.0';
       }
       else if (miolo_mostra == 'miolo_sql')
       {
         document.getElementById('aba_sql').style.background='#F8FAFB';
         document.getElementById('aba_sql').style.opacity='1.0';
       
       }
       else if (miolo_mostra == 'miolo_nuvem')
       {
       
          document.getElementById('aba_nuvem').style.background='#F8FAFB';
          document.getElementById('aba_nuvem').style.opacity='1.0';
       }
       
       document.getElementById(miolo_mostra).style.display='block';
            
   }

   function muda_aba_nuvem(miolo_mostra)  //mostra o miolo correto e também a aba correta do miolo
   {
   
       document.getElementById('miolo_ftp').style.display='none';
       document.getElementById('miolo_dropbox').style.display='none';
       document.getElementById('miolo_google').style.display='none';
       
       document.getElementById('aba_ftp').style.background='#EEEEEE';
       document.getElementById('aba_dropbox').style.background='#EEEEEE';
       document.getElementById('aba_google').style.background='#EEEEEE';
       
        document.getElementById('aba_ftp').style.opacity='0.8';
       document.getElementById('aba_dropbox').style.opacity='0.8';
       document.getElementById('aba_google').style.opacity='0.8';
       
       if (miolo_mostra == 'miolo_ftp')
       {
          document.getElementById('aba_ftp').style.background='#F8FAFB';
            document.getElementById('aba_ftp').style.opacity='1.0';
       }
       else if (miolo_mostra == 'miolo_dropbox')
       {
         document.getElementById('aba_dropbox').style.background='#F8FAFB';
         document.getElementById('aba_dropbox').style.opacity='1.0';
       
       }
       else if (miolo_mostra == 'miolo_google')
       {
       
          document.getElementById('aba_google').style.background='#F8FAFB';
          document.getElementById('aba_google').style.opacity='1.0';
       }
       
     document.getElementById(miolo_mostra).style.display='block';
            
   }

    function projeto(valor,rotulo) //adiciona todos os projetos ao combo
    {
    
             var select,option;

             select = document.getElementById('projetos_nome_select');
        
            option = document.createElement('option');
            option.value = valor;
            option.text = rotulo;
            select.add( option );
    
    }

    function new_login()
    {
      
       //se ta aparecendo é para não aparecer
       if (document.getElementById('dv_confirm').style.display=='block')
       {
       
          document.getElementById('bt_ok').style.top='50%';
          document.getElementById('lb_confirm').style.display='none';
          document.getElementById('dv_confirm').style.display='none';
          
       }
       else
       {
       
         document.getElementById('bt_ok').style.top='65%';
         document.getElementById('lb_confirm').style.display='block';
         document.getElementById('dv_confirm').style.display='block';
       
       }
       
    }
    
    function login()
    {
    
              //se estiver em modo de inserção e a confirmação de senha não foi digitada ele barra, o resto é feito pela classe class=\"usuarios_obrigatorio\"
              var conf_senha = document.getElementById('senha_confirma').value;
              var senha = document.getElementById('senha').value;
              var email = document.getElementById('email').value;
            
              var sonumero = senha.replace(/[^0-9]/g,'');
              
              var soletras = senha.replace(/[^A-z]/g,'');
              
              var inserindo=0;
               
              if (document.getElementById('dv_confirm').style.display=='block')
              inserindo=1;
              
              var pode=1;
              var mensagem='';
              var componente_balao='';
              
                //se a confirmação se senha estiver em branco e estiver inserindo não pode salvar
              if (conf_senha.length<1 && inserindo==1)
              {
                pode=0;
                mensagem='Password confirmation value is required..'; 
               
              }
              else if (conf_senha != senha && inserindo==1)
              {
                pode=0;
                mensagem='The passwords you have entered do not match.'; 
                
              }
              else if(sonumero==senha || soletras==senha)
              {
              
               pode=0;
               mensagem='Minimum 7 characters in password, contain both numeric and alphabetic characters.'; 
              }
               else if(senha.length<7)
              { 
               pode=0;
               mensagem='Minimum 7 characters in password, contain both numeric and alphabetic characters.';     
              }
              else if(email.length<1)
              { 
               pode=0;
               mensagem='Missing email.'; 
              }
              else if (email.indexOf('@')==-1 || email.indexOf('.')==-1)
             {
              pode=0;
              mensagem='Invalid Email. "@" an ".". are required...';   
             }
              
              if (pode==1)
              {
              
                     document.getElementById('iframe_geral').src='login.php?email='+email+'&senha='+senha+'&inserindo='+inserindo;
                  
              }             
             
              else
              {
              
                  erro();
                  document.getElementById('mensagem').innerText=mensagem;
              
              }
              
    }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
   function erro()
   {
   
   var playAudio = document.getElementById("playAudio");
   playAudio.play();

   }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
   function clicou_aba(aba)
   {
  
   //alert(aba);  
 
//pega apenas o número da aba  
        var num_aba = aba.replace(/[^0-9]/g,'');
        num_aba = parseInt(num_aba);
        
        //variável global que vai ser usada em todo o programa
        indexador = num_aba;
        
         //alert('cliquei na aba'+num_aba); 
   
//coloca a aba transparente ,que aponta, na frente   
       document.getElementById('aba_clicada').style.left=document.getElementById(aba).style.left;
    
 //pega o nome (grupo) do texto das abas
                         
       var grupo_texto_abinha = document.getElementsByName('label_aba');

//percorre a matriz colocando todas as abinhas como não clicadas
                                for(var i = 0; i < grupo_texto_abinha.length; i++) 
                                {
                                   
//cor preta para todos é a primeira preocupação
                                          
//pega o id do texto que precisa ficar preto (todos)                                          
                                           var tona=grupo_texto_abinha[i].id;
                                           
                                            //alert('percorrendo texto:'+tona); 
                                           
//coloca ela como cor nao clicada                                         
                                            document.getElementById(tona).style.color='#1D1B1C';
                                             document.getElementById(tona).style.fontWeight='normal';
                       
//se o número da aba clicada for o mesmo do texto que estou agora coloca o texto como branco                                           
                                         if (num_aba == i+1)
                                         {  
                                          
                                         document.getElementById('texto_'+(i+1)).style.color='#FFFFFF';                                        
                                         document.getElementById('texto_'+(i+1)).style.fontWeight='bolder';
                                         
                                         document.getElementById('aba_ativa').value=num_aba;                                         
                                         
                                         }
                                
                                }
    
//////////////agora o miolo, o editor pai grupo dv_editores_pai/////////////////////////  aba_editor_pai

//pega o nome (grupo) do texto das abas miolo

       var grupo_aba_miolo = document.getElementsByName('dv_editores_pai');

//percorre a matriz colocando todos os divs pai (miolos) como invisivel
                                for(var i = 0; i < grupo_aba_miolo.length; i++) 
                                {
                                   
//pega o id do texto que precisa ficar invisivel (todos)                                        
                                           var tona=grupo_aba_miolo[i].id;
                                            //alert('percorrendomiolo:'+tona); 
                                          
//coloca ela como invisivel                                         
                                            document.getElementById(tona).style.display='none';
                       
//se o número da aba clicada for o mesmo do miolo que estou agora coloca o miolo como visivel                                           
                                         if (num_aba == i+1)
                                         {  
                                          
                                         document.getElementById(tona).style.display='block';                                        
                                                                             
                                         }
                                
                                }    
                              
   } //da função

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    function fecha_aba(numero)
    {
    
     var aba_fechando='aba_'+numero;
     
//pega o número de abas abertas     
     var nabas = document.getElementById('direita').value;
     nabas = nabas - 1; 
     
       if (nabas > 1)
       {
     
                 event.stopPropagation();

                 document.getElementById(aba_fechando).style.display ='none';
     
//pega o nome (grupo) das abinhas
                            var nome_abinhas=document.getElementById(aba_fechando).getAttribute('name');
                            
//joga todas as abinhas em um array                            
                            var grupo_abinha = document.getElementsByName(nome_abinhas);

//corrige o número de abas abertas                            
 document.getElementById('direita').value = nabas;                                  
                            
//percorre a matriz colocando todas as abinhas maiores do que a fechada, uma posição a menos para cobrir a fechada
                                for(var i = 0; i < grupo_abinha.length; i++) 
                                {
                                  
                                   if (i > numero)
                                   { 
                                           var tona=grupo_abinha[i].id;
                                           
                                           var esquerda =  document.getElementById(tona).style.left;
                                           
                                           esquerda = esquerda.replace('%', " " );
                                           
                                           esquerda = esquerda - 8;
                                          
                                           esquerda = esquerda + '%';
                                            
                                           document.getElementById(tona).style.left = esquerda ;
                                   }
                                             
                                }          
                                   
//agora simula (faz de conta) que clicou na aba anterior a aba fechada
  clicou_aba('aba_'+(numero-1));

       }
       else
       {
                                      
//se a aba que ele está fechando é a primeira e não tem nenhuma outra  
        erro();
       
       }
     
    }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  function aba_cria()   //cria uma nova aba para o mesmo projeto que já está aberto. Pega os dados de conexao da ultima aba aberta
  {
                          
                        //pega o número de divs abertas
                        var nabas = document.getElementById('nabas').value;
                        var direita = document.getElementById('direita').value;
                        var nabas = parseFloat(nabas);
                        
                        var posicaox = direita * 8 - 8;
                        
          //   ccccc   rrrrrrrr    eeeeeeee        a        tttttttttttt     eeeee
          //   cc      rr  r r     ee            aa aa          tt          ee
          //   cc      rrrr        eeeeee      aa    aa         tt          eee
          //   cc      rr  r       ee         aaa  a  aaa       tt          ee
          //   ccccc   rr   r      eeeeeee   aaaa      aaa      tt          eeeeee
                                                                                  
                        ////////////////////////////
                        //cria uma div  que na verdade é a aba 
                        ////////////////////////////  
                          var div= document.createElement( 'div' );
                          
                        //pega o id da div que vai guardar as outras divs (pai)  
                          var pai = document.getElementById('abas');
                        
                        //associa a div pai com a nova
                           pai.appendChild(div); //elemento pai
                          
                        var id_aba = 'aba_'+nabas;
                        
                        //coloca um id na nova div  
                          div.setAttribute( 'id',id_aba);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        div.setAttribute( 'name','aba');
                        
                        //coloca atributos css na nova div 
                          div.setAttribute( 'style', 'position:absolute; border-radius: 1px; display:block; color:red; left:'+posicaox+'%;  top:0%; width:8%; height:100%; cursor:pointer; background-color:'+cores[ncores]);
                          
                        /////////////chama a função ao clicar na aba
                        document.getElementById(id_aba).addEventListener("click", function() {
                                                             
                                                        clicou_aba(id_aba);
                                                              
                                                              }, false);
                        
                        //////////////////////  
                        //cria um label para a aba
                        //////////////////////
                        var texto= document.createElement( 'text' );
                        
                        //define o pai do label que é o novo_id da camada que eu acabei de criar 
                        pai =  document.getElementById(id_aba);
                        
                        //apresenta o pai para o filho
                        pai.appendChild(texto);
                        
                        var id_texto = 'texto_'+nabas; 
                        
                        //coloca um id no novo label
                          texto.setAttribute( 'id',id_texto);
                          
                        //coloca um nome no novo label
                          texto.setAttribute( 'name','label_aba');  
                          
                          texto.setAttribute( 'style', 'color:red; font-family:ubuntu,arial; left:25%');
                          
                        //coloca new como parametro para o label desta aba
                        document.getElementById(id_texto).innerText='New...'+nabas; 
                        
                        //////////////////////
                        //cria uma div  para fechar a aba 
                        //////////////////////
                          var div_fechar= document.createElement( 'div' );
                          
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_aba);
                        
                        //associa a div pai com a nova aba de fechar
                           pai.appendChild(div_fechar); //elemento pai
                          
                        var id_aba_fechar = 'aba_fechar'+nabas;
                        
                        //coloca um id na nova div  
                          div_fechar.setAttribute( 'id',id_aba_fechar);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        div_fechar.setAttribute( 'name','bt_fechar');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                          div_fechar.setAttribute( 'style', 'position:absolute;  display:block; left:88%;  top:0%; width:5%; height:50%; cursor:pointer');
                          
                        ////////////////////////
                        //cria um texto X para o botão fechar
                        //////////////////////////
                        
                        var texto2= document.createElement( 'text' );
                        
                        //define o pai do label que é o novo_id da camada que eu acabei de criar 
                        pai =  document.getElementById(id_aba_fechar);
                        
                        //apresenta o pai para o filho
                        pai.appendChild(texto2);
                        
                        var id_texto2 = 'texto2_'+nabas; 
                        
                        //coloca um id no novo label
                          texto2.setAttribute( 'id',id_texto2);
                          
                          texto2.setAttribute( 'style', 'font-family:verdana; color:#2B2C33; font-weight: bold');
                          
                        //coloca x como parametro para o label desta aba
                        document.getElementById(id_texto2).innerText='X'; 
                        
                        /////////////coloca este botão para fechar efetivamente a div (evento onclick)
                        document.getElementById(id_aba_fechar).addEventListener("click", function() {
                                                             
                                                        fecha_aba(nabas-1);
                                                              
                                                              }, false);
                                                              
                        ////////////////////////
                        //cria a div pai dos editores de texto
                        ////////////////////////
                        
                        //cria a div  
                        var div_editor_pai= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById('editores');
                        
                        //associa a div pai com a nova div miolo
                           pai.appendChild(div_editor_pai); //elemento pai
                          
                        //define a id dela
                        var id_editor_pai = 'aba_editor_pai'+nabas;
                        
                        //coloca um id na nova div  
                          div_editor_pai.setAttribute( 'id',id_editor_pai);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        div_editor_pai.setAttribute( 'name','dv_editores_pai');
                        
                        //coloca atributos css na nova div   +cores[ncores]  #FFFFFF
                         
                          div_editor_pai.setAttribute( 'style', 'position:absolute;  display:block; background-color:#FFFFFF; font-family:arial; left:0%;  top:0%; width:99%; height:100%; z-index:11');
                          
                        ////////////////////////
                        //cria o editor principal (div)  editor_main
                        //<div id=\"editor\" style=\"\" onscroll=ajusta(); onkeydown=\"ehtab(event,'test');conta_linhas(event);\" onkeyup=\"reservada(event,0);\"   onkeypress=\"reservada(event,1);\"></div>
                        ////////////////////////
                        
                        //cria a div  
                        var div_editor= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_editor_pai);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(div_editor); //elemento pai
                          
                        //define a id dela
                        var id_editor = 'editor_main'+nabas;
                        
                        //coloca um id na nova div  
                          div_editor.setAttribute( 'id',id_editor);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        div_editor.setAttribute( 'name','dv_editor_main');
                        
                        //coloca atributos css na nova div   +cores[ncores] overflow: auto;
                         
                          div_editor.setAttribute( 'style', 'position:absolute; white-space: pre; color:#463933; background-color:#F0F4F8; overflow: auto; font-family:arial; font-size:100%; display:block;   width:87.5%; height:96.7%; left:14.4%; top:0.5%; border-style:solid; border-width:0.3px;z-index:10');
  								  //div_editor.setAttribute( 'style', 'position:absolute;color:#463933;  font-family:arial; font-size:100%; background-color:#EEEEEE; overflow: hidden;  left:12.3%; width:87.5%; height:96.7%; top:0.5%; z-index:12');
								
                         div_editor.setAttribute( 'contentEditable',true);
                         
                          document.getElementById(id_editor).addEventListener("scroll", function() {
                                                            
                                                            ajusta();                                
                                                              
                                                              }, false);                        
                          
                              /////////////coloca esta função para pintar as palavras reservadas
                        document.getElementById(id_editor).addEventListener("keypress", function(e) 
                        {                                      
                            
                             //posiciona a janela de autocompletar 
                             getSelectionCoords();
                             document.getElementById('dv_completar').style.left=posicao_x;
                             document.getElementById('dv_completar').style.top=posicao_y+20;
                             
                              if (e.keyCode == 13)
                              { 
                                     
                                     console.log(nova_linha);
                                     if (nova_linha == 1) //se não foi o enter que eu dei no autocompletar
                                     {
                                                     
                                                     tabs=0;
                                                    
                                                     var html = getSelectionHtml();
                                                     
                                                     for (var i=0; i<html.length; i++) 
                                                     {
                                                             var c = html.charAt(i);
                                                            
                                                             if (c==' ')
                                                             {
                                                             
                                                               tabs=tabs+1;
                                                            
                                                             }
                                                             else                        
                                                             {
                                                             
                                                                 i=10000;
                                                             
                                                             }
                                                     
                                                     }
                                     
                                     }
                                    
                              }
                             
                              if (e.keyCode != 40) //seta para baixo
                                                {
                                                    
                                                  reservada(e);
                                                  
                                                }//do se for espaço
                                                
                                  }, false);
                                   
                        document.getElementById(id_editor).addEventListener("keyup", function(e) 
                        {       
                          
                                  if (e.keyCode == 13) //seta para baixo
                                     {                   
        
                                             if (nova_linha == 1) //se é pra dar nova linha e não pra autocompletar
                                             {
                                             
                                                     for (var i = 0;i < tabs;i++)
                                                                          
                                                                            {
                                                                            
                                                                            insere_texto(' ');
                                                                            
                                                                           }
                                                                           
                                            } 
                                            
                                            nova_linha = 1; // 
                                           
                                     }        
                         
                        }, false);
                       
                           /////////////coloca esta função para pintar as palavras reservadas
                        document.getElementById(id_editor).addEventListener("keydown", function(e) 
                        {
                                                                                                 
                                    if (e.keyCode >-1 ) //backspace, delete,home, insert,pageup,paged,caps
                                    {
                                   
                                            //verifica se já era espaço e aperteou espaço novamente para ignorar a chamada
                                            var ja_espaco = document.getElementById('focar').value;
                                            
                                            //atualiza o que esta sendo digitado
                                            digitando(e,1);
                                            
                                            ehtab(e);
                                            
                                            if (e.keyCode == 8) //backspace
                                            {
                                            
                                              tabs=tabs - 1;
                                            
                                            }
                                            
                                            if (e.keyCode == 120) //f9
                                            {
                                              
                                              var texto_aba='';
                                              
                                               if (tem_texto_selecionado()==0)
                                               {
                                              
                                                 //o textarea auxiliar vai pegar o texto que está no editor 
                                                 document.getElementById('auxiliar').value=document.getElementById('editor_main'+indexador).innerText;
                                                consulta(document.getElementById('auxiliar').value,3);
                                                texto_aba=document.getElementById('auxiliar').value;
                                                texto_aba=texto_aba.substring(0,12);
                                            
                                               }
                                               else
                                               {
                                               
                                                var query = html_txt(texto_selecionado());
                                                consulta(query,3);
                                                texto_aba=html_txt(texto_selecionado());
                                                texto_aba=texto_aba.substring(0,12);
                                                
                                               }
                                               
                                               document.getElementById('texto_'+indexador).innerHTML='<label style="color:blue">'+texto_aba+'</label>';
                                                
                                            }
                                           
                                            if (e.keyCode == 118) //f7
                                            {
                                              
                                              verifica_resultado(3);
                                               
                                            } 
                              
										 if (e.ctrlKey && e.shiftKey)
										 {
										 
										 		if (e.keyCode==38)//seta cima
										 		{
										 		
												  event.preventDefault();
												  book_aponta(1);
												
										 		}
										 		
										 		if (e.keyCode==40)//seta baixo
										 		{
										 			
												event.preventDefault();
												book_aponta(0);
																	 			
										 		}		                              
                              
                           	}
                              
                              if (e.keyCode == 117) //F6
                              { 
                             
                                document.getElementById('editor_main'+indexador).innerText="";
                                document.getElementById('editor_main'+indexador).innerHTML="";
                                 
                              }
                                          
                                           if (e.keyCode != 40 && e.keyCode !=32 && e.keyCode !=13 && e.keyCode !=8 && e.keyCode>46 && e.keyCode<112 )
                                           {
                                           
                                                   if (!e.ctrlKey && !e.altKey)
                                                   { 
                                                   completa(palavra_digitando);
                                                   }
                                           }
                                           else
                                           {
                                             if (e.keyCode != 40) //se não for seta para baixo
                                             {
                                             div_esconde('dv_completar');
                                             }
                                           
                                           }
                                            
                                           if (e.keyCode == 40) //seta para baixo
                                            {
                                              
                                               if (document.getElementById('dv_completar').style.display=='block')
                                                  {
                                                     e.preventDefault(); 
                                                     document.getElementById('cb_completar').focus();
                                                     div_mostra('dv_completar');
                                                  }   
                                                     
                                            }    
                                          
                                 }
                                 else
                                 {
                                 
                                  if (e.keyCode ==13)
                                  {
                                
                                  conta_linhas_efetiva(e.keyCode);
                                  }
                                 
                                 }  
                                            
                                });
                                                                                                                                             
                                document.getElementById(id_editor).addEventListener("keyup", function(e) 
                                {                              
                               
                                        conta_linhas_efetiva(e.keyCode);  
                                        
                                });       
                                
                          ////////////////////////
                        //cria a div de contagem de linhas das linhas
                        //
                        ////////////////////////
                        
                        //cria a div  
                        var div_linhas= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_editor_pai);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(div_linhas); //elemento pai
                          
                        //define a id dela
                        var id_div_linhas = 'div_linha'+nabas;
                        
                        //coloca um id na nova div  
                          div_linhas.setAttribute( 'id',id_div_linhas);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        div_linhas.setAttribute( 'name','dv_linhas');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                         
                          div_linhas.setAttribute( 'style', 'position:absolute;color:#463933;  font-family:arial; font-size:100%; background-color:#EEEEEE; overflow: hidden;  left:12.3%; width:2%; height:96.7%; top:0.5%; z-index:12');
                          div_linhas.setAttribute( 'class', 'invisivel');
                                                           
                         div_linhas.innerHTML = '<div class="lineNumber">1</div>';
                         
//lista esquerda tabelas e arquivos                      
//lista esquerda tabelas e arquivos                         
//lista esquerda tabelas e arquivos                         
//lista esquerda tabelas e arquivos                         
//lista esquerda tabelas e arquivos                         
//lista esquerda tabelas e arquivos                         
//lista esquerda tabelas e arquivos                         
                         
                         ////////////////////////
                        //cria a lista de tabelas do banco
                        //
                        ////////////////////////
                        
                        //cria a div  
                        var div_tabelas= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_editor_pai);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(div_tabelas); //elemento pai
                          
                        //define a id dela
                        var id_tabelas = 'tabelas_main'+nabas;
                        
                        //coloca um id na nova div  
                          div_tabelas.setAttribute( 'id',id_tabelas);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        div_tabelas.setAttribute( 'name','dv_tabelas_main');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                         
                          div_tabelas.setAttribute( 'style', 'position:absolute; white-space: nowrap; font-family:arial; background-color:#F0F4F8; font-size:12; display:block; overflow: auto; width:12%; height:94%; left:0%; top:5%; border:0.1px solid;z-index:10');
                          
                       /////////////coloca esta função para pintar as palavras reservadas
                        document.getElementById(id_tabelas).addEventListener("mouseleave", function() {
                                                            
                                                             document.getElementById('popup_abrir').value=0;
                                                             document.getElementById('popup_banco').style.display='none';
                                                            
                                                              }, false); 
                                                              
                         ////////////////////////
                        //criaa uma div com a lista de arquivos ftp                     
                        // id_editor_pai                       
                        // arquivos_main = string com o prefixo, depois vem nabas pois ele sempre cria na maior
                        //
                        ////////////////////////  
                       //cria a div  
                        var variavel_div= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_editor_pai);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(variavel_div); //elemento pai
                          
                        //define a id dela
                        var id_arquivos_main = 'arquivos_main'+nabas;
                        
                        //coloca um id na nova div  
                          variavel_div.setAttribute( 'id',id_arquivos_main);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        variavel_div.setAttribute( 'name','arquivos_main');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                         
                           variavel_div.setAttribute( 'style', 'position:absolute; white-space: nowrap;background-color:#F0F4F8; font-family:arial; font-size:12; display:block; overflow: auto; width:12%; height:94%; left:0%; top:5%; border:0.1px solid;z-index:9');                                                  
                                                                 
                         ////////////////////////
                        //criaa uma div que são abas para mostrar tabelas ou arquivos                      
                        // div_tabelas                       
                        // id_abas_arquivos = string com o prefixo, depois vem nabas pois ele sempre cria na maior
                        //
                        ////////////////////////  
                       //cria a div  
                        var variavel_div= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_editor_pai);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(variavel_div); //elemento pai
                          
                        //define a id dela
                        var id_abas_arquivos = 'id_abas_arquivos'+nabas;
                        
                        //coloca um id na nova div  
                          variavel_div.setAttribute( 'id',id_abas_arquivos);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        variavel_div.setAttribute( 'name','id_abas_arquivos');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                         
                          variavel_div.setAttribute( 'style', 'position:absolute; white-space: nowrap; font-family:arial; font-size:12; background-color:'+cor+'; display:block; overflow: auto; width:12%; height:4.9%; left:0%; top:0%; border-style:solid; border-width:0.0px;z-index:11');                                                  
                                                                
                       ////////////////////////
                        //BOTÂO TABELAS criaa uma div que é o botão tabelas , uma aba que muda de arquivo para banco                       
                        // id_abas_arquivos                       
                        // bt_aba_database = string com o prefixo, depois vem nabas pois ele sempre cria na maior
                        //
                        ////////////////////////  
                       //cria a div  
                        var variavel_div= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_abas_arquivos);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(variavel_div); //elemento pai
                          
                        //define a id dela
                        var id_bt_aba_database = 'bt_aba_database'+nabas;
                        
                        //coloca um id na nova div  
                          variavel_div.setAttribute( 'id',id_bt_aba_database);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        variavel_div.setAttribute( 'name','bt_aba_database');
                        
                        //coloca um title  
                        variavel_div.setAttribute( 'title','Mysql tables');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                          //background-image:url(images/database2.png);
                          variavel_div.setAttribute( 'style', 'position:absolute; white-space: nowrap;cursor:pointer; font-family:arial;background-color:'+cor+'; background-image:url(images/database2.png);  background-position: center; background-repeat: no-repeat; background-size: 45% 60%;  display:block; overflow: auto; width:25%; height:90%; left:1.5%; top:5%; border-style:solid; border-width:0.0px;z-index:11');                                                  
                         
                        //tabela ou arquivo 
                          document.getElementById(id_bt_aba_database).addEventListener("click",function(){
                         
                                tabelas_ou_arquivos(1);
                         
                         },false);
                         
                          ////////////////////////
                        //BOTÂO ARQUIVOS criaa uma div que é o botão de arquivos (aba)                     
                        // id_abas_arquivos                       
                        // bt_aba_arquivos = string com o prefixo, depois vem nabas pois ele sempre cria na maior
                        //
                        ////////////////////////  
                       //cria a div  
                        var variavel_div= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_abas_arquivos);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(variavel_div); //elemento pai
                          
                        //define a id dela
                        var id_bt_aba_arquivos = 'bt_aba_arquivos'+nabas;
                        
                        //coloca um id na nova div  
                          variavel_div.setAttribute( 'id',id_bt_aba_arquivos);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        variavel_div.setAttribute( 'name','bt_aba_arquivos');
                        
                         //coloca um title  
                          document.getElementById(id_bt_aba_arquivos).title='Project Files';
                        
                        //coloca atributos css na nova div   +cores[ncores]
                         
                          variavel_div.setAttribute( 'style', 'position:absolute; white-space: nowrap;cursor:pointer; font-family:arial;background-color:'+cor+'; background-image:url(images/dev.png); background-position: center; background-repeat: no-repeat; background-size: 45% 60%; display:block; overflow: auto; width:25%; height:90%; left:27%; top:5%; border-style:solid; border-width:0.0px;z-index:11');                                                  
                        
                        document.getElementById(id_bt_aba_arquivos).addEventListener("click",function(){
                        
                            tabelas_ou_arquivos(2);
                        
                        },false);
                       
                       ////////////////////////
                        //criaa div que mostra os resultados da query
                        //
                        ////////////////////////
                        
                        //cria a div  
                        var div_query= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_editor_pai);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(div_query); //elemento pai
                          
                        //define a id dela
                        var id_query = 'query_main'+nabas;
                        
                        //coloca um id na nova div  
                          div_query.setAttribute( 'id',id_query);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        div_query.setAttribute( 'name','dv_query_main');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                                                                                                                                                                                                 
                          div_query.setAttribute( 'style', 'position:absolute; white-space: nowrap; font-family:ubuntu,arial; font-size:14; background-color:'+cor+'; display:none; overflow: auto; width:87.5%; height:45%; left:14.4%; top:55%; border-style:solid; border-width:0.3px;z-index:11');
                           
                       ////////////////////////
                        //cria o iframe que mostra os resultados da query cria o grid
                        //
                        ////////////////////////
                          
                        //cria iframe  
                        var query_iframe= document.createElement( 'iframe' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_query);
                        
                        //associa a div pai com o novo iframe
                           pai.appendChild(query_iframe); //elemento pai
                          
                        //define a id dela
                        var id_query_iframe = 'query_iframe_main'+nabas;
                        
                        //coloca um id na nova div  
                          query_iframe.setAttribute( 'id',id_query_iframe);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        query_iframe.setAttribute( 'name','iframe_main');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                        query_iframe.setAttribute( 'style', 'width:99.5%; height:98.5%; left:0%; top:0%;');
                        
                       ////////////////////////
                        //criaa uma barra de ferramentas para a janela da query
                        //
                        ////////////////////////
                       //cria a div  
                        var variavel_div= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_editor_pai);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(variavel_div); //elemento pai
                          
                        //define a id dela
                        var id_ferramentas_query = 'ferramentas_query'+nabas;
                        
                        //coloca um id na nova div  
                          variavel_div.setAttribute( 'id',id_ferramentas_query);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        variavel_div.setAttribute( 'name','ferramentas_query');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                         
                          variavel_div.setAttribute( 'style', 'position:absolute; white-space: nowrap; font-family:arial; background-color:'+cor+'; font-size:12; display:block; overflow: auto; width:89.4%; height:3%; left:12.3%; top:97.2%; border-style:solid; border-width:0.0px;z-index:11');                                                  
                        
                         ////////////////////////
                        //criaa uma div que fecha a barra de ferramentas da query                 
                        ////////////////////////  
                      
                        var variavel_div= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_ferramentas_query);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(variavel_div); //elemento pai
                          
                        //define a id dela
                        var id_bf_fecha_ferramentas_query = 'bf_fecha_ferramentas_query'+nabas;
                        
                        //coloca um id na nova div  
                          variavel_div.setAttribute( 'id',id_bf_fecha_ferramentas_query);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        variavel_div.setAttribute( 'name','bf_fecha_ferramentas_query');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                          variavel_div.setAttribute( 'style', 'position:absolute; white-space: nowrap; font-family:arial; font-size:12; cursor:pointer; display:block; overflow: auto; width:1%; height:98%; left:98.9%; top:0.5%; border-style:solid; border-width:0.0px;z-index:11');
                          
                         /////////////coloca este botão para fechar efetivamente a div (evento onclick)
                         document.getElementById(id_bf_fecha_ferramentas_query).addEventListener("click", function() {
                                     
                                    verifica_resultado(3); //se clicou quer inverter
                                      
                                      }, false);
                                      
                         ////////////////////////
                        //cria um texto ± para o botão fechar a barra
                        //////////////////////////
                                                
                        var texto3= document.createElement( 'text' );
                        
                        //define o pai do label que é o novo_id da camada que eu acabei de criar 
                        pai =  document.getElementById(id_bf_fecha_ferramentas_query);
                        
                        //apresenta o pai para o filho
                        pai.appendChild(texto3);
                        
                        var id_texto3 = 'texto3_'+nabas; 
                        
                        //coloca um id no novo label
                          texto3.setAttribute( 'id',id_texto3);
                          
                          texto3.setAttribute( 'style', 'font-family:verdana; color:#2B2C33; font-weight: bold;');
                          
                        //coloca x como parametro para o label desta aba
                        document.getElementById(id_texto3).innerText='±'; 
                        
                       ////////////////////////
                        //criaa um select para pegar dados do projeto clicado pelo usuário, como ftp e banco etc
                        //
                        ////////////////////////
                        
                        //cria a div  
                        var div_dados= document.createElement( 'div' );
                        
                        //pega o id da div que vai guardar as outras divs (pai)  
                        pai =  document.getElementById(id_editor_pai);
                        
                        //associa a div pai com a nova div editor
                           pai.appendChild(div_dados); //elemento pai
                          
                        //define a id da div
                        var id_dados = 'dados_main'+nabas;
                        
                        //coloca um id na nova div  
                          div_dados.setAttribute( 'id',id_dados);
                          
                        //coloca um nome para o grupo, portanto, todos tem o mesmo nome, para depois poder percorrer  
                        div_dados.setAttribute( 'name','dv_dados_main');
                        
                        //coloca atributos css na nova div   +cores[ncores]
                         
                          div_dados.setAttribute( 'style', 'position:absolute; white-space: nowrap; font-family:arial; font-size:12; color:rgba(0, 0, 255,0.4); display:none; overflow: auto; width:15%; height:45%; left:2%; top:55%; border-style:solid; border-width:0.3px;z-index:11');
                                                                                                
                         //+++++++++++++++cria o select óN9N9N9N9 é carnaval
                        var select_dados= document.createElement( 'select' );
                        
                          //pega o id da div que vai guardar o select
                        pai =  document.getElementById(id_dados);
                        
                        //associao select com a nova div
                           pai.appendChild(select_dados); //elemento pai
                          
                         //define a id do select
                        var id_select_dados = 'select_dados_main'+nabas;
                        
                         //coloca um id no select 
                          select_dados.setAttribute( 'id',id_select_dados);
                        
                         ////------------------------------------------------------
                        //--agora atualiza dados como número de abas etc
                       ////------------------------------------------------------
                         
                        clicou_aba(id_aba);
                        
                        //a guia que estou para uso em todo o programa
                        indexador = document.getElementById('aba_ativa').value;
                        
                        nabas++;
                        direita++;
                        //coloca o novo número de abas
                        document.getElementById('nabas').value = nabas;
                        
                        //coloca o novo número de abas abertas para calcular posição sepois etc
                        document.getElementById('direita').value = direita;
                        
                        //muda as cores das guias
                         ncores++;
                          
                        if (ncores % 5 == 0)
                        {
                          ncores=1;
                          
                        }
                          
                       tabelas_ou_arquivos(ultimo_taboufile);     
  
  }  //fim da função aba_cria que é chamada ao clicar no botão +
  
//conta as linhas após abrir ou trocar de arquivo
function conta_linhas_forca()
{

   //pega a div linha correta , da aba aberta
  lineNumberDiv=document.getElementById('div_linha'+indexador);
   
  //o textarea auxiliar vai pegar o texto que está no editor 
  document.getElementById('auxiliar').value=document.getElementById('editor_main'+indexador).innerText;
  
  var texto = document.getElementById('auxiliar').value;

 var nlinhas = texto.split('\n').length;
 
                  var innertotal = '';  
                
                  var dif =  nlinhas - n_linhas;
                 
                                   console.log('nlinhas'+nlinhas);
                                   console.log('n_linhas'+n_linhas);                                
                                                
                                  console.log('dif'+dif);
                                  
                                  dif=-1;
                  
                                  if (dif < 0)  //se apagou linhas vai preencher tudo novamente
                                  {
                                  
                                      lineNumberDiv.innerHTML = "";
                                      dif = nlinhas;
                                      n_linhas=0;
                                  
                                  }
                                  else //se acrescentou só cotinua de onde parou
                                  {
                                  
                                   innertotal = lineNumberDiv.innerHTML;
                                  
                                  }
                                  
                                   //o edit nlinhas recebe o número de linhas
                                 
                                //enquanto tiver diferença entre o que está mostrando (n_linhas) e do que deveria (nlinhas)
                                for (var i = dif; i > 0; i --)
                                {
                                    
                                    n_linhas = n_linhas + 1;
                                    innertotal += '<div id="dv_linha_'+indexador+'_'+n_linhas+'" onCLick=book_cria('+n_linhas+'); class="lineNumber">'+n_linhas+'</div>';
                                   
                                }
                 
                                lineNumberDiv.innerHTML = innertotal;
                                 
                                n_linhas=nlinhas; //a variável global recebe o novo número de linhas
                                
                                //coloca novamente em vermelho quem estava marcado
                                book_marca();
                        
}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function conta_linhas_efetiva(tecla)
{

  if(tecla == 13 || tecla==8 || tecla==46 )
  {  
  conta_linhas_forca();
  }

} //da função
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function conta_linhas(event) 
{
 var tecla=event.keyCode;  
 setTimeout(conta_linhas_efetiva(tecla));  
 
}

//faz com que seja identado o texto
function identar(direita)
{
        
        if (direita==1)
        {
       
        //document.execCommand('indent', false, null);
        insere_texto('    ');
        tabs=tabs+1;
        
        } 
        else
        {
        
        //document.execCommand('outdent', false, null);
        
        if (tabs > 0)
        {
        tabs=tabs-1;
        }
        
        }
        
}

//faz com que seja inserida uma certa palavra
                function insere_texto(texto)
               {
                //var selectionRange = saveSelection(); 
                document.execCommand('insertHTML', true, texto);
                //restoreSelection(selectionRange);
               }
               
//faz com que seja inserida uma certa palavra, mas no mesmo lugar
                function insere_texto_cola(texto)
               {
               
                texto=texto.replace(/"/g, "§¦§");
                texto=texto.replace(/"/g, "§¦§");
                texto=texto.replace(/'/g, "¦§¦");
                texto=texto.replace(/  /g, "&nbsp");//'
               
                var selectionRange = saveSelection();
               
                document.execCommand('insertHTML', true, texto);
                
                restoreSelection(selectionRange);
               }

//completa textos como { por exemplo ou tags
               
//faz com que as duas divs fiquem na mesma posição caso o usuário role
               function ajusta()
               {
               	
               // sincroniza com a div que conta as linhas
               document.getElementById('div_linha'+indexador).scrollTop = document.getElementById('editor_main'+indexador).scrollTop; 
               //document.getElementById('editor_main'+indexador).scrollTop=document.getElementById('div_linha'+indexador).scrollTop; 
               
              // document.getElementById('div_linha'+indexador).style.height=document.getElementById('editor_fake'+indexador).style.height;    
                              
               }           
                               
//faz com que a tecla tab aja normalmente                                        
                function ehtab(event)
                {
                         
                         if (event.keyCode == 9) 
                                { // tab key
                                      
                                        if (tem_texto_selecionado()==0)
                                        {
                                              
                                                event.preventDefault();  // this will prevent us from tabbing out of the editor
                                        
                                                // now insert four non-breaking spaces for the tab key
                                                var editor = document.getElementById('editor_main'+indexador);
                                                
                                                insere_texto('    ');
                                                
                                        }
                                        else //se tem texto selecionado é pra identar
                                        {
                                        
                                                 if (!event.shiftKey) 
                                                 {
                                                 
                                                         event.preventDefault();
                                                         identar(1);
                                                 }
                                                 else
                                                 {
                                                        event.preventDefault();
                                                         identar(0);
                                                       
                                                 }
                                         
                                        }
                                        
                                        zera_palavra();
                                       
                                }
                        
                } 

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
//substitui somente a primeira ocorrencia por '' 

function tira_1x(palavra,tira)
{
    
    var resultado = palavra.replace(tira,""); 
    
    return resultado;   

}

//acrescenta um sifixo na palavra digitada caso a encontre como reservada
                //abre uma janela pequena para o auto - completar
function completa(palavra)
{
                         //minúscula
                         palavra=palavra.toLowerCase(); 
                        
                         //pega o tamanho da palavra
                         tamanho_palavra = palavra.length;       
                
                       //apaga todos os valores temporários nos arrays
                       apaga_temporarios();
                       
                        //paga e zera o combo com a lista de palavras que aparece para o usuário
                        var combo=document.getElementById('cb_completar');
                        combo.options.length = 0;
                        
                        //pega a largura do array de palavras
                        var quant = arr_palavras.length;
                        
                        var achou = 0;
                        var ver = '';
                        var valor = '';
                        
                        //enquanto tiver palavras verifica se elas começam com a palavra digitada
                        for (var i=0; i < quant; i++)
                        {
                                                 
                            //se parte do valor no array for igual ao que o usuário digitou
                            if(arr_palavras[i].slice(0, tamanho_palavra) == palavra) 
                            {
                                
                                achou=1;
                               
                               //ele vai ver o completa
                               ver=arr_completa[i];
                               
                               //tira o que o usuário já digitou
                               
                              valor = i+';§;'+ver;
                               
                               //se achou coloca os dados no combo
                               combo.options[combo.options.length] = new Option(ver,valor);
                               
                            }
                        
                        }//do laço
                        
                      if (achou == 1)
                      {
                       
                       div_mostra('dv_completar');
                      
                      }
                      else
                      {
                      
                       div_esconde('dv_completar');
                      
                      }
                        
}//da função

//ao abrir um arquivo ele vai percorrer todas as palavras e vai aplicar as mudanças, depois jogar no navegador. Esta unção é chamada no formulario_ftp_executa.php
function reservada_arquivo()
{

   var conteudo_arquivo = document.getElementById('auxiliar').value; 
   
   conteudo_arquivo=conteudo_arquivo.replace(/</g, "&lt;");
   conteudo_arquivo=conteudo_arquivo.replace(/>/g, "&gt;");

       apaga_temporarios();
       
       //pega a quantidade de palavras reservadas
       n_palavras = arr_palavras.length;
       
       //enquanto tiver palavras vai substituindo no texto as palavras pelos seus prefixos e sufixos
        for (var i=0; i < n_palavras; i++)
        {
        
             var palavra_reservada = arr_palavras[i];

             var prefixo = arr_prefixo[i];
             var sufixo =  arr_sufixo[i];
             
              prefixo=prefixo.replace(/&lt;/g, "<");
              prefixo=prefixo.replace(/&gt;/g, ">");
                                                 
              sufixo=sufixo.replace(/&lt;/g, "<");
              sufixo=sufixo.replace(/&gt;/g, ">");
             
               if (palavra_reservada != '[' && palavra_reservada !='(' && palavra_reservada != '<')
                                {	
        	        	var re = RegExp( '\\b'+palavra_reservada+'\\b','g' );
        	        	
        	        	}
        	        	else
        	        	{
        	        	
        	        		//var re = RegExp( '\\b\\'+palavra_reservada+'\\b','g' );
        	        		      
                                               //alert(prefixo+word+sufixo);
        	        	
        	        	}
                             
                                 //console.log('inicio _______________________'); 
        		        //console.log(conteudo_arquivo);
                                conteudo_arquivo = conteudo_arquivo.replace(re, prefixo+palavra_reservada+sufixo);
               		        //console.log(conteudo_arquivo);
                                //console.log('fim _______________________'); 
             
        }     
       
       window.parent.document.getElementById('editor_main'+indexador).innerHTML=conteudo_arquivo;
  
      // console.log(conteudo_arquivo);
   
      //<!--agora conta as linhas e coloca o número correto delas-->
      conta_linhas_forca();

}

 function reservada(e) //procura por palavras reservadas enquanto o usuário digita 
 {
                                          if (e.keyCode ==32)//spaço   
                                          {
   
                                            //tecla
                                            var elt = e.target;
                                            
                                            //verifica se a palavra é reservada
                                            var ehreservada =eh_reservada(palavra_anterior); 
                                            
                                            if (ehreservada > -1)//se retornar zero não achou, se retornar a palavra achou
                                            {
                                        
                                                    var prefixo = arr_prefixo[ehreservada];
                                                    var sufixo =  arr_sufixo[ehreservada];
                                                    var palavra = arr_palavras[ehreservada];
                                                    
                                                 prefixo=prefixo.replace(/&lt;/g, "<");
                                                 prefixo=prefixo.replace(/&gt;/g, ">");
                                                 
                                                 sufixo=sufixo.replace(/&lt;/g, "<");
                                                 sufixo=sufixo.replace(/&gt;/g, ">");
                                                 
                                                    e.preventDefault();
                                                    elt.focus();
                                                    sel = document.getSelection();
                                                    sel.modify("extend", "backward", "word");
                                                    range = sel.getRangeAt(0);
                                                    //console.log(range.toString().trim());
                                                    range.deleteContents();
                                                    var el = document.createElement("div");                                                    
                                                    el.innerHTML = prefixo+palavra+sufixo+' ';
                                                    
                                                     zera_palavra();
                                                    
                                                    var frag = document.createDocumentFragment(), node;
                                                    while (node = el.firstChild)
                                                     {
                                                        frag.appendChild(node);
                                                    }
                                                    range.insertNode(frag);
                                                    range.collapse();
                                                    
                                            } //se achou a palavra reservada      
                                            else
                                            { 
                                           
                                           //div_esconde('dv_completar');
                                            
                                            }
                                       }     
 
 }  
 
 function eh_reservada(ehounao)
 {
                
  //percorre todo o elemento em busca de palavras reservadas   
                                var n_palavras=arr_palavras.length;
                                var achou=-1;
       
                                ehounao=ehounao.toLowerCase();
                                
        //enquanto tiver palavras para percorrer no select ele vai percorrendo e substituindo                                                         
                                for (var i=0;i<n_palavras;i++)
                                {    
        
                                         //alert('alhos com bugalhos '+ehounao+' '+word);
                                                              
                                         var word=arr_palavras[i];
                                        
                                         if(ehounao == word) //se achou a ultima palavra digitada na lista ignorando maiuscula e minuscula muda ela 
                                         
                                         {
                                         
                                          achou = i;
                                         
                                         }
                                        
        			}
        			
        			return achou;
 
 }

 //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//captura a palavra que está sendo digitada		
		function digitando(event,press) 
        	{               
        
                     var tecla = event.keyCode;
        		
        	     if (tecla<90 && tecla>46)
                     {  
                	      
                              var letra_digitando=String.fromCodePoint(tecla);;
                              //String.fromCodePoint(tecla);
                              //String.fromCharCode(tecla);
                              
                              //alert(letra_digitando);
                              //alert(tecla);
                              //alert( String.fromCodePoint(tecla));
                              
                              //somente o evento onkeypress para não bugar tudo
                              if (press==1)
                              {
                              
                                        palavra_digitando=palavra_digitando+letra_digitando;
                                        
                		        document.getElementById('ultima_palavra').value=palavra_digitando;
                		        document.getElementById('focar').value=tecla; //a ultima tecla digitada vem pra k em forma de código para vir tab, enter tem que ser assim
                	     } 
        	        
        	     }   
        	     else
                     {
                     
                             if (tecla ==32 || tecla ==13 || tecla==9 ) // espaço e  enter e tab
                             {
                                  zera_palavra();
                                    
                             }
                     
                     }   
        	                                   
        	}    
                
function getSelectionCoords() {
    var sel = document.selection, range, rect;
    var x = 0, y = 0;
    if (sel) {
        if (sel.type != "Control") {
            range = sel.createRange();
            range.collapse(true);
            x = range.boundingLeft;
            y = range.boundingTop;
        }
    } else if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();
            if (range.getClientRects) {
                range.collapse(true);
                if (range.getClientRects().length>0){
                    rect = range.getClientRects()[0];
                    x = rect.left;
                    y = rect.top;
                }
            }
            // Fall back to inserting a temporary element
            if (x == 0 && y == 0) {
                var span = document.createElement("span");
                if (span.getClientRects) {
                    // Ensure span has dimensions and position by
                    // adding a zero-width space character
                    span.appendChild( document.createTextNode("\u200b") );
                    range.insertNode(span);
                    rect = span.getClientRects()[0];
                    x = rect.left;
                    y = rect.top;
                    var spanParent = span.parentNode;
                    spanParent.removeChild(span);

                    // Glue any broken text nodes back together
                    spanParent.normalize();
                }
            }
        }
    }
    
     posicao_x=x;
     posicao_y=y;
    
     document.getElementById('pos_x').value=x;
    document.getElementById('pos_y').value=y;
    
    //return { x: x, y: y };
}                


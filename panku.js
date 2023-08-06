<script>

  var tab_index = 0;
  var selected_field = 0;
  var eh = 3;
  var segur_left='';
  var arr_connections = [];
  var arr_tables = [];
  var arr_memos= [];
  var arr_grids = [];
  var arr_describe_fields = [];
  var arr_describe_fields_types = [];
  var arr_describe_selected_fields = [];
  var describe_mod=0;
  var pointer = -1;

        function selected_fields()
        {

            arr_describe_fields = window.parent.document.getElementsByName('panku_describe_field');
            arr_describe_selected_fields = [];

            for (let i = 0;i < arr_describe_fields.length;i++){

              let id = arr_describe_fields[i].id;

              let checkBox = document.getElementById(id);

              if (checkBox.checked == true){

                  arr_describe_selected_fields.push(id);

              }

            }

        }

        function is_selected(field){

            for (let i = 0;i < arr_describe_selected_fields.length;i++){

              let field_in_arr = arr_describe_selected_fields[i];

              field_in_arr = field_in_arr.replace('panku_describe_field_','');

              //alert('comparaloei-->'+field_in_arr+' com '+field);

              if (field_in_arr == field){

                selected_field = 1;
                return  1;

              }

            }

            selected_field = 0;
            return 0;

        }

        function return_enum(field_type,field_name,table_name){

          let id = table_name +'_'+field_name;
          let arr_enum = field_type.split('@panku@');

          let before = '<xmp><select class="form_select" id="'+id+'" name="'+field_name+'"></xmp>';
          let core = '';

          for (i=1;i<arr_enum.length;i++){

            if (arr_enum[i] != ',' && arr_enum[i] != ')' ){
            core = core + '<xmp><option value="'+arr_enum[i]+'">'+arr_enum[i]+'</option></xmp><br>';
            }

          }

          let input_field = before+core+'<xmp></select></xmp>';

          return input_field;

        }

        function php_tool(value,type,answer)
        {

            let line='';
            let line2='';
            let new_line = '';
            let field = '';

            if (type == 1){ //php tools

              for (let i = 0;i < arr_describe_selected_fields.length;i++){

                  new_line = value;
                  field = arr_describe_selected_fields[i];

                  let arr_all = field.split(';;;');

                  field = arr_all[0];

                  field = field.split('panku_describe_field_').join('');

                  new_line = new_line.split('panku_describe_field').join(field);

                  line = line + new_line;

              }

              if (answer.length > 0){

                line = line + answer;

              }

              window.parent.document.getElementById('dv_memo').innerHTML = line;

            }

            if (type == 2){ //insert

              line = 'insert into '+value+'(';
              line2= ' values (';

              let scape = 0;

              if (confirm('Use \\" ?')){

                scape = 1;

              }

              for (let i = 0;i < arr_describe_selected_fields.length;i++){

                  field = arr_describe_selected_fields[i];

                  let arr_field = field.split(';;;');

                  field = arr_field[0];

                  field = field.split('panku_describe_field_').join('');

                  line = line + field + ',';

                  if (scape == 0){
                    line2 = line2 + '"$'+field+'"'+',';
                  }else{
                    line2 = line2 + '\\"$'+field+'\\"'+',';
                  }

                }

                line = line+')'+line2+');';

                line = line.split(',)').join(')');

                 window.parent.document.getElementById('dv_memo').innerHTML = line;

            }

            if (type == -3){ //update

              let arr_valor = value.split(',');

              let table_name = arr_valor[0];
              let id_field = arr_valor[1];

              line = 'update '+table_name+' set ';

              let scape = 0;

              if (confirm('Use \\" ?')){

                scape = 1;

              }

              for (let i = 0;i < arr_describe_selected_fields.length;i++){

                field = arr_describe_selected_fields[i];

                let arr_field = field.split(';;;');

                field = arr_field[0];

                field = field.split('panku_describe_field_').join('');

                if (scape == 0){
                   line = line + field +'='+'"$'+field+'"'+',';
                }else{
                  line = line + field +'='+'\\"$'+field+'\\"'+',';
                }

               }

               line = line +' where '+id_field+' = '+' $'+id_field;

               line = line.split(', where').join(' where');

               window.parent.document.getElementById('dv_memo').innerHTML = line;

            }

            if (type == 4){ //form

              let table_name=value;

              line = window.parent.document.getElementById('dv_memo').innerHTML;

              let field_clean = field.replace('_','');

              let core = '';
              let core_class ='';
              let core_inputs='';
              let core_all ='';
              let cont=0;
              let cont_line=0;

              let id='';

              for (let i = 0;i < arr_describe_selected_fields.length;i++){

                let field = arr_describe_selected_fields[i];

                let arr_type = field.split(';;;');

                field = arr_type[0];
                let field_type = arr_type[1];

                field = field.replace('panku_describe_field_','');

                id=table_name+'_'+field;

                core = core + 'bx_' + field+' ';

                core_class = core_class + '</xmp><xmp>.bx_' + field+'{ </xmp><xmp>';
                core_class = core_class + '</xmp>&nbsp<xmp> grid-area:'+ 'bx_' + field+';</xmp><xmp>';
                core_class = core_class +'</xmp>&nbsp<xmp> justify-self:center;</xmp><xmp>}';

                core_inputs = core_inputs + '<xmp><div class="bx_' + field+'"></xmp>';
                core_inputs = core_inputs + '<xmp><label class="form_label" for="'+id+'">'+field+':</label></xmp>';

                if (field_type.indexOf('int')>=0){
                  core_inputs = core_inputs + '<xmp><input class="form_input" type="number" min="0" step="1" name="'+field+'" id="'+id+'"></xmp>';
                }else if (field_type.indexOf('decimal(')>=0){
                  core_inputs = core_inputs + '<xmp><input class="form_input" type="number" step="any" name="'+field+'" id="'+id+'"></xmp>';

                }else if(field_type.indexOf('enum(')>=0){

                  core_inputs = core_inputs + return_enum(field_type,field,table_name);

                }
                else if (field_type.indexOf('date')>=0){

                  core_inputs = core_inputs + '<xmp><input class="form_input" type="date" name="'+field+'" id="'+id+'"></xmp>';

                }else if (field_type.indexOf('time')>=0){

                  core_inputs = core_inputs + '<xmp><input class="form_input" type="time" name="'+field+'" id="'+id+'"></xmp>';

                }else if (field_type.indexOf('text')>=0){

                  core_inputs = core_inputs + '<xmp><textarea class="form_textarea" name="'+field+'" id="'+id+'" rows="5" cols="25"></textarea></xmp>';
                }else {

                  core_inputs = core_inputs + '<xmp><input type="text" class="form_input" name="'+field+'" id="'+id+'"></xmp>';

                }

                core_inputs = core_inputs + '</xmp>&nbsp&nbsp&nbsp<xmp></div></xmp>';

                cont = cont + 1;
                cont_line = cont_line + 1;

                if (cont >= answer && cont % answer ==0){ //breake the line

                  core_all = core_all + '"' + core +'" </xmp><xmp>';
                  core = '';
                  cont_line = 0;

                }

              }

              core=core+'@panku_dots@';

              cont_line = answer - cont_line;

              let dots='';
              for (let i=0;cont_line>i;i++){

                dots = dots +". ";

              }

              core=core.replace('@panku_dots@',dots);

              if (core != ''){

                core = '"' + core +'"; </xmp><xmp>}';

              }else{

                core_all = core_all + '; <xmp>}';

              }

              core_all = core_all + core + core_class;

              core_inputs=core_inputs.replace('<xmp><div class="bx_','<div class="bx_');

              line = line.replaceAll('@panku_table@',table_name);
              line = line.replaceAll('@panku_areas_css@',core_all);
              line = line.replaceAll('@panku_areas_html@',core_inputs);

              window.parent.document.getElementById('dv_memo').innerHTML = line;
            }

            if (type == 8){ //table structure

              let line = value;
              window.parent.document.getElementById('dv_memo').innerHTML = line;

            }

            if (type == 9){ //table data

              value = value.replaceAll('*°**°*','null');
              value = value.replaceAll('*°*','"');
              value = value.replace(/.$/, ';'); //change just the last string

              window.parent.document.getElementById('dv_memo').innerHTML = value;

            }

         }

        function run(link)
        {

            let i_frame = document.getElementById('if_project_exec');
            i_frame.src = link;

        }

        function f9(){

          if(event.keyCode == 120){ //f9

            query_exec();

          }

        }

        function enable_back(){

          alert(pointer);

          segur_left = window.parent.document.getElementById('dv_table').innerHTML;
          window.parent.document.getElementById('dv_back_tool').style.display = 'block';

          var all = document.getElementsByName('main_tool');

          for(var i = 0; i < all.length; i++)
          {

              all[i].style.display = 'none';
          }

        }

        function left_menu_add(tables){

            arr_tables[tab_index] = tables; //see connect.js show_tables function

        }

        function left_back(){

            window.parent.document.getElementById('dv_table').innerHTML = arr_tables[tab_index];

        }

        function memo_back(memo){

          if (pointer > 0){
            pointer--;
          }

          window.parent.document.getElementById('dv_memo').innerHTML = arr_memos[pointer];

        }

        function memo_next(){

          if (pointer < arr_memos.length-1){
            pointer++;
          }

            window.parent.document.getElementById('dv_memo').innerHTML = arr_memos[pointer];

        }

        function save_memo(){

          arr_memos.push(window.parent.document.getElementById('dv_memo').innerHTML);
          pointer++;

        }

        function left_menu_tools(){

          if (segur_left !=''){
          window.parent.document.getElementById('dv_table').innerHTML = segur_left;
          }

        }

        function grid_back(){

          window.parent.document.getElementById('dv_grid').innerHTML = arr_grids[tab_index];

        }

        function save_grid(){

          arr_grids[tab_index] =  window.parent.document.getElementById('dv_grid').innerHTML;

        }

        function editor_pass(sql_command,exec,ret,describe_need,question){

                var answer = '';

                var memo = document.getElementById('dv_memo').innerText;

                if (sql_command.indexOf('@panku_data@')>=0){
                  let query = document.getElementById('dv_memo').innerText;

                  if ( query.indexOf('select ') >= 0 && query.indexOf('from ') >= 0 ){

                    sql_command = sql_command + query;

                  }
                  else

                  sql_command = 'type a valid query with select hear before';

                }

                if (question != 0 && question != undefined){

                  answer = prompt(question,'');

                }

                if (describe_need ==1 && describe_mod==0){

                    alert('Click in DESCRIBE button first.');

                }
                else
                {

                  if (answer != ''){

                    window.parent.document.getElementById('dv_memo').innerText = sql_command+';'+answer;

                   }
                   else
                   {

                    window.parent.document.getElementById('dv_memo').innerText = sql_command;

                   }

                    if (exec == 1){
                      query_exec(); //go to dbtools
                    }

                    if (ret ==1)
                    {
                      memo_back(memo);
                    }

                    selected_fields();

                }

        }

        function update(table,field,value,key,id){

          var value = value.replace(/”/g, "\'");

          editor_pass('update '+table+' set '+field+' = '+'"'+value+'" where '+key+'='+id,0,0,0,"0");

        }

        function left_popup_php(top,table){

          let menu='';

          enable_back();

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@php_get@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PHP GET</h6></a></font></div>';

          top=top+4;
          menu=menu + '</td><div onclick="editor_pass(\'@php_post@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PHP POST</h6></a></font></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@panku_mysql_insert@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PHP Insert</h6></a></font></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@panku_mysql_update@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PHP Update</h6></a></font></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@php_property@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PHP property</h6></a></font></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@php_set@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PHP Obj. Set</h6></a></font></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@php_obj_get@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PHP Obj. Get</h6></a></font></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@php_set_properties@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PHP Set Properties</h6></a></font></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@php_properties_to_var@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PHP Properties to VAR</h6></a></font></div>';

          menu = window.parent.document.getElementById('dv_table').innerHTML + menu;

          window.parent.document.getElementById('dv_table').innerHTML = menu;

        }

        function left_popup_mysql(top,table){

          let menu='';

          enable_back();

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@panku_connection@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>PDO Connection</h6></a></font></div>';

          top = top + 4;

          menu=menu + '<div onclick="editor_pass(\'@panku_structure@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Structure</h6></a></font></div>';

          top = top + 4;
          menu=menu + '<div onclick="editor_pass(\'@panku_data@;'+table+'; ;\',1,0,0,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Data</h6></a></font></div>';

          menu = window.parent.document.getElementById('dv_table').innerHTML + menu;

          window.parent.document.getElementById('dv_table').innerHTML = menu;

        }

        function left_popup_html(top,table){

          let menu='';

          enable_back();

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@index@;'+table+'\',1,1,1,\'Project Title?\');"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Index</h6></a></font></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@index2@;'+table+'\',1,1,1,\'xxx?\');"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Index2</h6></a></div>';

          menu = window.parent.document.getElementById('dv_table').innerHTML + menu;

          window.parent.document.getElementById('dv_table').innerHTML = menu;

        }

        function left_popup_form(top,table){

          let menu='';

          enable_back();

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@form_magic@;'+table+'\',1,1,1,\'Num Cols?\');"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Form Magic</h6></a></font></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@window@;'+table+'\',1,1,1,\'Window id (the id will be tablename_window id)\');"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Window</h6></a></div>';

          top=top+4;
          menu=menu + '<div onclick="editor_pass(\'@form_fill@;'+table+'\',1,1,1,0);"  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Form Fill</h6></a></font></div>';

          menu = window.parent.document.getElementById('dv_table').innerHTML + menu;

          window.parent.document.getElementById('dv_table').innerHTML = menu;

        }

        function left_default(top){
          let menu='<div style="position:absolute; width:100%; left:0%; top:0%; height:4%">';
          menu = menu + '<div onclick ="left_back()" class="grid_left" style="position:absolute;top:0%;width:50%;height:100%;left:0%"><font class="font_m">Tables</font></div>';
          menu = menu + '<div id="dv_back_tool" onclick ="left_menu_tools()" class="grid_left" style="position:absolute;top:0%;width:50%;height:100%;left:50%;display:none"><font class="font_m"><-Back</font></div>';
          menu = menu + '</div>';

          window.parent.document.getElementById('dv_table').innerHTML = menu;

        }

        function new_record(query){

          if ( confirm('Add a new record?') ){

            editor_pass(query,1,0,0,0);
            describe_mod=0;

          }

        }

        function left_popup(table,key)
        {

                editor_pass('describe '+table,1,0,0,0);

                describe_mod = 1;

                let top=0;

                left_default(top);

                top=top+4;

                let menu='<div onclick="editor_pass(\'describe '+table+'\',1,1,0,0);describe_mod=1" class=\'mt-3 mb-5\'  style=\'position:absolute;width:100%;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Describe '+table+'</h6></a></font></div>';

                top=top+4;

                menu=menu + '<div onclick="editor_pass(\'select * from '+table+' limit 10\',1,0,0,0);describe_mod=0" class=\'mt-3 mb-5\' style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Return 10 rows</h6></a></font></div>';

                if (key!=0){
                top=top+4;
                var query_ten_desc ='select * from '+table+' order by '+key+' desc limit 10';
                menu=menu + '<div onclick="editor_pass(\''+query_ten_desc+'\',1,0,0,0);describe_mod=0" class=\'mt-3 mb-5\'  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Return last 10 ids</h6></a></font></div>';
                }

                if (key!=0){
                  top=top+4;
                  let query_add ='insert into '+table+' ('+key+') values (null)';
                  menu=menu + '<div onclick="new_record(\''+query_add+'\')" class=\'mt-3 mb-5\'  style=\'position:absolute;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>Add new record</h6></a></font></div>';

                  }

                top=top+4;
                menu=menu + '<div name=\'main_tool\' onclick="left_popup_php(18,\''+table+'\');" class=\'mt-3 mb-5\' style=\'position:absolute;width:100%;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'><img src=\'images/php.png\'> PHP</h6></a></font></div>';

                top=top+4;
                menu=menu + '<div name=\'main_tool\' onclick="left_popup_form(18,\''+table+'\');" class=\'mt-3 mb-5\' style=\'position:absolute;width:100%;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>&nbsp<img src=\'images/form.png\'>&nbsp&nbsp Form</h6></a></font></div>';

                top=top+4;
                menu=menu + '<div name=\'main_tool\' onclick="left_popup_html(18,\''+table+'\');" class=\'mt-3 mb-5\' style=\'position:absolute;width:100%;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>&nbsp<img src=\'images/html.png\'>HTML</h6></a></font></div>';

                top=top+4;
                menu=menu + '<div name=\'main_tool\' onclick="left_popup_mysql(18,\''+table+'\');" class=\'mt-3 mb-5\' style=\'position:absolute;width:100%;top:'+top+'%\'><a href=\'#\' class=\'alert-link\'><h6 class=\'text-light\'>&nbsp<img src=\'images/mysql.png\'>&nbsp&nbspMysql</h6></a></font></div>';

            menu = window.parent.document.getElementById('dv_table').innerHTML + menu;

            window.parent.document.getElementById('dv_table').innerHTML = menu;

        }

        function history_pass(text){

          query_exec(text);

        }

        function removeTags(str) {

          if ((str===null) || (str===''))
              return false;
          else
              str = str.toString();

              str = str.replace(/"/g, "'");

              return str.replace( /(<([^>]+)>)/ig, '');
      }

        function status(text,history)
        {

          let pure_text = removeTags(text);

          document.getElementById('lb_status').innerHTML = text;

          setTimeout("document.getElementById('dv_alert').style.display = 'none'",3000);
          document.getElementById('dv_alert').style.display = "block";

          let time = new Date();

          if (history == 1 && text.indexOf('panku')==-1 && text.indexOf('@php_')==-1){

            document.getElementById('dv_history').innerHTML='<br><strong>'+time+'</strong><br><div onclick=\'history_pass("'+pure_text+'")\'>'+text+'</div>'+document.getElementById('dv_history').innerHTML;
            save_memo();

          }

        }

        function getSelectedText(){

          if (window.getSelection) {
              txt = window.getSelection();
          } else if (window.document.getSelection) {
              txt =window.document.getSelection();
          } else if (window.document.selection) {
              txt = window.document.selection.createRange().text;
          }
          return txt;

        }

        function fill_connection(query_passad){

            let all = arr_connections[tab_index];
            let params = all.split(";");
            let query = getSelectedText();

            if (query_passad != undefined){

              query = query_passad;
              editor_pass(query_passad,0);
              window.parent.document.getElementById('dv_history').style.display = 'none';

            }

            if (query == ''){

              query = window.parent.document.getElementById('dv_memo').innerText;

            }

            if (query == ''){

              query = '@new_panku_connection@';

            }

            window.parent.document.getElementById('select_project').value = params[0]; //project
            window.parent.document.getElementById('ed_project_host').value = params[1]; //host
            window.parent.document.getElementById('ed_project_database').value = params[2]; //dbase
            window.parent.document.getElementById('ed_project_port').value = params[5]; //port
            window.parent.document.getElementById('ed_project_user').value = params[3]; //user
            window.parent.document.getElementById('ed_project_password').value = params[4]; //password

            window.parent.document.getElementById('query').value = query;

        }

        function query_exec(query_passad){

            fill_connection(query_passad);

            let form = document.getElementById('f_project'); //in projects.core.php

            form.submit();//to connect.php

            window.parent.document.getElementById('dv_history').style.display = 'none';

        }

        function history_show(){

          if (document.getElementById('dv_history').style.display=='none'){

            document.getElementById('dv_history').style.display='block';

          }else{

            document.getElementById('dv_history').style.display='none';

          }

        }

        function new_connection(){

          let project = document.getElementById('select_project').value;
          let host = document.getElementById('ed_project_host').value;
          let database = document.getElementById('ed_project_database').value;
          let user = document.getElementById('ed_project_user').value;
          let password = document.getElementById('ed_project_password').value;
          let port = document.getElementById('ed_project_port').value;

          all = project+';'+host+';'+database+';'+user+';'+password+';'+port;

          arr_connections[tab_index] = all;

          let form = document.getElementById('f_project');

          form.submit();

          close_project_window();

          window.parent.document.getElementById('lb_connection').innerHTML = 'Data Connection: -d <strong>'+database+'</strong> -h '+host+' -u '+user+' -P '+port;

        }

        function horinzontal_adjust()
        {
          //horizontal bar
          let grid_top = document.getElementById('dv_grid').style.top;
          grid_top = grid_top.replace('%','');
          let bar_top = grid_top - 1;
          document.getElementById('dv_horizontal_rooler').style.top = bar_top +'%';

          //grid height
          let grid_height = 100 - 1 - bar_top;
          document.getElementById('dv_grid').style.height = grid_height + '%';

          //memo height
          document.getElementById('dv_memo').style.height = 100 - 1 - grid_height + '%';

        }

        function horizontal_move(event)
        {

          let main = document.getElementById('dv_main').clientHeight; //total of main container with memos
          y = event.pageY;//mouse position

          y= y - (y/100*8); //spend 8% because the tab div and tools div

          let perc = y*100/main; //change pixels to %

          perc_str = perc +'%';

          document.getElementById('dv_grid').style.top = perc_str;

          horinzontal_adjust();

        }

        function vertical_adjust()
        {

          let table_width = document.getElementById('dv_tables_main').style.width;
          table_width = table_width.replace('%','');
          table_width = table_width + 1;
          document.getElementById('dv_vertical_rooler').style.left = table_width + '%';

          rooler_left = document.getElementById('dv_vertical_rooler').style.left;
          rooler_left = rooler_left.replace('%','');

          document.getElementById('dv_core_main').style.width = 100 - table_width + '%';
          document.getElementById('dv_core_main').style.left = rooler_left + 1 + '%';

        }

        function vertical_move(event)
        {

          let main = document.getElementById('dv_main').clientWidth; //total of main container with memos
          x = event.pageX;//mouse position

          //x= x - (x/100*50); //spend 1% because the rooler

          let perc = x*100/main; //change pixels to %

          perc_str = perc +'%';

          document.getElementById('dv_tables_main').style.width = perc_str;

          vertical_adjust();

        }

        function close_project_window()
        {

          document.getElementById('dv_project').style.display='none';

        }

        function open_project_window()
        {

          document.getElementById('dv_project').style.display='block';

        }

</script>
<script>
  var tab_index = 0;
  var arr_connections = [];
  var arr_tables = [];
  var arr_memos= [];
  var arr_grids = [];
  

        function connect(index){







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

        function left_menu_add(tables){

            arr_tables[tab_index] = tables; //see connect.js show_tables function


        }

        function left_back(){


            window.parent.document.getElementById('dv_table').innerHTML = arr_tables[tab_index];

        }



        function memo_back(){

          window.parent.document.getElementById('dv_memo').innerHTML = arr_memos[tab_index];

        }

        function save_memo(){

          arr_memos[tab_index] =  window.parent.document.getElementById('dv_memo').innerHTML;           


        }




        function grid_back(){

          window.parent.document.getElementById('dv_grid').innerHTML = arr_grids[tab_index];

        }

        function save_grid(){

          arr_grids[tab_index] =  window.parent.document.getElementById('dv_grid').innerHTML;           


        }


        function editor_pass(sql_command,exec,ret){

               

                save_memo();

                

                window.parent.document.getElementById('dv_memo').innerText = sql_command;

                if (exec == 1){
                  query_exec();
                }


                if (ret ==1)
                {

                  memo_back();   

                }  
             

        }

        function update(table,field,value,key,id){

         
          var value = value.replace(/”/g, "\'");          

          editor_pass('update '+table+' set '+field+' = '+'"'+value+'" where '+key+'='+id);

        }


        function left_popup(table,key)
        {


           

           
            
            let top=8;
            let menu = '<div onclick ="left_back()" class="grid_left" style="top:0%"><font class="font_m"><-- Back</font></div>';
                menu=menu + '<div onclick="editor_pass(\'describe '+table+'\',1,0);" class=\'grid_left\' style=\'top:4%\'><font class=\'font_m\'>Describe '+table+'</font></div>';
                menu=menu + '<div onclick="editor_pass(\'select * from '+table+' limit 10\',1,0);" class=\'grid_left\' style=\'top:8%\'><font class=\'font_m\'>Return 10 rows</font></div>';

                if (key!=0){                
                top=top+4;  
                menu=menu + '<div onclick="editor_pass(\'select * from '+table+' order by '+key+' desc limit 10\',1,0);" class=\'grid_left\' style=\'top:'+top+'%\'><font class=\'font_m\'>Return last 10 ids</font></div>';
                }

                

                top=top+4;                 
                menu=menu + '<div onclick="editor_pass(\'@php_get@;'+table+'\',1,1);" class=\'grid_left\' style=\'top:'+top+'%\'><font class=\'font_m\'>PHP GET</font></div>';

                top=top+4;                 
                menu=menu + '<div onclick="editor_pass(\'@php_post@;'+table+'\',1,1);" class=\'grid_left\' style=\'top:'+top+'%\'><font class=\'font_m\'>PHP POST</font></div>';

                top=top+4;                 
                menu=menu + '<div onclick="editor_pass(\'@panku_mysql_insert@;'+table+'\',1,1);" class=\'grid_left\' style=\'top:'+top+'%\'><font class=\'font_m\'>PHP Insert</font></div>';

                top=top+4;                 
                menu=menu + '<div onclick="editor_pass(\'@panku_mysql_update@;'+table+'\',1,1);" class=\'grid_left\' style=\'top:'+top+'%\'><font class=\'font_m\'>PHP Update</font></div>';


                top=top+4;                 
                menu=menu + '<div onclick="editor_pass(\'@php_property@;'+table+'\',1,1);" class=\'grid_left\' style=\'top:'+top+'%\'><font class=\'font_m\'>PHP property</font></div>';

                top=top+4;                 
                menu=menu + '<div onclick="editor_pass(\'@php_set@;'+table+'\',1,1);" class=\'grid_left\' style=\'top:'+top+'%\'><font class=\'font_m\'>PHP Set</font></div>';

                top=top+4;                 
                menu=menu + '<div onclick="editor_pass(\'@php_set_properties@;'+table+'\',1,1);" class=\'grid_left\' style=\'top:'+top+'%\'><font class=\'font_m\'>PHP Set Properties</font></div>';

                top=top+4;                 
                menu=menu + '<div onclick="editor_pass(\'@php_properties_to_var@;'+table+'\',1,1);" class=\'grid_left\' style=\'top:'+top+'%\'><font class=\'font_m\'>PHP Properties to VAR</font></div>';





            window.parent.document.getElementById('dv_table').innerHTML = menu;


        }

        function status(text)
        {

          document.getElementById('lb_status').innerHTML = text;
          
          setTimeout("document.getElementById('dv_alert').style.display = 'none'",3000);
          document.getElementById('dv_alert').style.display = "block";
          

        }

        function fill_connection(){

            let all = arr_connections[tab_index];
            let params = all.split(";");
            let query = window.parent.document.getElementById('dv_memo').innerText;

            if (query == ''){

              query = '@new_panku_connection@';

            }
            

            
            window.parent.document.getElementById('select_project').value = params[0]; //project
            window.parent.document.getElementById('ed_project_host').value = params[1]; //host
            window.parent.document.getElementById('ed_project_database').value = params[2]; //dbase
            window.parent.document.getElementById('ed_project_port').value = params[5]; //port
            window.parent.document.getElementById('ed_project_user').value = params[3]; //user
            window.parent.document.getElementById('ed_project_password').value = params[4]; //password


            window.parent.document.getElementById('query').value = query.trim();
            
            

        }

        function query_exec(){

            fill_connection();

            let form = document.getElementById('f_project');

            form.submit();

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
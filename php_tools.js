<script>

        function field_selected(field)
        {

            window.parent.is_selected(field);                     

        }

        function pass_db_model(){

            let host = window.parent.document.getElementById('ed_project_host').value;
            let user = window.parent.document.getElementById('ed_project_user').value;
            let password = window.parent.document.getElementById('ed_project_password').value;
            let port = window.parent.document.getElementById('ed_project_port').value;
            let database =  window.parent.document.getElementById('ed_project_database').value;
            
            let model_value = document.getElementById('memo_aux').textContent;

            model_value = model_value.replace('@panku_host@',host);
            model_value = model_value.replace('@panku_user@',user);
            model_value = model_value.replace('@panku_password@',password);
            model_value = model_value.replace('@panku_port@',port);
            model_value = model_value.replace('@panku_database@',database);

            window.parent.document.getElementById('dv_memo').innerHTML = model_value; 

        }

        function pass_html_model(table,cols,rows){

                


                let model_value = document.getElementById('memo_aux_html').textContent;

                model_value = model_value.replaceAll('<br>','');

                model_value = model_value.replaceAll('@panku_fr_cols@',cols);

                model_value = model_value.replaceAll('@panku_fr_rows@',rows);



                window.parent.document.getElementById('dv_memo').innerHTML = model_value; 

               
                
        }

       

        function pass_window_model(table,title){


            let model_value = document.getElementById('memo_aux_window').textContent;

            model_value = model_value.replaceAll('<br>','');

            model_value = model_value.replaceAll('@window_title@',title);     
            
            model_value = model_value.replaceAll('@table_name@',title);   

            window.parent.document.getElementById('dv_memo').innerHTML = model_value; 





        }

        function pass_index_model(table,title){

            
            let model_value = document.getElementById('memo_aux_index').textContent;

            model_value = model_value.replaceAll('<br>','');

            model_value = model_value.replaceAll('@project_title@',title);         

            window.parent.document.getElementById('dv_memo').innerHTML = model_value; 





        }



     
</script>
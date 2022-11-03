<script>


function project_complete(host,database,port,user,password)
{


     window.parent.document.getElementById('ed_project_host').value = host;
     window.parent.document.getElementById('ed_project_database').value = database;
     window.parent.document.getElementById('ed_project_port').value = port;
     window.parent.document.getElementById('ed_project_user').value = user;
     window.parent.document.getElementById('ed_project_password').value = password;
     window.parent.document.getElementById('query').value = '@new_panku_connection@'; 


}


</script>




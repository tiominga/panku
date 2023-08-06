<script>

        function projects_change(){
            
            let id = document.getElementById('select_project').selectedIndex;

            let i_frame = document.getElementById('if_project_exec');
            i_frame.src = 'project_show.php?index='+id;

        }


        function connect()
        {

            alert(window.parent.tab_index);

        }







</script>
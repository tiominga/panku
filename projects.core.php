<?php

            
include_once("files.class.php");
include_once("project.class.php");
include_once("projects.core.js");

$obj_project = new Project();

$options = $obj_project -> getOptions();


?>

<html>

        <div style="position:absolute; width:90%; height:90%; top:50%; left:80%;display:none;background-color:white; z-index:100">

            <iframe id="if_project_exec" name="if_project_exec" marginHeight="0" marginWidth="0" scrolling="auto" src="orange.html" width="100%" height="100%">

									
            </iframe>

        </div>
        
        <form id="f_project" name="f_project" action="connect.php" method="post" target="if_project_exec"> 
        <div class="form-group">

            <div style="position:absolute; width:40%; height:12%; top:7%; left:3%">
                    <font class="font_m">Project:</font>
            </div>

            <div style="position:absolute; width:78%; height:12%; top:7%; left:43%">
                   <select class="selectpicker" data-style="btn-success" title="Choose one of the following..." id="select_project" onChange="projects_change()" name="select_project">
                   

                        <?=$options?>


                    </select>
            </div>

            <div style="position:absolute; width:40%; height:12%; top:20%; left:3%">
                <font class="font_m">Host:</font>
            </div>

            <div style="position:absolute; width:52%; height:2%; top:17%; left:43%">
                <input type="text" class="form-control" id="ed_project_host" name="host"></input> 
            </div>

            <div style="position:absolute; width:40%; height:12%; top:33%; left:3%">
                <font class="font_m">Database:</font>
            </div>

            <div style="position:absolute; width:52%; height:8%; top:30%; left:43%">
                <input type="text" class="form-control" id="ed_project_database" name="database"></input> 
            </div>

            <div style="position:absolute; width:40%; height:12%; top:46%; left:3%">
                <font class="font_m">User:</font>
            </div>

            <div style="position:absolute; width:52%; height:8%; top:43%; left:43%">
                <input type="text" class="form-control" id="ed_project_user" name="user"></input> 
            </div>

            <div style="position:absolute; width:40%; height:12%; top:59%; left:3%">
                <font class="font_m">Password:</font>
            </div>

            <div style="position:absolute; width:52%; height:8%; top:56%; left:43%">
                <input type="password" class="form-control" id="ed_project_password"  name="password"></input> 
            </div>

            <div style="position:absolute; width:40%; height:12%; top:72%; left:3%">
                <font class="font_m">Port:</font>
            </div>

            <div style="position:absolute; width:52%; height:8%; top:69%; left:43%">
                <input type="text" class="form-control" id="ed_project_port" name="port"></input> 
            </div>

            <div  style="position:absolute; width:45%; height:8%; top:85%; left:40%">
                <button type="button" onCLick="new_connection()" class="btn btn-primary">
                    Connect
                </button>
            </div>

           
             

            <div style="position:absolute; width:52%; height:8%; top:72%; left:43%; display:none">
                <textarea name="query" id="query" cols=30 rows=10>

                </textarea>

                <input type="text" class="form-control" id="object_php" name="object_php"></input>  
            </div>
        </div>
        </form>

</html>
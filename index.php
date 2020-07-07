<?php

 include_once("panku.js");  

?>

        <html>        
            
                <head>
                        <?include_once("head.php")?>
                        <meta http-equiv="content-type" content="text/html; charset=utf-8">
                    
                        <!-- <link  href="panku.css?version=1" rel="stylesheet" type="text/css"> -->

                       

                </head>


                <body>

            
                <div id="dv_main" style="position:absolute; width:100%; height:100%;left:0%;top:0%; background-color:black">
                
                <div id="dv_alert" class="rounded" style="position:absolute;height:15%;width:25%;top:83.5%;left:74.5%; border:0.5px solid #454D55; background-color:#343A40; z-index:100;display:none">
                        <label id="lb_status">...</label>
                </div>

               
                <div id="dv_menu_bar" style="position:absolute; width:100%; height:4%;left:0%;top:0%; background-color:blue;z-index:10">
                        
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="height:100%">
                       
                        <a class="navbar-brand" title="New Connection" onclick="open_project_window();" style="cursor:pointer">
                                <img src="images/database2.png" width="25" height="22" alt="" loading="lazy">
                        </a>

                        <a class="navbar-brand" title="Run query" onclick="query_exec();" style="cursor:pointer">
                                <img src="images/play.png" width="25" height="22" alt="" loading="lazy">
                        </a>

                        

                       
                       
                       
                        </nav>
                </div>






                
                        //left bar with tables 
                        <div id="dv_tables_main" style="position:absolute; width:15%; height:96%;left:0%;top:4%; background-color:silver">

                                <div id="dv_table" style="position:absolute; overflow:auto; width:100%; height:100%;left:0%;top:0%; background-color:#343A40; z-index:10">

                                       

                                </div>

                        </div>


                        <div id="dv_vertical_rooler" ondragEnd="vertical_move(event)" draggable="true" style="position:absolute; width:0.5%; height:96%;left:15%;top:4%; cursor:col-resize;z-index:10; background-color:yellow">

                        </div>

                       

                        <div id="dv_core_main" style="position:absolute; width:84.5%; height:96%;left:15.5%;top:4%; background-color:orange;z-index:9">

                                <div id="dv_tabs" style="position:absolute; width:100%; height:4%;left:0%;top:0%; background-color:silver">

                                </div>


                                //the editor with the querys
                                <div id="dv_memo" onKeyUp="f9()" contentEditable="true"   style="position:absolute; overflow:auto; width:99%; height:40%;left:1%;top:4%; background-color:white">

                                </div>

                                <div id="dv_horizontal_rooler" draggable="true" ondragEnd="horizontal_move(event)"  onClick="horizontal_move();" style="position:absolute; width:100%; height:1%;left:0%;top:44%; cursor:row-resize; background-color:red">

                                </div>
                                

                                //mysql results (the grid)
                                <div id="dv_grid" style="position:absolute; overflow:auto; width:100%; height:55%;left:0%;top:45%; background-color:silver">

                                </div>

                        </div>

                        <div id="dv_project" style="position:absolute; width:20%;height:40%;top:30%;left:40%;z-index:11;background-color:#343A40">
                        

                                        <div style="position:absolute; width:5%;height:5%;top:0%;left:95%;cursor:pointer" onCLick="close_project_window()">
                                              X          
                                        </div>

                                        <?include_once("projects.core.php");?>



                        </div>        



                </div>
             
                </body>    
        </html>
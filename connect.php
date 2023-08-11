<?php
ini_set("display_errors", 1);
ini_set("display_startup_erros", 1);
error_reporting(E_ALL);

include_once("conn.class.php");
include_once("dbtools.class.php");
include_once("files.class.php");
include_once("connect.js");

$ok = 0;

$host = $_POST["host"];
$user = $_POST["user"];
$password = $_POST["password"];
$port = $_POST["port"];
$db = $_POST["database"];
$query = $_POST["query"];
$object_php = $_POST["object_php"];

$query = htmlentities($query);

$query = trim($query);
$query = str_replace("\n", " ", "$query");
$query = str_replace("\r", " ", "$query");
$query = str_replace('"', "'", $query);
$query = str_replace("� ", "", $query);
$query = str_replace("&nbsp;", " ", $query);
//$query=trim(preg_replace('/\s+/','',$query));
$query = preg_replace("/\s+/", " ", $query);
$query = html_entity_decode($query);

$obj_dbtools = new DBtools();

$obj_dbtools->getInformation($query, $db, $host, $port, $user, $password);

$column_count = $obj_dbtools->getN_columns();

$table_name = $obj_dbtools->getTableName("$query");

$answer = $obj_dbtools->getAnswer();

$key = $obj_dbtools->getKey();

$show_result = $obj_dbtools->getQueryType("$query"); //its a query with return?

$arr_columns = $obj_dbtools->getColumns();

$res = $obj_dbtools->getRes();

$error = $obj_dbtools->getError();

$query = str_replace('"', "'", $query);

if ($error != 0) {

    echo ("<script>window.parent.status(\"<font style='color:red' class='font_m'>$error[2]</font>\",0);</script>");
} else {

    echo ("<script>window.parent.status(\"<font style='color:white' class='font_m'>$query</font>\",1);</script>");

    $ok = 1;

    if ($show_result > 0) {

        include_once("grid_head.php");

        if ($show_result < 100) //if is not a tool (php objects etc)
        {

            include_once("grid_core.php");

            echo ("<script>connect_show_grid(\"$core\");</script>");
        } //###################################################################################show_result < 100 TOOLS #########################################################################################
        else //its php object
        {

            include_once("php_tools.php");
        }
    } else //its a new connection becouse show_result is zero
    {

        if (strpos($query, 'update') === false) {
            include_once("new_connection.php");
        }
    }
}//else of error

<?php
//make the core, included in connect.php
$core = "";
$left = 0;
$top = 5;

while ($linha = $res -> fetch(PDO::FETCH_ASSOC))
{

    $core .= "<tr>";

    for ($i=0;$i < $column_count;$i++){

        $meta = $res->getColumnMeta($i);
        $column_name = $meta['name'];        
        $column_value = $linha["$column_name"];
        $id_value = $linha["$key"];

        $column_value= trim("$column_value");
        $column_value = str_replace("\n", ' ', $column_value);
        $column_value = str_replace("\r", ' ', $column_value);
        $column_value = str_replace("'",'\"' , $column_value);
        $column_value = str_replace('"','”' , $column_value);

        

        //it's not a tag if have < or >
        $column_value=str_replace("<","&lt;",$column_value);
        $column_value=str_replace(">","&gt;",$column_value);

        //$column_value = utf8_encode($column_value);

        $column_value_trunc = substr($column_value,0,14);
        $column_value_trunc_describe = substr($column_value,0,30);

        if ($show_result >0 && $show_result<100){                    
           //$core .= "<div onclick='update(`".$table_name."`,`".$column_name."`,`".$column_value."`,`".$key."`,`".$id_value."`);' style='position:absolute;width:11%; height:5%; background-color:white; left:".$left."%; top:$top%; border: 0.5px solid'><font class='font_m'>$column_value_trunc</font></div>";
           
           if ($show_result !=2){ //if is not describe            
           $core .= "<td style='width:20%;cursor:pointer' onclick='update(`".$table_name."`,`".$column_name."`,`".$column_value."`,`".$key."`,`".$id_value."`);'><font class='font_m'><label title='$column_value'>$column_value_trunc</label></font></td>";
           }else{


           if ($column_name == "Field"){ 

                $field_type = $obj_dbtools -> getColumnType($column_value);

                $field_type=str_replace("'",'@panku@',$field_type);
                $field_type=str_replace('"','@panku@',$field_type);
                

                $cb_id = "panku_describe_field_$column_value".";;;"."$field_type";
                
                

                $check="<div style='position:absolute;left:3%'><input type=\'checkbox\' class=\'form-check-input\' onChange=\'window.parent.selected_fields();\' name=\'panku_describe_field\' id=\'".$cb_id."\'  checked>";
                $check.="<label for='".$cb_id."'>$column_value</label></div>";          
                $core .= "<td style='width:20%;cursor:pointer'><font class='font_m'>$check</font></td>"; 
           
           } 
           else
           {
                $check=""; 
                $core .= "<td style='width:20%;cursor:pointer' onclick=editor_pass('".$column_value."');><font title='$column_value' class='font_m'>$column_value_trunc_describe</font></td>"; 
           }
           
          

           //echo("<script>alert(\"$column_name\");</script>");
           }


        }
        else
        {
            $core .= "<div onclick=editor_pass('".$column_value."'); style='position:absolute;width:11%; height:5%; background-color:white; left:".$left."%; top:$top%;cursor:pointer; border: 0.5px solid'><font class='font_m'>$column_value_trunc</font></div>";    
        }

       

        $left = $left + 11;
    
    }
    
    $left = 0;
    $top = $top + 5;
    $core .= "</tr>";
    


}

$core .= "</tr></tbody></table></div>";

$core = $columns . $core;


?>            
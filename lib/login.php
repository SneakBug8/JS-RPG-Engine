<?php
$link = mysql_connect('localhost', 'srv32984_555pru', 'p12092001');
if (!$link) {
    die('Ошибка соединения: ' . mysql_error());
}
$db_selected = mysql_select_db('srv32984_glands', $link);
if(empty($_GET['pass'])) 
{
	exit;
}
if(empty($_GET['nick'])) 
{
	exit;
}
$query = mysql_query ("SELECT * FROM `logins` WHERE nickname = '".$_GET['nick']."' LIMIT 1");

$rows = mysql_fetch_array($query);
if (!$query) {
    die('Неверный запрос: ' . mysql_error());
}
if ($rows["password"]==$_GET['pass'])
{
echo("1");
}
mysql_close($link);
?>
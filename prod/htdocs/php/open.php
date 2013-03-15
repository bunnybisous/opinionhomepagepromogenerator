<?php

 	ini_set('display_errors', 1);

	$content = file_get_contents($_GET["url"]);
	$content = iconv("UTF-8", "ISO-8859-1", $content);
	if($content) echo $content;

?>
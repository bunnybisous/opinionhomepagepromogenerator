<?php

 	ini_set('display_errors', 1);

	$content = file_get_contents($_GET["url"]);
	if($content) echo $content;

?>
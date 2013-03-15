<?php
	
	extract($_POST);
	
	$file = "../savedData/$filename.json";
	$fh = fopen($file, 'w') or die("can't open file");
	$content = iconv("ISO-8859-1", "UTF-8", $content);
	$content = stripslashes($content);
	fwrite($fh, $content);
	fclose($fh);

?>
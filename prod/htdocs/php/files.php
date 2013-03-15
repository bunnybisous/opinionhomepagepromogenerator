<?php

	$json = array( );
	$files = glob('../savedData/*.json');
	usort($files, create_function('$a,$b', 'return filemtime($a)<filemtime($b);'));
	foreach($files as $file) {
		preg_match("/savedData\/(.*)\.json/", $file, $matches);
		array_push($json, $matches[1]);
	}
	echo json_encode($json);

?>
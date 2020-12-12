<?php
require_once("lib.php");

// Check call syntax
if (empty($_POST) || empty($_POST['key']) || empty($_POST['text'])) {
    http_response_code(400);
    return;
}

// Get post variables
$key = str_split($_POST['key']);
$plainText = str_split($_POST['text']);

// Init variables
$keyLength = count($key);
$result = [];

// Text encryption
foreach ($plainText as $position => $char) {
    $textCharEncoded = encodeChar($char);
    $keyCharEncoded = encodeChar($key[($position % $keyLength)]);
    $textCharEncrypted = ($char == ' ') ? $char : encrypChar($textCharEncoded, $keyCharEncoded, $alphabet);
    $textCharInfo = [
        'plain' => ($char == ' ') ? 'space' : $char,
        'shift' => ($char == ' ') ? 'none' : $keyCharEncoded,
        'encrypted' => ($char == ' ') ? 'space' : $textCharEncrypted,
    ];
    $result['textInfo'][] = $textCharInfo;
    $result['textEncrypted'] .= $textCharEncrypted;
}

// Return response
http_response_code(200);
header("HTTP/1.1 200 OK");
header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
header('Content-Type: application/json');
echo json_encode($result);

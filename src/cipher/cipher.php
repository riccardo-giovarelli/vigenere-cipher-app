<?php

// Check call syntax
if (empty($_POST) || empty($_POST['key']) || empty($_POST['text'])) {
    http_response_code(400);
}

echo "DEBUG=> " . print_r($_POST, true);

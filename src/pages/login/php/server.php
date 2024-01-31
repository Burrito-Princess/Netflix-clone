<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
$user = $_POST['name'];
echo ("Hello from server: $user");

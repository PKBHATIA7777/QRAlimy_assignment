<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $spot = isset($_POST['spot']) ? trim($_POST['spot']) : '';

    if (!empty($name) && !empty($spot)) {
        $_SESSION['user'] = [
            'name' => htmlspecialchars($name),
            'spot' => htmlspecialchars($spot)
        ];

        echo "<p>Hello, {$name}! Your parking spot (<strong>{$spot}</strong>) has been saved successfully.</p>";
    } else {
        echo "<p>Please fill in both fields before submitting.</p>";
    }
} else {
    echo "<p>Invalid request method.</p>";
}
?>
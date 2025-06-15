<?php
header('Content-Type: application/json');

// Simple validation
$errors = [];
$requiredFields = ['name', 'email', 'vehicle-make', 'vehicle-model', 'license-plate'];

foreach ($requiredFields as $field) {
    if (empty($_POST[$field])) {
        $errors[$field] = 'This field is required';
    }
}

// Validate email format
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address';
}

// If there are errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Simulate data storage (in a real app, you'd save to a database)
$submission = [
    'name' => htmlspecialchars($_POST['name']),
    'email' => htmlspecialchars($_POST['email']),
    'vehicle_make' => htmlspecialchars($_POST['vehicle-make']),
    'vehicle_model' => htmlspecialchars($_POST['vehicle-model']),
    'license_plate' => htmlspecialchars($_POST['license-plate']),
    'timestamp' => date('Y-m-d H:i:s'),
    'qr_code_id' => 'QR-' . uniqid()
];

// In a real application, you would:
// 1. Save to database
// 2. Generate QR code image
// 3. Send confirmation email

// For this demo, we'll just return a success response with the simulated data
echo json_encode([
    'success' => true,
    'message' => 'Thank you for your submission! Your QR code is being generated.',
    'data' => $submission
]);
?>

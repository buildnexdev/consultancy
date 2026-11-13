<?php
// Siragugal Higher Education Services - Student Lead Receiver
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed. Use POST."]);
    exit();
}

// Read raw body (JSON or URL-encoded)
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$studentName = isset($data['studentName']) ? trim($data['studentName']) : (isset($data['Student Name']) ? trim($data['Student Name']) : '');
$phone       = isset($data['phone']) ? trim($data['phone']) : (isset($data['Phone Number']) ? trim($data['Phone Number']) : '');
$email       = isset($data['email']) ? trim($data['email']) : (isset($data['Email']) ? trim($data['Email']) : '');
$cutoffMarks = isset($data['cutoffMarks']) ? trim($data['cutoffMarks']) : (isset($data['12th Cut-off Marks']) ? trim($data['12th Cut-off Marks']) : '');
$course      = isset($data['course']) ? trim($data['course']) : (isset($data['Target Degree']) ? trim($data['Target Degree']) : '');
$spec        = isset($data['specialization']) ? trim($data['specialization']) : (isset($data['Preferred Branch']) ? trim($data['Preferred Branch']) : '');
$collegeName = isset($data['collegeName']) ? trim($data['collegeName']) : (isset($data['Target College']) ? trim($data['Target College']) : '');
$city        = isset($data['preferredCity']) ? trim($data['preferredCity']) : (isset($data['Preferred City']) ? trim($data['Preferred City']) : '');
$quotaType   = isset($data['quotaType']) ? trim($data['quotaType']) : (isset($data['Admission Quota']) ? trim($data['Admission Quota']) : '');
$notes       = isset($data['notes']) ? trim($data['notes']) : (isset($data['Parent/Reference Notes']) ? trim($data['Parent/Reference Notes']) : '');

if (empty($studentName) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Student name and phone number are required."]);
    exit();
}

$leadsFile = __DIR__ . '/leads.json';
$leads = [];
if (file_exists($leadsFile)) {
    $content = file_get_contents($leadsFile);
    $leads = json_decode($content, true) ?: [];
}

$newLead = [
    "id"           => 'LEAD-' . date('Ymd-His') . '-' . rand(100, 999),
    "studentName"  => htmlspecialchars($studentName),
    "phone"        => htmlspecialchars($phone),
    "email"        => htmlspecialchars($email),
    "cutoffMarks"  => htmlspecialchars($cutoffMarks),
    "course"       => htmlspecialchars($course),
    "specialization" => htmlspecialchars($spec),
    "collegeName"  => htmlspecialchars($collegeName),
    "preferredCity"=> htmlspecialchars($city),
    "quotaType"    => htmlspecialchars($quotaType),
    "notes"        => htmlspecialchars($notes),
    "status"       => "New Lead",
    "timestamp"    => date('Y-m-d H:i:s'),
    "ipAddress"    => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
];

array_unshift($leads, $newLead);
file_put_contents($leadsFile, json_encode($leads, JSON_PRETTY_PRINT));

echo json_encode([
    "success" => true,
    "message" => "Student reference lead recorded successfully. Admin will contact student.",
    "leadId"  => $newLead["id"]
]);
?>


<?php
// Siragugal Higher Education Services - College Listing
// Direct mirror of collegemoc.com/college-listing.php
$distHtml = __DIR__ . '/dist/index.html';
if (file_exists($distHtml)) {
    readfile($distHtml);
} else {
    echo "<h1>Siragugal Higher Education Services</h1><p>Please build the React application with 'npm run build'.</p>";
}
?>


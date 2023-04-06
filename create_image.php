<?php
header('Content-Type: image/png');

$background = imagecreatefrompng('./backgroundshare.png');
$white = imagecolorallocate($background, 255, 255, 255);
$font_path = './sans-serif.ttf'; // Path to your font file

$americanDate = $_GET['americanDate'];
$timeDiff = $_GET['timeDiff'];
$streakNumber = $_GET['streakNumber'];

$yOffset = imagesy($background) * 0.6;
$lineHeight = 30;

imagettftext($background, 24, 0, imagesx($background) / 2, $yOffset, $white, $font_path, "Date: {$americanDate}");
imagettftext($background, 24, 0, imagesx($background) / 2, $yOffset + $lineHeight, $white, $font_path, "Time: {$timeDiff}");
imagettftext($background, 24, 0, imagesx($background) / 2, $yOffset + $lineHeight * 2, $white, $font_path, "Streak: {$streakNumber}");
imagettftext($background, 24, 0, imagesx($background) / 2, $yOffset + $lineHeight * 4, $white, $font_path, "Play here: https://0xrynecollies.github.io/letterblendertest/");

imagepng($background);
imagedestroy($background);
?>
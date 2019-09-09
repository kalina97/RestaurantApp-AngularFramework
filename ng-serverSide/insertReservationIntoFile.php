<?php
$open = fopen(Reservations.txt, "a");
if($open){

    $ime = $_GET["name"];
    $email = $_GET["email"];
    $datum = $_GET["date"];
	$vreme=$_GET["time"];
	$gosti=$_GET["guestsNumber"];
    var_dump($ime, $email, $datum, $vreme,$gosti);
    $poruka = "Name: ".$ime. " | Email: ". $email." | Date: ".$datum." | Time: ".$vreme." | Number of guests: ".$gosti."\n";
    fwrite($open, $poruka);
    fclose($open);
    return json_encode("ok");
}
<?php
  session_start();
  if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(!empty($_POST['guest-color'])){
      $_SESSION['guest-color'] = $_POST['guest-color'];
      echo $_SESSION['guest-color'];
      //header('location: choose-color.php');
    }
  }
?>
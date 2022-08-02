<?php
  session_start();
  if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(!empty($_POST['board-color'])){
      $_SESSION['board-color'] = $_POST['board-color'];
      echo $_SESSION['board-color'];
      //header('location: choose-color.php');
    }
  }
?>
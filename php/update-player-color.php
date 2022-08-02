<?php
  session_start();
  if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(!empty($_POST['player-color'])){
      $_SESSION['player-color'] = $_POST['player-color'];
      echo $_SESSION['game-mode'];
      //echo $_SESSION['player-color'];
      //header('location: choose-color.php');
    }
  }
?>
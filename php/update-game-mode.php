<?php
  session_start();
  if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(!empty($_POST['game-mode'])){
      $_SESSION['game-mode'] = $_POST['game-mode'];
      echo $_SESSION['game-mode'];
    }
  }
?>
<?php
  session_start();
  if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(!empty($_POST['board-size'])){
      $_SESSION['board-size'] = $_POST['board-size'];
      echo $_SESSION['board-size'];
      //header('location: choose-color.php');
    }
  }
?>
<head>
	<!-- <script src="https://kit.fontawesome.com/a6db3e68b2.js" crossorigin="anonymous"></script> -->
	<link rel="stylesheet" type="text/css" href="css/header.css">
</head>
<span class="toSquare">
   <?php 
      if(!empty($_SESSION['playerImg'])){
         echo '<img class="user-img" src=' . substr($_SESSION['playerImg'], 1) . '>';
      }
   ?>
</span>
<span id="player-name">
   <?php
         if (isset($_SESSION['uname']) && 
            !empty($_SESSION['uname'])) {
            $_SESSION['valid'] = true;
            $_SESSION['timeout'] = time();
            echo 'Welcome, ' . $_SESSION['uname'];
         }
   ?>
</span>


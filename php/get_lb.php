<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
      $host = 'remotemysql.com:3306';
      $user = 'FQBI4YCcSM';
      $pass = 'SsZouHpFil';
      $dbname = "FQBI4YCcSM";

      $conn = mysqli_connect($host, $user, $pass, $dbname);

      if(!empty($_POST['board_t'])){
            if(!$conn){
                  die("Connection failed: " . mysqli_connect_error());
            }
            $lb_query = "SELECT * FROM Games WHERE board_type = '". $_POST['board_t']. "' ORDER by score " . $_POST['ord']." LIMIT 5;";
	      $result = mysqli_query($conn, $lb_query);
            if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
}
            $place = array("<td class = \"placement\">1<sup>st</sup></td>",
                           "<td class = \"placement\">2<sup>nd</sup></td>",
                           "<td class = \"placement\">3<sup>rd</sup></td>",
                           "<td class = \"placement\">4<sup>th</sup></td>",
                           "<td class = \"placement\">5<sup>th</sup></td>");
            $count = 0;
            echo '<tr id = "headRow">';
            if ($_POST['ord'] != 'DESC'){
                  echo '<th>Place</th>';}
            echo  '<th>User</th>
                  <th class = \'button\' onclick="cycleBoard(flags, ordFlag)">Board Type</th>
                  <th class = \'button\' onclick="cycleScore(flags, ordFlag)">Score</th>
                  <th>Duration</th>
                  <th>Date</th>
                  </tr>';
	      while($row = mysqli_fetch_array($result)){
                  echo "<tr>";
                  if($_POST['ord'] != 'DESC'){ 
                        echo $place[$count];
                  }
                  echo "<td>" . $row['username'] . "</td>
                        <td>" . $row['board_type'] . "</td>
                        <td>" . $row['score'] . "</td>
                        <td>" . $row['duration'] . "</td>
                        <td>" . $row['dateStr'] . "</td>
                        </tr>";
                  $count++;
                  }
            mysqli_close($conn);
      }
}
?>

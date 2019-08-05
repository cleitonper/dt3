<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="assets/img/favicon.ico">
  <link rel="stylesheet" href="assets/css/reset.css">
  <link rel="stylesheet" href="assets/css/fonts.css">
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/global.css">
  <link rel="stylesheet" href="assets/css/styles.css">
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
    crossorigin="anonymous"
  >
  <script src="assets/js/slider.js"></script>
  <script src="assets/js/video.js"></script>
  <script src="assets/js/main.js"></script>
  <title>DT3</title>
</head>
<body>
  <?php include 'partials/header.php'; ?>
  <main>
    <?php
      include 'partials/presentation.php';
      include 'partials/categories.php';
      include 'partials/videos.php';
    ?>
  </main>
  <?php include 'partials/footer.php'; ?>
</body>
</html>
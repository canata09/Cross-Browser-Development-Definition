<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX GET Örneği</title>
    <!-- jQuery ekleyin -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

    <p>Ziyaretçi Tarayıcı Penceresi Boyutları</p>
    <p id="olcek"></p>

<script>
let isUserLoggedIn = true;
let hasAdminAccess = false;

let canAccessPage = isUserLoggedIn || hasAdminAccess;

if (canAccessPage) {
  console.log("Sayfaya erişim izniniz var.");
} else {
        let width = window.outerWidth;
        let height = window.outerHeight;
        let oran = window.window.devicePixelRatio;

        document.getElementById("olcek").innerHTML =
         "Genişlik: " + width * window.devicePixelRatio + "<br>Yükseklik: " + 
         height * window.devicePixelRatio + "<br>Piksel Oranı: " + oran;
}


</script>

</body>
</html>

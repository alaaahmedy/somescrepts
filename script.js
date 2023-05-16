function convertToM3U() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var host = document.getElementById("host").value;
    
    var m3uURL = "http://" + host + "/get.php?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&type=m3u_plus";
    
    document.getElementById("result").innerHTML = m3uURL;
}

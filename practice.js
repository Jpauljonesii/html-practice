function isMobile() {
    return /Android|iPhone/i.test(navigator.userAgent);
    console.log(isMobile());

    alert("Welcome to John's Page")  


  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
    console.log(getLocation)
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  } 
  console.log(showPosition)
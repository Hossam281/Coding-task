function myDigitalClock() {
    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
  
    function updateTime() {
      var date = new Date();
      var hours = date.getHours(); // 0 - 23
      var minutes = date.getMinutes(); // 0 - 59
      var seconds = date.getSeconds(); // 0 - 59
      var zone = hours >= 12 ? "PM" : "AM";
  
      // Convert hours to 12-hour format
      hours = hours % 12 || 12;
  
      var timeString =
        formatTime(hours) +
        ":" +
        formatTime(minutes) +
        ":" +
        formatTime(seconds) +
        " " +
        zone;
  
      // Display the time in an element with ID "clock"
      document.getElementById("clock").innerHTML = timeString;
    }
  
    // Update the time every second
    setInterval(updateTime, 1000);
  }
  
  // Call the function to start the clock
  myDigitalClock();
  
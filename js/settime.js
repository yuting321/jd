

	var timerID = null;
    var timerRunning = false;  
    function show_time() {
    	
          var time_end = new Date("May 16, 2017 01:15:00");
          time_now = Math.round(new Date() / 1000)
          time_distance = time_end - time_now;

      if (time_distance > 0) {
          int_day = Math.floor(time_distance / (60 * 60 * 24));
          int_hour = Math.floor(time_distance / (60 * 60)) - (int_day * 24);
          int_minute = Math.floor(time_distance / 60) - (int_day * 24 * 60) - (int_hour * 60);
          int_second = Math.floor(time_distance) - (int_day * 24 * 60 * 60) - (int_hour * 60 * 60) - (int_minute * 60);
          if (int_hour < 10)
              int_hour = "0" + int_hour;
          if (int_minute < 10)
              int_minute = "0" + int_minute;
          if (int_second < 10)
              int_second = "0" + int_second;


          $('#hour').html(int_hour);
          $('#minite').html(int_minute);
		  $('#second').html(int_second);

          timerID = setTimeout("show_time()", 1000);
          timerRunning = true;  

      }
      else {

          clearTimeout(timerID)
      }
  }

  function stopclock() {
      if (timerRunning)
      clearTimeout(timerID);
      timerRunning = false;
  }
  function startclock() {
      stopclock();
      show_time();
  } 

  $(document).ready(function(){
	startclock(); 
 });
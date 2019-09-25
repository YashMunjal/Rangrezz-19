var countDownDate = new Date("Sept 27, 2019 00:00:01").getTime();
		 // Update the count down every 1 second
		var x = setInterval(function () {
			// Get today's date and time
			var now = new Date().getTime();
			// Find the distance between now and the count down date
			var distance = countDownDate - now;
			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Output the result in an element with id="demo"
            document.getElementById("time-1").innerHTML = days + "d";
            document.getElementById("time-2").innerHTML = hours + "h";
            document.getElementById("time-3").innerHTML = minutes + "m";
			document.getElementById("time-4").innerHTML = seconds + "s";
			if(days<0 && hours<0 && minutes<0 && seconds<0){
				document.getElementById("time-1").innerHTML = "00d";
            document.getElementById("time-2").innerHTML = "00h";
            document.getElementById("time-3").innerHTML = "00m";
			document.getElementById("time-4").innerHTML ="00s";
			}

		    if(days>=0 && days<10){
                document.getElementById("time-1").innerHTML = "0"+days + "d";
            }
            if(hours>=0 && hours<10) {
                document.getElementById("time-2").innerHTML = "0"+hours + "h";
			}
            if(minutes>=0 && minutes<10) {
                document.getElementById("time-3").innerHTML = "0"+ minutes + "m";
            }
            if(seconds>=0 && seconds<10) {
                document.getElementById("time-4").innerHTML = "0"+ seconds + "s";
            }            
			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("timer").innerHTML = "EXPIRED";
			}
		}, 1000);
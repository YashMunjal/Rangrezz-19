var countDownDate = new Date("Sept 27, 2019 00:00:00").getTime();
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
            if(days<10){
                document.getElementById("time-1").innerHTML = "0"+days + "d";
            }
            if(hours<10) {
                document.getElementById("time-2").innerHTML = "0"+hours + "h";
			}
            if(minutes<10) {
                document.getElementById("time-3").innerHTML = "0"+ minutes + "m";
            }
            if(seconds<10) {
                document.getElementById("time-4").innerHTML = "0"+ seconds + "s";
            }            
			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("timer").innerHTML = "EXPIRED";
			}
		}, 1000);
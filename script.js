			var textElem = document.getElementById("clocktext");
			var textNode = document.createTextNode("");
			textElem.appendChild(textNode);
			var curFontSize = 24;  // Do not change
			
			function updateClock() {
				var d = new Date();
				var s = "";
				s += ((d.getHours() + 11) % 12 + 1) + ":";
				s += (10 > d.getMinutes() ? "0" : "") + d.getMinutes() + ":";
				s += (10 > d.getSeconds() ? "0" : "") + d.getSeconds() + "\u00A0";
				s += d.getHours() >= 12 ? "p.m." : "a.m.";
				textNode.data = s;
				setTimeout(updateClock, 1000 - d.getTime() % 1000 + 20);
			}
			
			function updateTextSize() {
				var targetWidth = 0.9;  // Proportion of full screen width
				for (var i = 0; 3 > i; i++) {  // Iterate for better better convergence
					var newFontSize = textElem.parentNode.offsetWidth * targetWidth / textElem.offsetWidth * curFontSize;
					textElem.style.fontSize = newFontSize.toFixed(3) + "pt";
					curFontSize = newFontSize;
				}
			}
			
			updateClock();
			updateTextSize();
			window.addEventListener("resize", updateTextSize);

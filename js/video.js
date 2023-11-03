window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

function pageLoad() {
	var video = document.querySelector(".video");
	video.preload = true;
	video.autoplay = false;
	video.loop = false;
}

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener("DOMContentLoaded", function() { 
	var video = document.querySelector(".video");

	document.querySelector("#play").addEventListener("click", function() {
		video.play()
		video.volume = 1.0;
		console.log("Play Video");
	}); 
	
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	})
	
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate -= 0.1;
		console.log('New speed: ' + videoElement.playbackRate.toFixed(1));
	})
	
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate += 0.1;
		console.log('New speed: ' + videoElement.playbackRate.toFixed(1));
	})
	
	document.querySelector("#skip").addEventListener("click", function() {
		let newTime = video.currentTime + 10;
		if (newTime < video.duration ) {
			video.currentTime = newTime;
		} else {
			video.currentTime = 0;
		}
		console.log('New position: ' + videoElement.currentTime.toFixed(1));
	})

	document.querySelector("#mute").addEventListener("click", function() {
		let muteButton = document.querySelector("#mute");
		if (video.muted) {
			video.muted = false;
			muteButton.textContent = 'Mute';
		} else {
			video.muted = true;
			muteButton.textContent = 'Unmute';
		}
	})

	document.querySelector("#slider").addEventListener("input", function () {
		let slider = document.querySelector("#slider");
		let volume = document.querySelector("#volume");
		var newVolume = slider.value / 100;
		video.volume = newVolume;
		volume.textContent = (newVolume * 100).toFixed(0) + '%';
	});

	video.addEventListener("volumechange", function () {
		var volume = (video.volume * 100).toFixed(0) + '%';
		volume.textContent = 'Volume: ' + volume;
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	})

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	})

})

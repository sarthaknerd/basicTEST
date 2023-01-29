// script.js

var videoContainer = document.getElementById("video-container");
var video = document.getElementById("video");
var playButton = document.getElementById("play-button");
var pauseButton = document.getElementById("pause-button");
var replayButton = document.getElementById("replay-button");

playButton.addEventListener("click", function() {
    video.play();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
});

pauseButton.addEventListener("click", function() {
    video.pause();
    pauseButton.style.display = "none";
    playButton.style.display = "block";
});

replayButton.addEventListener("click", function() {
    video.currentTime = 0;
    video.play();
});

video.addEventListener("ended", function() {
    replayButton.style.display = "block";
});

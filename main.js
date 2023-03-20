var SpeechReconization = window.webkitSpeechRecognition;
var Recognition = new SpeechReconization();
function start() {
    document.getElementById("textarea").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textarea").innerHTML = Content;
    if (Content == "take my selfie") {
        speak();
        console.log("taking selfie")
    }

}
function speak() {
    var textspeak = window.speechSynthesis;
    var value = "taking your selfie in 5 seconds";
    var spea_1 = new SpeechSynthesisUtterance(value);
    textspeak.speak(spea_1);
    Webcam.attach(camera);
    setTimeout(function () {
        snapshot();
        save();
    }, 5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById("camera");
function snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='image' src='" + data_uri + "'>";
    });
}
function save() {
    var download = document.getElementById("link");
    var imge = document.getElementById("image").src;
    download.href = imge;
    download.click();
}
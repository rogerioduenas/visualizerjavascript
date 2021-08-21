const button1 = document.getElementById("button1");





button1.addEventListener("click", function (){
    audio1.play();
    audio1.addEventListener("playing", function(){
        console.log("audio 1 started playing");
    });
    audio1.addEventListener("ended", function(){
        console.log("audio1 ended")
    });
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", playSound);
function playSound(){
    audio1.play();
    const oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.type = "square"; //sine, sawtooth e triangle = frequencia do som.
    oscillator.start();
    setTimeout(function(){
        oscillator.stop();
    }, 200);
}
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    // startTimer()
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    document.getElementById("increment-btn").innerHTML = "Click here!"
}

document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 30;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
        document.getElementById("increment-btn").innerHTML = "Stop clicking Bud!"
    }
    }, 1000);
    console.log(countdown);
});
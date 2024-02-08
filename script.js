let result = document.querySelector("#input");
function pressed(a) {
    let audio = document.querySelector("#audio");
    audio.currentTime = 0;
    audio.play()
    result.value += a;
}
let clear = document.querySelector("#clear")
clear.addEventListener('click', () => {
    let audio = document.querySelector("#audio")
    audio.currentTime = 0;
    audio.play();
    result.value = ""
})

let equalto = document.querySelector("#equal");
equalto.addEventListener('click', () => {
    let audio = document.querySelector("#audio")
    audio.currentTime = 0;
    audio.play();
    let answer = eval(result.value);
    result.value = answer;
})
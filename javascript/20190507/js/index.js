//time셋팅 변수
let timeBox = document.querySelector(".timeViewer");
let timeBoxClock = timeBox.querySelector("h2");
//modal 변수
const writeBtn = document.querySelector(".writeBtn");
const modalWriteBox = document.querySelector(".modalBox_write");
const modalWriteBoxBody = document.querySelector(".modalBox_write_body");
const modalWriteDelBtn = document.querySelector("#modalWriteCloseBtn");


function timeSetting() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = `${hours}:${minutes}:${seconds}`;
}

writeBtn.addEventListener("click", function () {
    if (modalWriteBox.classList.contains("hidden")) {
        modalWriteBox.classList.remove("hidden");
    }
});
modalWriteBoxBody.addEventListener("click", function () {
    if (!modalWriteBox.classList.contains("hidden")) {
        modalWriteBox.classList.add("hidden");
    }
});
modalWriteDelBtn.addEventListener("click", function () {
    if (!modalWriteBox.classList.contains("hidden")) {
        modalWriteBox.classList.add("hidden");
    }
});

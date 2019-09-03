const play_start = document.querySelector('#play_start');
const videoPlayer = document.querySelector('#videoPlayer');
const play_div = document.querySelector('.cont_item');

const sound = document.querySelector('#sound');
const sound_div = document.querySelector('.cont_sound');

const time_1 = document.querySelector('#fa');
const time_2 = document.querySelector('#sc');

const video_box = document.querySelector('.video_box');

const cont = document.querySelector('.cont');

let time_out;

console.log(videoPlayer.duration);

function getTime(time) {
    let minutes = Math.floor((time % 3600) / 60);
    let hours = Math.floor(time / 3600);
    let seconds = (time % 3600) % 60;

    // 1자리에 2자리 규격으로 맞추고 싶을 경우 10보다 작으면 앞에 문자 0을 추가한다.
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return `${hours}:${minutes}:${seconds}`;
}

/*동영상 재생버튼 변경 및 동영상 재생 및 정지*/
play_start.addEventListener("click", function () {
    console.dir(videoPlayer);
    console.log(videoPlayer.paused);

    if (videoPlayer.paused == true) {
        console.log(videoPlayer.currentTime);
        /*동영상 시간*/
        setInterval(function () {
            console.log(getTime(3700));
            time_1.innerText = getTime(Math.floor(videoPlayer.currentTime));
        }, 1000);
        /*동영상 시간 위에*/
        play_div.innerHTML = "<i class='far fa-pause-circle' id='play_stop'></i>"
        videoPlayer.play();
    } else {
        play_div.innerHTML = "<i class='fab fa-google-play'></i>"
        videoPlayer.pause()
    }
});

/*동영상 시간*/
time_2.innerText = getTime(Math.floor(videoPlayer.duration));
/*동영상 시간 위에*/

/*동영상 음소서 부분*/
sound.addEventListener("click", function () {
    console.dir(videoPlayer);
    console.log(videoPlayer.muted);

    if (videoPlayer.muted) {
        sound_div.innerHTML = "<i class='fas fa-volume-up'></i>"
        videoPlayer.muted = false;
    } else {
        sound_div.innerHTML = "<i class='fas fa-volume-mute' id='sound_off'></i>"
        videoPlayer.muted = true;
    }
});


/*스페이스바 정지*/
document.addEventListener("keyup", function (event) {
    console.log(event);
    if (event.code == 'Space') {
        if (videoPlayer.paused == true) {
            play_div.innerHTML = "<i class='far fa-pause-circle' id='play_stop'></i>"
            videoPlayer.play();
        } else {
            play_div.innerHTML = "<i class='fab fa-google-play'></i>"
            videoPlayer.pause()
        }
    }
});


/*컨트롤 바 나오게 하는거*/
videoPlayer.addEventListener("mousemove", function () {
    if (cont.classList.contains("hidden")) {
        cont.classList.remove("hidden");
    } else {
        clearTimeout(time_out);
    }
    time_out = setTimeout(() => {
        cont.classList.add("hidden");
    }, 3000);
});

videoPlayer.addEventListener("ended", function () {
    videoPlayer.play();
});
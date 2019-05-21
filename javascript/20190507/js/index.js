//time셋팅 변수
let timeBox = document.querySelector(".timeViewer");
let timeBoxClock = timeBox.querySelector("h2");
//modal 변수
const writeBtn = document.querySelector(".writeBtn");
const modalWriteBox = document.querySelector(".modalBox_write");
const modalWriteBoxBody = document.querySelector(".modalBox_write_body");
const modalWriteCloseBtn = document.querySelector("#modalWriteCloseBtn");
const modalWriteSubmitBtn = document.querySelector("#modalWriteSubmitBtn");

//개시판 변수
let check = document.getElementById("check");
let car = document.getElementById("car");
let title = document.getElementById("title");
let name = document.getElementById("name");
const delButt = document.querySelectorAll(".delBtn");
const modifyBtn = document.querySelectorAll(".modifyBtn");

const modalWriteTitle = document.querySelector(".write_section > h1");

function timeSetting() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let time = `${year}-${month}-${day}`;
    return time;
}

//-----------------------글쓰기 div --------------------------------------
writeBtn.addEventListener("click", function () {
    if (modalWriteBox.classList.contains("hidden")) {
        modalWriteBox.classList.remove("hidden");
    }
    modalWriteTitle.innerText = "등록";
});
modalWriteBoxBody.addEventListener("click", function () {
    if (!modalWriteBox.classList.contains("hidden")) {
        modalWriteBox.classList.add("hidden");
    }
});
modalWriteCloseBtn.addEventListener("click", function () {
    if (!modalWriteBox.classList.contains("hidden")) {
        modalWriteBox.classList.add("hidden");
    }
});

modalWriteSubmitBtn.addEventListener("click", function () {
    if (car.value == "" || name.value == "" || title.value == "") {
        alert("공백 입니다. 다시 입력해주세요")
    } else {
        var my_tbody = document.querySelector('.boardTable > tbody');
        modalWriteBox.classList.add("hidden");
        var row = my_tbody.insertRow(1); // 상단에 추가
        //var row = my_tbody.insertRow(my_tbody.rows.length); // 하단에 추가
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var cell6 = row.insertCell();
        cell1.innerHTML = "<input type=checkbox></input>";
        cell2.innerHTML = car.value;
        cell3.innerHTML = title.value;
        cell4.innerHTML = name.value;
        cell5.innerHTML = timeSetting();
        cell6.innerHTML = "<input type='button' value='수정' class='modifyBtn'><input type='button' value='삭제' class='delBtn'>";
    }
})

//---------------------수정 div------------------------------

modifyBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        if (modalWriteBox.classList.contains("hidden")) {
            modalWriteBox.classList.remove("hidden");
        }
    });
});

modalWriteCloseBtn_re.addEventListener("click", function () {
    if (!modalWriteBox.classList.contains("hidden")) {
        modalWriteBox.classList.add("hidden");
    }
});
modalBox_modifyBtn_body.addEventListener("click", function () {
    if (!modalWriteBox.classList.contains("hidden")) {
        modalWriteBox.classList.add("hidden");
    }
});


//------------------삭제----------------------------------
delButt.forEach(btn => {
    console.dir(btn);
    console.log(btn.childElementCount);
    btn.addEventListener("click", function () {
        var my_tbody = document.querySelector('.boardTable > tbody');
        if (my_tbody.rows.length < 1) return;
        my_tbody.deleteRow(1); // 상단부터 삭제
        my_tbody.deleteRow(); // 하단부터 삭제
        console.log(this);

    });
});
/*
delButt.forEach(function (btn, idx) {
    //console.dir(btn);
    //console.log(btn.childElementCount);
    btn.addEventListener("click", function () {
        var my_tbody = document.querySelector('.boardTable > tbody');
        if (my_tbody.rows.length < 1) return;
        // my_tbody.deleteRow(0); // 상단부터 삭제
        my_tbody.deleteRow(idx + 1); // 하단부터 삭제
    });
});*/


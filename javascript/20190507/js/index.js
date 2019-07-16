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
const modifyBtn = document.getElementsByClassName("modifyBtn");
const checkDelBtn = document.querySelector(".checkDelBtn");
const my_tbody = document.querySelector('.boardTable > tbody');
const row_num = document.querySelector("#row_num");

//체크박스
const checkbox = document.getElementsByClassName("checkbox");

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
    car.value = "";
    title.value = "";
    name.value = "";
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

    if (modalWriteTitle.innerText == "등록") {
        if (car.value == "" || name.value == "" || title.value == "") {
            alert("공백 입니다. 다시 입력해주세요")
        } else {

            // const saveValue = todoInput.value;
            modalWriteBox.classList.add("hidden");
            var row = my_tbody.insertRow(1); // 상단에 추가
            //var row = my_tbody.insertRow(my_tbody.rows.length); // 하단에 추가
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            var cell4 = row.insertCell();
            var cell5 = row.insertCell();
            var cell6 = row.insertCell();
            cell1.innerHTML = "<input type=checkbox class='checkbox' data-num='" + (my_tbody.rows.length - 1) + "'></input>";
            cell2.innerHTML = car.value;
            cell3.innerHTML = title.value;
            cell4.innerHTML = name.value;
            cell5.innerHTML = timeSetting();
            cell6.innerHTML = "<input type='button' value='수정' class='modifyBtn'><input type='button' value='삭제' class='delBtn'>";
            // saveTodo(saveValue);
        }
    } else {
        let car_re = car.value;
        let title_re = title.value;
        let name_re = name.value;
        console.log(row_num.value);
        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].getAttribute("data-num") == row_num.value) {
                const selectTr = checkbox[i].parentElement.parentElement;

                selectTr.cells[1].innerText = car_re;
                selectTr.cells[2].innerText = title_re;
                selectTr.cells[3].innerText = name_re;
            }
        }
    }
    modalWriteBox.classList.add("hidden");
})

//---------------------수정 div------------------------------
// console.log(modifyBtn);
// Array.from(modifyBtn).forEach(btn => {
//     console.log(btn);
//     btn.addEventListener("click", function () {
//         if (modalWriteBox.classList.contains("hidden")) {
//             modalWriteBox.classList.remove("hidden");
//             // const selectTr = event.target.parentElement.parentElement;
//             // console.dir(selectTr);
//             // selectTr.remove();
//         }
//         const selectTr = event.target.parentElement.parentElement;
//         console.dir(selectTr);

//         const categoryStr = selectTr.cells[1].innerText;
//         const titleStr = selectTr.cells[2].innerText;
//         const nemeStr = selectTr.cells[3].innerText;
//         console.log(categoryStr);

//         modalWriteTitle.innerText = "수정";
//         car.value = categoryStr;
//         title.value = titleStr;
//         name.value = nemeStr;

//     });

// });

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


//------------------삭제----------------------------------
document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("delBtn")) {
        console.log("삭제 클릭");
        const selectTr = event.target.parentElement.parentElement;
        console.dir(selectTr);
        selectTr.remove();
    }
    //----------수정2--------------------------
    if (event.target.classList.contains("modifyBtn")) {
        modalWriteBox.classList.remove("hidden");
        console.log("수정");
        modalWriteTitle.innerText = "수정";
        const selectTr = event.target.parentElement.parentElement;
        console.dir(selectTr);

        const categoryStr = selectTr.cells[1].innerText;
        const titleStr = selectTr.cells[2].innerText;
        const nemeStr = selectTr.cells[3].innerText;
        console.log(categoryStr);

        car.value = categoryStr;
        title.value = titleStr;
        name.value = nemeStr;
        row_num.value = selectTr.cells[0].firstChild.getAttribute("data-num");
        console.dir(selectTr.cells[0].firstChild);
        console.dir(selectTr.cells[0].firstChild.dataset.num);
    }

});

//-------------선택삭제-------------------------------
// document.body.addEventListener("click", function (event) {
//     if (event.target.classList.contains("checkbox")) {
//         console.log("체크");
//         const selectTr = event.target.parentElement.parentElement;
//         console.dir(selectTr);
//         selectTr.remove();
//     }
// });

checkDelBtn.addEventListener("click", function () {
    for (let i = checkbox.length - 1; i >= 0; i--) {
        if (checkbox[i].checked) {
            console.dir(checkbox[i])
            checkbox[i].parentElement.parentElement.remove();
        }
    }
    // if (event.target.classList.contains("checkbox")) {
    //     console.log("체크");
    //     const selectTr = event.target.parentElement.parentElement;
    //     console.dir(selectTr);
    //     selectTr.remove();
    // }
});

// checkbox.addEventListener("click", function () {
//     console.dir(checkbox);
// });
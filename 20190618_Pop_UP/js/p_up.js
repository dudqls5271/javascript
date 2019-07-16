const pop = document.getElementById("up");
const modalWriteCloseBtn = document.querySelector("#modalWriteCloseBtn");
const modalWriteSubmitBtn = document.querySelector("#modalWriteSubmitBtn");
const my_tbody = document.querySelector('.boardTable > tbody');

let car = document.getElementById("car");
let title = document.getElementById("title");
let name = document.getElementById("name");

const modalWriteTitle = document.querySelector(".write_section > h1");

function showPopup() {
    window.open("p_up.html", "a", "width=900, height=600, left=100, top=50");
}
function boPopup() {
    parent.close();
    window.close();
    self.close();
}

modalWriteSubmitBtn.addEventListener("click", function () {
    if (modalWriteTitle.value = "등록") {
        if (car.value == "" || name.value == "" || title.value == "") {
            alert("공백 입니다. 다시 입력해주세요")
        } else {
            try {
                console.dir(window.opener);
                window.opener.parentInsertData(car.value);
            } catch (error) {
                console.dir(error);
            }

            /*
            window.opener.parentInsertData(car.value);
            window.opener.parentInsertData(title.value);
            window.opener.parentInsertData(name.value);*/
            console.log(car.value);
            console.log(title.value);
            console.log(name.value);
            // const saveValue = todoInput.value;
            // parent.close();
            // window.close();
            // self.close();
            var row = my_tbody.insertRow(1); // 상단에 추가
            // var row = my_tbody.insertRow(my_tbody.rows.length); // 하단에 추가
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
});


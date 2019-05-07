let name = document.getElementById("name");
let bar = document.getElementById("bar");
let id_name = document.getElementById("id_name");
let select_color = document.getElementById("select_color");


function input_name() {
  name.style.color = "blue";
  document.getElementById('name').readOnly = true;
  alert(name.value + "님 확인되었습니다. ")
}

function input_reset() {
  name.style.color = "black";
  document.getElementById('name').readOnly = false;
}

function bar_date() {
  bar.style.color = "blue";
  alert("생일 : " + bar.value + "확인 되었습니다.")
}

function aggre() {
  alert("개인정보 수집에 동의 하셨습니다.");
}

select_color.addEventListener("change", function () {
  //아마 function의 change을 가져온다
  console.log(select_color.value);
  // 콘솔의 값을 보기 위해 지정 해주는것 이다.

  if (select_color.value == "red") {
    // 만약게 value 값이 red 값이 들어오면
    ex_h1.style.color = "red";
    // ex_h1의 style 의 color 이 red로 변경
  } else if (select_color.value == "blue") {
    //else if문으로 조건을 더 준다.
    ex_h1.style.color = "blue";
    ex_h1.text = "asd";
  } else if (select_color.value == "green") {
    ex_h1.style.color = "green";
  } else if (select_color.value == "purple") {
    ex_h1.style.color = "purple";
  }
});
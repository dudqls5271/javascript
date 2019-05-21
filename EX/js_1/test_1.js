let select_color = document.getElementById("select_color");
// 변수를 설정해주는것 let 형태로
//document.getElementById("select_color") 로 불러 오는것
let select_size = document.getElementById("select_size");
let select_bold = document.getElementById("select_bold");
let ex_h1 = document.getElementById("Ex_h1");

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
  } else if (select_color.value == "green") {
    ex_h1.style.color = "green";
  } else if (select_color.value == "purple") {
    ex_h1.style.color = "purple";
  }
});

select_size.addEventListener("change", function () {
  console.log(select_size.value);
  if (select_size.value == "10") {
    ex_h1.style.fontSize = "10px";
  } else if (select_size.value == "15") {
    ex_h1.style.fontSize = "15px";
  } else if (select_size.value == "20") {
    ex_h1.style.fontSize = "20px";
  } else if (select_size.value == "30") {
    ex_h1.style.fontSize = "30px";
  }
});

select_bold.addEventListener("change", function () {
  console.log(select_bold.value);
  if (select_bold.value == "100") {
    ex_h1.style.fontWeight = "100px";
  } else if (select_bold.value == "200") {
    ex_h1.style.fontWeight = "200";
  } else if (select_bold.value == "300") {
    ex_h1.style.fontWeight = "300";
  } else if (select_bold.value == "400") {
    ex_h1.style.fontWeight = "400";
  }
});

function button1_click() {
  //onclick="button1_click();"의 이벤트을 주는거임
  ex_h1.style.color = "black";
  ex_h1.style.fontSize = "2em";
  ex_h1.style.fontWeight = "bold";
  alert("리셋 (Reset)");
}

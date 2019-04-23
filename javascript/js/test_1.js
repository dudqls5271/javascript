let select_color = document.getElementById("select_color");
let select_size = document.getElementById("select_size");
let select_bold = document.getElementById("select_bold");
let ex_h1 = document.getElementById("Ex_h1");

select_color.addEventListener("change", function() {
  console.log(select_color.value);

  if (select_color.value == "red") {
    ex_h1.style.color = "red";
  } else if (select_color.value == "blue") {
    ex_h1.style.color = "blue";
  } else if (select_color.value == "green") {
    ex_h1.style.color = "green";
  } else if (select_color.value == "purple") {
    ex_h1.style.color = "purple";
  }
});

select_size.addEventListener("change", function() {
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

select_bold.addEventListener("change", function() {
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

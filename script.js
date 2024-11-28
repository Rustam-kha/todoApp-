let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let notice = document.getElementById("notice");
let btn_clear = document.getElementById("btn_clear");
let btn_ad = document.getElementById("btn_add");
let btn_restar = document.getElementById("btn_restart");
let container = document.getElementById("cont");
let heading = document.getElementById("heading");

function Add() {
  if (inputs.value == "") {
    notice.style.display = "block";
  } else {
    btn_restart.style.display = "block";
    btn_clear.style.display = "block";
    notice.style.display = "none";
    let newEl = document.createElement("ul");
    newEl.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEl);
    inputs.value = "";
    newEl.querySelector("i").addEventListener("click", remove);
    function remove() {
      newEl.remove();
    }
    inputs.onclick = function () {
      notice.style.display = "none";
    };
    btn_clear.onclick = function () {
      text.innerHTML = "";
      btn_clear.style.display = "none";
      btn_restart.style.display = "block";
    };
    btn_restart.onclick = function () {
      container.style.display = "block";
      btn_restart.style.display = "none";
      notice.style.display = "none";
      inputs.value = "";
      text.innerHTML = "";
    };
  }
}

// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("form").addEventListener("submit",myfun);
var data=JSON.parse(localStorage.getItem("schedule")) || [];
function myfun(){
  event.preventDefault();
  var obj={
    matchNum:document.querySelector("#matchNum").value,
    teamA:document.querySelector("#teamA").value,
    teamB: document.querySelector("#teamB").value,
    date:document.querySelector("#date").value,
    venue:document.querySelector("#venue").value
  }
  data.push(obj);
  console.log(data)
  localStorage.setItem("schedule",JSON.stringify(data));
}
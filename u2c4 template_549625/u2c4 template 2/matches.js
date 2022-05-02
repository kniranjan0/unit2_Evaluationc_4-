// write js code here corresponding to matches.html

var data=JSON.parse(localStorage.getItem("schedule"));
display(data);
    function display(matches){
    matches.forEach(function(ele){
      var tr=document.createElement("tr");

      var td1=document.createElement("td");
      td1.innerText=ele.matchNum;

      var td2=document.createElement("td");
      td2.innerText=ele.teamA;

      var td3=document.createElement("td");
      td3.innerText=ele.teamB;

      var td4=document.createElement("td");
      td4.innerText=ele.date;

      var td5=document.createElement("td");
      td5.innerText=ele.venue;

      var td6=document.createElement("td");
      td6.innerText="Add as Favourites"
      td6.style.color="green"
      td6.style.cursor="pointer"

      tr.append(td1,td2,td3,td4,td5,td6);
      document.querySelector("tbody").append(tr)

      td6.addEventListener("click",function(){
        addfev(ele);
      })
    })
}
document.querySelector("#filterVenue").addEventListener("change",function(){
    filtersmatchs();
})
    function filtersmatchs(){
        var f=document.getElementById("filterVenue").value;
        var matches=JSON.parse(localStorage.getItem("schedule"))||[];

        var filtersmatchs=matches.filter(function(e){
            return e.venue==f;
        })
        document.querySelector("tbody").innerHTML="";
        display(filtersmatchs)
          
    }

    function addfev(ele){
        var fev=JSON.parse(localStorage.getItem("favourites"))||[];
        fev.push(ele);
        localStorage.setItem("favourites",JSON.stringify(fev));
    }

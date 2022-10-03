document.querySelector("form").addEventListener("submit",eligible);

function eligible(){
    event.preventDefault();
    var name=document.getElementById("name").value;
    var course=document.getElementById("course").value;
    var math=document.getElementById("math").value;
    var physics=document.getElementById("physics").value;
    var biology=document.getElementById("biology").value;
    var english=document.getElementById("english").value;

    console.log(name,course,math,physics,biology,english);

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=name;

    var td2=document.createElement("td")
    td2.innerText=course;

    var td3=document.createElement("td");
     td3.innerText=math;

     var td4=document.createElement("td");
     td4.innerText=physics;

     var td5=document.createElement("td");
     td5.innerText=biology;

     var td6=document.createElement("td");
     td6.innerText=english;

     var td7=document.createElement("td");
     var total=+math + +physics + +biology + +english;
     var percentage=(total/400)*100;
      
     td7.innerText=percentage;

     var td8=document.createElement("td");
     if(percentage>=80)
     {
        td8.style.backgroundColor="green";
        td8.innerText="Exellent";
     }
     else if(percentage>=50)
     {
        td8.style.backgroundColor="yellow";
        td8.innerText="Average";
     }
     else{
        td8.style.backgroundColor="red";
        td8.innerText="Fail";
     }

     var td9=document.createElement("td");
     td9.innerText="Delete";

     td9.addEventListener("click",deleteRow);

     tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
     document.querySelector("tbody").append(tr);


}

function deleteRow(){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}
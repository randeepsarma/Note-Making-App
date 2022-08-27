showTime();
let button1=document.getElementById("button1");
let highlights=document.getElementById("highlights")
let textarea=document.getElementById("textarea")
button1.addEventListener('click',function(e){
let notes=localStorage.getItem("notes");
if(!notes){
    Obj=[];
}else Obj=JSON.parse(notes);

Obj.push(textarea.value);
console.log(Obj);
localStorage.setItem("notes",JSON.stringify(Obj));
textarea.value="";
showTime();
});

function showTime(){
    let notes=localStorage.getItem("notes");
    if(!notes){
        Obj=[];
    }else Obj=JSON.parse(notes);
let html="";
Array.from(Obj).forEach(function(element,index){
html+=`
<div id="${index+1}" class="notenumbers mx-3 my-3" style="width: 18rem;border:2px solid black;padding:5px;border-radius:5px"> 
      <h5 class="card-title">Note ${index+1}</h5>
      <p>${element}</p>
      
      <button id="button-${index+1}" onclick="deletefunct(${index+1})" class="btn btn-primary">Delete Node</button>
   </div>

`;
document.getElementById("highlights").innerHTML=html;
});


}
function deletefunct(num){

let notes=JSON.parse(localStorage.getItem("notes"));
let Obj=[];
Array.from(notes).forEach(function(element,index){
    if(index+1!=num){
Obj.push(element);
    }
});
localStorage.setItem("notes",JSON.stringify(Obj));
showTime();
}
let search=document.getElementById("searchButton");
search.addEventListener("click",function(){
let txtTosearch=document.getElementById("Search").value.toLowerCase();
let notes=document.getElementsByClassName("notenumbers");
Array.from(notes).forEach(function(element){
    let p=element.getElementsByTagName("p")[0].innerText;
    if(p.includes(txtTosearch)){
        console.log("yes");
        element.style.display="block";
    }else element.style.display="none";

});

});

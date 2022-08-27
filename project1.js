showTime();

let button1=document.getElementById("button1");
let highlights=document.getElementById("highlights");
let texttitle=document.getElementById("texttitle");//pulling texttile
let textarea=document.getElementById("textarea");//Pulling textarea


button1.addEventListener('click',function(e){//clicking Add Note
let notes=localStorage.getItem("notes");//pulling notes string from local storage
let titles=localStorage.getItem("titles");//pulling title string from local storage

let newtitles=(!titles)?[]:JSON.parse(titles);
if(!notes){
    Obj=[];
}else Obj=JSON.parse(notes);

Obj.push(textarea.value);//append new note text to Note Object
newtitles.push(texttitle.value);//append new title text to title object
localStorage.setItem("notes",JSON.stringify(Obj));//store new notes array as string in local storage
localStorage.setItem("titles",JSON.stringify(newtitles));//store new titles array.....

textarea.value="";
texttitle.value="";
showTime();
});

 function showTime(){
     let notes=localStorage.getItem("notes");//pulling notes string from local storage
     let titles=localStorage.getItem("titles");//pulling titles string from local storage
     if(!notes){
         Obj=[];
     }else Obj=JSON.parse(notes);
     let newtitles=(!titles)?[]:JSON.parse(titles);


     let html="";

 Array.from(Obj).forEach(function(element,index){
 html+=`
 <div id="${index+1}" class="notenumbers mx-3 my-3" style="width: 18rem;border:2px solid black;padding:5px;border-radius:5px"> 
       <h4 class="card-title" > ${newtitles[index]}</h4>
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
 //let titles=localStorage.getItem("titles");//pulling titles string from local storage
 let titles=JSON.parse(localStorage.getItem("titles"));
let newtitles=[];
 Array.from(notes).forEach(function(element,index){
     if(index+1!=num){
 Obj.push(element);
 newtitles.push(titles[index])
     }
 });
 localStorage.setItem("notes",JSON.stringify(Obj));
 localStorage.setItem("titles",JSON.stringify(newtitles));
showTime();
} 
 let search=document.getElementById("searchButton");
 search.addEventListener("click",function(){
 let txtTosearch=document.getElementById("Search").value.toLowerCase();
 let notes=document.getElementsByClassName("notenumbers");
 Array.from(notes).forEach(function(element){
     let p=element.getElementsByTagName("p")[0].innerText.toLowerCase();
     if(p.includes(txtTosearch)){
         console.log("yes");
         element.style.display="block";
     }else element.style.display="none";

 });

 });




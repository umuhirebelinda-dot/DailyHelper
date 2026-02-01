let taskcontainerbtn = document.getElementById("taskcontainer");
let notesbtn = document.getElementById("notes");
let motivationbtn = document.getElementById("motivation");

let taskcontainer = document.getElementsByClassName("taskcontainer")[0];
let notes = document.getElementsByClassName("notes")[0];
let motivation = document.getElementsByClassName("motivation")[0];
let maincontainer = document.getElementsByClassName("maincontainer")[0];

function taskcontainerf() {
  taskcontainer.style.display = "block";
  notes.style.display = "none";
  maincontainer.style.display = "block";
  motivation.style.display = "none";
}
function notesf(){
  taskcontainer.style.display = "none";
  notes.style.display = "block";
  maincontainer.style.display = "block";
  motivation.style.display = "none";
}
function motivationf(){
  taskcontainer.style.display = "none";
  notes.style.display = "none";
  maincontainer.style.display = "block";
  motivation.style.display = "block";

}

taskcontainerbtn.addEventListener("click", taskcontainerf);
notesbtn.addEventListener("click",notesf);
motivationbtn.addEventListener("click",motivationf);
let button1=document.querySelector(".taskcontainer >button");
let button2=document.querySelector(" .notes button:last-of-type");
let button3=document.querySelector(".motivation button:last-of-type");
let buttons=[button1,button2,button3];
buttons.forEach(btn =>{
    btn.addEventListener("click",() =>{
        maincontainer.style.display="none";
    });
});
 
let addtaskbtn = document.getElementById("addtaskbtn");
let smallcontainer = document.querySelector(".smallcontainer");
let input = document.getElementById("addtask");

addtaskbtn.addEventListener("click", () => {
  let tasks = input.value.trim();
  if (!tasks) return; 

   
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("taskList");

   
  let p = document.createElement("p");
  p.textContent = tasks;

   
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

   
  delBtn.addEventListener("click", () => {
    taskDiv.remove(); 
  });

   
  taskDiv.append(p, delBtn);
  smallcontainer.appendChild(taskDiv);

   
  input.value = "";
});
let textarea;
let note=document.getElementById("realnotes");
let savenotebtn=document.getElementById("savebtn");
savenotebtn.addEventListener("click",()=>{
    textarea=document.getElementById("note").value;
    note.textContent=textarea;
    textarea=document.getElementById("note").value="Write anything... thoughts, shopping list, ideas...";
})
let showquotebtn=document.querySelector(".motivation button:first-of-type");
let quote=document.getElementById("quote");
const quotes = [
  "Small progress is still progress.",
  "You don't have to be great to start, but you have to start to be great.",
  "Done is better than perfect.",
  "One day or day one. You decide.",
  "The best way to predict the future is to create it.",
  "You are allowed to rest. You are not a machine.",
  "It's okay to be a work in progress.",
  "Breathe. You're doing better than you think.",
  "Focus on today. Tomorrow will take care of itself.",
  "You already have what it takes.",
  "Kindness is free. Sprinkle that shit everywhere.",
  "Some days you just have to create your own sunshine."
];
let i=0;
showquotebtn.addEventListener("click",()=>{
    quote.textContent="";
    quote.textContent=quotes[i];
    i=i+1;
    if(i==12){
        i=0;
    };
});
let clock=document.getElementsByClassName('clock')[0];

 
function ftime(){
  let time= new Date();
  let hour=time.getHours() ;
  let min=time.getMinutes();
  let sec=time.getSeconds();
  
  clock.innerHTML=`${hour}:${min}:${sec}`;
}
 setInterval(ftime,1000);
 




 
    
 



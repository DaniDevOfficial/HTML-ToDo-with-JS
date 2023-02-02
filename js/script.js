//  const submitjs = document.getElementById("submit")
//  const taskbarjs = document.getElementById("tasks")
//  let entryjs = document.getElementById("entryText");
//  
//  document.getElementById("submit").addEventListener("click", function(){
//      event.preventDefault()
//      let creator = document.createElement('div');
//      let thistask = creator.setAttribute("id", "TodoTask")
//      
//  });


let taskarray = [];

const submitButton = document.querySelector('#submit');
let entryText;
const tasksContainer = document.getElementById('Tasks');
let singletask; 
let themechange = document.getElementById(`theme`)


// Creates a new Task
submitButton.addEventListener('click', function() {
entryText = document.getElementById("entrytext").value
    if(entryText == ""){

    alert("Bitte etwas in der task eingeben")
    exit
}
  const newTask = document.createElement('div');
  newTask.classList.add("todotask")
  newTask.innerText= `${entryText}`;
  document.getElementById("tasks").appendChild(newTask)

  taskarray.push()

});



//singletask.addEventListener('click', function() {
//
//
//
//});

function editor(event){
    const thistaskedit = event.currentTarget;
    alert("ehhee")
}



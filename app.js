//Variables

let addTask = document.getElementById("add-task"); //declaration du button

let taskContainer = document.getElementById("task-ontainer"); //declaration de notre 2em container

let inputTask = document.getElementById("input-task"); //declaration de l'input
let tasksBtn = document.querySelector("#tasksBtn");

//Event Listener for add Button
tasksBtn.addEventListener("click", showTasks);


addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let paragraphe = document.createElement("p");
  paragraphe.innerText = `${inputTask.value}`;
  task.appendChild(paragraphe);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  


  if (inputTask.value === "") {
    alert("Please Enter a task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkButton.addEventListener('click',function () {
    checkButton.parentElement.style.textDecoration="line-through";
  });

  deleteButton.addEventListener('click',function(e){
    let target = e.target;
    target.parentElement.parentElement.remove()

  })

 
});

 function showTasks() {
   taskContainer.style.display = "block";
   addTask.style.display = "none";
     inputTask.style.display = "none";
     tasksBtn.classList.add("buton");

    //  tasksBtn.style.textAlign = "center";



   //   editTask.style.display = "none";
 }

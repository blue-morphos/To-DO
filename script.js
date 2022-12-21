const taskArray = [];
const mainContent = document.getElementById("main-content");
const button = document.querySelector("button")
class Task {
  constructor (title, date, status){
    this.title = title,
    this.date = date,
    this.status = status
  }
}
addTaskToArray = (task) => {
  taskArray.push(task)
};

displayTask = (task) => {
  let taskCard = document.createElement('div');
  taskCard.setAttribute('class', 'task');
  let titleDiv = document.createElement('div');
  titleDiv.textContent = task.title;
  let dateDiv = document.createElement('div');
  dateDiv.textContent = task.date;
  taskCard.append(titleDiv, dateDiv);
  mainContent.appendChild(taskCard);
}

displayArray = () => {
  for (let i = 0; i < taskArray.length; i++){
    let taskCard = document.createElement('div');
    taskCard.setAttribute('class', 'task')
    taskCard.textContent= taskArray[i].title + taskArray[i].date;
    mainContent.appendChild(taskCard);
  }
}
newTask = () => {
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let status = "incomplete";
  const task = new Task (title, date, status);
  addTaskToArray(task, date);
  displayTask(task);
}

button.addEventListener('click', newTask);
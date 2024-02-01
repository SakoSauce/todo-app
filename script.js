const addBtn = document.querySelector("#addTaskBtn");
const taskNameInput = document.querySelector("#taskNameInput");
const container = document.body.querySelector(".container");
function createTask() {
    return function() {
        if (taskNameInput.value != "") {
            let taskContainer = document.createElement('div');
            
            let newTask = document.createElement("input");
            let newLabel = document.createElement("label");
            
            newTask.setAttribute("type", "checkbox");
            newTask.innerText = "Task";
            taskContainer.appendChild(newTask);
            taskContainer.appendChild(newLabel);
            container.appendChild(taskContainer);
            newLabel.innerText = taskNameInput.value;
            taskContainer.style["border-bottom"] = "1px solid orange";
            taskContainer.style["margin-top"] = "5px";
        }
    }

}
addBtn.onclick = createTask();
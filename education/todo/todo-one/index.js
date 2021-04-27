const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let totoItemElems = [];

function Task (description){
    this.description = description;
    this.completed = false;
}
const createTemplate = (task, index) => {
    return `
        <div class="todo-item ${task.completed ? 'checked' : ''}">
            <div class="discription">${task.description}</div>
            <div class="buttons">
                <input onclick = "completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
                <button onclick = "deleteTask(${index})" class="btn-delete">Delete</button>
        </div>
        </div>
    `
}

const filterTasks = () =>{
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    const completedTasks = tasks.length && tasks.filter(item => item.completed == true);
    tasks =  [...activeTasks, ...completedTasks];
}
const fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if(tasks.length > 0){
        filterTasks();
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        });
        totoItemElems = document.querySelectorAll('.todo-item');
    }
}
fillHtmlList();

const updateLocal = () => {
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed){
        totoItemElems[index].classList.add('checked')
    }else{
        totoItemElems[index].classList.remove('checked')
    }
    updateLocal();
    fillHtmlList();
}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.value));
    updateLocal();
    fillHtmlList();
    deskTaskInput.value = "";
})

const deleteTask = index => {
    totoItemElems[index].classList.add('delition');
    setTimeout(() => {
        tasks.splice(index, 1);
        updateLocal();
        fillHtmlList();
    }, 300)
}
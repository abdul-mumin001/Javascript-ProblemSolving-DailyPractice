const todos = [];
const todosList = document.querySelector('.js-todos-list');
const formAddButton = document.querySelector('.js-btn-add');
const formInput = document.querySelector('.js-form-input');
const formMessage = document.querySelector('.js-alert');
const filterBtnsCont = document.querySelector('.filter_cont');
const prioritySelect = document.querySelector('#priority_select');

let count = 0;


function resetForm() {
    formInput.value = '';
    formMessage.innerHTML = '';
    formMessage.classList.remove('Alert--error');
}


function createListItem(todo) {
    const listItem = document.createElement('li');
    listItem.setAttribute("id",todo.id);
    listItem.innerHTML = `<div class= "${todo.priority}">   <span>${todo.text}</span>
                <button class="btn-danger btn btn-sm float-right delete">Delete</button>
                <button class="btn-success btn btn-sm float-right edit">Edit</button> 
    <div>`
    todosList.appendChild(listItem);
    
}


function addTodo(event) {
    event.preventDefault();
    if (!formInput.value) {
        formMessage.innerHTML = "Input field is empty";
    } else {
        const todo = {
            id: count++,
            text: formInput.value,
            priority: prioritySelect.options[prioritySelect.selectedIndex].value
        };
        todos.push(todo);
        createListItem(todo);
        resetForm();
        formInput.focus();
    }
}

// Delete todo
function deleteTodo(e){
    console.log(e);
    todos.forEach((ele,idx)=>{
        if(ele.id == parseInt(e.path[2].id)) todos.splice(idx,1);
    })
    e.path[2].remove();
}

// Edit todo
function editTodo(e){
    console.log(e);
    let targetTodo = e.path[1].firstElementChild;
    formInput.value = targetTodo.textContent;
    resetForm()
}




function filterList(todos) {

    todos.filter(filterCallback)
        .forEach(filteredTodo => appendFragmentToList(filteredTodo, todosFragment));
}

function filterTodos(e){
    todosList.innerHTML = "";
    let temp;
    if(e.target.dataset.filter != "all"){
        temp = todos.filter(elem => elem.priority == e.target.dataset.filter)
    }else{
        temp = todos;
    }
    console.log(e);
    temp.map(ele=>{
        createListItem(ele);
    })
    console.log(todosList)

}

/* Event Listeners */

/**Add Todos */
formAddButton.addEventListener('click', addTodo);


// /**Remove and Edit todos */
todosList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        deleteTodo(e)
    }else if(e.target.classList.contains("edit")){
        editTodo(e)
    }
})



/**Filter Todos */
filterBtnsCont.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.classList.contains("js-filter-btn")){
        console.log(e.target)
        filterTodos(e);  
    } 
})
const todos = [];
let targetTodo;
const todosList = document.querySelector('.js-todos-list');
const formAddButton = document.querySelector('.js-btn-add');
const formInput = document.querySelector('.js-form-input');
const formMessage = document.querySelector('.js-alert');
const filterBtnsCont = document.querySelector('.filter_cont');
const prioritySelect = document.querySelector('#priority_select');
/**Check if local storage is empty */
/**if not empty then fetch the data from LS and call createListItem */
// Please neglect this part 
// function gkjdfgkdfkg{
//     let temp = JSON.parse(localStorage.getItem("Key"));
//     temp.forEach((ele,idx)=>{
//         if(ele.id == parseInt(e.path[2].id)) todos.splice(idx,1);
//     })
// }






let count = 0;

function resetForm() {
    formInput.value = '';
    formMessage.innerHTML = '';
}


function createListItem(todo) {
    const listItem = document.createElement('li');
    // console.log("todo id",todo.id);
    listItem.setAttribute("id",todo.id);
    listItem.innerHTML = `<div class= "${todo.priority}">   <span>${todo.text}</span>
                <button class="btn-danger btn btn-sm float-right delete">Delete</button>
                <button class="btn-success btn btn-sm float-right edit">Edit</button> 
    <div>`
    todosList.appendChild(listItem);
    
}

function saveTodo(e,text){
   targetTodo.innerText = text;
   console.log(targetTodo);
   formAddButton.innerText = "Add";
   //Add the functionality to update the array
//    todos.forEach((ele,idx)=>{
//     if(ele.id == parseInt(e.path[2].id)) {
//     elem.tex = text;
//     elem.priority = priority;
// };
//  })
   resetForm();
}



function addTodo(e){
    e.preventDefault();
    if(e.target.innerText == "Save"){
        saveTodo(e , formInput.value  );
    }else{
        if(formInput.value == ""){
            formMessage.innerText = "Error";
            setTimeout(()=>formMessage.innerText="",1000)
        }else{
            const todo = {
                id: count++,
                text: formInput.value,
                priority: prioritySelect.value,
            };
            todos.push(todo);
            createListItem(todo);
            resetForm();
        }
    }
}

todo = [ {
    id: count++,
    text: formInput.value,
    priority: prioritySelect.value
}, {
    id: count++,
    text: formInput.value,
    priority: prioritySelect.value
}]
/**Function to delete todo */
function deleteTodo(e){
    console.log(e);
    todos.forEach((ele,idx)=>{
        if(ele.id == parseInt(e.path[2].id)) todos.splice(idx,1);
    })
    e.path[2].remove();
}

function editTodo(e){
        console.log(e);
        targetTodo = e.path[1].firstElementChild; // span
        formInput.value = targetTodo.textContent;
        formAddButton.innerText = "Save";
        // resetForm()

}


// Function to filter

function filterTodos(e){
    todosList.innerHTML = "";
    let temp;
    if(e.target.dataset.filter != "all"){
        temp = todos.filter(elem => elem.priority == e.target.dataset.filter)
    }else{
        temp = todos;
    }
    temp.map(ele=>{
        createListItem(ele);
    })
    console.log(todosList)


}




/**Adding todos */
formAddButton.addEventListener("click",addTodo)

/**Delete and edit */
todosList.addEventListener("click",(e)=>{
    console.log(e);
    if(e.target.classList.contains("delete")){
        deleteTodo(e)
    }else if(e.target.classList.contains("edit")){
        editTodo(e)
    }
})


/**Filter Todos */
filterBtnsCont.addEventListener("click",(e)=>{
    // console.log(e.target)
    if(e.target.classList.contains("js-filter-btn")){
        // console.log(e.target)
        filterTodos(e);  
    } 
})



/**Local storage */
// let arr = [{id:1,a:2}];

// localStorage.setItem("hello",JSON.stringify(arr));
// console.log(JSON.parse(localStorage.getItem("hello")));



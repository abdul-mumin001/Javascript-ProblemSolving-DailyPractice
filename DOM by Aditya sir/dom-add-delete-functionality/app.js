const addBtn = document.querySelector(".add");
const showData = document.querySelector("#show-data");

let arr = [];

function addTodo() {
  const input = document.querySelector(".input").value;

  if (arr.includes(input)) {
    alert("Duplicate To Do");
    return;
  }

  showData.innerHTML += `<div>
                            <p>${input}</p>
                            <button class="delete">Delete</button>  
                           </div>`;

  arr.push(input);
}


addBtn.addEventListener("click", addTodo);

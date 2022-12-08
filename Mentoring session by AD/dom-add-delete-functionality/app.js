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
  localStorage.setItem("id", JSON.stringify(arr));
}

function deleteTodo(e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentNode.remove();
  
      const input = e.target.previousElementSibling.innerText;
      const index = arr.indexOf(input);
      arr.splice(index, 1);
      localStorage.setItem("id", JSON.stringify(arr));
    }
  }

  function persistData(){
    const localStorageData = localStorage.getItem("id");

    if(!localStorageData){
      console.log("YES")
      return;
    }

    const dataArr = JSON.parse(localStorageData);

    dataArr.forEach(input => {
      showData.innerHTML += `<div>
                            <p>${input}</p>
                            <button class="delete">Delete</button>  
                           </div>`;
    });
}
window.addEventListener('load', persistData)
showData.addEventListener("click", deleteTodo);
addBtn.addEventListener("click", addTodo);



//initial references
const pop_up = document.getElementById("completed-div");

const selectDiv = document.getElementById("number-selection");

const numbers = document.querySelectorAll(".select-btn");

const intDiv = document.getElementById("interactive-div");


//functionalities start
function openBtn() {
    pop_up.classList.add('visible-div')
}

function closeBtn() {
    pop_up.classList.remove('visible-div')
}

numbers.forEach(e => { 
   e.addEventListener('click', () => {
     intDiv.innerText = e.textContent;
  }); 
});
//functionalities end
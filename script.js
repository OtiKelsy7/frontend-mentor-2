//initial references
const pop_up = document.getElementById("completed-div");

const selectDiv = document.getElementById("number-selection");

const intDiv = document.getElementById("interactive-div");


//functionalities start
function openBtn() {
    pop_up.classList.add('visible-div')
}

function closeBtn() {
    pop_up.classList.remove('visible-div')
}

['b1', 'b2', 'b3', 'b4', 'b5'].forEach(id => { 
   document.getElementById(id).addEventListener('click', () => {
   intDiv.innerHTML = id;
  }); 
});
//functionalities end
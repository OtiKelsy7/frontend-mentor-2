//initial references
const PopUp = document.getElementById("completed-div");

const submitBtn = document.getElementById("submitButton");

const numDiv = document.getElementById("number-selection");

const intDiv = document.getElementById("interactive-div");


//functionalities start
function openBtn() {
    PopUp.classList.add("visible-div")
}

submitBtn.addEventListener("click", () => {
    console.log("submit button clicked")
})

numDiv.addEventListener("click", () => {
    console.log("selected button clicked")
})

// numDiv.addEventListener("click", () => {
//     console.log("button 1 clicked")
// })
// numDiv.addEventListener("click", () => {
//     console.log("button 2 clicked")
// })
// numDiv.addEventListener("click", () => {
//     console.log("button 3 clicked")
// })
// numDiv.addEventListener("click", () => {
//     console.log("button 4 clicked")
// })


// function closeBtn() {
//     PopUp.classList.remove("visible-div")
// };

function numFunc(num) {
    return num;
}

console.log(numFunc())

//functionalities end
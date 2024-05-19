//to add a text area
const createbutton = document.querySelector(".createnotes");
const notesarea = document.querySelector(".notesarea");
// const deletebutton = document.querySelector(".delete");
var notes = document.querySelector(".notes1");
// const deletebutton = document.querySelector(".delete");
createbutton.addEventListener('click', function createnotes() {
    let newnotes = document.createElement('p');
    let image = document.createElement('img');
    image.src = "images/delete.png";
    image.classList = "delete";
    newnotes.classList = "notes1";
    newnotes.setAttribute("contenteditable", "true");
    notesarea.appendChild(newnotes).appendChild(image);
    //save items
    localStorage.setItem("data", notesarea.innerHTML);
})
document.addEventListener("keydown", function addnotes() {
    if (event.key === '+') {
        let newnotes = document.createElement('p');
        let image = document.createElement('img');
        image.src = "images/delete.png";
        image.classList = "delete";
        newnotes.classList = "notes1";
        newnotes.setAttribute("contenteditable", "true");
        notesarea.appendChild(newnotes).appendChild(image);
        //save items
        localStorage.setItem("data", notesarea.innerHTML);
    }
})
function getexistingdata() {
    notesarea.innerHTML = localStorage.getItem("data");
}
getexistingdata();

notesarea.addEventListener("click", function de(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".notes1");
        console.log(notes);
        notes.forEach(element => {
            element.onkeyup = function(){
                localStorage.setItem("data", notesarea.innerHTML);
            }
            
        });
    }
    localStorage.setItem("data", notesarea.innerHTML);
})

document.addEventListener("keydown", function enter(event){
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

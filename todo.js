let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

array = []; // creating an empty array 

function addToList() {
  let li = document.createElement("li"); // creating an element
    li.appendChild(document.createTextNode(input.value)); // creating a text node with the input
    ul.appendChild(li);   // appending it to the ul as the child. 
    // console.log(li); // prints out the value of li
    
    // adding event listener to li element to be able to cross it on click
    li.addEventListener("click", ableToCross);  

    array.push(li); // adding the element to the array 
    // console.log(array);
   

    input.value = "";
     
  }

// adding an event listener to the button 
button.addEventListener("click", function() {
  if (input.value.length > 0) {  // check is not an empty field. if string is valid. 
   addToList();
  }

});

// function to add things to the list on enter
input.addEventListener("keypress", function(e){
  if (input.value.length > 0 && e.key === "Enter") {
    addToList();
  }
  
});

// function to cross off stuff when is clicked. 

function ableToCross(e) {
  if (e.target) {   // target returns the element where the event occurred
      e.target.classList.toggle("done");  // togglees if above is true 
          }
};



        

// JavaScript Functions for the webpage: 

// This Fucnction will greet the user as soon the Home Page Loads! 
function showGreeting() {
    alert('Welcome to the the wonderful world of Mercedes!');
}


 // This function will validate the field for the users fullName is not empty.  
function validateForm() {
    var name = document.getElementById("fullName").value;
    if (name === "") {
        alert("Name must be filled out!");
        return false;
    }
    return true;
}

// This function will change the background color to green when the "add me to the list" button is clicked on the contact page. 
function changeBackgroundColor() {
    document.body.style.backgroundColor = "green";
}

// This function will play the sound of an engine when the carousels slides to the next slide on the vehicles page. 
function playSound() {
    // let sound = document.getElementById("engine-audio");
    // sound.play;
}


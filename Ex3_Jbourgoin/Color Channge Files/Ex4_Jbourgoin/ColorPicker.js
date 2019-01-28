var rBtn = document.getElementById("redClr");
var gBtn = document.getElementById("greenClr");
var bBtn = document.getElementById("blueClr");
var submitButton = document.querySelector("#submit");
var resetButton = document.querySelector("#reset");

submitButton.addEventListener("click", clickHandler, false);

resetButton.addEventListener("click", resetHandler, false);

function resetHandler(e){
    colorbox.style.backgroundColor = "rgb(253,245,230)";
}

function clickHandler(e){

    rBtn = parseInt(rBtn.value);
    gBtn = parseInt(gBtn.value);
    bBtn = parseInt(bBtn.value);

    if(isNaN(rBtn) || !validate(rBtn)){
        alert("Enter a Number between 0 and 255 for a red color!");
    }

    if(isNaN(gBtn) || !validate(gBtn)){
        alert("Enter a Number between 0 and 255 for a green color!");
    }

    if(isNaN(bBtn) || !validate(bBtn)){
        alert("Enter a Number between 0 and 255 for a blue color!");
    }

    function validate(n) {
        if ( n < 0 || n > 255) {
            return false;
        } else {
            return true;
        }
    }
    
    colorbox.style.backgroundColor = "rgb("+rBtn.value+","+gBtn.value+","+bBtn.value+")";
    console.log("Red: "+rBtn+", Green: "+gBtn+", Blue: "+bBtn);
}
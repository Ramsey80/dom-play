/*
With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
Un-highlight (normal or otherwise) all lines from all other actors in the play
The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page
The page must do the work without page re-loads (i.e. it must be done via JavaScript and the DOM)
The page may not use a third party API (jQuery, for example)
HTML "hooks" may be added to the page, meaning you can edit the HTML to enable your scripts to perform properly
*/


//document.querySelector(".vForVendetta").style.backgroundColor = "yellow";
const spans = document.querySelectorAll("div#play span");

console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener("Click",myAlert);
        let myActor = mySpan.dataset.actor;
        highlightActor(myActor);
        // alert(myActor);
}
function highlightActor(myActor) {
    for(const mySpan of spans){
        if(myActor == mySpan.dataset.actor) {
            mySpan.style.backgroundColor = "rgb(127, 255, 212)";
        }
        else {
            mySpan.style.backgroundColor = "white";
        }
    }
}
/*
function myAlert(){
    alert("Im Clicked!")
}
*/
function highlight(el){
    
    if(el.style.backgroundColor == "orange"){
        el.style.backgroundColor = "white";
    }else{
        el.style.backgroundColor = "orange";
    }
}

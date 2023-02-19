/*Create one div and two buttons right and left. 
When clicking right, move the div by 10px right, and when clicking left, move the div by 10px left.*/
let Div = document.getElementById("myDiv");

var margin = 0;

function Right() {
    Div.style.marginLeft = margin + "px";
    margin += 10;
};
function Left() {
    Div.style.marginLeft = margin + "px";
    margin -= 10;
};
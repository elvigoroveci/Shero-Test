/*Create two divs. One blue with the text inside "Before Hover." 
And another red one that is hidden with the text "After Hover." 
When you hover over the blue one, the red will show, and the blue one will be hidden.
When you remove the mouse from the red one, the blue one will show again. */

let FirstDiv = document.querySelector(".FirstDiv");
let SecondDiv = document.querySelector(".SecondDiv")


FirstDiv.addEventListener("mouseover", function() {
    FirstDiv.style.display = "none";
    SecondDiv.style.display = "block";
});

SecondDiv.addEventListener("mouseout", function() {
    FirstDiv.style.display = "block";
    SecondDiv.style.display = "none";
});

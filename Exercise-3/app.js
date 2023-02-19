/*Write a JavaScript function to get the last day of the month.
The function should get the month as a parameter and should return the last day of the current month.  */

var FirstDiv = document.createElement('div');
var h1 = document.createElement('h1');
let LetterE = document.createTextNode("E");
FirstDiv.appendChild(h1);
h1.appendChild(LetterE);
document.getElementsByTagName('body')[0].appendChild(FirstDiv);

var SecondDiv = document.createElement('div');
var h1 = document.createElement('h1');
let LetterL = document.createTextNode("L");
SecondDiv.appendChild(h1);
h1.appendChild(LetterL);
document.getElementsByTagName('body')[0].appendChild(SecondDiv);

var ThirdDiv = document.createElement('div');
var h1 = document.createElement('h1');
let LetterV = document.createTextNode("V");
ThirdDiv.appendChild(h1);
h1.appendChild(LetterV);
document.getElementsByTagName('body')[0].appendChild(ThirdDiv);

var FourthDiv = document.createElement('div');
var h1 = document.createElement('h1');
let LetterI = document.createTextNode("I");
FourthDiv.appendChild(h1);
h1.appendChild(LetterI);
document.getElementsByTagName('body')[0].appendChild(FourthDiv);

window.addEventListener('mouseover',function(){
    FirstDiv.style.display = "block"
    SecondDiv.style.display = "block"
    ThirdDiv.style.display = "block"
    FourthDiv.style.display = "block"
})
window.addEventListener('mouseout', function(){
    FirstDiv.style.display = "none"
    SecondDiv.style.display = "none"
    ThirdDiv.style.display = "none"
    FourthDiv.style.display = "none"
})

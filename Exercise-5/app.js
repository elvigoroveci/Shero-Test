/*Write a JavaScript function to get the last day of the month. 
The function should get the month as a parameter and should return the last day of the current month  */

function GetLastDay(year,month){
return new Date(2023, month + 1, 0).toString();

}
document.getElementById('Date').innerText = GetLastDay(2023, 1);

/* I have set "1" as parameter because the counting start from 0
January[0]
February[1]
..... 
*/ 





// ------------------
// Functions required by class assignment
// ------------------
function getFullname(fname, lname){
    let strTmp = ""; 
    if ( (fname+lname).length === 0) {
        strTmp = "[No values supplied for firstname or lastname]";
    } else {
        strTmp = (fname + " " + lname).trim();
    }
    return strTmp;
}
// Used by other array functions
function arraySum(arrIn){
    let sum = 0; 
    for (let i=0; i<arrIn.length; i++){
        sum += arrIn[i]; 
    }
    return sum;
}

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const arrMax = 100;
function arrGreaterThan(arrIn){
    let sum = arraySum(arrIn);
    if (sum > arrMax) return true;
    else return false;
}

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function arrAvg(arrIn){
    let sum = arraySum(arrIn);
    return sum/arrIn.length;
}

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
function arrAvgCompare(arrIn1, arrIn2) {
    if (arrAvg(arrIn1) > arrAvg(arrIn2)) return true;
    else return false;
}

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket){
    var strErr = "";
    if (arguments.length !== 2) {
        strErr += ", willBuyDrink requires to arguments."
    }
    if (typeof isHotOutside !== "boolean") {
        strErr += ", isHotOutside must be boolean";
    }
    if ( isNaN(parseFloat(moneyInPocket))) {
        strErr += ", moneyInPocket must be a number";
    }
    if (strErr.length > 0) {
        strErr = "[ Config Error ... " + strErr + " ]";
        return strErr;
    }

    let drinkCost = 10.50;
    if (isHotOutside && (moneyInPocket > drinkCost)) return true;
    else return false;
}   

// ------------------
// My functions
// ------------------
function roundToCurrency(numIn){
    let tmp = Math.round( parseInt(numIn*100) ) / 100;
    return tmp;
}

// convert an array of strings to an array of ints
function arrStrToInt(arrIn){
    for (let i=0; i<arrIn.length; i++){
        let tmp = parseInt( arrIn[i].trim() );
        if ( isNaN(tmp) ) {
            arrIn[i] = 0;
        } else {
            arrIn[i] = tmp;
        }
    }
    return arrIn;
}

// always return a string from a prompt - no nulls.
function firePrompt(strIn, strDefault){
    if (strDefault === null) strDefault = "";
    let strOut = prompt(strIn, strDefault);
    return strOut === null ? "" : strOut;
}

/* --------------------------------------
wrAnswer - aka Write Answer. 
--------------------------------
Function handles updating both the visible page and the console with the answers to 
questions in a uniform manner, so I only have to deal with it once.
2 required input parms: 
  idIn (id of target div in page to update), 
  strIn (string to write to page and console.)
------------------------------------------ */
  function wrAnswer(idIn, strIn){
    // find the page element to update
    let thisElem = document.getElementById(idIn);
    // error handling
    if (thisElem === null ) {
        //  yell for help in console if needed,
        console.warn(">> fn wrAnswer: id " + idIn + " not found.   Whoops.")
    } else {
        // update answer in page body
        thisElem.innerHTML = "Answer: " + strIn;
    }
    // write answer to console to satify requirements of assignment.
    console.log("-------------------------")
    console.log("Question ", idIn.substring(1,idIn.length));
    strIn = ""+strIn;
    strIn = strIn.split("<br/>").join("\n");
    console.log("Answer: ", strIn );
}

// functions to ask each question

function qn1(){
    let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    wrAnswer('a1a',"Array ages (" + ages + ").<br/>Last element minus first element equals " + (ages[ages.length-1] - ages[0]) );

    ages.push(117);
    wrAnswer('a1b',"Array ages now (" + ages + ").<br/>Last element minus first element equals " + (ages[ages.length-1] - ages[0]) );
    
    // Yeah - did 1st question last, so already had a fuction for this when I got here.
    // Why reinvent the wheel?
    wrAnswer('a1c',"Array ages (" + ages + ").<br/>Average age is " + arrAvg(ages));

}

function qn2(){
    // create names array in global scope for use in other questions.
    window.names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    var strNames = "";
    var totalLetters = 0;

    for (var i=0; i<names.length; i++){
        totalLetters += names[i].length;
    }
    wrAnswer('a2a',names.join(" "))
    wrAnswer('a2b',totalLetters/names.length)
}

function qn3(){
    wrAnswer('a3',"Arrays have numeric keys that always start with 0 are added sequentially. The value of the Array.length property is always 1 more than the last array posistion.<br/>Last array item is MyArray[MyArray.length-1];")
}

function qn4(){
    wrAnswer('a4',"Arrays have numeric keys that always start with 0 are added sequentially. The value of the Array.length property is always 1 more than the last array posistion.<br/>First array item is MyArray[0];")
}

function qn5(){
    // create nameLengths in global/window scope for use in qn6
    window.nameLengths = [];
    for (var idx in window.names) {
        window.nameLengths.push(window.names[idx].length);
    }
    wrAnswer('a5',"Array 'nameLengths' contains: " + nameLengths.join(", ") );
}

function qn6(){
    var total = 0;
    for (var i=0; i<window.nameLengths.length; i++){
        total += window.nameLengths[i];
    }
    wrAnswer('a6',"Sum of all elements in array nameLengths is " + total);
}

function qn7(word, n){
    var strOut = "", strErr = "";
    if (word === ""){
        strErr += ", Word cannot be blank"
    } 
    if (n === "" || isNaN(n)) {
        strErr += ", Repeat value cannot be blank and must be numeric.";
    }
    if (strErr.length > 0) {
        strErr = "[" + strErr.substring(2, strErr.length) + "]";
        wrAnswer('a7',strErr);
        return;
    }

    for (var i=0; i<n; i++){
        strOut += word;
    }
    wrAnswer('a7',"Word '" + word + "' repeated '" + n + "' times is '" + strOut + "'");
}

function qn8(){
    var fn = firePrompt("Question 8: WHAT is yer FIRST name?","Fred");
    var ln = firePrompt("Question 8: WHAT is yer LAST name?","Flintstone");
    var mp = firePrompt("Question 8: WHAT is the airspeed velocity of an UNLADEN SWALLOW?","AAARRRRGGHHH!!!");
    var fullname = getFullname(fn, ln);
    wrAnswer('a8',"Fullname is " + getFullname(fn, ln) );
    console.log("Airspeed velocity is " + mp);
}

function qn9(arrIn) {
    wrAnswer('a9',"Is sum of array '" + arrIn + "' greater than " + arrMax + "?<br/>" +  arrGreaterThan(arrIn));
}

function qn10(arrIn){
    wrAnswer('a10',"Average of value in array '" + arrIn + "' is " + arrAvg(arrIn));
}

function qn11(arrIn1, arrIn2){
    wrAnswer('a11',"Is the average of values in array 1 ('" + arrIn1 + "') greater than the average of values in array 2 ('" + arrIn2 + "')?<br/>" + arrAvgCompare(arrIn1, arrIn2));
}

function qn12(){
    var isHot = firePrompt("Question 12: Is it hot outside?","nope").toLowerCase();
    var isHotAnswers = "|yes|yup|true|1|you betcha";
    if (isHot.length !== 0 && isHotAnswers.indexOf(isHot)>-1) isHot = true;
    else isHot = false;
    
    var cash = firePrompt("Question 12: How much money do you have?","240.10");
    cash = parseFloat(cash);
    if( isNaN(cash) ) cash = 0 ;

    var strTmp = "it is ";
    strTmp += isHot ? "" : "NOT";
    strTmp += " hot outside, and I have $" + roundToCurrency(cash) + " in my pocket.<br/>Will I buy a drink? " + willBuyDrink(isHot,cash); 
    wrAnswer('a12',strTmp );
}

function qn13(){
    wrAnswer('a13',"see source code of week3.js - lines 94-120")
}

function doSetup(){
    // add H1 using content form doc title
    var header1 = document.createElement("H1");
    header1.textContent = document.title ? document.title : "Update document title";
    document.body.prepend(header1);

    // Gather data
    alert("A series of prompts will ask for input\n for the various questions.\n\nHit cancel to accept default values\nfrom the page, or supply  your own.");
    var reps = parseInt(firePrompt("Question 7: Specify number of repetitions.","7"));
    var repString = firePrompt("Question 7: Specify string to repeat.","Heh");

    alert("Questions 9-11 require 2 arrays of numbers.\nPlease enter 2 strings of comma-delimited\nnumbers in the following prompts. ");
    var strIn = firePrompt("Questions 9-10: Enter a string of numbers for an array,\nseparated by commas.","12,20,44,11,hike")
    var arrNum1 = arrStrToInt( strIn.split(","));
    
    strIn = firePrompt("Questions 11: Enter a second string of numbers for another\narray, separated by commas.","2,4,5,8,10,12");
    var arrNum2 = arrStrToInt( strIn.split(","));

    // run questions, write answers.
    qn1();
    qn2();
    qn3();
    qn4();
    qn5();
    qn6();
    qn7(repString, reps);
    qn8();
    qn9(arrNum1);
    qn10(arrNum1);
    qn11(arrNum1,arrNum2);
    qn12();
    qn13();
}

document.addEventListener('DOMContentLoaded', doSetup)
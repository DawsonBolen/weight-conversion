
const sumbitBtn = document.getElementById('submit-btn');
const selectBox1 = document.getElementById('unit1');
const selectBox2 = document.getElementById('unit2');
const amount = document.getElementById('amount');
const result = document.getElementById('result');


//We will need to establish a base unit when we convert from imperial units (pounds and ounces) to metric units (grams and kilograms) or else there is no way to compare them. we will use grams 

//These variables represent every unit converted to grams example: 1 pound = 453.592 grams
const grams = 1;
const kilograms = 1000;
const pounds = 453.592
const ounces = 28.3495;

//we will use these to convert between the two different systems. They will not be needed when we convert within the same systems.
//When converting from pounds to ounces, we can ignore these.  1 pound = 16 ounces


function convertUnits() {
    //value of our number input
    let quantity = amount.value;

    //value of our 2 selected units
    let unit1 = selectBox1.value;
    let unit2 = selectBox2.value;
    let answer;

    //1: check for incomplete form

    //2: optional: check if both units are the same

    //we first need to check what 2 units the user selected
    if (unit1 === 'pounds' && unit2 === 'ounces') {
        //then we calculate the answer
        answer = quantity * 16;
    }
    //3: convert from ounces to pounds
    //4: convert from pounds to grams
    if (unit1 === 'pounds' && unit2 === 'kilograms') {
        answer = quantity * pounds / 1000;
        //we multiply our quanitity by our variable pounds which converts it to grams
        //we then divide this answer by 1000 since there are 1000 grams in 1 kilogram
    }


    // 5: convert ounces to pounds
    // 6: convert ounces to grams
    // 7: convert ounces to kilograms


    // 8: convert grams to kilograms
    // 9: convert grams to ounces
    // 10: convert grams to pounds

    // 11: convert kilograms to grams
    // 12: convert kilograms to pounds
    // 13: convert kilograms to ounces


    //this rounds the answer to five decimal places and displays it on the screen
    let roundedAnswer = Math.round(answer * 100000) / 100000;
    result.textContent = roundedAnswer
}


//runs function when we click our button and prevents default form behavior so it doesn't clear our form
sumbitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    convertUnits();
});
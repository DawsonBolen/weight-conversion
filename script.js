const sumbitBtn = document.getElementById('submit-btn');

const selectBox1 = document.getElementById('unit1');
const selectBox2 = document.getElementById('unit2');
const amount = document.getElementById('amount');
const result = document.getElementById('result');

//1 pound = 16 ounce

//we can ignore this when we convert between ounces and pounds. for that conversion, 1 pound = 16 ounces

const grams = 1;
const kilograms = 1000;
const pounds = 453.592
const ounces = 28.3495;


function convertUnits() {
    let quantity = amount.value;
    let unit1 = selectBox1.value;
    let unit2 = selectBox2.value;
    let answer;
    if (!quantity || !unit1 || !unit2) {
        prompt('incomplete form');
        return
    }
    if (unit1 === unit2) {
        prompt('please select 2 different units');
        return
    }

    if (unit1 === 'pounds' && unit2 === 'ounces') {
        answer = quantity * 16;
    }
    if (unit1 === 'pounds' && unit2 === 'grams') {
        answer = quantity * pounds;
    }
    if (unit1 === 'pounds' && unit2 === 'kilograms') {
        answer = quantity * pounds / 1000;
    }

    if (unit1 === 'ounces' && unit2 === 'pounds') {
        answer = quantity / 16;
    }
    if (unit1 === 'ounces' && unit2 === 'grams') {
        answer = quantity * ounces;
    }
    if (unit1 === 'ounces' && unit2 === 'kilograms') {
        answer = quantity * ounces / 1000;
    }

    if (unit1 === 'kilograms' && unit2 === 'grams') {
        answer = quantity * 1000;
    }

    if (unit1 === 'kilograms' && unit2 === 'pounds') {
        answer = quantity * kilograms / pounds;
    }

    if (unit1 === 'kilograms' && unit2 === 'ounces') {
        answer = quantity * kilograms / ounces;
    }

    if (unit1 === 'grams' && unit2 === 'kilograms') {
        answer = quantity / 1000;
    }

    if (unit1 === 'grams' && unit2 === 'pounds') {
        answer = quantity / pounds;
    }

    if (unit1 === 'grams' && unit2 === 'ounces') {
        answer = quantity / ounces;
    }

    // rounds to 5 decimal places
    let roundedAnswer = Math.round(answer * 100000) / 100000;
    result.textContent = roundedAnswer

}

sumbitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    convertUnits();
});
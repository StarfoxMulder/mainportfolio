$(document).ready(function () {
    // make our variables global to the runtime of our application
    var firstNumber, secondNumber, operator, result, isOperatorChosen, isCalculated;

    // use a function to initialize our calculator. this way when the user hits clear
    // we can guarantee that we're in the exact same state as we were when the app started.
    function initializeCalculator () {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;

        $('#firstNumber, #secondNumber, #operator, #result').empty();
    }

    // add an on click listener to all elements that have the class 'number'
    $('.number').on('click', function () {
        // check if we've already ran a calculation, if we have, just exit
        if (isCalculated) return;

        // if operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
            secondNumber += this.value;
            $('#secondNumber').html(secondNumber);
        } else {
            firstNumber += this.value;
            $('#firstNumber').html(firstNumber);
        }
    });

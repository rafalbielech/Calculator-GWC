const calculator_state = {
    val: '0',
    operator_stack: [],
};

let operand_string = "";

function resetCalculator() {
    calculator_state.val = '0';
    calculator_state.operator_stack = [];
}

$('button').click(function (event) {
    // capture what was clicked 
    let click_event = $(this).val();
    let button_type = event.target.className;

    // if numeric or decimal button is clicked, then add it to the running operand string
    if (button_type.includes("numeric") || button_type.includes("decimal")) {
        operand_string = operand_string.concat(click_event);
        $('.calculator-screen').val(operand_string);
    }

    // if user selects an operator
    if (button_type.includes("operator")) {
        // if the button is an operator, we want to turn operand string to a float and add it to our operator stack
        try {
            calculator_state.operator_stack.push(parseFloat(operand_string));
        } catch (err) {
            // if there is an error turning operand string to float, show ERROR and print to console
            console.log("Cannot parse " + operand_string + " to a float");
            $('.calculator-screen').val("ERROR");
        }

        // add operator to operator stack and clear out operand string
        operand_string = "";
        calculator_state.operator_stack.push(click_event);
        $('.calculator-screen').val("");
    }

    if (button_type.includes("all-clear")) {
        resetCalculator();
        $('.calculator-screen').val("");
    }


    if (button_type.includes("equal-sign")) {
        
    };
});
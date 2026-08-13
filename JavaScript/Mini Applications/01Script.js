function calculate(operator) {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result;

    if (operator == "+") {

        result = a + b;
        console.log(a + b);

    }

    else if (operator == "-") {

        result = a - b;
        console.log(a - b);

    }

    else if (operator == "*") {

        result = a * b;
        console.log(a * b);

    }

    else if (operator == "/") {

        result = a / b;
        console.log(a / b);

    }

    else if (operator == "%") {

        result = a % b;
        console.log(a % b);

    }

    else if (operator == "**") {

        result = a ** b;
        console.log(a ** b);

    }

    else {

        result = "Invalid Operator";
        console.log("Invalid Operator");

    }

    document.getElementById("result").innerText = result;
}
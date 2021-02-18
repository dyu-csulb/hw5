function myFunction() {
    let num1 = 0;
    let num2 = 0;
    let operator = '';

    num1 = document.getElementById("txtNum1").value;
    num2 = document.getElementById("txtNum2").value;
    operator = document.getElementById("operator").value;

    if (num1=='') {
        alert('Please enter a valid first number!')
        document.getElementById("txtNum1").value  = '';
        document.getElementById("txtNum1").focus();
    }
    else if (num2=='') {
        alert('Please enter a valid second number!')
        document.getElementById("txtNum2").value  = '';
        document.getElementById("txtNum2").focus();
    }
    else 
    {
        calculateValues(num1, num2, operator);
    }
}

function calculateValues(num1, num2, operator) {
    let total = 0;
    let answer = '';

    if (operator==1) {
        //add
        total = Number(num1) + Number(num2)  
        answer = num1 + ' + '  + num2 + ' = ' + total 
    } 
    else if (operator==2) {
        //subtract
        total = Number(num1) - Number(num2)  
        answer = num1 + ' - '  + num2 + ' = ' + total 
    }
    else if (operator==3) {
        //multiply
        total = Number(num1) * Number(num2)  
        answer = num1 + ' * '  + num2 + ' = ' + total 
    }
    else if (operator==4) {
        //divide
        total = Number(num1) / Number(num2)  
        answer = num1 + ' / '  + num2 + ' = ' + total 
    }

    document.getElementById("txtAnswer").value  =  answer;
    console.log(answer);
}

function clearValues() {
    document.getElementById("txtNum1").value  = '';
    document.getElementById("txtNum2").value  = '';
    document.getElementById("lblMessage").innerHTML  = '';
    document.getElementById("txtAnswer").value  =  '';
    document.getElementById("txtNum1").focus();
}
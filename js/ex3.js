function myFunction() {
    let myArray = [];
    let values = '';
    let sum = 0;
    let message = ''
    let minVal = 0;
    let maxVal = 0;
    
    values = document.getElementById("txtValues").value;

    if (values=='') {
        alert('Please enter some numbers separated by comma!')
        document.getElementById("txtValues").value  = '';
        document.getElementById("txtValues").focus();
    }
    else 
    {
        values.split(",").forEach(function (item) {
            myArray.push(item.trim());
        });
 
        for (var i = 0; i < myArray.length; i++) {
            sum += Number(myArray[i])
          }

        minVal = Math.min(...myArray)
        maxVal = Math.max(...myArray)

        message  += 'Sum of all array values is: ' + sum + '<br/>' + 
                    'Minimum value of this array is: ' + minVal + '<br/>' +
                    'Maximum value of this array is: ' + maxVal
        document.getElementById("lblMessage").innerHTML  = message

        console.log(myArray);
        console.log(message.replaceAll("<br/>", "\n"));
    }
}

function clearValues() {
    document.getElementById("txtValues").value  = '';
    document.getElementById("lblMessage").innerHTML  = '';
    document.getElementById("txtValues").focus();
}
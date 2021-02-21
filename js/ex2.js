
function myFunction() {
    let myArray = []
    let message = '';
    
    // Load array with values 1 to 10
    for (i = 1; i < 11; i++) {
        myArray.push(i);
    }

    let a = myArray.filter(number => number%2);
    let b = myArray.filter(number =>!(number%2 || number%5))
    let c = myArray.filter(number =>!(number%3)).map(x => x ** 2)
    let d = myArray.filter(number =>!(number%5)).reduce((a, b) => a + b) 
    let d2 = d ** 2

    console.log(myArray);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d2);

    message = 'a. Odd array values:  ' + a + '<br/>' 
            + 'b. Array values divisible by 2 or 5 is: ' + b + '<br/>' 
            + 'c. Array of numbers divisible by 3 squared: ' + c + '<br/>' 
            + 'd. Square the numbers divisible by 5 is: ' + d2 + '<br/>' 

    document.getElementById("lblMessage").innerHTML  =  message;
}




function clearValues() {
    document.getElementById("lblMessage").innerHTML  = '';
}
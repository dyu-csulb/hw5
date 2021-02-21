
function myFunction() {
    let myArray = []
    let message = '';
    // Load array with values 1 to 10
    for (i = 1; i < 11; i++) {
        myArray.push(i);
    }

    let odd = myArray.filter(number => number%2);

    console.log(myArray);
    console.log(odd);


    
    message ='Array values: ' +  myArray + '<br/>' + 'Odd array values:  ' + odd;
    document.getElementById("lblMessage").innerHTML  =  message;
}


function myFunction1() {
    let v_radius =   document.getElementById("txtNum1").value 
    let answer = '';
    const circle = {
            circumference: "50",
            area: "20",
            radius:  v_radius
    }

    console.log(circle.circumference)
    console.log(circle.area)
    console.log(circle.radius)

    answer = 'Its circumference is: '+ circle.circumference + '<br/>' + 'Its area is: ' + circle.area + '<br/>Its radius is: ' + circle.radius
    document.getElementById("lblMessage").innerHTML  =  answer;
    console.log(answer.replaceAll("<br/>", "\n"));
}

function clearValues() {
    document.getElementById("lblMessage").innerHTML  = '';
}
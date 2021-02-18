
function myFunction() {
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
    document.getElementById("txtNum1").value  = '';
    document.getElementById("lblMessage").innerHTML  = '';
    document.getElementById("txtNum1").focus();
}
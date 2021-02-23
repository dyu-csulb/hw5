
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95,85,92,98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80,88,100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70,80,90,100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75,85,95,85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95,90,92,98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88,99,90]
    },
];

function myFunction() {
    let message = '';
    const classResults = []
    for (var i = 0; i < studentList.length; i++) {
        classResults[i] = ({firstName: studentList[i].firstName, 
                    lastName: studentList[i].lastName, 
                    minScore: getMin(studentList[i].scores), 
                    maxScore: getMax(studentList[i].scores), 
                    avgScore: getAvg(i)
                })
         message += "[" + i + "] {firstName: " + studentList[i].firstName + ", lastName: " + studentList[i].lastName + ", minScore: " + getMin(studentList[i].scores) + ", maxScore: " + getMax(studentList[i].scores) + ", avgScore: " + getAvg(i) +  "} <br/>"     
      }

    console.log(classResults)
    document.getElementById("lblMessage").innerHTML  = message;

}

function getMin(array) {
    return Math.min(...array)
}

function getMax(array) {
    return Math.max(...array)
}

function getAvg(i) {
   let myArray = studentList[i].scores
   return (myArray.reduce((val, el) => val + el, 0) / myArray.length);
}

function clearValues() {
    document.getElementById("lblMessage").innerHTML  = '';
}
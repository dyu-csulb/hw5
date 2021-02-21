
class Square {
    constructor(v_side) {
      this.side = v_side;
    }

    describe() {
        let message = "";

        this.perimeter = Number( this.side) * 4;
        this.area = Number(Math.pow( this.side,2));
        this.diagonal = Number(Math.sqrt(2) * Number( this.side)).toFixed(3);

        return message = `Square with a side of ${this.side} has a perimeter of ${this.perimeter}, an area of ${this.area}, and diagonal of ${this.diagonal}`
    }
  }


function myFunction() {
    let val = document.getElementById("txtNum1").value;
    if (isNumeric(val)==false) {
      alert("Please enter a number value!")
      document.getElementById("txtNum1").value  = '';
      document.getElementById("txtNum1").focus();
    } 
    else {
      let obj = new Square(val);
      let returnVal = obj.describe();
      
      console.log(returnVal);
      document.getElementById("lblMessage").innerHTML  = returnVal;

    }

}

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && 
         !isNaN(parseFloat(str)) 
}



function clearValues() {
    document.getElementById("txtNum1").value  = '';
    document.getElementById("lblMessage").innerHTML  = '';
    document.getElementById("txtNum1").focus();
}
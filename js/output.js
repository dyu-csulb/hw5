/* ============================
5a.	What is the output of the following?
==============================*/
let anArray = []

for (i = 1; i < 11; i++) {
    anArray.push(i);
}
console.log(anArray.filter(value => value % 2 === 0).map(x => x * 2));

//[ 4, 8, 12, 16, 20 ] – Filters only even numbers then multiplies by 2. 

/* ============================
5b.	What is the output of the following?
==============================*/
 console.log(anArray.map(x => x * 2).filter(value => value % 2 === 0));
// [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] – Multiplies all numbers by 2 then filters only even numbers. 

/* ============================
5c.	What is the output of the following?
==============================*/
//c.	Are the outputs the same?  Why?
// The are different due to the filtering of the numbers. 
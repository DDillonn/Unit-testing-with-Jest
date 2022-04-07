// // import the function sum from the app.js file
const { dollarToYen, dollarToEuro, dollarToPound  } = require('./app.js');


// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

test('dollar to yen', () => {
    let total = dollarToYen(1, 123.55);
    expect(total).toBe(123.55); 
});

test('dollar to euro', () => {
    let totalTwo = dollarToEuro(1, .92);
    expect(totalTwo).toBe(.92); 
});

test('dollar to pound', () => {
    let totalThree = dollarToPound(1, .76);
    expect(totalThree).toBe(.76); 
});
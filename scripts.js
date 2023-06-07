// business logic

function countUp(countTo, countBy) {
    let finalResult = [];
    const badInputs = ["", NaN];
   if (badInputs.includes(parseInt(countTo)) || badInputs.includes(parseInt(countBy))) {
    return "Enter a number!";
   } else if (Math.sign(countTo) === -1 || Math.sign(countBy) === -1) {
    return "Enter a positive number!";
   }
    for (let i = countBy; i <= countTo; i +=countBy) {
        finalResult.push(i);
    }
    return finalResult;
    
};
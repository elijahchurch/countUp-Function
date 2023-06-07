// business logic

function countUp(countTo, countBy) {
    let finalResult = [];
    const badInputs = ["", NaN];
   if (badInputs.includes(parseInt(countTo)) || badInputs.includes(parseInt(countBy))) {
    return "Enter a number!";
   }
    for (let i = countBy; i <= countTo; i +=countBy) {
        finalResult.push(i);
    }
    return finalResult;
};
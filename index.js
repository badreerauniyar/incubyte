function add(numberInString) {
    let delimiters=/,/;
    let negativeNumbers = []
    let arrayOfNumbers = numberInString.split(delimiters)
    let sum = 0
    arrayOfNumbers.map(item => {
        if (Number(item) >= 0) {
            sum += Number(item)
        } else {
            negativeNumbers.push(Number(item))
        }
    })
    if (negativeNumbers.length > 0) {
        throw new Error(`Please enter only positive number , as negative number is not allowed",${negativeNumbers.join(",")}`)
    }
    return sum;
}

console.log("The sum of 10 and 20 is: " + add(""));
console.log("The sum of 1 annd 2 is: " + add("1,2,5,6,6,7"));
console.log("The sum of 1 annd 2 is: " + add("1,2,-5,6,-6,7"));


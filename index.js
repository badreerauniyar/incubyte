function add(numberInString) {
    let delimiters = /,|\n/;
    let negativeNumbers = []

    if (numberInString.startsWith("//")) {
        const customDelimeterIndex = numberInString.indexOf("\n");
        const customDelimeter = numberInString.substring(2, customDelimeterIndex);
        delimiters = new RegExp(`[${customDelimeter},\n]`);
        numberInString = numberInString.substring(customDelimeterIndex + 1);
    }


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
        throw new Error(`Please enter only positive number , as negative number is not allowed,${negativeNumbers.join(",")}`)
    }
    return sum;
}
try {

    console.log("The sum of nothing is : " + add(""));
    console.log("the sum is", + add("1"))
    console.log("the sum is", + add("1\n2,3"))
    console.log("The sum is: " + add("1,2,5,6,6,7"));
    console.log("The sum is: " + add("//;\n1;2;6"));
    console.log("The sum is: " + add("//;\n1;2;6,7"));
    console.log("The sum is: " + add("1,2,-5,6,-6,7"));
} catch (e) {
    console.log("error->>>>>>>", e)
}





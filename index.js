function add(numberInString) {
    console.log("numberInString",numberInString)
    let arrayOfNumbers=numberInString.split(",")
    console.log("arrayOfNumbers",arrayOfNumbers)
    let sum=0
    arrayOfNumbers.map(item=>{
        console.log("item",item,typeof Number(item))
        sum+=Number(item)
    })
    return sum;
}

console.log("The sum of 1 annd 2 is: " + add("1,2"));
// console.log("The sum of 10 and 20 is: " + add(""));

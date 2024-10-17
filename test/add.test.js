import { expect } from 'chai';
// const expect = chai.expect;

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

// Test cases
describe('string calculatorrr for the incubyte', () => {
    it('should return 0 for an empty string', () => {
        expect(add("")).to.equal(0);
    });

    it('should return 1 for the input "1"', () => {
        expect(add("1")).to.equal(1);
    });

    it('should return 6 for the input "1,2,3"', () => {
        expect(add("1,2,3")).to.equal(6);
    });

    it('should handle newlines as delimiters and return 6 for "1\\n2,3"', () => {
        expect(add("1\n2,3")).to.equal(6);
    });

    it('should return 9 for custom delimiter "//;\\n1;2;6"', () => {
        expect(add("//;\n1;2;6")).to.equal(9);
    });

    it('should return 16 for custom delimiter plus existing delimeter"//;\\n1;2;6,7"', () => {
        expect(add("//;\n1;2;6,7")).to.equal(16);
    });

    it('should throw an error if a negative number is included', () => {
        expect(() => add("1,-2,3")).to.throw("Please enter only positive number , as negative number is not allowed,-2");
    });

    it('should throw an error with all negative numbers in the message', () => {
        expect(() => add("1,-2,-3")).to.throw("Please enter only positive number , as negative number is not allowed,-2,-3");
    });
});


/** 
Testing framework- if a test fails by using the try catch method the remaining tests are not carried out. Thus, to overcome of this issue a testing framework (i.e., is a testing function) can be used.
Assertion- it is something that is used to compare the values (which might be string, number, etc.).
*/

// testing framework
function test(message, cb) {
    try {
        cb();
        console.log(message);
    } catch (error) {
        console.error(error);
        console.log(message);
    }
}

//assertion
function expect(actual) {
    return {
        toEqual: function(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not same as ${expected}`);
            }
        },
    };
}

// Function for add
function add(numA, numB) {
    if (typeof numA !== "number" && typeof numB !== "number") {
        console.error("Invalid Input");
    } else {
        return numA + numB;
    }
}

// Function to multiply
function multiply(numA, numB) {
    if (typeof numA !== "number" && typeof numB !== "number") {
        console.error("Invalid Input");
    } else {
        return numA * numB;
    }
}

// Addition calls
test("add 10 and 5 to be 15", () => {
    expect(add(10, 5)).toEqual(15);
});
test("add 5 and 5 to be 10", () => {
    expect(add(5, 5)).toEqual(20);
});
test("add 30+9 to be 39", () => {
    expect(add(30, 9)).toEqual(39);
});
test("add 10 and 80 to be 90", () => {
    expect(add(10, 80)).toEqual(90);
});
test("add 25 and 5 to be 25", () => {
    expect(add(25, 5)).toEqual(20);
});

// Multiplication calls
test("add 10 and 5 to be 50", () => {
    expect(multiply(10, 5)).toEqual(50);
});
test("multiply 5 and 5 to be 25", () => {
    expect(multiply(5, 5)).toEqual(25);
});
test("multiply 30 and 9 to be 270", () => {
    expect(multiply(30, 9)).toEqual(270);
});
test("multiply 10 and 80 to be 800", () => {
    expect(multiply(10, 80)).toEqual(800);
});
test("multiply 25 and 5 to be 125", () => {
    expect(multiply(25, 5)).toEqual(125);
});

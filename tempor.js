function encloseBasis1(a) {
    // Check if the input is a number
    if (typeof a !== 'number') {
        throw new TypeError('Input must be a number');
    }

    // Create an object that encloses the input number with additional context
    const enclosed = {
        basis: a,
        squared: a * a,
        cubed: a * a * a,
        description: `The basis number is ${a}, its square is ${a * a}, and its cube is ${a * a * a}.`
    };

    return enclosed;
}

// Example usage:
try {
    const result = encloseBasis1(3);
    console.log(result);
    /*
    Output:
    {
        basis: 3,
        squared: 9,
        cubed: 27,
        description: "The basis number is 3, its square is 9, and its cube is 27."
    }
    */
} catch (error) {
    console.error(error.message);
}

/**
 * Generates the Fibonacci sequence up to the n-th term.
 * @param {number} n - The number of terms in the sequence to generate.
 * @returns {number[]} An array containing the Fibonacci sequence.
 */
function fibonacciGenerator(n = 10) {
    // Validate input
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non negative integer.");
    }

    // Handle the edge cases
    if (n === 0) return []; // No terms
    if (n === 1) return [0]; // Single term

    // Initialise the Fibonacci sequence
    const fibSequence = [0, 1];

    // Generate the sequence up to n terms
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}

// Example usage:
console.log(fibonacciGenerator(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

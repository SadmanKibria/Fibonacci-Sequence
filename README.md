# Fibonacci Sequence in JavaScript

### An Implementation of the Fibonacci Sequence

This repository contains a simple implementation of **Fibonacci sequence** in JavaScript. I put this together as a quick demonstration of Fibonacci sequence and nothing too fancy, just clean and functional code.

---

## What is the Fibonacci Sequence?

The **Fibonacci sequence** is a series of numbers where each number is the sum of the two preceding ones. The sequence typically starts with `0` and `1`, so it looks like this:

`0, 1, 1, 2, 3, 5, 8, 13, 21, ...`

This pattern can be observed in many areas of mathematics, nature and obviously computer science (dynamic programming problems or recursive algorithms).

---

## How It Works?

This implementation uses an **Iterative approach** to calculate the Fibonacci sequence. Here's how it works:

1. Start with the first two numbers of the sequence: `0` and `1`.
2. Use a loop to calculate the next numbers by summing the last two numbers in the sequence.
3. Repeat until the desired number of terms is reached.

The result is returned as an array of Fibonacci numbers.

---

## Features

- **Handles Edge Cases**: Returns the correct sequence for `n = 0`, `n = 1`, or any valid input.
- **Input Validation**: Ensures the input is a non negative integer.
- **Default Value**: Generates 10 terms by default if no input is provided.
- **Clean and Readable Code**: The function is easy, concise and follows best coding practices.

---

## Usage

Here’s how you can use the function:

1. Clone the repository:
2. Run the script:
```bash
node fibonacci.js
```
Example output for `n = 10`:
```bash
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

---

## File Structure

```bash
fibonacci-generator/
├── fibonacci.js    # The JavaScript file with the Fibonacci function
└── README.md       # Project documentation
```

## Code Snippet

Here’s the core function:

```bash
function fibonacciGenerator(n = 10) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer.");
    }

    if (n === 0) return [];
    if (n === 1) return [0];

    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}

console.log(fibonacciGenerator(10));
```

## Why This Project?

I wanted to show an implementation in JavaScript of a classic problems for fun and as a way to showcase coding practices. This short project is an example of such a quick implementation, clean and to the point, demonstrating knowledge of:
- Iterative algorithms
- Input validation
- Edge case handling
- Writing reusable functions

## Next Steps

In future I'll build a small frontend to display the sequence so it allows to visualise the sequence and add some unit testing with framework like Jest.

If you have any questions or suggestions, feel free to reach out via GitHub and you are more than welcome to use my code in any of your project.

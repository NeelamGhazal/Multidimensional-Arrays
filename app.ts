/*2. Working with Multidimensional Arrays
Define a 3x3 matrix of numbers as a multidimensional array. Write functions to:
Print the diagonal elements of the matrix. Calculate the sum of all elements in the matrix.
// Define the matrix and implement the functions*/
import chalk from "chalk";

let multiDim: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function diagonalMatrix(matrix: number[][]) {
  console.log(chalk.magentaBright("Diagonal elements of the matrix:"));
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
  }
}

function sumofMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  console.log(chalk.magentaBright("\nSum of all elements in the matrix:"), sum);
}

diagonalMatrix(multiDim);
sumofMatrix(multiDim);

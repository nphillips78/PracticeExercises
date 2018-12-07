/* Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable. */
// TODO: currently only passing 9 of 20 tests, fix it!
function sudoku2(grid) {
  return (
    validateRows(grid) &&
    validateRows(rotateGrid(grid)) &&
    validateSubGrids(grid)
  );

  // validate each row
  function validateRows(grid) {
    let valid = true;

    for (const row of grid) {
      if (!valid) {
        break;
      }

      let list = {};

      row
        .filter(item => item !== '.')
        .forEach(item => {
          if (list[item]) {
            valide = false;
          } else {
            list[item] = 1;
          }
        });
    }

    return valid;
  }

  // rotate grid by 90 degrees - allows us to validate columns as rows
  function rotateGrid(grid) {
    return grid.map((inArr, i) => {
      const newArr = [];

      for (const arr of grid) {
        newArr.push(arr[i]);
      }
      return newArr.reverse();
    });
  }

  // convert each 3 x 3 grid into a row of 9 - allows us to validate the subGrids as rows
  function validateSubGrids(grid) {
    const subGrids = [];
    const getSubGridRow = function(grid, currRow, currCol) {
      const currentSubGrid = [];

      for (let row = currRow; row < currRow + 3; row++) {
        for (let col = currCol; col < currCol + 3; col++) {
          currentSubGrid.push(grid[row][col]);
        }
      }
      return currentSubGrid;
    };

    for (let i = 0; i < grid.length; i += 3) {
      for (let j = 0; j < grid.length; j += 3) {
        subGrids.push(getSubGridRow(grid, i, j));
      }
    }

    return validateRows(subGrids);
  }
}

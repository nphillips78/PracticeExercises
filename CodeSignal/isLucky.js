/*Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.*/

// turn n into a string and then split into array
// divide array in half
// find sum of each half
// compare sums return true or false if both are equal

// sum function
// add prev & current until sum

function isLucky(n) {
  n = 6473847562;
  const arr = String(n).split('');

  const first = sum(arr.slice(0, arr.length / 2));
  const second = sum(arr.slice(arr.length / 2));

  if (first === second) return true;
}

function sum(arr) {
  return arr.reduce((prev, current) => {
    const _current = parseInt(current, 0);

    return (prev += _current);
  }, 0);
}



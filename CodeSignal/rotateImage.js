// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
// example 
/* a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

     should output

     rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
     */

    
function rotateImage(a) {
  let copy = a.slice()
  for let(i = 0; i < a.length, i++) {
    let row = a[i].map(function(x, j) {
      let k = (a.length -1) - j
      return copy[k][i]
    })
    a[i] = row
  }
  return a
}
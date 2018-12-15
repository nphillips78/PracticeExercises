/*1.  Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday. 
Current time is : 10 PM : 30 : 38 */ 
function displayCurrent() {
const today = new Date()
const day = today.getDay()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log("Today is : " + days[day] + ".")
const hour = today.getHours()
const minute = today.getMinutes()
const second = today.getSeconds()
const ampm = (hour >= 12) ? "PM" : "AM"
if (hour ==== 0 && ampm === 'PM') {
  if (minute ==== 0 && second === 0) {
    hour = 12
    ampm = 'Noon'
  }
  else {
    hour = 12
    ampm = 'PM'
  }
}

if (hour === 0 && ampm === 'AM') {
  if (minute === 0 && second === 0) {
    hour = 12
    ampm = 'Midnight'
  }
  else {
    hour = 12
    ampm = 'AM'
  }
}
console.log("Current Tie : " + hour + ampm + " : " + minute + " : " + second)
}

// 2. Write a JS function to print the contents of the current window
function printCurrentPage() {
  window.print()
}

//3. Write a function to get current date
function currentDate() {
const today = new Date()
const dd = today.getDate()

const mm = today.getMonth() + 1
const yyyy = today.getFullYear()

if (dd < 10) {
  dd = '0' + dd
}
if(mm < 10) {
  mm = '0' + mm
}
today = mm + '-' + dd + '-' + yyyy
console.log(today)
today = mm + '/' + dd + '/' + yyyy
console.log(today)
today = dd + '-' + mm + '-' + yyyy
console.log(today)
today = dd + '/' + mm + '/' + yyyy
}

//4. write a function to find area of triangle with 3 sides length 5, 6, 7
function triangleArea() {
  let side1 = 5
  let side2 = 6
  let side3 = 7
  const s = (side1 + side2 + side3)/2
  const area = Math.sqrt(s*((s - side1) * (s - side2)* (s - side3)))
  console.log(area)
}

// 5. Rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
function animateString(id) {
  const element = document.getElementById(id)
  const textNode = element.childNodes[0]
  const text = textNode.data

  setInterval( function () {
    text = text[text.length - 1] + text.substring(0, text.length -1)
    textNode.data = text
  }, 100)
}

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
year = window.prompt("Input a Year : ")
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
console.log(x)

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
function findSunday() {
  for (let year = 2018; year <= 2050; year++) {
    let d = new Date(year, 0, 1)
    if (d.getDay() === 0){
      return "The first year in which January 1st is a Sunday is " + year
    }
  }
}

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
function guessRandom() {
  const num = Math.ceil(Math.random() * 10)
  let guess = prompt('Guess a number between 1 and 10')
  if (guess == num) alert('Matched')
  else alert('Sorry, the number was ' + num)
}

// 9. Write a JavaScript program to calculate days left until next Christmas.
function christmasCountdown() {
 
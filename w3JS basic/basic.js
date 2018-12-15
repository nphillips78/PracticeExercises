/* Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday. 
Current time is : 10 PM : 30 : 38 */ 

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

// Write a JS function to print the contents of the current window
function printCurrentPage() {
  window.print()
}

//Write a function to get current date
const today = new Date()

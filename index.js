/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const hour = parseInt(time.slice(0,2));
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(str) {
  document.getElementById("greeting").innerText = str;
}

// Why doesn't this pass?
// function displayMessage(str) {
//   document.querySelector("h1").textContent = str;
// }

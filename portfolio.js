var contactBtn = document.querySelector("#contactBtn")
var inBox = document.querySelector(".inBox");
var box = document.querySelectorAll(".box")
var tabBtn = document.querySelectorAll(".tabBtn");

function openTab(evt, tabName) {
  var i;
  
  // Hide all tab contents
  for (i = 0; i < box.length; i++) {
    box[i].style.display = "none";
    console.log("ok")
  }
  
  // Remove the active class from all buttons
var tabBtn = document.querySelector(".tabBtn");
  for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].className = tabBtn[i].className.replace(" active", "");
  }
  
  // Show the current tab and add active class to the clicked button
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

document.querySelector('.linkedin').addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/hitesh-bhul-565140236', '_blank');
});

document.querySelector('.mail').addEventListener('click', function() {
  window.location.href = 'mailto:hmb14122003@gmail.com';
});

document.querySelector('.git').addEventListener('click', function() {
  window.open('https://github.com/Tsutki', '_blank');
});

// Add click event for the 'proLink' class to open in a new tab
document.querySelector('.proLink').addEventListener('click', function() {
  window.open('https://tsutki.github.io/BlogPost/', '_blank');
});

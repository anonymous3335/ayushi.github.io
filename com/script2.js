function startBirthdayDecorations() {
    document.querySelector('.message-box').style.display = 'none';
    document.querySelectorAll('.butterfly').forEach(b => b.style.display = 'none');
    document.querySelector('.birthday-decorations').style.display = 'block';
  }
  
  function showNextScreen() {
    document.querySelector('.birthday-decorations').style.display = 'none';
    document.getElementById('nextScreen').style.display = 'block';
}
function showNextContainer() {
  // Hide the current screen
  document.getElementById('nextScreen').style.display = 'none';
  
  // Show the new screen
  document.getElementById('newScreen').style.display = 'block';
}
function showNextContainer() {
  document.getElementById('nextScreen').style.display = 'none';
  document.getElementById('newScreen').style.display = 'flex';
}

document.getElementById("nextBtn").addEventListener("click", function () {
  document.getElementById("newScreen").style.display = "none"; // Hide current screen
  document.getElementById("nextContainer").style.display = "flex"; // Show next screen
});
document.querySelector('.next-screen button').addEventListener('click', function() {
  // Hide all butterflies when the next screen is triggered
  const butterflies = document.querySelectorAll('.butterfly, .butterfly1, .butterfly2, .butterfly3, .butterfly4, .butterfly5, .butterfly6, .butterfly7, .butterfly8, .butterfly9, .butterfly10, .butterfly11, .butterfly12, .butterfly13, .butterfly14');
  butterflies.forEach(function(butterfly) {
    butterfly.style.display = 'none'; // Hide the butterfly
  });

  // Show the new screen (next-screen)
  document.getElementById('newScreen').style.display = 'flex';
});

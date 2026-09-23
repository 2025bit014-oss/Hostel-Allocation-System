function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  // Show selected screen
  document.getElementById(screenId).classList.remove('hidden');
}

function login() {
  const role = document.getElementById('userRole').value.toLowerCase();
  if (role === "admin") {
    // Redirect to Admin Dashboard
    window.location.href = "admin.html";
  } else if (role === "student") {
    showScreen('applicationScreen');
  } else {
    alert("Please enter a valid role: Student or Admin");
  }
}

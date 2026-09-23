function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  // Show selected screen
  document.getElementById(screenId).classList.remove('hidden');
}

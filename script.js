function adminLogin() {
  const email = document.getElementById('adminEmail').value;
  const password = document.getElementById('adminPassword').value;

  if (email === "edrickwaiswa@gmail.com" && password === "admin123") {
    window.location.href = "admin.html"; // Redirect to Admin Dashboard
  } else {
    alert("Invalid Admin credentials. Authorized personnel only.");
  }
}

function studentLogin() {
  const email = document.getElementById('studentEmail').value;
  const password = document.getElementById('studentPassword').value;

  if (email && password) {
    window.location.href = "application.html"; // Redirect to student application flow
  } else {
    alert("Please enter valid student credentials.");
  }
}

function forgotPassword() {
  const email = document.getElementById('studentEmail').value;
  if (email) {
    alert("Recovery note has been sent to " + email);
  } else {
    alert("Please enter your email to recover password.");
  }
}

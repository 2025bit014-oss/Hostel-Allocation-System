// Admin Login
function adminLogin(event) {
  event.preventDefault();
  const email = document.getElementById('adminEmail').value;
  const password = document.getElementById('adminPassword').value;
  const storedEmail = localStorage.getItem("adminEmail");
  const storedPassword = localStorage.getItem("adminPassword");

  if (email === storedEmail && password === storedPassword) {
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid Admin credentials. Please sign up first.");
  }
}

// Student Login
function studentLogin(event) {
  event.preventDefault();
  const email = document.getElementById('studentEmail').value;
  const password = document.getElementById('studentPassword').value;
  const storedEmail = localStorage.getItem("studentEmail");
  const storedPassword = localStorage.getItem("studentPassword");

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("loggedInStudent", email);
    window.location.href = "student-dashboard.html";
  } else {
    alert("Invalid student credentials. Please sign up first.");
  }
}

// Registration (Student)
function registerStudent() {
  const email = document.getElementById('newStudentEmail').value;
  const password = document.getElementById('newStudentPassword').value;
  localStorage.setItem("studentEmail", email);
  localStorage.setItem("studentPassword", password);
  alert("Registration successful! 🎉 You have been allocated Hostel A (Room 12). A confirmation email has been sent.");
  window.location.href = "student-dashboard.html";
}

// Registration (Admin)
function registerAdmin() {
  const email = document.getElementById('newAdminEmail').value;
  const password = document.getElementById('newAdminPassword').value;
  localStorage.setItem("adminEmail", email);
  localStorage.setItem("adminPassword", password);
  alert("Admin registration successful. Redirecting to dashboard...");
  window.location.href = "admin-dashboard.html";
}

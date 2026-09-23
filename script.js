// Admin Registration
function registerAdmin() {
  const email = document.getElementById('newAdminEmail').value;
  const password = document.getElementById('newAdminPassword').value;
  localStorage.setItem("adminEmail", email);
  localStorage.setItem("adminPassword", password);
  alert("Admin registration successful. You can now log in.");
  window.location.href = "index.html";
}

// Admin Login
function adminLogin() {
  const email = document.getElementById('adminEmail').value;
  const password = document.getElementById('adminPassword').value;
  const storedEmail = localStorage.getItem("adminEmail");
  const storedPassword = localStorage.getItem("adminPassword");

  if (email === storedEmail && password === storedPassword) {
    window.location.href = "admin.html";
  } else {
    alert("Invalid Admin credentials.");
  }
}

// Student Registration
function registerStudent() {
  const email = document.getElementById('newStudentEmail').value;
  const password = document.getElementById('newStudentPassword').value;
  localStorage.setItem("studentEmail", email);
  localStorage.setItem("studentPassword", password);
  alert("Registration successful. You have been allocated Hostel A (Room 12). A confirmation email has been sent.");
  sendEmail(email, "Hostel Allocation Confirmation", 
    "Dear Student,\n\nYou have been allocated Hostel A (Room 12). Please report to the hostel warden for check-in.\n\nRegards,\nUniversity Hostel Management");
  window.location.href = "index.html";
}

// Student Login
function studentLogin() {
  const email = document.getElementById('studentEmail').value;
  const password = document.getElementById('studentPassword').value;
  const storedEmail = localStorage.getItem("studentEmail");
  const storedPassword = localStorage.getItem("studentPassword");

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("loggedInStudent", email);
    window.location.href = "application.html";
  } else {
    alert("Invalid student credentials.");
  }
}

// Forgot Password
function forgotPassword() {
  const email = document.getElementById('studentEmail').value;
  if (email) {
    alert("Recovery note has been sent to " + email);
    sendEmail(email, "Password Recovery", "A password recovery request was made for your account.");
  } else {
    alert("Please enter your email to recover password.");
  }
}

// Room Allocation
function allocateRoom() {
  const hostel = document.getElementById('hostelChoice').value;
  const room = document.getElementById('room

// Admin Login
function adminLogin() {
  const email = document.getElementById('adminEmail').value;
  const password = document.getElementById('adminPassword').value;

  if (email === "edrickwaiswa@gmail.com" && password === "admin123") {
    window.location.href = "admin.html";
  } else {
    alert("Invalid Admin credentials. Authorized personnel only.");
  }
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
    alert("Invalid student credentials. Please register first.");
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

// Register Student
function registerStudent() {
  const email = document.getElementById('newStudentEmail').value;
  const password = document.getElementById('newStudentPassword').value;

  localStorage.setItem("studentEmail", email);
  localStorage.setItem("studentPassword", password);

  alert("Registration successful for " + email + ". You can now log in.");
  window.location.href = "index.html";
}

// Allocate Room
function allocateRoom() {
  const hostel = document.getElementById('hostelChoice').value;
  const room = document.getElementById('roomChoice').value;
  const email = localStorage.getItem("loggedInStudent");

  alert("🎉 You have been allocated " + hostel + ", " + room + ". A confirmation email has been sent to " + email);
  sendEmail(email, "Hostel Allocation Confirmation", 
    "Dear Student,\n\nWe are pleased to inform you that you have been allocated " + hostel + " (" + room + "). Please report to the hostel warden for check-in.\n\nRegards,\nUniversity Hostel Management");
}

// Email Sending (EmailJS integration)
function sendEmail(to, subject, body) {
  emailjs.send("your_service_id", "your_template_id", {
    to_email: to,
    subject: subject,
    message: body
  }).then(function(response) {
    console.log("Email sent successfully!", response.status, response.text);
  }, function(error) {
    console.error("Failed to send email.", error);
  });
}

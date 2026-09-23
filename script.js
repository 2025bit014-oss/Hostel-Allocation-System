function adminLogin() {
  const email = document.getElementById('adminEmail').value;
  const password = document.getElementById('adminPassword').value;

  if (email === "edrickwaiswa@gmail.com" && password === "admin123") {
    window.location.href = "admin.html";
  } else {
    alert("Invalid Admin credentials. Authorized personnel only.");
  }
}

function studentLogin() {
  const email = document.getElementById('studentEmail').value;
  const password = document.getElementById('studentPassword').value;

  if (email && password) {
    window.location.href = "application.html";
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

function registerStudent() {
  const email = document.getElementById('newStudentEmail').value;
  alert("Registration successful for " + email + ". You can now log in.");
  window.location.href = "index.html";
}

function allocateRoom() {
  const hostel = document.getElementById('hostelChoice').value;
  const room = document.getElementById('roomChoice').value;
  const email = localStorage.getItem('studentEmail') || "student@example.com";

  alert("🎉 You have been allocated " + hostel + ", " + room + ". A confirmation email has been sent to " + email);

  // Simulate sending email
  sendAllocationEmail(email, hostel, room);
}

function sendAllocationEmail(email, hostel, room) {
  const subject = "Hostel Allocation Confirmation";
  const body = "Dear Student,\n\nWe are pleased to inform you that you have been allocated " + hostel + " (" + room + "). Please report to the hostel warden for check-in.\n\nRegards,\nUniversity Hostel Management";
  console.log("Email sent to " + email + ":\nSubject: " + subject + "\n" + body);
}

CREATE DATABASE hostel_db;

USE hostel_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(50) UNIQUE,
  name VARCHAR(100),
  course VARCHAR(100),
  year_of_study INT,
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hostel_name VARCHAR(100),
  room_number VARCHAR(50),
  capacity INT,
  occupied INT DEFAULT 0
);

CREATE TABLE allocations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT,
  room_id INT,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

package com.university.hostel.model;

import jakarta.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String studentId;
    private String name;
    private String course;
    private int yearOfStudy;
    private String email;
    private String password;

    // Getters and setters
}

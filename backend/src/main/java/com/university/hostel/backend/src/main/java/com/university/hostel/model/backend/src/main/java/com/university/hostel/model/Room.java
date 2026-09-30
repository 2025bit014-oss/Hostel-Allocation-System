package com.university.hostel.model;

import jakarta.persistence.*;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String hostelName;
    private String roomNumber;
    private int capacity;
    private int occupied;

    // Getters and setters
}

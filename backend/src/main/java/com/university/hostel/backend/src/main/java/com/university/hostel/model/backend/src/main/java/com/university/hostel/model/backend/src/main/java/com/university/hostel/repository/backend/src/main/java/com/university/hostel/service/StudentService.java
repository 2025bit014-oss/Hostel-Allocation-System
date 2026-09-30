package com.university.hostel.service;

import com.university.hostel.model.Student;
import com.university.hostel.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepo;

    public Student register(Student student) {
        return studentRepo.save(student);
    }
}

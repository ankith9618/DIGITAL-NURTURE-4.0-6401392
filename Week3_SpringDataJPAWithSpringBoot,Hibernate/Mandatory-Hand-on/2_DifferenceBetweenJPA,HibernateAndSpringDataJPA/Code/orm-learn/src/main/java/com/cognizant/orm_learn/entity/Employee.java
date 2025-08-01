package com.cognizant.orm_learn.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employee")
@Access(AccessType.PROPERTY)
public class Employee {
    private Integer id;
    private String name;
    private double salary;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", salary=" + salary + "]";
    }
}

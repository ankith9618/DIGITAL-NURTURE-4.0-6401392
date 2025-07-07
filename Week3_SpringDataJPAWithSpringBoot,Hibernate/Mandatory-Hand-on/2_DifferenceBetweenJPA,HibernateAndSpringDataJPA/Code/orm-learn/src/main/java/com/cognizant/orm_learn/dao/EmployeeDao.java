package com.cognizant.orm_learn.dao;

import com.cognizant.orm_learn.entity.Employee;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class EmployeeDao {
    public Integer addEmployee(Employee employee) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = null;
        Integer employeeID = null;

        try {
            tx = session.beginTransaction();
            employeeID = (Integer) session.save(employee);
            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }

        return employeeID;
    }
}

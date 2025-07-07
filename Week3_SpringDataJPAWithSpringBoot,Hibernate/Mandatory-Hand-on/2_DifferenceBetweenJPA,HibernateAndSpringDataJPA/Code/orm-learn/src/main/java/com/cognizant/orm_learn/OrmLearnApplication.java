package com.cognizant.orm_learn;

import com.cognizant.orm_learn.entity.Employee;
import com.cognizant.orm_learn.service.EmployeeService;
import com.cognizant.orm_learn.dao.EmployeeDao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class OrmLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(OrmLearnApplication.class,args);
	}

	@Bean
	public CommandLineRunner run(EmployeeService employeeService) {
		return args -> {
			LOGGER.info("=== Spring Data JPA ===");
			Employee springEmp = new Employee();
			springEmp.setName("Spring User");
			springEmp.setSalary(60000);
			employeeService.addEmployee(springEmp);

			LOGGER.info("=== Hibernate DAO ===");
			Employee hibernateEmp = new Employee();
			hibernateEmp.setName("Hibernate User");
			hibernateEmp.setSalary(55000);
			new EmployeeDao().addEmployee(hibernateEmp);
		};
	}
}

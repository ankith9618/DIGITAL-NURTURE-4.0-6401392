package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // Setup method 
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete.");
    }

    // Teardown method 
    @After
    public void tearDown() {
        System.out.println("Test finished.\n");
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 2, b = 3;
        // Act
        int result = calculator.add(a, b);
        // Assert
        assertEquals("Addition failed", 5, result);
    }

    @Test
    public void testSubtract() {
        // Arrange
        int a = 10, b = 4;
        // Act
        int result = calculator.subtract(a, b);
        // Assert
        assertEquals("Subtraction failed", 6, result);
    }
}

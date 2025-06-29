package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals: 2 + 3 should equal 5
        assertEquals("Sum is incorrect", 5, 2 + 3);

        // Assert true: 5 > 3 should be true
        assertTrue("Condition should be true", 5 > 3);

        // Assert false: 5 < 3 should be false
        assertFalse("Condition should be false", 5 < 3);

        // Assert null: should be null
        Object obj = null;
        assertNull("Object should be null", obj);

        // Assert not null: object should not be null
        Object notNullObj = new Object();
        assertNotNull("Object should not be null", notNullObj);
    }
}

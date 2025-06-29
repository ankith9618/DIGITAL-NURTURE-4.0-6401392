package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Hello from mock");
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        assertEquals("Hello from mock", result);
        verify(mockApi).getData();
    }
}

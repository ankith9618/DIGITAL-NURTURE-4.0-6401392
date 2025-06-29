
--fetches all loans due in the next 30 days and prints a reminder message for each customer.
BEGIN
    FOR loan IN (
        SELECT L.LOAN_ID, L.DUE_DATE, C.CUSTOMER_NAME
        FROM LOANS L
        JOIN CUSTOMERS C ON L.CUSTOMER_ID = C.CUSTOMER_ID
        WHERE L.DUE_DATE <= SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || loan.CUSTOMER_NAME ||
                             ', your loan (ID: ' || loan.LOAN_ID ||
                             ') is due on ' || TO_CHAR(loan.DUE_DATE, 'DD-MON-YYYY'));
    END LOOP;
END;


--Apply 1% discount on loans for all customers whose  age > 60
BEGIN
    FOR customer IN (SELECT CUSTOMER_ID FROM CUSTOMERS WHERE AGE > 60) LOOP
        UPDATE LOANS
        SET INTEREST_RATE = INTEREST_RATE - 1
        WHERE CUSTOMER_ID = customer.CUSTOMER_ID;
    END LOOP;
    COMMIT;
END;

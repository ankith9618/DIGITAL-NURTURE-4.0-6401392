
--update IsVip status true for customers have balance > 10000
BEGIN
    FOR customer IN (SELECT CUSTOMER_ID FROM CUSTOMERS WHERE BALANCE > 10000) LOOP
        UPDATE CUSTOMERS
        SET IS_VIP = 'TRUE'
        WHERE CUSTOMER_ID = customer.CUSTOMER_ID;
    END LOOP;
    COMMIT;
END;

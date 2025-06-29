
--calculates and updates the balance of all savings accounts by applying an interest rate of 1% to the current balance
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE SAVINGS_ACCOUNTS
    SET BALANCE = BALANCE + (BALANCE * 0.01);
    
    COMMIT;
END;
/

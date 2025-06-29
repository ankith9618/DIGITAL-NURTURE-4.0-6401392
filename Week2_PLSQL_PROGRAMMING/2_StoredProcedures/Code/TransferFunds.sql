--transfers a specified amount from one account to another, also checks that the source account has sufficient balance before making the transfer.

CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account IN NUMBER,
    to_account   IN NUMBER,
    amount       IN NUMBER
) AS
    insufficient_balance EXCEPTION;
    curr_balance NUMBER;
BEGIN
    -- Check balance
    SELECT BALANCE INTO curr_balance FROM ACCOUNTS WHERE ACCOUNT_ID = from_account FOR UPDATE;

    IF curr_balance < amount THEN
        RAISE insufficient_balance;
    END IF;

    -- Deduct from source
    UPDATE ACCOUNTS
    SET BALANCE = BALANCE - amount
    WHERE ACCOUNT_ID = from_account;

    -- Add to destination
    UPDATE ACCOUNTS
    SET BALANCE = BALANCE + amount
    WHERE ACCOUNT_ID = to_account;

    COMMIT;

EXCEPTION
    WHEN insufficient_balance THEN
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in source account.');
        ROLLBACK;
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: One of the account IDs does not exist.');
        ROLLBACK;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLERRM);
        ROLLBACK;
END;
/

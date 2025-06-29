
-- updates the salary of employees in a given department by adding a bonus percentage 
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name IN VARCHAR2,
    bonus_percent IN NUMBER 
) AS
BEGIN
    UPDATE EMPLOYEES
    SET SALARY = SALARY + (SALARY * bonus_percent / 100)
    WHERE DEPARTMENT = dept_name;
    
    COMMIT;
END;
/

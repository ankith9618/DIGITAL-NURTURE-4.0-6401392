public class FinancialForecast {

    public static void validateInputs(double currentValue, double growthRate, int years) {
        if (currentValue < 0) {
            throw new IllegalArgumentException("Initial value cannot be negative.");
        }
        if (growthRate < -1.0) {
            throw new IllegalArgumentException("Growth rate cannot be less than -1.0");
        }
        if (years < 0) {
            throw new IllegalArgumentException("Number of years cannot be negative.");
        }
    }


    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;  
        }
        return calculateFutureValue(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double currentValue = 1000.0;
        double annualGrowthRate = 0.10;
        int years = 5;

        System.out.println("\nCurrent Value : " +currentValue + "\nAnnual Growth Rate : "+ annualGrowthRate + "\nYears : "+years );

        try {

            validateInputs(currentValue, annualGrowthRate, years);
            double futureValue = calculateFutureValue(currentValue, annualGrowthRate, years);
            System.out.printf("Predicted value after %d years: $ %.2f \n", years, futureValue);

        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage()+"\n");
        }
    }
}

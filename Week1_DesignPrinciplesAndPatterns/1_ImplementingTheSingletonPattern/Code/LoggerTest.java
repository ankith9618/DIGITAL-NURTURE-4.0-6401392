
public class LoggerTest {
    public static void main(String[] args) {
        // get the singleton instance of Logger
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // long both instances
        logger1.log("First log message.");
        logger2.log("Second log message.");

        // check both reference are same or not
        if (logger1 == logger2) {
            System.out.println("Both logger1 and logger2 refer to the same instance.\n");
        } else {
            System.out.println("Different instances! Singleton failed.");
        }
    }
}

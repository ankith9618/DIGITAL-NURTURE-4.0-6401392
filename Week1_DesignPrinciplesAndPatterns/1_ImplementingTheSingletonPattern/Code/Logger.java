
public class Logger {

    // single instance of Logger 
    private static Logger logger = null;

    private Logger() {
        System.out.println("\nLogger initialized.");
    }

    // public method to access the singleton instance
    public static Logger getInstance() {
        if (logger == null) {
            // Create the instance only when needed
            logger = new Logger();
        }
        return logger;
    }

    // method for logging the message
    public void log(String message) {
        System.out.println("Log message: " + message);
    }
}

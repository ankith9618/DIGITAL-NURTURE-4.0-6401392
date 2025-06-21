import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {

    public static Product searchProductByName(Product[] products, String targetName) {
        Arrays.sort(products, Comparator.comparing(Product::getProductName));
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            String currentProductName = products[mid].getProductName();
            int cmp = currentProductName.compareToIgnoreCase(targetName);
            if (cmp == 0) {
                return products[mid];
            }
            else if (cmp < 0) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static Product searchProductById(Product[] products, int targetId) {
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int currentProductId = products[mid].getProductId();
            if (currentProductId == targetId) {
                return products[mid];
            }
            else if (currentProductId < targetId) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return null;
    }
}

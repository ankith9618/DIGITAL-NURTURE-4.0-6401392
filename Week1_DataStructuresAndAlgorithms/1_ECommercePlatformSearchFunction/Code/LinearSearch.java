public class LinearSearch {

    public static Product searchProductById(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.getProductId() == targetId) {
                return p;
            }
        }
        return null;
    }

    public static Product searchProductByName(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.getProductName().equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }

    public static void searchProductByCategory(Product[] products, String targetCategory) {
        boolean found = false;
        for (Product p : products) {
            if (p.getCategory().equalsIgnoreCase(targetCategory)) {
                System.out.println(p);
                found = true;
            }
        }
        if (!found) {
            System.out.println("No products found in category: " + targetCategory);
        }
    }
}

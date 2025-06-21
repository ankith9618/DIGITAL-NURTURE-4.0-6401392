public class SearchTest {
    public static void main(String[] args) {
        //create some product for testing
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shampoo", "Personal Care"),
            new Product(3, "Book", "Stationery"),
            new Product(4, "Mouse", "Electronics"),
            new Product(5, "Phone", "Electronics")
        };

        // --- linear search  ---
        System.out.println("\nLinear Search by Name: Phone");
        System.out.println(LinearSearch.searchProductByName(products, "Phone"));

        System.out.println("\n Linear Search by ID: 3");
        System.out.println(LinearSearch.searchProductById(products, 3));

        System.out.println("\n Linear Search by Category: Electronics");
        LinearSearch.searchProductByCategory(products, "Electronics");

        // --- binary search ---
        System.out.println("\n Binary Search by Name: Book");
        System.out.println(BinarySearch.searchProductByName(products, "Book"));

        System.out.println("\n Binary Search by ID: 5");
        System.out.println(BinarySearch.searchProductById(products, 5));
        System.out.println();
    }
}

public class DocumentFactoryTest {
    //Open the document if exist
    public static void openDocumentIfExist(Document document,String type){
        if(document != null){
            document.open();
        }
        else {
            System.out.println("--- " + type+ " Document Cannot be Opened ---");
        }
    }
    
    public static void main(String[] args) {
        // Create a Word document using factory
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        openDocumentIfExist(wordDoc,"Word");

        // Create a PDF document using factory
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        openDocumentIfExist(pdfDoc,"PDF");

        // Create an Excel document using factory
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        openDocumentIfExist(excelDoc,"Excel");
    }
}


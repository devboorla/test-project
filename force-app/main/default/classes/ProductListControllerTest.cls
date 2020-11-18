@isTest
public class ProductListControllerTest {
	
    @testsetup static void setUpData(){
    	List<Product2> pList = new List<Product2>();
        Product2 p2 = New Product2();
        p2.Name = 'Test';
        pList.add(p2);
     	
        insert pList;
    }

    @isTest
    static void getProductsListTest(){
        System.assert(ProductListController.getProductsList().size()>0);
    }
    
    @isTest
    static void getSkillsListTest(){
        System.assert(ProductListController.getSkillsList().size()>0);
    }
}
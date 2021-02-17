public class ProductListController {
  
    @AuraEnabled
    public static List<Product2> getProductsList(){
        return [SELECT Id, Name from Product2 ORDER BY Name];
    }
    // This is a change in feature02. Lets see how to handle this
     @AuraEnabled
    public static List<Skill> getSkillsList(){
        return [SELECT Id, DeveloperName from Skill ORDER BY DeveloperName];
    }
}
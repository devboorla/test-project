({
    doInit : function(component, event, helper) {
        var action = component.get('c.getSkillsList');
        action.setCallback(this, function(response){
            if (response.getState() === 'SUCCESS') {
                component.set('v.skillsList', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    
    setName : function(component, event, helper) {
        var skills = component.get("v.skillsList"), 
        value = component.find("pickId").get("v.value"),
            index, skillName;
        skills.forEach(function(v,i,a) { 
            if(v.Id == value) {
                index = i;
            }
        });
        skillName = skills[index].DeveloperName;
         
        component.set('v.selSkillName', skillName);
        
    },
    
})
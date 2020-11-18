({
    doInit : function(component, event, helper) {
        var action = component.get('c.getProductsList');
        action.setCallback(this, function(response){
            if (response.getState() === 'SUCCESS') {
                component.set('v.prodList', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
})
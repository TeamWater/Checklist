var myItems = Alloy.Collections.items;
var item = Alloy.createModel('items', {
	label : 'Jeans',
	details : 'No holes, worn 3 days'
});
myItems.add(item);
item.save();

function showItem(event) {
	var selectedItem = event.source;
	var args = {
		label : selectedItem.label,
		details : selectedItem.details
	};
	var itemview = Alloy.createController("itemdetails", args).getView();

    if (OS_IOS) {
        $.navGroupWin.openWindow(itemview);
    }
    if (OS_ANDROID) {
        itemview.open();
    }
}

function addItem(){
    var myAddItem = Alloy.createController("additem",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(myAddItem);
    }
    if (OS_ANDROID) {
        myAddItem.open();
    }
}

// Open main window
if(OS_IOS) { 
   $.navGroupWin.open(); 
} 
if (OS_ANDROID) { 
   $.index.open(); 
}





























// Get a singleton reference to our items collection:
var myItems = Alloy.Collections.items;

// Adds a new item to the collection and closes the current window
function addItemToCollection() {
    var item = Alloy.createModel('items', {
        label : $.labelInput.value,
        details : $.detailsInput.value
    });
    myItems.add(item);
    item.save();
    $.additem.close();
} 
IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper ingot", {name: "ingotCopper", meta: 0}, {});

IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin", "Tin ingot", {name: "ingotTin", meta: 0}, {});

IDRegistry.genItemID("ingotBronze");
Item.createItem("ingotBronze", "Bronze ingot", {name: "ingotBronze", meta: 0}, {});

Callback.addCallback("PostLoaded", function () {
    if (Config.recipeBronzeIngot) {
        Recipes.addShapeless({id: ItemID.ingotBronze, count: 4, data: 0}, [{
            id: ItemID.ingotCopper,
            data: 0
        }, {id: ItemID.ingotCopper, data: 0}, {id: ItemID.ingotCopper, data: 0}, {id: ItemID.ingotTin, data: 0}]);
    }
});
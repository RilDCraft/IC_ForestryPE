IDRegistry.genItemID("scoop");
Item.createItem("scoop", "Scoop", {name: "scoop", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("scoop", {durability: 10, level: 4, efficiency: 12, damage: 0, enchantability: 0});
Item.setToolRender(ItemID.scoop, true);
ToolAPI.registerTool(ItemID.scoop, "scoop", ["beehive"], {damage: 0});

IDRegistry.genItemID("brokenBronzePickaxe");
Item.createItem("brokenBronzePickaxe", "Broken bronze pickaxe", {name: "brokenBronzePickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("brokenBronzeShovel");
Item.createItem("brokenBronzeShovel", "Broken bronze shovel", {name: "brokenBronzeShovel", meta: 0}, {stack: 1});

Callback.addCallback("DestroyBlock", function (a, b, c) {
    if (Player.getCarriedItem().id == ItemID.bronzePickaxe && Player.getCarriedItem().data == 223) {
        World.drop(a.x + 0.5, a.y + 0.1, a.z + 0.5, ItemID.brokenBronzePickaxe, 1, 0);
        Player.setCarriedItem(0, 0, 0);
    } else if (Player.getCarriedItem().id == ItemID.bronzeShovel && Player.getCarriedItem().data == 223) {
        World.drop(a.x + 0.5, a.y + 0.1, a.z + 0.5, ItemID.brokenBronzeShovel, 1, 0);
        Player.setCarriedItem(0, 0, 0);
    }
});

Callback.addCallback("PostLoaded", function () {
    for (var i = 0; i < 16; i++) {
        Recipes.addShaped({id: ItemID.scoop, count: 1, data: 0}, [
            "sws",
            "sss",
            " s "
        ], ['w', 35, i, 's', 280, -1]);
    }
});
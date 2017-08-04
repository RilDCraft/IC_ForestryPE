Block.setPrototype("enginePeat", {
    type: Block.TYPE_BASE,

    getVariations: function () {
        return [{
            name: "Peat-fired generator",
            texture: [["engine_peat", 1], ["engine_peat", 1], ["engine_peat", 0]],
            inCreative: true
        }];
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.enginePeat, count: 1, data: 0}, [
        "bbb",
        "gmg",
        "sps"
    ], ['b', ItemID.ingotCopper, 0, 'g', ItemID.gearCopper, 0, 'm', ItemID.sturdyMachine, 0, 'p', 33, 0, 's', 20, 0]);
});

ICRenderLib.addConnectionBlock("bc-container", BlockID.enginePeat);
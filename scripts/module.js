let HAC, HACsystem;
Hooks.once('init', async function () {
    HAC = new HyperactiveConfig();
});

Hooks.on('renderActiveEffectConfig', (app, html, object) => {
    let keyArray = html.find("input[type='text']")
    for (let k of keyArray) {
        if(!k.name || !k.name.includes("changes")  || !k.name.includes("key") ) continue
        k.value = HAC.backTrack(k.value) ?? k.value
    }
});

Hooks.on("preUpdateActiveEffect", (data, update) => {
    if (!update?.changes?.length) return;
    for (let change of update.changes) {
        if (change.key.includes("@")) {
            change.key = HAC.currentSystem[`${change.key}`] ?? change.key
        }
    }
    data.update({ update })
})

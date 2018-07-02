async function transferNFCTag(tx) {
    const oldOwner = tx.asset.currentOwner
    tx.asset.currentOwner = tx.newOwner
    const assetRegistry = await getAssetRegistry('org.callforcode.biznet.NFCAsset');
    await assetRegistry.update(tx.NFCAsset);

}


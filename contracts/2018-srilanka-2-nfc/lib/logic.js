/**

 * Track the trade of a commodity from one trader to another

 * @param {org.example.mynetwork.Trade} trade - the trade to be processed

 * @transaction

 */

async function transferNFCTag(assignTag) {

    assignTag.NFCAsset.currentOwner = assignTag.newOwner;

    let assetRegistry = await getAssetRegistry('org.callforcode.biznet.cto');

    await assetRegistry.update(assignTag.NFCAsset);

}



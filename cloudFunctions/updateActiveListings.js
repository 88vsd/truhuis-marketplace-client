// Create a new table called "ActiveListings"
// Add real estates when they are listed on the marketplace
// Remove them when they are bought or canceled

// Run this function anytime when there are changes happened in "RealEstateListed" table
Moralis.Cloud.afterSave("RealEstateListed", async (request) => {
    // Every event gets triggered twice, once on unconfirmed, again on confirmed
    const confirmed = request.object.get("confirmed");
    const logger = Moralis.Cloud.getLogger();
    logger.info("Looking for confirmed Tx");
    if (confirmed) {
        logger.info("Found Active Listing!");
        // Create a new table called "ActiveListing" if it doesn't exist
        const ActiveListing = Moralis.Object.extend("ActiveListing");

        // Updating listing if needed
        const query = new Moralis.Query(ActiveListing);
        query.equalTo("tokenId", request.object.get("tokenId"));
        query.equalTo("marketplaceAddr", request.object.get("address"));
        query.equalTo("seller", request.object.get("seller"));
        const alreadyListedRealEstate = await query.first();
        if (alreadyListedRealEstate) {
            logger.info(`Deleting already listed ${request.object.get("objectId")}`);
            await alreadyListedRealEstate.destroy();
            logger.info(
                `Deleted listing with tokenId ${request.object.get(
                    "tokenId"
                )} at address ${request.object.get("address")} since it's already been listed`
            );
        }

        // Create a new table
        const activeListing = new ActiveListing();
        // Set new columns in the fresh defined ActiveListing table
        activeListing.set("marketplaceAddr", request.object.get("address"));
        activeListing.set("realEstateCountry", request.object.get("propertyCountry"));
        activeListing.set("initialPrice", request.object.get("initialPrice"));
        activeListing.set("tokenId", request.object.get("tokenId"));
        activeListing.set("seller", request.object.get("seller"));
        activeListing.set("currency", request.object.get("currency"));
        activeListing.set("coolingOffPeriod", request.object.get("coolingOffPeriod"));
        activeListing.set("initialTime", request.object.get("initialTime"));
        activeListing.set("stage", request.object.get("stage"));

        logger.info(
            `Adding Address: ${request.object.get("address")}. tokenId: ${request.object.get(
                "tokenId"
            )}`
        );
        logger.info("Saving...");
        await activeListing.save();
    }
});

Moralis.Cloud.afterSave("ListingCanceled", async (request) => {
    const confirmed = request.object.get("confirmed");
    const logger = Moralis.Cloud.getLogger();
    logger.info(`Marketplace | Object: ${request.object}`);
    if (confirmed) {
        const ActiveListing = Moralis.Object.extend("ActiveListing");
        // Query our table before we actually set or save anything
        const query = new Moralis.Query(ActiveListing);
        query.equalTo("marketplaceAddr", request.object.get("address"));
        query.equalTo("seller", request.object.get("seller"));
        query.equalTo("tokenId", request.object.get("tokenId"));

        logger.info(`Marketplace | Query: ${query}`);
        // Find the first active listing in the DB that has the same marketplaceAddr, seller, tokenId
        const canceledListing = await query.first();
        logger.info(`Marketplace | CanceledListing: ${canceledListing}`);

        if (canceledListing) {
            logger.info(
                `Deleting ${request.object.get("tokenId")} at address ${request.object.get(
                    "address"
                )} since it was canceled`
            );
            await canceledListing.destroy();
        } else {
            logger.info(
                `No listing found with address ${request.object.get(
                    "address"
                )} and tokenId: ${request.object.get("tokenId")}`
            );
        }
    }
});

Moralis.Cloud.afterSave("RealEstateBought", async (request) => {
    const confirmed = request.object.get("confirmed");
    const logger = Moralis.Cloud.getLogger();
    logger.info(`Marketplace | Object: ${request.object}`);
    if (confirmed) {
        const ActiveListing = Moralis.Object.extend("ActiveListing");
        // Query our table before we actually set or save anything
        const query = new Moralis.Query(ActiveListing);
        query.equalTo("marketplaceAddr", request.object.get("address"));
        query.equalTo("seller", request.object.get("seller"));
        query.equalTo("tokenId", request.object.get("tokenId"));

        logger.info(`Marketplace | Query: ${query}`);

        const boughtRealEstate = await query.first();
        if (boughtRealEstate) {
            logger.info(`Deleting ${request.object.get("objectId")}`);
            await boughtRealEstate.destroy();
            logger.info(
                `Deleted listing with tokenId ${request.object.get(
                    "tokenId"
                )} at address ${request.object.get("address")}`
            );
        } else {
            logger.info(
                `No listing found with address: ${request.object.get(
                    "address"
                )} and tokenId: ${request.object.get("tokenId")}`
            );
        }
    }
});

const storeService =
require("../services/storeService");

async function createStore(req, res) {

    console.log("Request Body:", req.body);

    try {
        const store = await storeService.createStore(req.body);

        res.status(201).json(store);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to create store."
        });
    }
}

module.exports = {
    
    createStore
};
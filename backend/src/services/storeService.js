const storeRepository =
require("../repositories/storeRepository");

async function createStore(store){

    return await storeRepository.createStore(store);

}

module.exports = {
    createStore
};
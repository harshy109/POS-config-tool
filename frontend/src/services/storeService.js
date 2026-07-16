import axios from "axios";

const API =
"http://localhost:5000/api/stores";

export async function createStore(store){

    const response =
        await axios.post(API,store);

    return response.data;

}
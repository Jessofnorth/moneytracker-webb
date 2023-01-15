import axios from "axios";

//create basic axios config so we dont have to write this code multiple times.
export default axios.create({
    baseURL: "https://moneytracker-8032.onrender.com/",
    headers: {
        "Content-type": "application/json"
    }
})
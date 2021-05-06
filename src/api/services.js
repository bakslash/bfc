import axios from "axios";

export default axios.create({
  baseURL: "https://storage.googleapis.com/wineshop-assets/wine-shop.json",
  headers: {
    "Content-type": "application/json"
  }
});
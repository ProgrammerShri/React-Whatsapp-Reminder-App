import axios from "axios";
const LOCAL_URL = "http://localhost:9000";
const HOST_URL = "https://whatsapp-notifierapp.herokuapp.com";


export default axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Content-type": "application/json",
  },
});
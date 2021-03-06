import axios from "axios";

const instance = axios.create({
  baseURL: "https://road-damage-detection-39c6d-default-rtdb.firebaseio.com/",
});


export default instance
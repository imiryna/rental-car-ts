import axios from "axios";

export const fetchAdvert = axios.create({
  baseURL: "https://65cc7690dd519126b83e83ed.mockapi.io/api/v1",
});

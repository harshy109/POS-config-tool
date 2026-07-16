import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export async function fetchHierarchy() {
  const response = await axios.get(`${API_BASE_URL}/hierarchy`);
  return response.data;
}
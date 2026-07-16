import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export async function fetchConfiguration(nodeId) {
  const response = await axios.get(
    `${API_BASE_URL}/configuration/${nodeId}`
  );

  return response.data;
}

export async function updateConfiguration(
  nodeId,
  generalSettings
) {
  const response = await axios.put(
    `${API_BASE_URL}/configuration/${nodeId}`,
    {
      generalSettings,
    }
  );

  return response.data;
}
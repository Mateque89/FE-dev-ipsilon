import axios from "axios";

const API_BASE = "https://api.covid19api.com";

export function getCountriesSummary() {
  return axios.get(`${API_BASE}/summary`);
}

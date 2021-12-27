import axios from 'axios';

const API_BASE = 'https://api.covid19api.com';

export function getCountriesSummary() {
  return axios.get(`${API_BASE}/summary`);
}
export function getCountryDays(country: string) {
  return axios.get(`${API_BASE}/country/${country}`);
}
export function getAvailableCountries() {
  return axios.get(`${API_BASE}/countries`);
}

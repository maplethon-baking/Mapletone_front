const BASE_URL = "http://localhost:4000";

export function getContents() {
  return fetch(`${BASE_URL}/post`).then((response) => response.json());
}
export function getRecipes() {
  return fetch(`${BASE_URL}/recipe`).then((response) => response.json());
}
export function getSearch({ keyword }) {
  return fetch(`${BASE_URL}/post/?search=${keyword}`);
}

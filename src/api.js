const BASE_URL = "http://localhost:4000";

export function getContents() {
  return fetch(`${BASE_URL}/post`).then((response) => response.json());
}
export function getRecipes() {
  return fetch(`${BASE_URL}/recipes`).then((response) => response.json());
}
export function postRecipes(e) {
  console.log(e);
  return fetch(`${BASE_URL}/result`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
   data:e
  }),
}).then((response) => console.log(response));
}
export function getResult() {
  return fetch(`${BASE_URL}/result`).then((response) => response.json());
}
export function getSearch({ keyword }) {
  return fetch(`${BASE_URL}/post/?search=${keyword}`);
}
export function getOrder(){
  return fetch(`${BASE_URL}/order`).then((response) => response.json());
}
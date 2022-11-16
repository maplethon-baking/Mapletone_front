export function getContents() {
  return fetch("http://localhost:4000/contents").then((response) =>
    response.json()
  );
}
export function getRecipes() {
  return fetch("http://localhost:4000/recipes").then((response) =>
    response.json()
  );
}

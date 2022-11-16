export function getContents() {
  return fetch("http://localhost:4000/contents").then((response) =>
    response.json()
  );
}

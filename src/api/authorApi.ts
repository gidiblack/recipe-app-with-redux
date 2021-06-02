import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/authorData/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

import { Colleague } from "./Colleague";

export function fetchColleagues(): Promise<Colleague[]> {
  return fetch(`${process.env.REACT_APP_BASE_API_URL}/v3/employees`, {
    method: 'GET',
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
}
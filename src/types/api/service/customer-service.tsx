export const customerURL = "http://localhost:8080/api/customer";

export function customerGetData(): Promise<Response> {
  return fetch(customerURL, { method: "GET" });
}

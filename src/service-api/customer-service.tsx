import { CustomerCreateRequest } from "./dto/customer-create-request";

//export const customerURL = "http://localhost:8080/api/customer";

export const customerURL = "https://testdataapp.azurewebsites.net/api/customer";

export function customerGetData(): Promise<Response> {
  return fetch(customerURL, { method: "GET" });
}

export function customerPost(
  customerCreateRequest: CustomerCreateRequest
): Promise<Response> {
  return fetch(customerURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customerCreateRequest),
  });
}

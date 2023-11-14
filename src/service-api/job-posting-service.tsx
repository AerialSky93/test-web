import { JobPostingCreateRequest } from "./dto/job-posting-create-request";

export const customerURL = "http://localhost:8080/api/jobposting";

//export const customerURL = "https://testdataapp.azurewebsites.net/api/customer";

export function customerGetData(): Promise<Response> {
  return fetch(customerURL, { method: "GET" });
}

export function jobPostingCreate(
  jobPostingCreateRequest: JobPostingCreateRequest
): Promise<Response> {
  return fetch(customerURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jobPostingCreateRequest),
  });
}

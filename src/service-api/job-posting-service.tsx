import { JobPostingCreateRequest } from "./dto/job-posting-create-request";

export const jobURL = "http://localhost:8080/api/jobposting";

//export const customerURL = "https://testdataapp.azurewebsites.net/api/customer";

export function jobPostingGet(): Promise<Response> {
  return fetch(jobURL + "/get10MostRecent", { method: "GET" });
}

export function jobPostingCreate(
  jobPostingCreateRequest: JobPostingCreateRequest
): Promise<Response> {
  return fetch(jobURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jobPostingCreateRequest),
  });
}

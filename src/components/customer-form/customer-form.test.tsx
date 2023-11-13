import CustomerForm, { getValueSum } from "./customer-form";

test("test sum data", () => {
  const test = CustomerForm();
  expect(2 + 2).toEqual(getValueSum());
});

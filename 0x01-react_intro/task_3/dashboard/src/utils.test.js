import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("test correct current year", () => {
  expect(getFullYear()).toBe(2022);
});

test("test correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("test correct right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
// @ts-check
import { test, expect } from "@playwright/test";

test("check get endpoint", async ({ request }) => {
  const response = await request.get("/api/users/2");
  expect(response.status()).toBe(200);

  expect(await response.text()).toContain("janet.weaver@reqres.in");
});

test("check post endpoint", async ({ request }) => {
  const response = await request.post(
    "/api/users",

    {
      data: {
        name: "John Doe",
        job: "Developer",
      },
    },
  );
  expect(response.status()).toBe(201);

  // console.log(await response.text());
  expect(await response.text()).toContain("John Doe");
});

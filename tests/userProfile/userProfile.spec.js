import { test, expect, selectors, chromium } from "@playwright/test";
import { describe, todo } from "node:test";
import fillProfileFormMandatory from "./utils/fillProfileFormMandatory";
import fillProfileFormOptional from "./utils/fillProfileFormOptional";

describe("test", () => {
  const submitted = "https://qa-assessment.pages.dev/";
  const notSubmitted = /^https:\/\/qa-assessment\.pages\.dev\/?$/;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://qa-assessment.pages.dev"); // Navigate to the page before each test
  });

  test("Validate First Name field does not accept numerical characters", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John123", // Invalid first name
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(notSubmitted);

    // Validate error message
  });

  test("Validate Last Name field and First Name field accepts only alphabetical characters", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe", // Valid last name
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });
    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate Last Name field does not accept numerical characters", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe123", // Invalid last name
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(notSubmitted);

    // Validate error message
  });

  test("Validate Email field accepts valid email addresses", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com", // Valid email
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "valid@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate Email field does not accept invalid email addresses", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "invalid_email", // Invalid email
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "notvalid.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(notSubmitted);

    // Validate error message
  });

  test("Validate Password field accepts alphanumeric characters and symbols", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd!", // Valid password
      confirmPassword: "P@ssw0rd!",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate Confirm Password field matches Password field", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd!",
      confirmPassword: "P@ssw0rd!", // Matching passwords
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate Confirm Password field does not match Password field", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd!",
      confirmPassword: "DifferentP@ssw0rd", // Non-matching passwords
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(notSubmitted);

    // Validate error message
  });

  test('Validate Gender field accepts "male"', async ({ page }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test('Validate Gender field accepts "female"', async ({ page }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Female",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test('Validate Gender field accepts "prefer not to say"', async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Prefer not to say",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate Date of Birth field accepts valid dates", async ({ page }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate Date of Birth field does not accept invalid dates", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });
    try {
      await fillProfileFormOptional({
        page,
        phoneNumber: "651692845",
        Address: "123 Main St, Apt #1",
        email: "nahs@gmail.com",
        linkedInUrl: "https://www.linkedin.com/in/johndoe",
        gender: "Male",
        gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
        dateOfBirth: "invalid_date",
      });

      await page.getByRole("button", { name: "Submit" }).click();
      expect(finalUrl).toBe(notSubmitted);
      console.log(finalUrl);

      // If the fill does not throw an error, fail the test
      throw new Error(
        "Expected an error when filling the date field with an invalid date, but no error was thrown."
      );
    } catch (error) {
      // Validate that the error message matches the expected error
      expect(error.message).toContain("Malformed value");
    }

    // Validate error message
  });

  test("Validate Phone Number field accepts only numerical characters", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate Phone Number field does not accept non-numerical characters", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "123ABC7890",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(notSubmitted);

    // Validate error message
  });

  test("Validate Address field accepts alphanumeric characters, spaces, and symbols", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate LinkedIn URL field accepts valid URLs", async ({ page }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "123 Main St, Apt #1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate LinkedIn URL field does not accept invalid URLs", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "amahnui1",
      email: "nahs@gmail.com",
      linkedInUrl: "notlinkedin.com",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(notSubmitted);

    // Validate error message
  });

  test("Validate GitHub URL field accepts github valid URL", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "amahnui1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "https://github.com/nothing", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();

    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);

    // Validate form submission or error message
  });

  test("Validate GitHub URL field does not accept invalid github URLs", async ({
    page,
  }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      phoneNumber: "651692845",
      Address: "amahnui1",
      email: "nahs@gmail.com",
      linkedInUrl: "https://www.linkedin.com/in/johndoe",
      gender: "Male",
      gitHubUrl: "notgithub.com", // Invalid GitHub URL
      dateOfBirth: "2001-09-12",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(notSubmitted);

    // Validate error message
  });

  test("Validate mandatory fields are required", async ({ page }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "", // Missing first name
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(notSubmitted);

    // Validate error messages for each missing mandatory field
  });

  test("Validate optional fields can be left empty", async ({ page }) => {
    const finalUrl = page.url();
    await fillProfileFormMandatory({
      page,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "P@ssw0rd",
      confirmPassword: "P@ssw0rd",
    });

    await fillProfileFormOptional({
      page,
      gender: "",
      dateOfBirth: "",
      phoneNumber: "",
      address: "",
      linkedInUrl: "",
      gitHubUrl: "",
    });

    await page.getByRole("button", { name: "Submit" }).click();
    console.log(finalUrl);
    expect(finalUrl).toBe(submitted);
  });
});

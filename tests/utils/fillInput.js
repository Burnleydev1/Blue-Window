// Utility function to fill input fields
const fillInputField = async (page, label, value, exact = false) => {
  const options = exact ? { exact: true } : {};
  await page.getByLabel(label, options).click();
  await page.getByLabel(label, options).fill(value);
};

export default fillInputField
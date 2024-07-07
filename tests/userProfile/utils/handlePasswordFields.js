import fillInputField from "../../utils/fillInput";

// Utility function to handle password field actions
const handlePasswordFields = async (page, password, confirmPassword) => {
    await fillInputField(page, 'Password (mandatory):', password, true);
    await fillInputField(page, 'Confirm Password (mandatory):', confirmPassword);
    await page.getByLabel('Confirm Password (mandatory):').press('ControlOrMeta+a');
    await page.getByLabel('Confirm Password (mandatory):').press('ControlOrMeta+c');
    await fillInputField(page, 'Password (mandatory):', confirmPassword, true);
};

export default handlePasswordFields
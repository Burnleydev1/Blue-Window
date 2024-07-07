const submitButton = async () => {
await page.getByRole('button', { name: 'Submit' }).click();
}
export default submitButton

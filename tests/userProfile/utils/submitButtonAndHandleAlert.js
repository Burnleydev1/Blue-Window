const submitButtonAndHandleAlert = async (page) => {
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Submit' }).click();
};
export default submitButtonAndHandleAlert
// Utility function to navigate to the page
const goToPage = async (page) => {
    // We could also pass the link as a parameter but for single page sites we can use it like this 
    await page.goto('https://qa-assessment.pages.dev/');
};
export default goToPage


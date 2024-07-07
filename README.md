
# User Profile Automation

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone git@github.com:Burnleydev1/Blue-Window.git
    cd Blue-Window
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the tests:
    ```bash
    npx playwright test
    ```

## Project Structure

- `playwright.config.js`: Configuration file for Playwright tests.
- `pages/userProfilePage.js`: Page Object Model for the user profile page.
- `tests/userProfile.test.js`: Test cases for user profile creation.
- `reports/test-report.html`: HTML report of test results.

## Running Tests

To run the tests, use the following command:
```bash
npx playwright test
```

After running the tests, you can view the HTML report in the `reports` folder.
        
import fillInputField from "../../utils/fillInput";
import goToPage from "../../utils/gotoPage";

// Reusable function for filling the profile form
const fillProfileFormOptional = async (props) => {
    const { page, phoneNumber, Address, linkedInUrl, gitHub, dateOfBirth, gender } = props
    await goToPage(page);
    await fillInputField(page, 'Phone Number (optional):', phoneNumber || '');
    await fillInputField(page, 'Address (optioal):', Address || '');
    await fillInputField(page, 'LinkedIn URL (optional):', linkedInUrl || '');
    await fillInputField(page, 'GitHub URL (optional):', gitHub || '');

    await fillInputField(page, 'Date ofBirth (optional):', dateOfBirth || '');
    // await fillInputField(page, gender, '', true);
    
};

export default fillProfileFormOptional
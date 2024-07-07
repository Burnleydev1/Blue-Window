import fillInputField from "../../utils/fillInput";
import goToPage from "../../utils/gotoPage";
import handlePasswordFields from "./handlePasswordFields";

// Reusable function for filling the profile form
const fillProfileFormMandatory = async (props) => {
    const { page, firstName, lastName, email, password, confirmPassword} = props
    await goToPage(page);
    await fillInputField(page, 'First Name (mandatory):', firstName || '');
    await fillInputField(page, 'Last Name (mandatory):', lastName || '');
    await fillInputField(page, 'Email (mandatory):', email || '');
    await handlePasswordFields(page, password, confirmPassword || '');
};

export default fillProfileFormMandatory
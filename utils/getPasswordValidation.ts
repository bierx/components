export interface ValidatePassword {
    hasNumber: boolean;
    hasMinCharacters: boolean;
    hasCapitalLetter: boolean;
    hasSpecialCharacter: boolean;
}

export const getPasswordValidation = (
    text: string | undefined,
): ValidatePassword => {
    let hasNumber = false;
    let hasMinCharacters = false;
    let hasCapitalLetter = false;
    let hasSpecialCharacter = false;

    if (text && text.length > 0) {
        if (text.length >= 8) hasMinCharacters = true;
        if (text.match(/\d+/g)) hasNumber = true;
        if (text.match(/[A-Z]/g)) hasCapitalLetter = true;
        if (text.match(/.*\W.*/g)) hasSpecialCharacter = true;
    }

    return {
        hasNumber,
        hasMinCharacters,
        hasCapitalLetter,
        hasSpecialCharacter,
    };
};

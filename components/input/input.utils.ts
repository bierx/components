import { ValidatePassword } from "@/utils/getPasswordValidation";

export const getRulesMet = (validatePassword: ValidatePassword): number => {
    const array = Object.values(validatePassword);

    return array.filter(Boolean)?.length;
};

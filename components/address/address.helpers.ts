import { FORM_FIELDS } from "./address.utils";

export const generateDefaultName = (addresses, defaultName: string): string => {
    if (!addresses.length) {
        return defaultName;
    }

    const nameCount = addresses.filter((address) =>
        address[FORM_FIELDS.ADDRESS_LABEL].includes(defaultName),
    );

    if (nameCount.length) {
        return `${defaultName} ${nameCount.length}`;
    }

    return defaultName;
};

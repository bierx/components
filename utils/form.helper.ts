interface getErrorMessageProps {
    errors: {
        [x: string]: any;
    };
    fieldName: string;
    defaultMessage?: string;
    nested?: string;
}

export const getErrorMessage = ({
    errors = {},
    fieldName,
    defaultMessage,
    nested,
}: getErrorMessageProps): string | undefined => {
    if (nested) {
        return errors?.[nested]?.[fieldName]?.message || defaultMessage;
    }

    return errors?.[fieldName]?.message || defaultMessage;
};

export const validatePrice = (max: number | string) => (price?: string) => {
    let maxValue = max;
    if (typeof max === "string") {
        maxValue = Number(max.replaceAll(/\s/g, ""));
    }

    if (!price) {
        return;
    }

    return maxValue >= Number(price);
};

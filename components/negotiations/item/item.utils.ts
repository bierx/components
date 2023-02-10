export const STATUS = {
    STARTED: "started",
    WAITING_FOR_MERCHANT: "waiting_for_merchant",
    WAITING_FOR_CUSTOMER: "waiting_for_customer",
    SUCCESS: "success",
    MERCHANT_QUIT: "merchant_quit",
    CUSTOMER_QUIT: "customer_quit",
    FINALIZED: "finalized",
    AUTO_CLOSED: "auto_closed",
    EXPIRED: "expired",
};

export const USER_TYPES = {
    MERCHANT: "MERCHANT",
    CUSTOMER: "CUSTOMER",
};

export type STATUS = typeof STATUS[keyof typeof STATUS];

export const statuses = new Map();

interface ButtonStatus {
    isDisabled?: boolean;
}

statuses.set(
    STATUS.STARTED,
    `background-color: var(--primary); color: var(--black);`,
);
statuses.set(
    STATUS.WAITING_FOR_MERCHANT,
    `background-color: var(--black); color: var(--secondary);`,
);
statuses.set(
    STATUS.WAITING_FOR_CUSTOMER,
    `background-color: var(--black); color: var(--secondary);`,
);
statuses.set(
    STATUS.SUCCESS,
    `background-color: var(--secondaryHover); color: var(--black);`,
);
statuses.set(
    STATUS.MERCHANT_QUIT,
    `background-color: var(--error); color: var(--secondary);`,
);
statuses.set(
    STATUS.CUSTOMER_QUIT,
    `background-color: var(--error); color: var(--secondary);`,
);
statuses.set(
    STATUS.FINALIZED,
    `background-color: var(--secondaryHover); color: var(--black);`,
);
statuses.set(
    STATUS.AUTO_CLOSED,
    `background-color: var(--error); color: var(--secondary);`,
);
statuses.set(
    STATUS.EXPIRED,
    `background-color: var(--error); color: var(--secondary);`,
);

export const getDefaultButtonStatus = (
    status: STATUS,
    type: USER_TYPES,
): ButtonStatus => {
    if (
        status === STATUS.WAITING_FOR_CUSTOMER &&
        type === USER_TYPES.MERCHANT
    ) {
        return {
            isDisabled: true,
        };
    }

    if (
        status === STATUS.WAITING_FOR_MERCHANT &&
        type === USER_TYPES.CUSTOMER
    ) {
        return {
            isDisabled: true,
        };
    }

    if (
        status !== STATUS.STARTED &&
        status !== STATUS.WAITING_FOR_CUSTOMER &&
        status !== STATUS.WAITING_FOR_MERCHANT
    ) {
        return {
            isDisabled: true,
        };
    }

    return {
        isDisabled: false,
    };
};

export const getAcceptButtonStatus = (
    status: STATUS,
    type: USER_TYPES,
): ButtonStatus => {
    if (status === STATUS.STARTED) {
        return {
            isDisabled: true,
        };
    }
    return getDefaultButtonStatus(status, type);
};

export const getDeclineButtonStatus = (
    status: STATUS,
    type: USER_TYPES,
): ButtonStatus => {
    if (status === STATUS.STARTED) {
        return {
            isDisabled: true,
        };
    }
    return getDefaultButtonStatus(status, type);
};

export const getNegotiationButtonStatus = (
    status: STATUS,
    type: USER_TYPES,
): ButtonStatus => {
    if (status === STATUS.STARTED && type === USER_TYPES.MERCHANT) {
        return {
            isDisabled: false,
        };
    }

    return getDefaultButtonStatus(status, type);
};

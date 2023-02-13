export const isValidNip = (nip?: string): boolean => {
    if (!nip) {
        return false;
    }
    const nipWithoutDashes = nip.replace(/-/g, "");
    const reg = /^[0-9]{10}$/;
    if (!reg.test(nipWithoutDashes) || !parseInt(nipWithoutDashes, 10)) {
        return false;
    }
    const digits = `${nipWithoutDashes}`.split("");
    const checksum =
        (6 * parseInt(digits[0], 10) +
            5 * parseInt(digits[1], 10) +
            7 * parseInt(digits[2], 10) +
            2 * parseInt(digits[3], 10) +
            3 * parseInt(digits[4], 10) +
            4 * parseInt(digits[5], 10) +
            5 * parseInt(digits[6], 10) +
            6 * parseInt(digits[7], 10) +
            7 * parseInt(digits[8], 10)) %
        11;

    return parseInt(digits[9], 10) === checksum;
};

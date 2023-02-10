export const FORM_FIELDS = {
    ADDRESS_LABEL: "name",
    NAME: "first_name",
    LAST_NAME: "last_name",
    COUNTRY: "country_iso",
    CITY: "city",
    STREET: "line1",
    STREET_NUMBER: "line2",
    PHONE: "phone",
    POSTAL_CODE: "zip_code",
    REGION: "region_iso",
};

export const FORM_OPTIONS = {
    defaultValues: {
        [FORM_FIELDS.ADDRESS_LABEL]: null,
        [FORM_FIELDS.NAME]: "",
        [FORM_FIELDS.LAST_NAME]: "",
        [FORM_FIELDS.COUNTRY]: "PL",
        [FORM_FIELDS.CITY]: "",
        [FORM_FIELDS.STREET]: "",
        [FORM_FIELDS.STREET_NUMBER]: "",
        [FORM_FIELDS.PHONE]: "",
        [FORM_FIELDS.POSTAL_CODE]: "",
        [FORM_FIELDS.REGION]: "",
    },
};

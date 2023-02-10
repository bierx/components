import React, { FC, useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Typography } from "@components/typography";
import { Input, InputWrapper } from "@components/input";
import { Description, DescriptionWrapper } from "@components/description";
import { Edit, Trash } from "@components/icons";
import { formatRegions } from "@utils/common";

import { FORM_FIELDS, FORM_OPTIONS } from "./address.utils";

import { getErrorMessage } from "@utils/form.helper";
import { IProps } from "./address.types";
import { Address as AddressPayload } from "@/redux/slices/user";

import { Flex, Spacing } from "@styles/globalStyles";
import * as S from "./address.style";
import { Button } from "@components/button";
import { Modal } from "@components/modal";
import { Select } from "@components/select";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { getCountry, useGetCategoriesQuery } from "@redux/services/product-api";
import { useGetCountriesQuery } from "@redux/services/api";
import { generateDefaultName } from "@components/address/address.helpers";

const SHOW_COUNTRY = false;
const SHOW_REGION = false;

export const Address: FC<IProps> = ({
    showHeader = true,
    open = true,
    onChange,
    addNew,
    setDefault,
    deleteAddress,
    data = [],
    error,
}) => {
    useGetCountriesQuery(null);
    useGetCategoriesQuery(null);
    const { t } = useTranslation("checkout");
    const dispatch = useAppDispatch();
    const [addNewAddress, setAddNewAddress] = useState(
        data.length ? false : open,
    );
    const [activeAddressId, setActiveAddressId] = useState<string>();
    const [deleteConfirm, setDeleteConfirm] = useState<{
        name: string;
        id: string;
    } | null>();
    const [isEditId, setIsEditId] = useState<string | null>(null);
    const [addresses, setAddress] = useState(data);
    const [regions, setRegions] = useState([]);

    const countriesOptions = useAppSelector(
        ({ auth }) => auth.countriesOptions,
    );
    const countries = useAppSelector(({ auth }) => auth.countries);

    const handleCountryChange = (iso: string) => {
        if (iso === countryIso || countries[iso]) {
            return;
        }

        dispatch(getCountry.initiate({ iso, sessionId: Date.now() }));
        setValue(`${FORM_FIELDS.REGION}`, "");

        return iso;
    };

    const schema = yup
        .object({
            [FORM_FIELDS.ADDRESS_LABEL]: yup
                .string()
                .required(t`validation:required`),
            [FORM_FIELDS.NAME]: yup.string().required(t`validation:required`),
            [FORM_FIELDS.LAST_NAME]: yup
                .string()
                .required(t`validation:required`),
            [FORM_FIELDS.CITY]: yup.string().required(t`validation:required`),
            [FORM_FIELDS.STREET]: yup.string().required(t`validation:required`),
            [FORM_FIELDS.STREET_NUMBER]: yup
                .string()
                .required(t`validation:required`),
            [FORM_FIELDS.PHONE]: yup
                .string()
                .matches(/^\d+$/, t`validation:digsOnly`)
                .required(t`validation:required`),
            [FORM_FIELDS.POSTAL_CODE]: yup
                .string()
                .required(t`validation:required`),
        })
        .required(t`validation:required`);

    const {
        handleSubmit,
        formState: { errors },
        control,
        reset,
        watch,
        setValue,
        clearErrors,
        trigger,
    } = useForm({ ...FORM_OPTIONS, resolver: yupResolver(schema) });

    const countryIso = watch(`${FORM_FIELDS.COUNTRY}`);
    const regionIso = watch(`${FORM_FIELDS.REGION}`);

    const refs = addresses.reduce((acc, value) => {
        acc[value.id] = React.createRef();
        return acc;
    }, {});

    useEffect(() => {
        if (!countries || !countryIso) {
            return;
        }
        const regions = formatRegions(countries[countryIso]);
        setRegions(regions);
    }, [countryIso, countries]);

    const onSubmit: SubmitHandler<{ [x: string]: string }> = async (data) => {
        let isDefault = false;
        if (isEditId && deleteAddress) {
            const { id } = data;
            isDefault = id === activeAddressId;
            setIsEditId(null);

            await deleteAddress(id);
            onChange && onChange(id);
        }

        if (!addNew) {
            return;
        }

        const response = await addNew(
            data as unknown as AddressPayload,
            isDefault,
        );

        if (response?.error) {
            return;
        }

        setAddNewAddress(false);
        reset(FORM_OPTIONS.defaultValues);
    };

    useEffect(() => {
        refs[isEditId]?.current?.scrollIntoView();
    }, [isEditId]);

    const handleEdit =
        (id: string) => (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
            evt.stopPropagation();
            setIsEditId(id);
            clearErrors();
            setAddNewAddress(false);
        };

    const handleDeleteConfirm =
        (name: string, id: string) =>
        (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
            evt.stopPropagation();
            setDeleteConfirm({ name, id });
        };

    const handleDeleteAddress = () => {
        const filtered = addresses.filter(
            (address) => address.id !== deleteConfirm?.id,
        );
        setAddress(filtered);
        setDeleteConfirm(null);

        if (!filtered.length) {
            setAddNewAddress(true);
        }

        if (deleteAddress && deleteConfirm) {
            deleteAddress(deleteConfirm.id);
        }

        if (deleteConfirm?.id === activeAddressId && filtered?.length) {
            const id = filtered[0].id;
            setDefault && setDefault(id);
            setActiveAddressId(id);
            onChange && onChange(id);
        }
    };

    const isAddress = addresses.length > 0;

    useEffect(() => {
        const active = addresses.find(({ id }) => id === isEditId);
        if (active) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            reset(active);
        }
    }, [isEditId]);

    useEffect(() => {
        setAddress(data);

        if (!data.length) {
            return;
        }

        setAddNewAddress(false);
        const active = data.find((address) => address.default);
        if (active) {
            const { id } = active;
            onChange && onChange(id);
            setActiveAddressId(id);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            trigger();
        }
    }, [error]);

    const AddressForm = ({ isEdit }: { isEdit?: boolean }) => (
        <>
            {addresses.length < 4 && !isEdit && !showHeader && (
                <Spacing spacing={36} />
            )}
            {isAddress && !isEdit && !addNewAddress && (
                <Typography size="h3">
                    {t("addNewAddress")}
                    {addNewAddress && <S.Small>{t("requiredFields")}</S.Small>}
                </Typography>
            )}
            <S.AddressForm
                isEdit={isEdit}
                onSubmit={handleSubmit<AddressPayload>(onSubmit)}
                method="POST"
            >
                <InputWrapper grid={["1fr", "1fr"]} gap={"71px"}>
                    <Controller
                        name={FORM_FIELDS.ADDRESS_LABEL}
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                error={getErrorMessage({
                                    errors,
                                    fieldName: FORM_FIELDS.ADDRESS_LABEL,
                                })}
                                defaultValue={generateDefaultName(
                                    addresses,
                                    t("common:myAddress"),
                                )}
                                text={t("addressNameDesc")}
                                label={t("addressName")}
                                required={true}
                            />
                        )}
                    />
                    <Controller
                        name={`${FORM_FIELDS.NAME}`}
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                error={getErrorMessage({
                                    errors,
                                    fieldName: FORM_FIELDS.NAME,
                                })}
                                label={t("name")}
                                required={true}
                            />
                        )}
                    />
                </InputWrapper>
                <InputWrapper marginB={"0"} grid={["1fr", "1fr"]} gap={"71px"}>
                    <Controller
                        name={`${FORM_FIELDS.LAST_NAME}`}
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                error={getErrorMessage({
                                    errors,
                                    fieldName: FORM_FIELDS.LAST_NAME,
                                })}
                                label={t("lastName")}
                                required={true}
                            />
                        )}
                    />
                    <InputWrapper grid={["88px", "1fr"]} gap={"40px"}>
                        <Controller
                            name={`${FORM_FIELDS.POSTAL_CODE}`}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    error={getErrorMessage({
                                        errors,
                                        fieldName: FORM_FIELDS.POSTAL_CODE,
                                    })}
                                    label={t("postalCode")}
                                    text={t("postalCodeDesc")}
                                    required={true}
                                />
                            )}
                        />
                        <Controller
                            name={`${FORM_FIELDS.CITY}`}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    error={getErrorMessage({
                                        errors,
                                        fieldName: FORM_FIELDS.CITY,
                                    })}
                                    label={t("city")}
                                    text={t("cityDesc")}
                                    required={true}
                                />
                            )}
                        />
                    </InputWrapper>
                </InputWrapper>
                <InputWrapper grid={["1fr", "1fr"]} gap={"71px"}>
                    {SHOW_COUNTRY && (
                        <Controller
                            name={`${FORM_FIELDS.COUNTRY}`}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    error={getErrorMessage({
                                        errors,
                                        fieldName: FORM_FIELDS.COUNTRY,
                                    })}
                                    label={t("country")}
                                    text={t("countryDesc")}
                                    options={countriesOptions}
                                    callback={handleCountryChange}
                                    required
                                />
                            )}
                        />
                    )}
                    {SHOW_REGION && (
                        <Controller
                            name={`${FORM_FIELDS.REGION}`}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    error={getErrorMessage({
                                        errors,
                                        fieldName: FORM_FIELDS.REGION,
                                    })}
                                    label={t("common:state")}
                                    text={t("common:stateDesc")}
                                    options={regions}
                                    value={regionIso}
                                    disabled={!regions || !countryIso}
                                    required
                                />
                            )}
                        />
                    )}
                </InputWrapper>
                <InputWrapper
                    marginB={isEdit ? "4" : "0"}
                    grid={["1fr", "1fr"]}
                    gap={"71px"}
                >
                    <InputWrapper grid={["1fr", "88px"]} gap={"40px"}>
                        <Controller
                            name={`${FORM_FIELDS.STREET}`}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    error={getErrorMessage({
                                        errors,
                                        fieldName: FORM_FIELDS.STREET,
                                    })}
                                    label={t("street")}
                                    text={t("streetDesc")}
                                    required={true}
                                />
                            )}
                        />
                        <Controller
                            name={`${FORM_FIELDS.STREET_NUMBER}`}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    error={getErrorMessage({
                                        errors,
                                        fieldName: FORM_FIELDS.STREET_NUMBER,
                                    })}
                                    label={t("streetNumber")}
                                    text={t("streetNumberDesc")}
                                    required={true}
                                />
                            )}
                        />
                    </InputWrapper>
                    <Controller
                        name={`${FORM_FIELDS.PHONE}`}
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                error={getErrorMessage({
                                    errors,
                                    fieldName: FORM_FIELDS.PHONE,
                                })}
                                text={t("phoneDesc")}
                                label={t("phone")}
                                required={true}
                            />
                        )}
                    />
                </InputWrapper>
                <S.Actions>
                    <S.Button
                        onClick={() => {
                            setAddNewAddress(false);
                            setIsEditId(null);
                            reset(FORM_OPTIONS.defaultValues);
                        }}
                        size="small"
                        variant="outlined"
                    >
                        {t("cancel")}
                    </S.Button>
                    <S.Button size="small" type="submit">
                        {t("save")}
                    </S.Button>
                </S.Actions>
            </S.AddressForm>
        </>
    );

    return (
        <>
            <>
                {showHeader && (
                    <>
                        <Typography size="h3">
                            {t("title")}
                            {addNewAddress && (
                                <S.Small>{t("requiredFields")}</S.Small>
                            )}
                        </Typography>
                        <DescriptionWrapper>
                            <Description>{t("desc")}</Description>
                        </DescriptionWrapper>
                    </>
                )}
                {isAddress && !addNewAddress && (
                    <S.AddressesWrapper active={addresses.length > 3}>
                        <S.AddressScroll>
                            {addresses.map(
                                ({
                                    name,
                                    first_name,
                                    last_name,
                                    city,
                                    zip_code,
                                    line1,
                                    line2,
                                    phone,
                                    default: isDefault,
                                    id,
                                }) => {
                                    const isActiveAddressId =
                                        activeAddressId === id;

                                    return isEditId === id ? (
                                        <div ref={refs[id]}>
                                            <AddressForm
                                                isEdit={true}
                                                key={id}
                                            />
                                        </div>
                                    ) : (
                                        <S.Address
                                            active={isActiveAddressId}
                                            key={id}
                                            ref={refs[id]}
                                            onClick={() => {
                                                setActiveAddressId(id);
                                                !isActiveAddressId &&
                                                    setDefault &&
                                                    setDefault(id);
                                                onChange && onChange(id);
                                            }}
                                        >
                                            <S.Name active={isActiveAddressId}>
                                                {name}
                                            </S.Name>
                                            <S.AddressContentWrapper>
                                                <S.AddressContent>
                                                    <S.AddressContentItem>
                                                        <S.Label width="30px">
                                                            {t("name")}
                                                        </S.Label>
                                                        <S.Value width="112px">
                                                            {first_name}
                                                        </S.Value>
                                                    </S.AddressContentItem>
                                                    <S.AddressContentItem>
                                                        <S.Label>
                                                            {t("lastName")}
                                                        </S.Label>
                                                        <S.Value>
                                                            {last_name}
                                                        </S.Value>
                                                    </S.AddressContentItem>
                                                    <S.AddressContentItem>
                                                        <S.Label>
                                                            {t("city")}
                                                        </S.Label>
                                                        <S.Value>
                                                            {city}
                                                        </S.Value>
                                                    </S.AddressContentItem>
                                                    <S.AddressContentItem>
                                                        <S.Label>
                                                            {t("postalCode")}
                                                        </S.Label>
                                                        <S.Value>
                                                            {zip_code}
                                                        </S.Value>
                                                    </S.AddressContentItem>
                                                </S.AddressContent>
                                                <S.AddressContent>
                                                    <S.AddressContentItem>
                                                        <S.Label width="30px">
                                                            {t("street")}
                                                        </S.Label>
                                                        <S.Value width="112px">
                                                            {line1}
                                                        </S.Value>
                                                    </S.AddressContentItem>
                                                    <S.AddressContentItem>
                                                        <S.Label>
                                                            {t("streetNumber")}
                                                        </S.Label>
                                                        <S.Value width="75px">
                                                            {line2}
                                                        </S.Value>
                                                    </S.AddressContentItem>
                                                    <S.AddressContentItem>
                                                        <S.Label>
                                                            {t("phone")}
                                                        </S.Label>
                                                        <S.Value>
                                                            {phone}
                                                        </S.Value>
                                                    </S.AddressContentItem>
                                                </S.AddressContent>
                                            </S.AddressContentWrapper>
                                            <S.AddressActions>
                                                <S.ActionItem
                                                    onClick={handleEdit(id)}
                                                >
                                                    <Edit />
                                                </S.ActionItem>
                                                <S.ActionItem
                                                    onClick={handleDeleteConfirm(
                                                        name,
                                                        id,
                                                    )}
                                                >
                                                    <Trash />
                                                </S.ActionItem>
                                            </S.AddressActions>
                                        </S.Address>
                                    );
                                },
                            )}
                        </S.AddressScroll>
                    </S.AddressesWrapper>
                )}
                <>
                    <S.FormActions>
                        {!addNewAddress && (
                            <Button
                                onClick={() => {
                                    reset(FORM_OPTIONS.defaultValues);
                                    setAddNewAddress(true);
                                    setIsEditId(null);
                                }}
                                variant="outlined"
                                size="tiny"
                            >
                                {t("addNewAddress")}
                            </Button>
                        )}
                    </S.FormActions>
                    {addNewAddress && <AddressForm />}
                </>
            </>
            {deleteConfirm && (
                <Modal
                    height={419}
                    width={845}
                    center
                    onClose={() => setDeleteConfirm(null)}
                    open={Boolean(deleteConfirm)}
                >
                    <S.Info size="h3">
                        {t("deleteConfirm", { name: deleteConfirm.name })}
                        <div>{t("deleteConfirmBottom")}</div>
                    </S.Info>
                    <Spacing spacing={39} />
                    <Flex gap={16}>
                        <Button
                            onClick={handleDeleteAddress}
                            variant="outlined"
                            size="small"
                            width={98}
                        >
                            {t("yes")}
                        </Button>
                        <Button
                            onClick={() => setDeleteConfirm(null)}
                            size="small"
                            width={98}
                        >
                            {t("no")}
                        </Button>
                    </Flex>
                </Modal>
            )}
        </>
    );
};

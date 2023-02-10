import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";

import {
    CheckMarkCircle,
    ErrorCircle,
    ClosedEye,
    EyeOutline,
    InfoOutline,
} from "@/components/icons";

import { Tooltip } from "@styles/globalStyles";

import { InputProps, INPUT_VARIANT } from "./input.types";
import { getRulesMet } from "./input.utils";

import * as S from "./input.style";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        const {
            label,
            error,
            text,
            smallText,
            onChange,
            required,
            variant,
            validatePassword,
            passwordText,
            tooltip,
            showIcons = variant !== INPUT_VARIANT.OUTLINED,
            asPlaceholder,
            icon,
            ...rest
        } = props;
        const [isFocus, setIsFocus] = useState(false);
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
        const [value, setValue] = useState("");
        const isFilled = Boolean(value && !error && !isFocus);
        const isPassword = variant === INPUT_VARIANT.PASSWORD;

        const handleTogglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible);
        };

        const { t } = useTranslation("validation");

        return (
            <S.Wrapper
                width={rest.width}
                type={rest.type}
                isFilled={isFilled}
                error={error}
                variant={variant}
                smallText={Boolean(smallText)}
            >
                {icon && <S.LeftIcon>{icon}</S.LeftIcon>}
                <S.Input
                    ref={ref}
                    type={
                        isPassword && !isPasswordVisible ? "password" : "text"
                    }
                    {...rest}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setValue(event.target.value);
                        onChange && onChange(event);
                    }}
                    withIcon={Boolean(icon)}
                    asPlaceholder={asPlaceholder}
                    placeholder="&nbsp;"
                />
                <S.LabelWrapper>
                    <S.Label asPlaceholder={asPlaceholder}>
                        {label} {label && required && "*"}
                    </S.Label>
                    {smallText && <S.SmallDesc>{smallText}</S.SmallDesc>}
                </S.LabelWrapper>

                {passwordText && (
                    <S.ValidatePasswordWrapper>
                        <S.ValidatorIndicators>
                            <S.ProgressBar>
                                <S.BarDarkRed />
                                <S.BarRed
                                    hasColor={
                                        validatePassword &&
                                        getRulesMet(validatePassword) > 1
                                    }
                                />
                                <S.BarLightRed
                                    hasColor={
                                        validatePassword &&
                                        getRulesMet(validatePassword) > 2
                                    }
                                />
                                <S.BarDarkGreen
                                    hasColor={
                                        validatePassword &&
                                        getRulesMet(validatePassword) > 3
                                    }
                                />
                            </S.ProgressBar>
                        </S.ValidatorIndicators>
                        <S.ErrorsList>
                            <S.Error
                                isRuleMet={
                                    validatePassword &&
                                    validatePassword.hasMinCharacters
                                }
                            >
                                {t("minCharacters")}
                            </S.Error>
                            <S.Error
                                isRuleMet={
                                    validatePassword &&
                                    validatePassword.hasCapitalLetter
                                }
                            >
                                {t("capitalLetter")}
                            </S.Error>
                            <S.Error
                                isRuleMet={
                                    validatePassword &&
                                    validatePassword.hasNumber
                                }
                            >
                                {t("number")}
                            </S.Error>
                            <S.Error
                                isRuleMet={
                                    validatePassword &&
                                    validatePassword.hasSpecialCharacter
                                }
                            >
                                {t("specialCharacter")}
                            </S.Error>
                        </S.ErrorsList>
                    </S.ValidatePasswordWrapper>
                )}
                {(error || text) && !passwordText && (
                    <S.SmallText withIcon={Boolean(icon)}>
                        {error || text}
                    </S.SmallText>
                )}
                {isFilled && showIcons && (
                    <S.Icon>
                        <CheckMarkCircle />
                    </S.Icon>
                )}
                {error && showIcons && (
                    <S.Icon>
                        <ErrorCircle />
                    </S.Icon>
                )}
                {tooltip && !error && !isFilled && (
                    <S.TooltipIcon>
                        <Tooltip text={tooltip}>
                            <InfoOutline />
                        </Tooltip>
                    </S.TooltipIcon>
                )}
                {variant === INPUT_VARIANT.PASSWORD && (
                    <S.PasswordToggle onClick={handleTogglePasswordVisibility}>
                        {!isPasswordVisible ? <EyeOutline /> : <ClosedEye />}
                    </S.PasswordToggle>
                )}
            </S.Wrapper>
        );
    },
);

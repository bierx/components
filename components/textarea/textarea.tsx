import React, { useEffect, useState } from "react";

import * as S from "./textarea.style";
import useTranslation from "next-translate/useTranslation";

interface InputNumberProps {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    minLength?: number;
    defaultValue?: string;
    width?: number;
    required?: boolean;
    error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, InputNumberProps>(
    (props, ref) => {
        const { t } = useTranslation("validation");
        const { minLength = 0, defaultValue, width, error } = props;
        const [count, setCount] = useState(minLength);
        const handleChange = (
            event: React.ChangeEvent<HTMLTextAreaElement>,
        ) => {
            const value = event.target?.value || "";
            const count =
                value.length > minLength ? 0 : minLength - value.length;

            setCount(count);
        };

        useEffect(() => {
            if (!defaultValue) {
                return;
            }
            const count =
                defaultValue.length > minLength
                    ? 0
                    : minLength - defaultValue.length;
            setCount(count);
        }, [defaultValue]);
        return (
            <S.Textarea error={error} width={width}>
                <textarea
                    onChange={handleChange}
                    ref={ref}
                    {...props}
                ></textarea>
                {minLength && (
                    <S.Description error={error}>
                        {t("textareaCount", { count })}
                    </S.Description>
                )}
            </S.Textarea>
        );
    },
);

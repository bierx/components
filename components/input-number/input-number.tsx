import React, { useState } from "react";

import { Plus, Minus } from "@components/icons";
import { SmallText } from "@styles/globalStyles";

import * as S from "./input-number.style";

interface InputNumberProps {
    defaultValue?: number;
    min?: number;
    onChange?: (value: number) => void;
    label?: string;
    value?: string;
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
    (props, ref) => {
        const { defaultValue = 0, min = 0, onChange, label, value } = props;
        const [val, setValue] = useState(Number(value || defaultValue));
        const increment = () => {
            const newVal = val + 1;
            setValue(newVal);
            onChange && onChange(newVal);
        };

        const decrement = () => {
            if (val === min) {
                return;
            }
            const newVal = val - 1;
            setValue(newVal);
            onChange && onChange(newVal);
        };

        return (
            <SmallText>
                {label}
                <S.InputNumber>
                    <S.Button onClick={decrement}>
                        <Minus />
                    </S.Button>
                    <S.Number>{value}</S.Number>
                    <S.Button onClick={increment}>
                        <Plus />
                    </S.Button>
                    <input hidden ref={ref} value={val} />
                </S.InputNumber>
            </SmallText>
        );
    },
);

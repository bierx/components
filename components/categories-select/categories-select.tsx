import { FC, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { HamburgerOutline } from "@/components/icons";

import * as S from "./categories-select.style";

interface CategoriesSelectProps {
    onChange?: (state: boolean) => void;
}

export const CategoriesSelect: FC<CategoriesSelectProps> = ({ onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation("common");

    const handleClick = (state: boolean) => {
        setIsOpen(state);
        onChange && onChange(state);
    };

    return (
        <>
            <S.CategoriesSelect
                onStateChange={handleClick}
                showIcons={false}
                label={t("categories")}
                highlight={isOpen}
            >
                {isOpen ? <S.CloseIcon /> : <HamburgerOutline />}
            </S.CategoriesSelect>
        </>
    );
};

import React, { RefObject, useState } from "react";
import { Search as SearchIcon } from "@/components/icons";
import { Checkbox } from "@/components/checkbox";
import useTranslation from "next-translate/useTranslation";

import { SelectProps } from "./select.types";

import * as S from "./dropdown.style";

interface DropdownProps extends SelectProps {
    selectedOptions?: string[];
    onSave?: () => void;
    onDropdownChange?: ({ name, id }: Options) => void;
    onMultiSelect?: (selected: string[]) => void;
    setSelectedOptions?: (selected: string[]) => void;
    ref: RefObject<HTMLDivElement>;
}

export const Dropdown = React.forwardRef<HTMLInputElement, DropdownProps>(
    (props, ref) => {
        const {
            options,
            multiple,
            searchLabel,
            searchPlaceholder,
            selectedOptions = [],
            onSave,
            onDropdownChange,
            onMultiSelect,
            setSelectedOptions,
        } = props;

        const { t } = useTranslation("common");
        const [filteredOptions, setFilteredOptions] = useState(options);

        const handleChange =
            (selected: string) =>
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const isChecked = event.target.checked;

                if (isChecked) {
                    const newSelectedOptions = [...selectedOptions, selected];
                    setSelectedOptions &&
                        setSelectedOptions(newSelectedOptions);
                    onMultiSelect && onMultiSelect(newSelectedOptions);
                } else {
                    const filtered = selectedOptions.filter(
                        (id) => id !== selected,
                    );
                    setSelectedOptions && setSelectedOptions(filtered);
                    onMultiSelect && onMultiSelect(filtered);
                }
            };

        const clearSelections = () => {
            setSelectedOptions && setSelectedOptions([]);
            onMultiSelect && onMultiSelect([]);
        };

        const handleSave = () => {
            onSave && onSave();
        };

        const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
            const filteredOptions = options?.filter(({ name }) =>
                name.toLowerCase().match(event.target.value.toLowerCase()),
            );
            setFilteredOptions(filteredOptions);
        };

        return (
            <S.DropDownListContainer ref={ref} multiple={multiple}>
                {multiple && (
                    <>
                        <S.SearchOptionsWrapper>
                            <SearchIcon />
                            <S.Search
                                onChange={handleSearch}
                                placeholder={searchPlaceholder}
                            />
                        </S.SearchOptionsWrapper>
                        {searchLabel && <S.Label>{searchLabel}</S.Label>}
                    </>
                )}
                <S.DropDownList>
                    {filteredOptions?.map(({ id, name }) => (
                        <S.ListItem
                            onClick={() =>
                                !multiple &&
                                onDropdownChange &&
                                onDropdownChange({ name, id })
                            }
                            key={id}
                        >
                            {multiple ? (
                                <Checkbox
                                    checked={selectedOptions.includes(id)}
                                    onChange={handleChange(id)}
                                    labelPosition="left"
                                >
                                    {name}{" "}
                                </Checkbox>
                            ) : (
                                name
                            )}
                        </S.ListItem>
                    ))}
                </S.DropDownList>
                {multiple && (
                    <S.Actions>
                        <div onClick={clearSelections}>{t("clear")}</div>
                        <div onClick={handleSave}>{t("save")}</div>
                    </S.Actions>
                )}
            </S.DropDownListContainer>
        );
    },
);

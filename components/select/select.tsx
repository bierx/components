import React, { ChangeEvent, useState, useRef, useEffect } from "react";

import { Dropdown } from "./dropdown";
import { SelectProps } from "./select.types";
import { useDetectOutsideClick } from "@utils/hooks/use-detect-outside-click";

import {
    CheckMarkCircle,
    ErrorCircle,
    ChevronDownOutline,
    ChevronUpOutline,
    InfoOutline,
} from "@/components/icons";

import * as S from "./select.style";
import { Tooltip } from "@styles/globalStyles";

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
    (props, ref) => {
        const {
            label,
            error,
            text,
            required,
            callback,
            onChange,
            options,
            className,
            children,
            showIcons = true,
            onStateChange,
            highlight,
            multiple,
            searchPlaceholder,
            searchLabel,
            open,
            width,
            tooltip,
            disabled,
            value,
            name,
            array,
        } = props;
        const [isOpen, setIsOpen] = useState(open);
        const [selectedOption, setSelectedOption] = useState("");
        const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
        const [selectedOptionsLength, setSelectedOptionsLength] = useState(0);
        const dropdownRef = useRef(null);

        const toggling = () => {
            onStateChange && onStateChange(!isOpen);
            setIsOpen(!isOpen);
        };

        const handleListItemClick = ({ name, id }: Options) => {
            setSelectedOption(name);
            setIsOpen(false);
            callback && callback(id);
            const data = array ? [id] : id;

            onChange &&
                onChange(data as unknown as ChangeEvent<HTMLInputElement>);
        };

        const handleMultiSelect = (selected: string[]) => {
            setSelectedOptionsLength(selected.length);
        };

        const handleSave = () => {
            setIsOpen(false);
        };

        const isFilled = Boolean(selectedOption?.length);

        useDetectOutsideClick(dropdownRef, setIsOpen);

        useEffect(() => {
            if (selectedOption && value === "") {
                setSelectedOption(value);
            }

            if (!selectedOption && value) {
                const option = options.find((option) => option.id === value);

                if (option?.name) {
                    setSelectedOption(option.name);
                    callback && callback(option.id);
                }
            }
        }, [value]);

        return (
            <S.Wrapper
                className={className}
                ref={dropdownRef}
                error={error}
                isFilled={isFilled}
                width={width}
                disabled={disabled}
            >
                {children && (
                    <S.ExtraIcon onClick={toggling}>{children}</S.ExtraIcon>
                )}
                <input
                    ref={ref}
                    hidden
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <S.DropDownHeader
                    highlight={highlight}
                    isFilled={isFilled}
                    onClick={toggling}
                >
                    {selectedOption || (
                        <>
                            {label} {required && "*"}
                            {multiple && (
                                <S.Counter hidden={selectedOptionsLength === 0}>
                                    {selectedOptionsLength}
                                </S.Counter>
                            )}
                        </>
                    )}
                    <S.Chevron>
                        {!isOpen ? (
                            <ChevronDownOutline />
                        ) : (
                            <ChevronUpOutline />
                        )}
                    </S.Chevron>
                </S.DropDownHeader>
                {isOpen && options && (
                    <Dropdown
                        searchPlaceholder={searchPlaceholder}
                        searchLabel={searchLabel}
                        multiple={multiple}
                        options={options}
                        onDropdownChange={handleListItemClick}
                        onMultiSelect={handleMultiSelect}
                        onSave={handleSave}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                    />
                )}
                {(error || text) && <S.SmallText>{error || text}</S.SmallText>}
                {error && showIcons && (
                    <S.Icon>
                        <ErrorCircle />
                    </S.Icon>
                )}
                {isFilled && showIcons && (
                    <S.Icon>
                        <CheckMarkCircle />
                    </S.Icon>
                )}
                {tooltip && !error && !isFilled && (
                    <S.TooltipIcon>
                        <Tooltip text={tooltip}>
                            <InfoOutline />
                        </Tooltip>
                    </S.TooltipIcon>
                )}
            </S.Wrapper>
        );
    },
);

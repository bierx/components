import React from "react";
import { SmallText } from "@styles/globalStyles";
import { Image, Trash } from "@components/icons";

import * as S from "./image-upload.style";

export interface ImageUploadProps {
    label?: string;
    width?: number;
    height?: number;
    border?: boolean;
    onChange?: (file: File) => void;
    onDelete?: (src: string) => void;
    error?: string;
    preview?: string;
    name?: string;
    value?: string;
}

export const ImageUpload = React.forwardRef<HTMLInputElement, ImageUploadProps>(
    (props, ref) => {
        const {
            width = 103,
            height = 110,
            label,
            border,
            onChange,
            onDelete,
            error,
            name,
            value = "",
        } = props;
        function showPreview(event: React.ChangeEvent<HTMLInputElement>) {
            if (event?.target?.files?.length) {
                const file = event.target.files[0];
                onChange && onChange(file);
            }
        }

        const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
            event.stopPropagation();
            event.preventDefault();
            onDelete && onDelete(value);
        };
        return (
            <S.ImageUploadWrapper error={error}>
                {label && <SmallText>{label}</SmallText>}
                <S.ImageUploadInner
                    {...{ width, height, border, preview: value }}
                >
                    <S.ImageUpload>
                        {!value ? (
                            <Image />
                        ) : (
                            <S.Preview src={value}>
                                <S.Delete onClick={handleDelete}>
                                    <Trash />
                                </S.Delete>
                            </S.Preview>
                        )}
                    </S.ImageUpload>
                    {!value && (
                        <input
                            ref={ref}
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={showPreview}
                            name={name}
                        />
                    )}
                </S.ImageUploadInner>
                {error && <SmallText>{error}</SmallText>}
            </S.ImageUploadWrapper>
        );
    },
);

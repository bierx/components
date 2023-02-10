import styled from "styled-components";
import { ImageUploadProps } from "./image-upload";
import { SmallText } from "@styles/globalStyles";

export const ImageUpload = styled.div`
    background: rgba(137, 137, 137, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageUploadInner = styled.label<Partial<ImageUploadProps>>`
    display: block;
    ${({ width, height, border, preview }) => `
      width: ${width || 103}px;
      height: ${height || 110}px;
      cursor: pointer;
      ${border && preview && `border: 1px solid var(--primary); padding: 8px;`}
      ${border && !preview && `border: 1px solid var(--grey); padding: 8px;`}
  `}
`;

export const Preview = styled.div<{ src: string }>`
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
`;

export const ImageUploadWrapper = styled.div<{ error?: string }>`
    ${({ error }) =>
        error &&
        `
      ${SmallText} {color: var(--error);}
      ${ImageUploadInner} {border-color: var(--error);}
    `}
`;

export const Delete = styled.div`
    width: 40px;
    height: 40px;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
`;

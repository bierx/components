import styled from "styled-components";
import { Typography } from "@/components/typography";
import { Button as ButtonStyled } from "@components/button";
import { BoldText, SmallText } from "@styles/globalStyles";
import {
    Input,
    Label as InputLabel,
    LabelWrapper,
} from "@components/input/input.style";

export const AddressForm = styled.form<{ isEdit?: boolean }>`
    margin-top: 44px;
    max-width: 895px;
    margin-bottom: 56px;
    ${({ isEdit }) =>
        isEdit &&
        `
        border: 1px solid var(--secondaryHover); 
        border-radius: 16px; 
        padding: 35px 82px; 
        padding-top: 50px;
        max-width: 100%;
        margin-bottom: 10px;
        
        &:last-child {
          margin-bottom: 30px;
        }
        
        ${Input} {
            border-color: var(--grey);
                
            + ${LabelWrapper} {     
                ${InputLabel} {
                    color: var(--secondary);
                 }
             }
        `}
`;

export const Button = styled(ButtonStyled)`
    margin-top: 20px;
`;

export const Actions = styled.div` 
    display: grid;
    justify-content: end;
    grid-column-gap: 16px;
    grid-template-columns: auto auto;

    ${Button} {
        margin-top: 0;
    }
}`;

export const Address = styled.div<{ active?: boolean }>`
    ${({ active }) => `
        display: flex;
        align-items: center;
        background-color: var(--${active ? "black" : "dark"});
        border: 1px solid  var(--${active ? "secondaryHover" : "greyDark"});
        border-radius: 16px;
        padding-top: 20px;
        padding-bottom: 16px;
        padding-left: 24px;
        padding-right: 34px;
        margin-bottom: 10px;
        cursor: pointer;
        grid-column-gap: 20px;
    `}
`;

export const Small = styled(SmallText)`
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
`;

export const Label = styled(Small)<{ width?: string }>`
    margin-left: 0;
    ${({ width }) => width && `width: ${width};`}
`;

export const Value = styled.div<{ width?: string }>`
    font-size: 13px;
    line-height: 21px;
    color: var(--secondary);
    ${({ width }) => width && `min-width:${width};`}
`;

export const Name = styled(BoldText)<{ active?: boolean }>`
    color: var(--greyLight);
    min-width: 166px;
    position: relative;
    align-self: flex-start;

    &:before {
        content: "";
        width: 20px;
        height: 20px;
        border: 1px solid var(--grey);
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;

        ${({ active }) =>
            active && `border-width: 5px; border-color: var(--secondaryHover);`}
    }
`;

export const AddressActions = styled.div`
    display: flex;
    margin-left: auto;
    grid-column-gap: 16px;
    align-items: center;
`;

export const AddressContent = styled.div`
    display: flex;
    width: 100%;
    grid-column-gap: 44px;
`;

export const AddressContentItem = styled.div`
    display: flex;
    grid-column-gap: 8px;
    align-items: center;
`;

export const ActionItem = styled.div`
    cursor: pointer;
`;

export const AddressContentWrapper = styled.div`
    display: grid;
    grid-row-gap: 8px;
`;

export const More = styled.div`
    font-weight: 500;
    font-size: 13px;
    line-height: 19.5px;
    color: var(--secondary);
    cursor: pointer;
`;

export const FormActions = styled.div`
    display: flex;

    ${More} {
        margin-left: auto;
    }
`;

export const Info = styled(Typography)`
    line-height: 34px;
    max-width: 620px;
`;

export const Header = styled(Typography)`
    line-height: 32px;
    margin: 16px 0;
`;

export const AddressScroll = styled.div`
    max-height: 410px;
    overflow: auto;
    padding-right: 16px;
    margin-right: -16px;
    margin-top: 20px;
`;

export const AddressesWrapper = styled.div<{ active?: boolean }>`
    position: relative;

    ${({ active }) =>
        active &&
        `
        &:after {
        content: "";
        position: absolute;
        height: 97px;
        bottom: 0;
        left: 0;
        right: 0;
        pointer-events: none;
        transform: rotate(180deg);

        background: -moz-linear-gradient(
            top,
            rgba(20, 20, 20, 1) 0%,
            rgba(20, 20, 20, 0) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
            top,
            rgba(20, 20, 20, 1) 0%,
            rgba(20, 20, 20, 0) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
            to bottom,
            rgba(20, 20, 20, 1) 0%,
            rgba(20, 20, 20, 0) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#141414', endColorstr='#00141414',GradientType=0 ); /* IE6-9 */
      }
    `}
`;

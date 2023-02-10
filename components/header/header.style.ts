import styled from "styled-components";
import { UserOutlined } from "@/components/icons";
import { Button } from "@components/button";
import { Link } from "@/components/link/link.style";

export const Header = styled.div`
    display: flex;
    padding: 16px 44px;
    padding-right: 0;
    grid-column-gap: 16px;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;

    > ${Link} {
        display: inline-flex;
    }
`;

export const Right = styled.div`
    display: flex;
    grid-column-gap: 16px;
    margin-left: auto;
`;

export const UserIcon = styled(UserOutlined)``;

export const UserDropdownWrapper = styled.div`
    display: flex;
    position: relative;

    > ${UserIcon} {
        &:hover {
            cursor: pointer;

            path {
                fill: var(--green);
            }

            circle {
                stroke: var(--green);
            }
        }
    }
`;

export const UserDropdown = styled.div`
    background-color: var(--black);
    border: 1px solid var(--secondaryHover);
    color: var(--secondary);
    font-size: 13px;
    line-height: 30px;
    padding: 24px;
    padding-right: 22px;
    padding-bottom: 10px;
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 11px;
    min-width: 297px;
`;

export const UserInfo = styled.div`
    display: grid;
    grid-template-columns: 48px auto;
    grid-column-gap: 16px;
    padding-bottom: 22px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--grey);
`;

export const UserName = styled.div`
    font-size: 13px;
    line-height: 18px;
    color: var(--grey);
    margin-top: 8px;
`;

export const UserMenu = styled.div`
    font-size: 13px;
    line-height: 30px;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--grey);

    a {
        &:hover {
            text-decoration: underline;
            color: var(--secondaryHover);
        }
    }
`;

export const Logout = styled.div`
    cursor: pointer;
    display: inline-flex;
    grid-column-gap: 8px;
    align-items: center;
`;

export const SellButton = styled(Button)`
    padding: 0;
`;

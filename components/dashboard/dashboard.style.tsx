import styled from "styled-components";

export const Dashboard = styled.div`
    padding-top: 82px;
    display: grid;
    grid-column-gap: 47px;
    grid-template-columns: 169px 1fr;
    padding-bottom: 82px;
`;

export const DashboardContent = styled.div``;

export const Menu = styled.div`
    display: grid;
    padding-top: 35px;
    grid-row-gap: 15px;
    grid-auto-rows: min-content;
`;

export const Icon = styled.div`
    border-radius: 50%;
    width: 36px;
    height: 36px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuItem = styled.div<{ active?: boolean }>`
    --color: var(--grey);
    color: var(--color);
    font-size: 13px;
    cursor: pointer;
    display: grid;
    grid-template-columns: 36px 1fr;
    grid-column-gap: 18px;
    align-items: center;

    ${({ active }) =>
        active &&
        `
        color: var(--secondary);
        
        ${Icon} {
            background-color: var(--primary);
            
            svg path {
                fill: var(--black) !important;
            }
        }
    `}

    &:hover {
        --color: var(--secondary);

        ${Icon} {
            background-color: var(--primary);

            svg path {
                fill: var(--black);
            }
        }
    }

    ${Icon} {
        transition: all 0.3s ease;
        svg path {
            fill: var(--color);
            transition: all 0.3s ease;
        }
    }
`;

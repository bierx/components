import styled from "styled-components";

export const ScrollableList = styled.div`
    white-space: nowrap;
    padding-top: 20px;
    margin-top: -10px;
    margin-left: -20px;
    padding-left: 20px;
    padding-bottom: 44px;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }

    > div,
    a {
        display: inline-block;
        margin-right: 20px;
        vertical-align: top;
    }
`;

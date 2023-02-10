import React, { FC } from "react";
import styled from "styled-components";
import { SIZE } from "../typography/typography.types";

type DynamicComponentProps = {
    tag?: string;
    size: SIZE;
    children: React.ReactNode;
};

const StyledDynamicComponent = styled.div``;

export const DynamicComponent: FC<DynamicComponentProps> = ({
    size = SIZE.DIV,
    children,
    ...props
}) => {
    const WithComponent = StyledDynamicComponent.withComponent(size);

    return <WithComponent {...props}>{children}</WithComponent>;
};

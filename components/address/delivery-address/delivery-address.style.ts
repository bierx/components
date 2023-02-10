import styled from "styled-components";
import {
    AddressForm,
    FormActions,
    Name,
} from "@components/address/address.style";

import { Typography } from "@components/typography/typography.style";

export const PickupAddress = styled.div`
    ${FormActions}:not(:empty) {
        margin-top: 24px;
    }

    ${Name} {
        align-self: center;
    }

    ${AddressForm} {
        margin-top: 0;
    }

    > ${AddressForm} {
        margin-top: 20px;
    }

    ${Typography} + ${AddressForm} {
        margin-top: 24px;
    }
`;

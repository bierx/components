import { FC } from "react";

import { Address } from "@components/address";
import * as S from "./delivery-address.style";
import { IProps } from "@components/address/address.types";
import {
    useGetProfileAddressesQuery,
    useSetDefaultProfileAddressMutation,
    useDeleteProfileAddressMutation,
    useAddProfileAddressesMutation,
} from "@/redux/services/user-api";
import { useAppSelector } from "@redux/store";
import { Address as AddressPayload } from "@/redux/slices/user";

export const DeliveryAddress: FC<Partial<IProps>> = ({
    onChange,
    ...props
}) => {
    useGetProfileAddressesQuery(null);
    const addresses = useAppSelector(({ user }) => user.addresses);
    const [deleteProfileAddress] = useDeleteProfileAddressMutation();
    const [setDefaultProfileAddress] = useSetDefaultProfileAddressMutation();
    const [addProfileAddresses] = useAddProfileAddressesMutation();

    const addNew = async (data: AddressPayload, isDefault) => {
        const restData = {
            phone_prefix: "+48",
            region_iso: "pk",
            isDefault,
        };

        return await addProfileAddresses({
            ...data,
            ...restData,
        });
    };

    const setDefault = (addressId: string) => {
        setDefaultProfileAddress({ addressId });
    };

    const deleteAddress = (addressId: string) => {
        deleteProfileAddress({ addressId });
    };

    return (
        <S.PickupAddress>
            <Address
                data={addresses}
                onChange={onChange}
                setDefault={setDefault}
                deleteAddress={deleteAddress}
                addNew={addNew}
                {...props}
            />
        </S.PickupAddress>
    );
};

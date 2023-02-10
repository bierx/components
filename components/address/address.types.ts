import { Address } from "@redux/slices/user";

export interface IProps {
    showHeader?: boolean;
    open?: boolean;
    onChange?: (id: string) => void;
    addNew?: (data: Address, isDefault?: boolean) => Promise<any>;
    setDefault?: (id: string) => void;
    deleteAddress?: (id: string) => void;
    data?: Address[];
    error?: string;
}

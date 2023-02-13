import { CountriesData, Country } from "@/redux/services/types";
import { Address } from "@redux/slices/user";

export interface OptionsWithData extends Options {
    data?: any;
}

interface Data {
    [x: string]: string;
}

export const formatRegions = (data?: Country): OptionsWithData[] => {
    if (!data) {
        return [];
    }

    return Object.values(data.regions || {}).map(({ isoCode, name }) => ({
        id: isoCode,
        name,
    }));
};

export const formatCountries = (data?: CountriesData): OptionsWithData[] => {
    if (!data) {
        return [];
    }

    return Object.keys(data.countries).map((key: string) => {
        const country = data.countries[key];

        return {
            id: key,
            name: country.nativeName,
            data: country,
        };
    });
};

export const createOptions = (data?: Data[], key = "name"): Options[] => {
    if (!data) {
        return [];
    }

    return data.map((item) => ({ id: item.id, name: item[key] }));
};

export const sortByDefault = (data: {
    profileAddresses: Address[];
}): Address[] => {
    const profileAddresses = [...data.profileAddresses] as Address[];
    const addresses = [];

    for (const [i, address] of profileAddresses.entries()) {
        if (address.default) {
            addresses.unshift(address);
            profileAddresses.splice(i, 1);
            break;
        }
    }

    return [...addresses, ...profileAddresses];
};

export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const isToday = (date: Date) => {
    const today = new Date();

    if (today.toDateString() === date.toDateString()) {
        return true;
    }

    return false;
};

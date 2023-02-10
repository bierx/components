import React, { FC, useState } from "react";
import NextLink from "next/link";
import { Search as SearchIcon } from "@/components/icons";
import { Location as LocationIcon } from "@/components/icons";
import { Button } from "@/components/button";
import { SearchInput, SearchWrapper } from "@/styles/globalStyles";

import { useAppSelector } from "@/redux/store";
import { useGetCountryQuery } from "@/redux/services/api";
import useTranslation from "next-translate/useTranslation";

import * as S from "./search.style";

const RESULTS = [
    {
        label: "Fotel prosto z PRL",
        category: "Meble",
        categoryId: "cat1",
        url: "/",
    },
    {
        label: "Fotel prosto z PRL",
        category: "Wyposażenie",
        categoryId: "cat2",
        url: "/",
    },
    {
        label: "Fotel prosto z PRL",
        category: "Elektonika",
        categoryId: "cat3",
        url: "/",
    },
    {
        label: "Fotel prosto z PRL",
        category: "Oświetlenie",
        categoryId: "cat4",
        url: "/",
    },
    {
        label: "Fotel prosto z PRL",
        category: "Sprzęt",
        categoryId: "cat5",
        url: "/",
    },
];

export const Search: FC = () => {
    useGetCountryQuery("pl");
    const { t } = useTranslation("common");
    const [searchInput, setSearchInput] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const regions = useAppSelector(({ auth }) => auth.country);

    return (
        <SearchWrapper>
            <S.Search active={searchInput.length > 3}>
                <SearchIcon />
                <SearchInput
                    onChange={handleInputChange}
                    placeholder={t("searchPlaceholder")}
                />
                <LocationIcon />
                <S.Localization
                    options={regions}
                    multiple
                    label={t("localizationLabel")}
                    searchPlaceholder={t("locationSearchPlaceholder")}
                    searchLabel={t("locationSearchLabel")}
                />
                {searchInput.length > 3 && (
                    <S.SearchResults>
                        {RESULTS.map(({ label, category, categoryId, url }) => (
                            <S.SearchResultsLabel key={categoryId}>
                                <NextLink href={url}>{label}</NextLink>
                                <S.LabelCategory>
                                    {t("inCategory")}{" "}
                                    <NextLink href={url} passHref>
                                        <S.Badge color={categoryId}>
                                            {category}
                                        </S.Badge>
                                    </NextLink>
                                </S.LabelCategory>
                            </S.SearchResultsLabel>
                        ))}
                    </S.SearchResults>
                )}
            </S.Search>
            <Button variant="outlined" size="tiny">
                {t("search")}
            </Button>
        </SearchWrapper>
    );
};

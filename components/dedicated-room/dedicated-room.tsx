import { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import { Typography } from "@/components/typography";
import { URLS } from "@/constants/urls";

import * as S from "./dedicated-room.style";
import { useGetDedicatedRoomsQuery } from "@redux/services/product-api";
import { ShowMore } from "@components/show-more";

export const DedicatedRoom: FC = () => {
    const { t } = useTranslation("dedicated-rooms");
    const { data } = useGetDedicatedRoomsQuery(null);

    if (!data || !data.dedicatedRooms) {
        return null;
    }

    return (
        <>
            <Typography size="h4">{t("header")}</Typography>
            <S.Categories>
                {data.dedicatedRooms.map(({ id, room }) => (
                    <Link key={id} href={`${URLS.DEDICATED_ROOM}/${room}`}>
                        <div>
                            <S.Category bg={`/images/${room}.png`}>
                                <S.Label>{t(room)}</S.Label>
                                <S.Divider />
                            </S.Category>
                        </div>
                    </Link>
                ))}
                <ShowMore url={URLS.DEDICATED_ROOM} />
            </S.Categories>
        </>
    );
};

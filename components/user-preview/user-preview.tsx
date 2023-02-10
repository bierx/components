import { FC } from "react";
import UserOutlined from "@components/icons/user-outlined";
import Image from "next/image";
import { usePreviewQuery } from "@redux/services/user-api";

import * as S from "./user-preview.style";

export const UserPreview: FC<{
    userId: string;
    withName?: boolean;
}> = ({ userId }) => {
    const { data } = usePreviewQuery({ userId });
    const avatar = data?.avatar;
    return (
        <>
            {avatar ? (
                <Image width={20} height={20} src={avatar} />
            ) : (
                <UserOutlined size={20} />
            )}
            withName && <S.NickName>{data.nick_name}</S.NickName>
        </>
    );
};

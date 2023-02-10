import React, { FC, useMemo } from "react";

import * as S from "./breadcrumbs.style";
import { useRouter } from "next/router";
import { generatePathParts } from "./breadcrumbs.utils";
import { Crumb } from "./crumb";
import { URLS } from "@/constants/urls";

interface BreadCrumbsProps {
    className?: string;
}

export const Breadcrumbs: FC<BreadCrumbsProps> = ({ className }) => {
    const router = useRouter();
    const breadcrumbs = useMemo(
        function generateBreadcrumbs() {
            const asPathNestedRoutes = generatePathParts(router.asPath);

            const crumbList = asPathNestedRoutes.map(
                (subPath: string, index: number) => {
                    const href =
                        "/" + asPathNestedRoutes.slice(0, index + 1).join("/");
                    return {
                        href,
                        text: subPath?.toLowerCase(),
                    };
                },
            );

            if (router.route === URLS.FOUR_OH_FOUR) {
                return [
                    { href: "/", text: "homePage" },
                    { text: "fourOhFourPage" },
                ];
            }

            return [{ href: "/", text: "homePage" }, ...crumbList];
        },
        [router.asPath, router.pathname, router.query],
    );

    return (
        <S.Breadcrumbs aria-label="breadcrumb" className={className}>
            {breadcrumbs.map((crumb, index) => (
                <Crumb
                    {...crumb}
                    key={index}
                    last={index === breadcrumbs.length - 1}
                />
            ))}
        </S.Breadcrumbs>
    );
};

import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

interface Props {
    days: string | number;
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
    time: string;
}

export const UseCountdown = (date = "") => {
    const { t } = useTranslation("negotiations");
    const [countdownDate, setCountdownDate] = useState(
        new Date(date).getTime() +
            (Number(process.env.NEXT_PUBLIC_CUSTOMER_TIME_TO_BUY) || 0),
    );

    const [state, setState] = useState<Props>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        time: "",
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days: string | number = Math.floor(
                distanceToDate / (1000 * 60 * 60 * 24),
            );
            let hours: string | number = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes: string | number = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds: string | number = Math.floor(
                (distanceToDate % (1000 * 60)) / 1000,
            );

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            const time = `${
                Number(days) > 0 ? `${days}${t("days")}` : ""
            } ${hours}${t("hours")} ${minutes}${t("minutes")} ${seconds} ${t(
                "seconds",
            )}`;

            setState({ days, hours, minutes, seconds, time });
        }
    };

    return state;
};

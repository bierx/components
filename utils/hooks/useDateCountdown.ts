import { useEffect, useState } from 'react';

export const COUNTDOWN_ACCURACY = {
    HOURS: 'hours',
    DAYS: 'days'
};
export type COUNTDOWN_ACCURACY = typeof COUNTDOWN_ACCURACY[keyof typeof COUNTDOWN_ACCURACY];

const getReturnValues = (countdown: number, accuracy: COUNTDOWN_ACCURACY) => {
    if (countdown < 0) {
        return [];
    }
    const result = [];

    if(accuracy === COUNTDOWN_ACCURACY.DAYS) {
        result.push(
            Math.floor(countdown / 86400), //days
            Math.floor((countdown % 86400) / 3600) //hours
        );
    } else {
        result.push(
            Math.floor(countdown / 3600) //hours
        );
    }

    result.push(
        Math.floor((countdown % 3600) / 60), //minutes
        Math.floor(countdown % 60) //seconds
    );

    return result;
};

const getDiff = (datetime: number) => Math.floor((datetime - Date.now()) / 1000);

const useDateCountdown = (endDate: string | Date, accuracy = COUNTDOWN_ACCURACY.HOURS) => {
    const endDatetime = new Date(endDate).getTime();
    const [ countdown, setCountdown ] = useState(getDiff(endDatetime));

    useEffect(() => {
        const id = Number(setInterval(() => {
            if (getDiff(endDatetime) < 0) {
                clearInterval(id);
            }

            setCountdown(getDiff(endDatetime));
        }, 950));

        return () => {
            clearInterval(id);
        };
    }, [ endDate ]);

    return getReturnValues(countdown, accuracy);
};

export { useDateCountdown };

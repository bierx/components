import React, { useMemo } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { COUNTDOWN_ACCURACY, useDateCountdown } from './useDateCountdown';

export default {
    title: 'Utils/Hooks',
} as Meta;


// @ts-ignore
interface TemplateProps {

}

function getNearDate(minutes) {
    const now = new Date();

    return new Date(now.setMinutes(now.getMinutes() + minutes));
}

function getFutureDate(hours) {
    const now = new Date();

    return new Date(now.setHours(now.getHours() + hours));
}

function CountdownTest(props) {
    const past = useDateCountdown('2022-04-13T07:42:39.851Z');
    const near = useDateCountdown(useMemo(() => getNearDate(props.minutes), [ props.minutes ]));
    const future = useDateCountdown(useMemo(() => getFutureDate(props.hours), [ props.hours ]));
    const futureDays = useDateCountdown(useMemo(() => getFutureDate(props.hours), [ props.hours ]), COUNTDOWN_ACCURACY.DAYS);

    return <div>
        <p>
            Past:{' '}
            {past.length ? past.map((value) => value.toString().padStart(2, '0')).join(' : ') : JSON.stringify(past)}

        </p>
        <p>
            Near:{' '}
            {near.length ? near.map((value) => value.toString().padStart(2, '0')).join(' : ') : JSON.stringify(near)}
        </p>
        <p>
            Future:{' '}
            {future.length ? future.map((value) => value.toString().padStart(2, '0')).join(' : ') : JSON.stringify(future)}
        </p>
        <p>
            Future with days:{' '}
            {futureDays.length ? futureDays.map((value) => value.toString().padStart(2, '0')).join(' : ') : JSON.stringify(future)}
        </p>
    </div>;
}

const Template: Story<TemplateProps> = ({ ...args }) =>
    <>
        <CountdownTest {...args} />
    </>;

export const Countdown = Template.bind({});
Countdown.args = {
    minutes: 1,
    hours: 48
};
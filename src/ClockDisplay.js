import React from 'react';
import useTimeParser from "./hooks/useTimeParser";

function ClockDisplay({time, classname}) {

    const { parseSecondsToHms } = useTimeParser();

    return (
        <span className={classname}>
            {
                parseSecondsToHms(time)
            }
        </span>
    );
}

export default ClockDisplay;
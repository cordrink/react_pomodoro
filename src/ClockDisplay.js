import React from 'react';
import useTimeParser from "./hooks/useTimeParser";

function ClockDisplay({time, classname}) {

    let { parseSecondsToHms } = useTimeParser();


    return (
        <span className={classname}>
            {
                parseSecondsToHms(time)
            }
        </span>
    );
}

export default ClockDisplay;
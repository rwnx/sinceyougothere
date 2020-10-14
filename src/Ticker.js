import React, {useState} from 'react';
import {Ticker as NumberTicker} from "react-flip-ticker";
import VizSensor from 'react-visibility-sensor';

function prettify(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
    
}

function getTooltip(timer) {
    return `${timer.value}${" " + (timer.unit || "")}/${timer.timeUnit}`;
}
const UPDATE_TIMEOUT_BASE = 1000;
const UPDATE_TIMEOUT_STAGGER = 500;

/**
 * An automatically updating ticker value, generated from a timer element
 */
export function Ticker({timer, target}) {
    const stagger = Math.random()*UPDATE_TIMEOUT_STAGGER;
    const [dateKey, setDateKey] = useState(0);
    const [visible, setVisibility] = useState(true);
    window.setTimeout(
        () => {
            if(visible) { setDateKey(dateKey + 1) };
        },
        UPDATE_TIMEOUT_BASE+stagger
    );
    
    const rawValue = timer.unitsUntil(target);
    // ceil when values are >10, use an int (ceil) otherwise use 2sf, since it looks nicer
    const value = prettify( rawValue > 10 ? Math.ceil(rawValue) : rawValue.toPrecision(2) );
    return ( 
        <div className={`ticker ${timer.isNsfw ? "ticker--nsfw" : ""}`}>
            <div title={getTooltip(timer)} className="ticker__name">
               {timer.src ? <a className="timer__src" href={timer.src}>{timer.name}</a> : timer.name} 
            </div>
            <div className="ticker__value_container">
                <VizSensor onChange={(isVisible) => { setVisibility(isVisible)}}>
                    <div className="ticker__value">
                        <NumberTicker>
                            {value}
                        </NumberTicker>
                    </div>
                </VizSensor>
                <div className="ticker__unit">{timer.unit}</div>
            </div>
        </div>
    )
}
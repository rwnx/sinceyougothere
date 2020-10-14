import React, {useState} from 'react';

function prettify(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
    
}

/**
 * An automatically updating ticker value, generated from a timer element
 */
export function Ticker({timer, target}) {
    const [dateKey, setDateKey] = useState(0);
    window.setTimeout(() => setDateKey(dateKey + 1), 200);
    
    const rawValue = timer.unitsUntil(target);
    // ceil when values are >10, use an int (ceil) otherwise use 2sf, since it looks nicer
    const value = prettify( rawValue > 10 ? Math.ceil(rawValue) : rawValue.toPrecision(2) );
    return ( 
        <div className={`ticker ${timer.isNsfw ? "ticker--nsfw" : ""}`}>
            <div className="ticker__name">{timer.name}</div>
            <div className="ticker__value">{value}</div>
            <div className="ticker__unit">{timer.unit}</div>
        </div>
    )
}
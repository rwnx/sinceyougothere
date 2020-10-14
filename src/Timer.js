import {v4} from "uuid";

export class Timer {
    static getRateFactor(per) {
        switch(per) {
            case "millisecond":
                return 1;
            case "second":
                return 1000;
            case "minute":
                return 60000;
            case "hour":
                return 3600000;
            case "day":
                return 86400000;
            case "month":
                return 2592000000;
            case "year":
                return 31536000000;
            default:
                throw new Error("unknown rate unit");
        }
    }
    source(src) {
        this.src = src;
        return this;
    }
    per(per) {
        this.rate = Timer.getRateFactor(per);
        return this;
    }
    nsfw() {
        this.isNsfw = true;
        return this;
    }
    
    unitsUntil(target) {
        const now = +new Date();
        const delta_ms = now - target;
        
        const until = ((delta_ms * this.value) / this.rate);
        
        return until ? until : 0;
    }
    
    constructor(name, value = 1, unit) {
        this.name = name;
        this.value = value;
        this.unit = unit;
        this.isNsfw = false;
        this.id = v4();
    }
}
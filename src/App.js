/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState} from 'react';
import {Timer} from "./Timer";
import {Ticker} from "./Ticker";
import './App.css';

import packageJson from '../package.json';


const TIMERS = [
    new Timer("Seconds ⌚").per("second"),
    new Timer("Minutes ⌚").per("minute"),
    new Timer("Hours ⌚").per("hour"),
    new Timer("Days 📆").per("day"),
    new Timer("Minimum Wage Pay 💰", 6.71, "GBP").per("hour"),
    new Timer("Galactic Years 🌌", 4e-9).per("year"),
    new Timer("Global Births 👶", 131400000).per("year"),
    new Timer("Global Deaths 💀", 55300000).per("year").nsfw(),
    new Timer("Olympic Swimming Pools full of human Skulls 🏊‍♂️", 134.643334).per("year").nsfw(),
    new Timer("Avg. Human Lifetime 💯", 1.219512195, "%").per("year"),
    new Timer("Rainforest Destroyed 🌴", 1.55000, "sq. mi").per("year"),
    new Timer("Tons of CO₂ Released 🌍", 38200000000).per("year"),
    new Timer("Apple's Global Revenue 🍏", 163200000000, "GBP").per("year"),
    new Timer("Miles driven @ 70mph 🚗", 70, "mi").per("hour"),
    new Timer("Drives to the moon 🌝", 0.00029306451).per("hour"),
    new Timer("Blood Pumped @ 60bpm 🩸", 4.2, "litres").per("minute"),
    new Timer("Earth Rotation 🌐", 1674.4, "km").per("hour").source("https://books.google.co.uk/books?id=w8PK2XFLLH8C&pg=PA244&redir_esc=y#v=onepage&q&f=false"),
    new Timer("Earth Orbits 🚀", 940000000, "km").per("year"),
    new Timer("Tweets 🐦", 500000000).per("day").source("https://blog.twitter.com/engineering/en_us/a/2013/new-tweets-per-second-record-and-how.html"),
    new Timer("Internet Traffic 👩‍💻", 34068, "GB").per("second"),
    new Timer("Google Searches 🔎", 53640).per("second"),
    new Timer("Global Emails 💌", 2479545, "emails").per("second"),
    new Timer("Poop 💩", 430.9128, "g").per("day").nsfw(),
    new Timer("Urine 🚽", 1600, "ml").per("day").nsfw(),
    new Timer("Semen 💦", 63645.3, "ml").per("year").nsfw(),
    new Timer("Miles walked by the Proclaimers if they were to complete their task in one day 🎸", 1000, "mi").per("day"),
    new Timer("Vending Machine Deaths 🥛", 10, "💀").per("year").nsfw(),
    new Timer("Individual UK energy use ⚡", 2089, "MW").per("hour"),
    new Timer("Individual UK energy use ⚡", 81291, "Pork Pies").per("hour"),
    new Timer("Oil Pumped 🛢", 930000000, "barrels").per("day"),
    new Timer("Cars Produced 🚘", 960000000).per("year"),
    new Timer("Cow Farts 🐄💨", 30, "balloons").per("day"),
    new Timer("Bullets Manufactured 🔫", 12000000000).per("year"),
    new Timer("Deaths Choking on ballpoint pens 🖊", 100, "💀").per("year").nsfw(),
    new Timer("Miles driven by average person", 13476, "mi").per("year").source("https://www.fhwa.dot.gov/ohim/onh00/bar8.htm"),
    new Timer("Percentage Use of your next flat tire @ 70mph", 0.0672, "%").per("day"),
    new Timer("Flat Tires (US)", 220000000, "tyres").per("year").source("http://excelmathmike.blogspot.com/2011/04/phooey-on-flats-part-i.html")
];


function App() {
    const [target, setTarget] = useState(+new Date());
    const [showNsfw, setShowNsfw] = useState(false);
    
    return (
        <div className="container">
          <div className="header">
            <h1>Since you arrived <sup><code>v{packageJson.version}</code></sup></h1>
            <p>From the moment you got here, things have been happening. Take a look!</p>
          </div>
          <div className="content">
            <div className="controls">
              <div>
                You arrived at: 
              <code className="controls__date">{new Date(target).toISOString()}</code>
              </div>
              <div>
                <button onClick={() => setTarget(+new Date())}>❎ Reset</button>
                <button onClick={(e) =>setShowNsfw(!showNsfw)}>{showNsfw ? "❌ Hide" : "🔞 Show"} NSFW</button>
              </div>
            </div>

            <div className="tickers">
              {TIMERS.filter((t) => t.isNsfw ? showNsfw : true).map(t => <Ticker key={t.id} timer={t} target={target} />)}
            </div>
          </div>
          <div className="footer">
            Got something to add? Send us a PR! <a href="https://github.com/jerometwell/sinceyougothere">GitHub</a>
          </div>
        </div>
    )
}


export default App;

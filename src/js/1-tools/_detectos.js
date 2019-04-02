import { detect } from 'detect-browser';

const detectOS = () => {

    let OSName = 'other';

    if (navigator.appVersion.indexOf("X11") !== -1) OSName = "unix";
    if (navigator.appVersion.indexOf("Linux") !== -1) OSName = "linux";
    if (navigator.appVersion.indexOf("Win") !== -1) OSName = "windows";
    if (navigator.appVersion.indexOf("Mac") !== -1) OSName = "mac";
    if (navigator.appVersion.indexOf("iPhone") !== -1) OSName = "iphone";
    if (navigator.appVersion.indexOf("Android") !== -1) OSName = "android";

    document.body.classList.add(OSName);

};

const detectBrowser = () => {

    let browser = detect();
    let browseName = 'other';

    if (browser && browser.name) browseName = browser.name;

    document.body.classList.add(browseName);

};

detectOS();
detectBrowser();

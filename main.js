// ==UserScript==
// @name         Remove Fundraising Banner on Wikipedia
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the fundraising banner and its children on Wikipedia.
// @author       James
// @match        https://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const removeFundraisingBanner = () => {
        const elements = document.querySelectorAll('[id*="fundraising"], [class*="fundraising"], [name*="fundraising"]');
        elements.forEach(element => {
            element.remove();
        });
    };

    window.addEventListener('load', removeFundraisingBanner);

    const observer = new MutationObserver(removeFundraisingBanner);
    observer.observe(document.body, { childList: true, subtree: true });
})();

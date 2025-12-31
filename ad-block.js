// ==UserScript==
// @name         Dumbify’s Ad Blocker Script
// @namespace    https://github.com/Ensif-Dev/
// @version      1.0.14
// @description  Removes common ad elements from web pages.
// @author
// @license      CC BY 4.0; https://creativecommons.org/licenses/by/4.0/
// @homepageURL  https://dumbify.com/blog/ad-blockers-are-going-away-surviving-manifest-v3
// @supportURL   https://github.com/Ensif-Dev/Block-Ads-With-Tampermonkey/issues
// @updateURL    https://raw.githubusercontent.com/Ensif-Dev/Block-Ads-With-Tampermonkey/main/ad-block.js
// @downloadURL  https://raw.githubusercontent.com/Ensif-Dev/Block-Ads-With-Tampermonkey/main/ad-block.js
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function () {
  'use strict';

  const adSelectors = [
    '.advertisement',
    '.ad-container',
    '.sponsored-content',
    '[class*="advertisement"]',
    '.google-ad',
    '.dfp-ad',
    '#st-ad',
    '.bordeaux-slot',
    'iframe[name*="seedtag_creative"]',
    '[class*="promotedlink"]',
    'a[href*="adclick"]',
    'a[href*="pubads"]',
    'a[href*="doubleclick.net"]',
    '[aria-label*="Advertisement"]',
    '[class*="pgQSsticky"]',
    '[id*="google_ads_iframe"]',
    '[id*="AdThrive"]',
    '[class*="lazyad"]',
    '[class*="adthrive-player"]',
    '[class*="adthrive-ad"]',
    '[title*="Advertisement"]',
    '[data-google-query-id]',
    '[id*="infinite-ad"]',
    '[id*="mm-ads-leaderboard"]',
    '[class*="adhesion_wrapper"]',
    '[class*="mv-ad-box"]',
  ];

  function removeAds() {
    adSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.style.setProperty('display', 'none', 'important');
      });
    });
  }

  // Initial removal
  removeAds();

  // Check every one and a half seconds for new ads
  setInterval(removeAds, 1500);
})();

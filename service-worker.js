/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [
    ["bower_components/app-route/app-location.html", "52b3d8b5ecbb838b41bd9bd0ae556cca"],
    ["bower_components/app-route/app-route-converter-behavior.html", "0e5b36ae9988a88bb30729fdb99a5d94"],
    ["bower_components/app-route/app-route.html", "624ca199d36389f3db04597a593548ec"],
    ["bower_components/font-roboto/roboto.html", "09500fd5adfad056ff5aa05e2aae0ec5"],
    ["bower_components/geo-location/geo-location.html", "1dc01358890e4a40fafad2eae25c9670"],
    ["bower_components/iron-a11y-announcer/iron-a11y-announcer.html", "a3bd031e39dde38cb8e619f670ee50f7"],
    ["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html", "b9a8e766d0ab03a5d13e275754ec3d54"],
    ["bower_components/iron-ajax/iron-ajax.html", "d606b330d7bd040660a53a5cda7f8acf"],
    ["bower_components/iron-ajax/iron-request.html", "c2d289c4b20653353cff315cf247a45e"],
    ["bower_components/iron-behaviors/iron-button-state.html", "6565a80d1af09299c1201f8286849c3b"],
    ["bower_components/iron-behaviors/iron-control-state.html", "1c12ee539b1dbbd0957ae26b3549cc13"],
    ["bower_components/iron-flex-layout/iron-flex-layout-classes.html", "90471c0acb830c41b01e02a2507bed3c"],
    ["bower_components/iron-flex-layout/iron-flex-layout.html", "3987521c615734e4fe403f9acecfea54"],
    ["bower_components/iron-icon/iron-icon.html", "5da6bac1d18d267691395cdc75820761"],
    ["bower_components/iron-iconset-svg/iron-iconset-svg.html", "8fb45b1b4668dae069f5efb5004c2af4"],
    ["bower_components/iron-image/iron-image.html", "72175f3ce2bc8e6bf3436ab8749b470e"],
    ["bower_components/iron-input/iron-input.html", "3e393eda6c241be2817ce0acc512bcf6"],
    ["bower_components/iron-location/iron-location.html", "b999e8754a2e8fdde266884e47cefa04"],
    ["bower_components/iron-location/iron-query-params.html", "065a00285a46f8483c74e363945499c9"],
    ["bower_components/iron-media-query/iron-media-query.html", "7436f9608ebd2d31e4b346921651f84b"],
    ["bower_components/iron-menu-behavior/iron-menu-behavior.html", "ebd9e4f4121fe7691f20f0656cb24e5d"],
    ["bower_components/iron-menu-behavior/iron-menubar-behavior.html", "a0cc6674fc6d9d7ba0b68ff680b4e56b"],
    ["bower_components/iron-meta/iron-meta.html", "dd4ef14e09c5771e70292d70963f6718"],
    ["bower_components/iron-resizable-behavior/iron-resizable-behavior.html", "e93449ccd4312e4e30060c87bd52ed25"],
    ["bower_components/iron-selector/iron-multi-selectable.html", "46d6620acd7bad986d81097d9ca91692"],
    ["bower_components/iron-selector/iron-selectable.html", "65b04f3f5f1b551d91a82b36f916f6b6"],
    ["bower_components/iron-selector/iron-selection.html", "83545b7d1eae4020594969e6b9790b65"],
    ["bower_components/iron-selector/iron-selector.html", "4d2657550768bec0788eba5190cddc66"],
    ["bower_components/iron-validatable-behavior/iron-validatable-behavior.html", "02bf0434cc1a0d09e18413dea91dcea1"],
    ["bower_components/moment-js/moment-import.html", "98829c155df5231fda830977c1cf7b66"],
    ["bower_components/moment-js/moment-js.html", "bc01534e7f14dc60f2834f18bd9d3a57"],
    ["bower_components/moment/min/moment.min.js", "9f556edfb6f51d57807c6ff4e07d4d78"],
    ["bower_components/neon-animation/animations/cascaded-animation.html", "3a5a8c22afe014a904557b66938c44ba"],
    ["bower_components/neon-animation/animations/fade-in-animation.html", "b814c818dbcffe2bb50563e1406497df"],
    ["bower_components/neon-animation/animations/fade-out-animation.html", "44988226230af0e6d92f0988fc8688e2"],
    ["bower_components/neon-animation/animations/hero-animation.html", "4feaf331f46d411ce9ad465da1dbb65e"],
    ["bower_components/neon-animation/animations/opaque-animation.html", "8e2f63bbc648796f3ed96834a5553d07"],
    ["bower_components/neon-animation/animations/reverse-ripple-animation.html", "1e08f758cb172f8fb19fabffc163a180"],
    ["bower_components/neon-animation/animations/ripple-animation.html", "4d33252f387c84d0702efaaf510990b0"],
    ["bower_components/neon-animation/animations/scale-down-animation.html", "e9cedffa151b388200cb2a610b2252fc"],
    ["bower_components/neon-animation/animations/scale-up-animation.html", "20059304b9b7e9377379ad75110ef2fc"],
    ["bower_components/neon-animation/animations/slide-down-animation.html", "31286bfe0b2cb6f28ef5e1f9d181f641"],
    ["bower_components/neon-animation/animations/slide-from-bottom-animation.html", "12eea18013bf5b89c642fde725469a62"],
    ["bower_components/neon-animation/animations/slide-from-left-animation.html", "cb18058340412077b0b0a8a7228a79a6"],
    ["bower_components/neon-animation/animations/slide-from-right-animation.html", "79f28e3d4580cef016e6ae8c63384e98"],
    ["bower_components/neon-animation/animations/slide-from-top-animation.html", "565391366846573f1725585d15b9baad"],
    ["bower_components/neon-animation/animations/slide-left-animation.html", "a44c677c010daf7872b77f53bcd86e58"],
    ["bower_components/neon-animation/animations/slide-right-animation.html", "b9908b67414ba0dfc7442eb1207d05fc"],
    ["bower_components/neon-animation/animations/slide-up-animation.html", "bee63970c6ffc2706419533c9b2bd65e"],
    ["bower_components/neon-animation/animations/transform-animation.html", "c64feaff2d50eb6f6633c644063c6aa3"],
    ["bower_components/neon-animation/neon-animatable-behavior.html", "270f52231303cae4cb8e3fadb5a805c1"],
    ["bower_components/neon-animation/neon-animated-pages.html", "8bb61cb8467f755163cec87e954425fc"],
    ["bower_components/neon-animation/neon-animation-behavior.html", "eb1cdd9cd9d780a811fd25e882ba1f8e"],
    ["bower_components/neon-animation/neon-animation-runner-behavior.html", "782cac67e6cb5661d36fb32d9129ff03"],
    ["bower_components/neon-animation/neon-animations.html", "3b6524b3cc95f27b4b6d7821a7097137"],
    ["bower_components/neon-animation/neon-shared-element-animation-behavior.html", "59b343c52eef4ff93901a3cba99577d6"],
    ["bower_components/neon-animation/web-animations.html", "b310811179297697d51eac3659df7776"],
    ["bower_components/paper-behaviors/paper-button-behavior.html", "edddd3f97cf3ea944f3a48b4154939e8"],
    ["bower_components/paper-behaviors/paper-inky-focus-behavior.html", "51a1c5ccd2aae4c1a0258680dcb3e1ea"],
    ["bower_components/paper-behaviors/paper-ripple-behavior.html", "b6ee8dd59ffb46ca57e81311abd2eca0"],
    ["bower_components/paper-button/paper-button.html", "3f061a077ee938fac479622156071296"],
    ["bower_components/paper-card/paper-card.html", "c057c1a99e521f817eab9af733ce2471"],
    ["bower_components/paper-drawer-panel/paper-drawer-panel.html", "b897a21291bab89dff00486eb4cc44f6"],
    ["bower_components/paper-header-panel/paper-header-panel.html", "b883923e580ff87f152f354358fc324b"],
    ["bower_components/paper-icon-button/paper-icon-button.html", "2a75de00f858ae1e894ab21344464787"],
    ["bower_components/paper-input/paper-input-container.html", "e3c61b8a6e35b134c99c09381ef48067"],
    ["bower_components/paper-material/paper-material-shared-styles.html", "d0eeeb696e55702f3a38ef1ad0058f59"],
    ["bower_components/paper-material/paper-material.html", "47301784c93c3d9989abfbab68ec9859"],
    ["bower_components/paper-ripple/paper-ripple.html", "e22bc21b61184cb28125d16f9d80fb59"],
    ["bower_components/paper-spinner/paper-spinner-behavior.html", "82e814c4460e8803f6f57cc457658adf"],
    ["bower_components/paper-spinner/paper-spinner-styles.html", "a2122d2c0f3ac98e6911160d8886d31a"],
    ["bower_components/paper-spinner/paper-spinner.html", "940e64bbde54dad918d0f5c0e247a8bd"],
    ["bower_components/paper-styles/color.html", "430305db311431da78c0a6e1236f9ebe"],
    ["bower_components/paper-styles/default-theme.html", "c910188e898624eb890898418de20ee0"],
    ["bower_components/paper-styles/shadow.html", "7fd97f2613eb356e1bb901e37c3e8980"],
    ["bower_components/paper-styles/typography.html", "bdd7f31bb85f116ce97061c4135b74c9"],
    ["bower_components/paper-tabs/paper-tab.html", "395fdc6be051eb7218b1c77a94eff726"],
    ["bower_components/paper-tabs/paper-tabs-icons.html", "9fb57777c667562392afe684d85ddbe2"],
    ["bower_components/paper-tabs/paper-tabs.html", "2bf908cedd6ff6e67c18dbf337787bcc"],
    ["bower_components/paper-toolbar/paper-toolbar.html", "ff99e4e6d522685e7e4d04f290e8ac9b"],
    ["bower_components/polymer/polymer-micro.html", "7739e37db5581472b91925e5fa9bde55"],
    ["bower_components/polymer/polymer-mini.html", "9e9dfb157eae29a59c98343288d4d120"],
    ["bower_components/polymer/polymer.html", "2dce719d53b7ea549067d3d21a2b2c29"],
    ["bower_components/promise-polyfill/Promise.js", "5afb14fd81497aca81bf25929d65b02d"],
    ["bower_components/promise-polyfill/promise-polyfill-lite.html", "06470312beff013fc54695e0bdda2cb3"],
    ["bower_components/web-animations-js/web-animations-next-lite.min.js", "04197e2ccec914fa460eef2ac140c853"],
    ["images/bg.png", "8f0775729bc16b43842cc66f8e14f409"],
    ["images/favicon.ico", "82b34d0faee76b89a9f946763428f668"],
    ["images/manifest/icon-144x144.png", "3b339262d2ca82c5ad688b2972f35ecb"],
    ["images/manifest/icon-192x192.png", "7b7162f40bf4876a1e5bbf40dc8b1399"],
    ["images/manifest/icon-48x48.png", "d2d1b3be3caa2a4ec382cc7566378168"],
    ["images/manifest/icon-512x512.png", "8abae22f25ae3771d0973ba79d602ef7"],
    ["images/manifest/icon-72x72.png", "9fabe2b23cadf6eba9d6077e7b902f32"],
    ["images/manifest/icon-96x96.png", "5df0be2470b6378e7c116bcf43774292"],
    ["index.html", "5fe73f13a79a2612e19e492d6b3aa012"],
    ["js/skycons.js", "6da3b31969b7e3c5071aa4477b7379b7"],
    ["manifest.json", "0b3fe6de09cc30dd41a496c40b3830b4"],
    ["src/my-app.html", "95e581bbab09512a4e3e326c49dab04f"],
    ["src/my-icons.html", "e53f6077e31009bafdc578afc78f6a85"],
    ["src/sky-icons.html", "dfb624a6ef22f94951636ec53b73f5e3"],
    ["src/view-1.html", "d203b6695935dc448e2b468057709d4a"],
    ["src/view-2.html", "98aba56e5e8e60be90da9c6c4a113302"]
];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var getCacheBustedUrl = function(url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
        'sw-precache=' + param;

    return urlWithCacheBusting.toString();
};

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
        return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var populateCurrentCacheNames = function(precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
        var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
        var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
        currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
        absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
        absoluteUrlToCacheName: absoluteUrlToCacheName,
        currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
};

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
        .split('&') // Split into an array of 'key=value' strings
        .map(function(kv) {
            return kv.split('='); // Split each 'key=value' string into a [key, value] array
        })
        .filter(function(kv) {
            return ignoreUrlParametersMatching.every(function(ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
            });
        })
        .map(function(kv) {
            return kv.join('='); // Join each [key, value] array into a 'key=value' string
        })
        .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
};


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
    return caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.map(function(cacheName) {
                return caches.delete(cacheName);
            })
        );
    });
}

self.addEventListener('install', function(event) {
    event.waitUntil(
        // Take a look at each of the cache names we expect for this version.
        Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
            return caches.open(cacheName).then(function(cache) {
                // Get a list of all the entries in the specific named cache.
                // For caches that are already populated for a given version of a
                // resource, there should be 1 entry.
                return cache.keys().then(function(keys) {
                    // If there are 0 entries, either because this is a brand new version
                    // of a resource or because the install step was interrupted the
                    // last time it ran, then we need to populate the cache.
                    if (keys.length === 0) {
                        // Use the last bit of the cache name, which contains the hash,
                        // as the cache-busting parameter.
                        // See https://github.com/GoogleChrome/sw-precache/issues/100
                        var cacheBustParam = cacheName.split('-').pop();
                        var urlWithCacheBusting = getCacheBustedUrl(
                            CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

                        var request = new Request(urlWithCacheBusting, {
                            credentials: 'same-origin'
                        });
                        return fetch(request).then(function(response) {
                            if (response.ok) {
                                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                                    response);
                            }

                            console.error('Request for %s returned a response status %d, ' +
                                'so not attempting to cache it.',
                                urlWithCacheBusting, response.status);
                            // Get rid of the empty cache if we can't add a successful response to it.
                            return caches.delete(cacheName);
                        });
                    }
                });
            });
        })).then(function() {
            return caches.keys().then(function(allCacheNames) {
                return Promise.all(allCacheNames.filter(function(cacheName) {
                    return cacheName.indexOf(CacheNamePrefix) === 0 &&
                        !(cacheName in CurrentCacheNamesToAbsoluteUrl);
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                }));
            });
        }).then(function() {
            if (typeof self.skipWaiting === 'function') {
                // Force the SW to transition from installing -> active state
                self.skipWaiting();
            }
        })
    );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
    self.addEventListener('activate', function(event) {
        event.waitUntil(self.clients.claim());
    });
}

self.addEventListener('message', function(event) {
    if (event.data.command === 'delete_all') {
        console.log('About to delete all caches...');
        deleteAllCaches().then(function() {
            console.log('Caches deleted.');
            event.ports[0].postMessage({
                error: null
            });
        }).catch(function(error) {
            console.log('Caches not deleted:', error);
            event.ports[0].postMessage({
                error: error
            });
        });
    }
});


self.addEventListener('fetch', function(event) {
    if (event.request.method === 'GET') {
        var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
            IgnoreUrlParametersMatching);

        var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
        var directoryIndex = 'index.html';
        if (!cacheName && directoryIndex) {
            urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
            cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
        }

        var navigateFallback = 'index.html';
        // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
        // supported yet:
        // https://code.google.com/p/chromium/issues/detail?id=540967
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
        if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
            event.request.headers.get('accept').includes('text/html') &&
            /* eslint-disable quotes, comma-spacing */
            isPathWhitelisted([], event.request.url)) {
            /* eslint-enable quotes, comma-spacing */
            var navigateFallbackUrl = new URL(navigateFallback, self.location);
            cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
        }

        if (cacheName) {
            event.respondWith(
                // Rely on the fact that each cache we manage should only have one entry, and return that.
                caches.open(cacheName).then(function(cache) {
                    return cache.keys().then(function(keys) {
                        return cache.match(keys[0]).then(function(response) {
                            if (response) {
                                return response;
                            }
                            // If for some reason the response was deleted from the cache,
                            // raise and exception and fall back to the fetch() triggered in the catch().
                            throw Error('The cache ' + cacheName + ' is empty.');
                        });
                    });
                }).catch(function(e) {
                    console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                    return fetch(event.request);
                })
            );
        }
    }
});

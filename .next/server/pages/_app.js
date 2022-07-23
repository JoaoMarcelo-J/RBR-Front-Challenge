"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/theme/index.ts

const theme = (0,react_.extendTheme)({
    fonts: {
        body: "Rubik, sans-serif",
        heading: "Rubik, sans-serif",
        mono: "Rubik, sans-serif"
    },
    colors: {
        primary: {
            100: "#F5D298",
            200: "#F4CB87",
            300: "#F2C376",
            400: "#F1BC65",
            500: "#EFB454",
            600: "#D7A24C",
            700: "#BF9043",
            800: "#A77E3B",
            900: "#8F6C32"
        }
    },
    components: {
        Button: {
            baseStyle: {
                fontFamily: "Rubik, sans-serif",
                _focus: {
                    outline: "none",
                    boxShadow: "unset"
                }
            }
        },
        a: {
            _hover: {
                texteDecoration: "none"
            }
        }
    },
    breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
        "3xl": "112em"
    }
});
/* harmony default export */ const src_theme = (theme);

// EXTERNAL MODULE: ./src/contexts/ApplicationContext.tsx
var ApplicationContext = __webpack_require__(234);
;// CONCATENATED MODULE: ./src/config/website-data.ts
const baseUrl = "http://localhost:3000";
const websiteData = {
    homeTitle: "Website",
    titleLabel: "Website",
    baseUrl,
    locale: "en_US",
    ogTitle: "Website",
    ogDescription: "Aliqua ad non sit aute occaecat eu. Do exercitation cupidatat tempor eiusmod sit eiusmod aliquip magna incididunt dolor sit ullamco esse quis. Lorem incididunt velit aliquip commodo anim qui qui eiusmod pariatur in irure nisi exercitation.",
    ogDefaultImages: [
        {
            url: baseUrl + "/default-og.webp",
            width: 1920,
            height: 1080,
            alt: "Sunt sint occaecat in laboris consectetur ea id aliquip enim ea cupidatat laboris exercitation occaecat."
        }
    ],
    twitter: {
        summary: "Commodo sunt officia esse sit non mollit laborum commodo aute amet ex magna qui Lorem. Est adipisicing ex mollit labore pariatur excepteur consectetur sint. Ullamco sint irure esse aliquip esse consectetur id sit adipisicing deserunt.",
        site: "Website",
        handle: "@website"
    },
    favicons: [
        {
            rel: "icon",
            href: "/favicon.png",
            sizes: "64x64"
        }
    ]
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx







function Application({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: src_theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ApplicationContext/* ApplicationContextProvider */.B, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
                        titleTemplate: "%s | " + websiteData.titleLabel,
                        defaultTitle: websiteData.homeTitle,
                        openGraph: {
                            type: "website",
                            locale: websiteData.locale,
                            url: websiteData.baseUrl,
                            site_name: websiteData.ogTitle,
                            description: websiteData.ogDescription,
                            images: websiteData.ogDefaultImages
                        },
                        twitter: websiteData.twitter ? {
                            cardType: websiteData.twitter.summary,
                            site: websiteData.twitter.site,
                            handle: websiteData.twitter.handle
                        } : undefined,
                        additionalLinkTags: websiteData.favicons
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const _app = (Application);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [234], () => (__webpack_exec__(4)));
module.exports = __webpack_exports__;

})();
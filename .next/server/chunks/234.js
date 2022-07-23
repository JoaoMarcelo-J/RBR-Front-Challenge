"use strict";
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ApplicationContextProvider),
/* harmony export */   "U": () => (/* binding */ useApplicationContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);



const applicationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const ApplicationContextProvider = ({ children  })=>{
    const isMobileMediaQuery = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({
        query: "(max-width: 1280px)"
    });
    const { 0: isMobile , 1: setIsMobile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const { 0: toggleMenu , 1: handleToggleMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((obj)=>!obj, false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMobile(isMobileMediaQuery);
    }, [
        isMobileMediaQuery
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(applicationContext.Provider, {
        value: {
            isMobile,
            toggleMenu,
            handleToggleMenu
        },
        children: children
    });
};
const useApplicationContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(applicationContext);
    if (context === undefined) {
        throw new Error("useApplicationContext must be used within a ApplicationContextProvider");
    }
    return context;
};


/***/ })

};
;
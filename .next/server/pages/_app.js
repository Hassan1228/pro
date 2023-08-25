/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/CustomCursor.js":
/*!****************************************!*\
  !*** ./src/components/CustomCursor.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst AnimatedCursor = ()=>{\n    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleMouseMove = (e)=>{\n            gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(cursorRef.current, {\n                x: e.clientX,\n                y: e.clientY,\n                duration: 0.2,\n                ease: \"power2.out\"\n            });\n        };\n        document.addEventListener(\"mousemove\", handleMouseMove);\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: cursorRef,\n        className: \"jsx-7fb56c671320fd0f\" + \" \" + \"animated-cursor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7fb56c671320fd0f\" + \" \" + \"dot\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\WORK\\\\MajeticsSoftwareSolution-master\\\\src\\\\components\\\\CustomCursor.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7fb56c671320fd0f\",\n                children: \".animated-cursor.jsx-7fb56c671320fd0f{position:fixed;width:50px;height:50px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;pointer-events:none;z-index:9999;border:3px solid White;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center;opacity:.8}.dot.jsx-7fb56c671320fd0f{width:10px;height:10px;background-color:var(--bg-color-1);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\WORK\\\\MajeticsSoftwareSolution-master\\\\src\\\\components\\\\CustomCursor.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedCursor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b21DdXJzb3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlEO0FBQ3JCO0FBRzVCLE1BQU1JLGNBQWMsR0FBRyxJQUFNO0lBQzNCLE1BQU1DLFNBQVMsR0FBR0gsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFOUJELGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU1LLGVBQWUsR0FBRyxDQUFDQyxDQUFDLEdBQUs7WUFDN0JKLHlDQUFPLENBQUNFLFNBQVMsQ0FBQ0ksT0FBTyxFQUFFO2dCQUN6QkMsQ0FBQyxFQUFFSCxDQUFDLENBQUNJLE9BQU87Z0JBQ1pDLENBQUMsRUFBRUwsQ0FBQyxDQUFDTSxPQUFPO2dCQUNaQyxRQUFRLEVBQUUsR0FBRztnQkFDYkMsSUFBSSxFQUFFLFlBQVk7YUFDbkIsQ0FBQyxDQUFDO1NBQ0o7UUFFREMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVYLGVBQWUsQ0FBQyxDQUFDO1FBRXhELE9BQU8sSUFBTTtZQUNYVSxRQUFRLENBQUNFLG1CQUFtQixDQUFDLFdBQVcsRUFBRVosZUFBZSxDQUFDLENBQUM7U0FDNUQsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ2EsS0FBRztRQUFDQyxHQUFHLEVBQUVmLFNBQVM7a0RBQVksaUJBQWlCOzswQkFDOUMsOERBQUNjLEtBQUc7MERBQVcsS0FBSzs7Ozs7eUJBQU87Ozs7Ozs7Ozs7aUJBMEJ2QixDQUNOO0NBQ0g7QUFFRCxpRUFBZWYsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlub29yLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQ3Vyc29yLmpzPzYxODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5cclxuY29uc3QgQW5pbWF0ZWRDdXJzb3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3Vyc29yUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcclxuICAgICAgZ3NhcC50byhjdXJzb3JSZWYuY3VycmVudCwge1xyXG4gICAgICAgIHg6IGUuY2xpZW50WCxcclxuICAgICAgICB5OiBlLmNsaWVudFksXHJcbiAgICAgICAgZHVyYXRpb246IDAuMixcclxuICAgICAgICBlYXNlOiAncG93ZXIyLm91dCcsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtjdXJzb3JSZWZ9IGNsYXNzTmFtZT0nYW5pbWF0ZWQtY3Vyc29yJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RvdCc+PC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmFuaW1hdGVkLWN1cnNvciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICBib3JkZXIgOiAzcHggc29saWQgV2hpdGU7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmRvdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLTEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRDdXJzb3I7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJBbmltYXRlZEN1cnNvciIsImN1cnNvclJlZiIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJ0byIsImN1cnJlbnQiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiZHVyYXRpb24iLCJlYXNlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CustomCursor.js\n");

/***/ }),

/***/ "./src/context/ContextProvider.js":
/*!****************************************!*\
  !*** ./src/context/ContextProvider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ \"./src/context/context.js\");\n\n\n\n\nconst ContextProvider = ({ children  })=>{\n    const { 0: menuStatus , 1: setMenuStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { 0: openSearch , 1: setOpenSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { 0: currentActive , 1: setCurrentActive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#home\");\n    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const toggleMenu = (value)=>{\n        setMenuStatus((preMenuStatus)=>typeof value === \"boolean\" ? value : !preMenuStatus\n        );\n    };\n    const toggleSearch = ()=>{\n        setOpenSearch((preSearch)=>!preSearch\n        );\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        toggleMenu(false);\n    }, [\n        pathname\n    ]);\n    const value1 = {\n        menuStatus,\n        openSearch,\n        toggleMenu,\n        toggleSearch,\n        currentActive,\n        setCurrentActive\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: value1,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\WORK\\\\MajeticsSoftwareSolution-master\\\\src\\\\context\\\\ContextProvider.js\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0UHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNXO0FBQ25CO0FBRWhDLE1BQU1LLGVBQWUsR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQ3hDLE1BQU0sRUFMUixHQUtTQyxVQUFVLEdBTG5CLEdBS3FCQyxhQUFhLE1BQUlMLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQ25ELE1BQU0sRUFOUixHQU1TTSxVQUFVLEdBTm5CLEdBTXFCQyxhQUFhLE1BQUlQLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQ25ELE1BQU0sRUFQUixHQU9TUSxhQUFhLEdBUHRCLEdBT3dCQyxnQkFBZ0IsTUFBSVQsK0NBQVEsQ0FBQyxPQUFPLENBQUM7SUFFM0QsTUFBTSxFQUFFVSxRQUFRLEdBQUUsR0FBR2Isc0RBQVMsRUFBRTtJQUVoQyxNQUFNYyxVQUFVLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO1FBQzVCUCxhQUFhLENBQUMsQ0FBQ1EsYUFBYSxHQUMxQixPQUFPRCxLQUFLLEtBQUssU0FBUyxHQUFHQSxLQUFLLEdBQUcsQ0FBQ0MsYUFBYTtRQUFBLENBQ3BELENBQUM7S0FDSDtJQUVELE1BQU1DLFlBQVksR0FBRyxJQUFNO1FBQ3pCUCxhQUFhLENBQUMsQ0FBQ1EsU0FBUyxHQUFLLENBQUNBLFNBQVM7UUFBQSxDQUFDLENBQUM7S0FDMUM7SUFFRGhCLGdEQUFTLENBQUMsSUFBTTtRQUNkWSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkIsRUFBRTtRQUFDRCxRQUFRO0tBQUMsQ0FBQyxDQUFDO0lBRWYsTUFBTUUsTUFBSyxHQUFHO1FBQ1pSLFVBQVU7UUFDVkUsVUFBVTtRQUNWSyxVQUFVO1FBQ1ZHLFlBQVk7UUFDWk4sYUFBYTtRQUNiQyxnQkFBZ0I7S0FDakI7SUFDRCxxQkFBTyw4REFBQ1IseURBQWdCO1FBQUNXLEtBQUssRUFBRUEsTUFBSztrQkFBR1QsUUFBUTs7Ozs7aUJBQW9CLENBQUM7Q0FDdEU7QUFFRCxpRUFBZUQsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlub29yLy4vc3JjL2NvbnRleHQvQ29udGV4dFByb3ZpZGVyLmpzPzJkYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFttZW51U3RhdHVzLCBzZXRNZW51U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wZW5TZWFyY2gsIHNldE9wZW5TZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VycmVudEFjdGl2ZSwgc2V0Q3VycmVudEFjdGl2ZV0gPSB1c2VTdGF0ZShcIiNob21lXCIpO1xuXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAodmFsdWUpID0+IHtcbiAgICBzZXRNZW51U3RhdHVzKChwcmVNZW51U3RhdHVzKSA9PlxuICAgICAgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiA/IHZhbHVlIDogIXByZU1lbnVTdGF0dXNcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNlYXJjaCA9ICgpID0+IHtcbiAgICBzZXRPcGVuU2VhcmNoKChwcmVTZWFyY2gpID0+ICFwcmVTZWFyY2gpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdG9nZ2xlTWVudShmYWxzZSk7XG4gIH0sIFtwYXRobmFtZV0pO1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIG1lbnVTdGF0dXMsXG4gICAgb3BlblNlYXJjaCxcbiAgICB0b2dnbGVNZW51LFxuICAgIHRvZ2dsZVNlYXJjaCxcbiAgICBjdXJyZW50QWN0aXZlLFxuICAgIHNldEN1cnJlbnRBY3RpdmUsXG4gIH07XG4gIHJldHVybiA8Y29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L2NvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJtZW51U3RhdHVzIiwic2V0TWVudVN0YXR1cyIsIm9wZW5TZWFyY2giLCJzZXRPcGVuU2VhcmNoIiwiY3VycmVudEFjdGl2ZSIsInNldEN1cnJlbnRBY3RpdmUiLCJwYXRobmFtZSIsInRvZ2dsZU1lbnUiLCJ2YWx1ZSIsInByZU1lbnVTdGF0dXMiLCJ0b2dnbGVTZWFyY2giLCJwcmVTZWFyY2giLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ContextProvider.js\n");

/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useRootContext\": () => (/* binding */ useRootContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst useRootContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUUsT0FBTyxpQkFBR0Ysb0RBQWEsQ0FBQyxFQUFFLENBQUM7QUFFMUIsTUFBTUcsY0FBYyxHQUFHLElBQU07SUFDbEMsT0FBT0YsaURBQVUsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Q0FDNUIsQ0FBQztBQUVGLGlFQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5vb3IvLi9zcmMvY29udGV4dC9jb250ZXh0LmpzPzQ2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBjb25zdCB1c2VSb290Q29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250ZXh0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsInVzZVJvb3RDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/context.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/ContextProvider */ \"./src/context/ContextProvider.js\");\n/* harmony import */ var _vendors_animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/vendors/animate.css */ \"./src/assets/vendors/animate.css\");\n/* harmony import */ var _vendors_animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendors_custom_animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/vendors/custom-animate.css */ \"./src/assets/vendors/custom-animate.css\");\n/* harmony import */ var _vendors_custom_animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_custom_animate_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vendors_flaticon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/vendors/flaticon.css */ \"./src/assets/vendors/flaticon.css\");\n/* harmony import */ var _vendors_flaticon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendors_flaticon_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _vendors_fontawesome_all_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/vendors/fontawesome-all.css */ \"./src/assets/vendors/fontawesome-all.css\");\n/* harmony import */ var _vendors_fontawesome_all_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendors_fontawesome_all_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _vendors_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/vendors/home.css */ \"./src/assets/vendors/home.css\");\n/* harmony import */ var _vendors_home_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendors_home_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _vendors_linoor_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/vendors/linoor-icons.css */ \"./src/assets/vendors/linoor-icons.css\");\n/* harmony import */ var _vendors_linoor_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendors_linoor_icons_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _vendors_reey_font_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/vendors/reey-font.css */ \"./src/assets/vendors/reey-font.css\");\n/* harmony import */ var _vendors_reey_font_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendors_reey_font_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! node_modules/swiper/swiper-bundle.min.css */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ \"./node_modules/react-circular-progressbar/dist/styles.css\");\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-modal-video/css/modal-video.min.css */ \"./node_modules/react-modal-video/css/modal-video.min.css\");\n/* harmony import */ var react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tiny-slider/dist/tiny-slider.css */ \"./node_modules/tiny-slider/dist/tiny-slider.css\");\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _styles_hover_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/styles/hover.css */ \"./src/styles/hover.css\");\n/* harmony import */ var _styles_hover_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_hover_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/styles/responsive.css */ \"./src/styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _components_CustomCursor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/CustomCursor */ \"./src/components/CustomCursor.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// extra css\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomCursor__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\WORK\\\\MajeticsSoftwareSolution-master\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 30,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\WORK\\\\MajeticsSoftwareSolution-master\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\WORK\\\\MajeticsSoftwareSolution-master\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdEO0FBQ3pCO0FBQ087QUFDTjtBQUNPO0FBQ1g7QUFFUTtBQUNIO0FBQ2E7QUFDSztBQUNDO0FBQ0Q7QUFDVDtBQUcxQyxZQUFZO0FBQ2dCO0FBQ0E7QUFDSztBQUNvQjtBQUlyRCxNQUFNRSxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxHQUFLO0lBRTFDLHFCQUVFLDhEQUFDSixnRUFBZTs7MEJBQ3BCLDhEQUFDQyxpRUFBWTs7Ozt5QkFBRTswQkFDVCw4REFBQ0UsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7Ozt5QkFBSzs7Ozs7O2lCQUNiLENBRWxCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlub29yLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCJAL2NvbnRleHQvQ29udGV4dFByb3ZpZGVyXCI7XG5pbXBvcnQgXCJAL3ZlbmRvcnMvYW5pbWF0ZS5jc3NcIjtcbmltcG9ydCBcIkAvdmVuZG9ycy9jdXN0b20tYW5pbWF0ZS5jc3NcIjtcbmltcG9ydCBcIkAvdmVuZG9ycy9mbGF0aWNvbi5jc3NcIjtcbmltcG9ydCBcIkAvdmVuZG9ycy9mb250YXdlc29tZS1hbGwuY3NzXCI7XG5pbXBvcnQgXCJAL3ZlbmRvcnMvaG9tZS5jc3NcIjtcblxuaW1wb3J0IFwiQC92ZW5kb3JzL2xpbm9vci1pY29ucy5jc3NcIjtcbmltcG9ydCBcIkAvdmVuZG9ycy9yZWV5LWZvbnQuY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcIm5vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzXCI7XG5pbXBvcnQgXCJyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhci9kaXN0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcInJlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5taW4uY3NzXCI7XG5pbXBvcnQgXCJ0aW55LXNsaWRlci9kaXN0L3Rpbnktc2xpZGVyLmNzc1wiO1xuXG5cbi8vIGV4dHJhIGNzc1xuaW1wb3J0IFwiQC9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9ob3Zlci5jc3NcIjtcbmltcG9ydCBcIkAvc3R5bGVzL3Jlc3BvbnNpdmUuY3NzXCI7XG5pbXBvcnQgQ3VzdG9tQ3Vyc29yIGZyb20gXCJAL2NvbXBvbmVudHMvQ3VzdG9tQ3Vyc29yXCI7XG5cblxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgXG4gIHJldHVybiAoXG4gIFxuICAgIDxDb250ZXh0UHJvdmlkZXI+XG48Q3VzdG9tQ3Vyc29yLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gIC8+IFxuICAgIDwvQ29udGV4dFByb3ZpZGVyPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJDb250ZXh0UHJvdmlkZXIiLCJDdXN0b21DdXJzb3IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-circular-progressbar/dist/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-circular-progressbar/dist/styles.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tiny-slider/dist/tiny-slider.css":
/*!*******************************************************!*\
  !*** ./node_modules/tiny-slider/dist/tiny-slider.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/animate.css":
/*!****************************************!*\
  !*** ./src/assets/vendors/animate.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/custom-animate.css":
/*!***********************************************!*\
  !*** ./src/assets/vendors/custom-animate.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/flaticon.css":
/*!*****************************************!*\
  !*** ./src/assets/vendors/flaticon.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/fontawesome-all.css":
/*!************************************************!*\
  !*** ./src/assets/vendors/fontawesome-all.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/home.css":
/*!*************************************!*\
  !*** ./src/assets/vendors/home.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/linoor-icons.css":
/*!*********************************************!*\
  !*** ./src/assets/vendors/linoor-icons.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/reey-font.css":
/*!******************************************!*\
  !*** ./src/assets/vendors/reey-font.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/hover.css":
/*!******************************!*\
  !*** ./src/styles/hover.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/responsive.css":
/*!***********************************!*\
  !*** ./src/styles/responsive.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
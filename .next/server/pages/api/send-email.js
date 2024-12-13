"use strict";
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
exports.id = "pages/api/send-email";
exports.ids = ["pages/api/send-email"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/send-email.js":
/*!*********************************!*\
  !*** ./pages/api/send-email.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"M\\xe9todo no permitido\"\n        });\n    }\n    const { email  } = req.body;\n    if (!email) {\n        return res.status(400).json({\n            message: \"El correo es obligatorio\"\n        });\n    }\n    try {\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            service: \"Gmail\",\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            }\n        });\n        await transporter.verify((error, success)=>{\n            if (error) {\n                console.error(\"Error en conexi\\xf3n SMTP:\", error);\n            } else {\n                console.log(\"SMTP conectado:\", success);\n            }\n        });\n        return res.status(200).json({\n            message: \"Correo enviado exitosamente\"\n        });\n    } catch (error) {\n        console.error(\"Error al enviar el correo:\", error);\n        return res.status(500).json({\n            message: \"Error al enviar el correo\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC1lbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDM0IsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXNCO0lBQzdELENBQUM7SUFFRCxNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHTixJQUFJTyxJQUFJO0lBRTFCLElBQUksQ0FBQ0QsT0FBTztRQUNaLE9BQU9MLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUEyQjtJQUNsRSxDQUFDO0lBRUQsSUFBSTtRQUNKLE1BQU1HLGNBQWNWLGlFQUEwQixDQUFDO1lBQzNDWSxTQUFTO1lBQ1RDLE1BQU07Z0JBQ05DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtnQkFDNUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVTtZQUM1QjtRQUNKO1FBRUEsTUFBTVQsWUFBWVUsTUFBTSxDQUFDLENBQUNDLE9BQU9DLFVBQVk7WUFDekMsSUFBSUQsT0FBTztnQkFDUEUsUUFBUUYsS0FBSyxDQUFDLDhCQUEyQkE7WUFDN0MsT0FBTztnQkFDSEUsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQkY7WUFDbkMsQ0FBQztRQUNEO1FBR0osT0FBT25CLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUE4QjtJQUNyRSxFQUFFLE9BQU9jLE9BQU87UUFDaEJFLFFBQVFGLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzVDLE9BQU9sQixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBNEI7SUFDbkU7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGV0c2hvcC1sYW5kaW5nLy4vcGFnZXMvYXBpL3NlbmQtZW1haWwuanM/NmE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNw6l0b2RvIG5vIHBlcm1pdGlkbycgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgaWYgKCFlbWFpbCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0VsIGNvcnJlbyBlcyBvYmxpZ2F0b3JpbycgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICAgIHNlcnZpY2U6ICdHbWFpbCcsXHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXHJcbiAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIudmVyaWZ5KChlcnJvciwgc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlbiBjb25leGnDs24gU01UUDonLCBlcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NNVFAgY29uZWN0YWRvOicsIHN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQ29ycmVvIGVudmlhZG8gZXhpdG9zYW1lbnRlJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBlbnZpYXIgZWwgY29ycmVvOicsIGVycm9yKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBhbCBlbnZpYXIgZWwgY29ycmVvJyB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVtYWlsIiwiYm9keSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1VTRVIiLCJwYXNzIiwiRU1BSUxfUEFTUyIsInZlcmlmeSIsImVycm9yIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/send-email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/send-email.js"));
module.exports = __webpack_exports__;

})();
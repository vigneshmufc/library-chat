webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"home.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div *ngIf='af.authState | async'>\n<div class=\"header container-fluid\">\n  <div class=\"logo\">\n    <img class='logoimg' src=\"../assets/images/Logo_Pinwheel.png\">\n  </div>\n  <div class=\"heading\">AnyTime Library</div>\n  <div class=\"logout\">\n      <img class = 'userimage' src=\"{{photoUrl}}\"><div class=\"userinfo\">{{displayName}}<br/><span id='signout' (click)='logout()'><b>Sign Out</b></span></div></div>\n</div>\n<router-outlet></router-outlet>\n<div class=\"footer container-fluid\">\n  <span>&copy;2018 Vignesh Nithyanandan</span>\n</div>\n</div>\n<div *ngIf='!(af.authState | async)'>\n    <div class=\"header container-fluid\">\n        <div class=\"logo\">\n          <img class='logoimg' src=\"../assets/images/Logo_Pinwheel.png\">\n        </div>\n        <div class=\"heading\">AnyTime Library</div>\n        <div class=\"container-fluid holder\">\n            <div class=\"container overlay\">\n              <div class=\"row\">\n                <div class=\"card login-card\" style=\"width: 30rem;text-align:center\">\n                    <img class=\"card-img-top\" src=\"../assets/images/Logo_Pinwheel.png\" alt=\"Card image cap\"\n                    style=\"margin:auto;width:40%;\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">AnyTime Library</h5>\n                      <p class=\"card-text\">Please login with Google to use the app.</p>\n                      <button class=\"loginBtn loginBtn--google\" (click)='login()'>Login with Google</button>\n                    </div>\n                  </div>\n                  </div>\n              </div>\n              </div>\n        <div class=\"footer container-fluid\">\n            <span>&copy;2018 Vignesh Nithyanandan</span>\n          </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*VARIABLES\r\n====================================================*/\n/*Range*/\n/*Spacing*/\n/*Colors*/\n/*Sizes*/\n/*Animation*/\n/*Icons*/\n/*Disabled*/\n/*CSS Star Rating Elements\r\n=================================================================*/\n/*HELPER*/\n.center-all {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n/*\r\nStar element\r\n==================================================================*/\n.star {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /*\r\n  Fill states\r\n  ==================================================================*/\n  /*\r\n  Colors\r\n  ==================================================================*/\n  /*\r\n  Icon Types\r\n  ==================================================================*/\n  /*\r\n  Star Size\r\n  ===================================================================*/\n  /*\r\nDisabled\r\n=================================================*/\n  /*\r\n  Direction\r\n  =================================================*/ }\n  .star svg, .star i {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    font-style: normal; }\n    .star svg.star-half, .star svg.star-filled, .star i.star-half, .star i.star-filled {\n      opacity: 0; }\n  .star i {\n    top: 1px;\n    display: none; }\n  .star.icon i, .rating.star-icon i {\n    font-size: 25px;\n    line-height: 25px; }\n    .star.icon i.star-empty:before, .rating.star-icon i.star-empty:before {\n      content: \"\\2606\"; }\n    .star.icon i.star-half:before, .rating.star-icon i.star-half:before {\n      content: \"\\2605\"; }\n    .star.icon i.star-filled:before, .rating.star-icon i.star-filled:before {\n      content: \"\\2605\"; }\n  .star.custom-icon i, .rating.star-custom-icon i, .rating.theme-kununu .star-container .star i {\n    font-size: 18px;\n    line-height: 18px; }\n  .star.empty svg.star-half, .rating.hover:hover.value-1.half .star-container .star svg.star-half, .rating.value-0.half .rating.hover.star:hover.value-1:nth-child(1) .star-container .star svg.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-1:nth-child(2) .star-container .star svg.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-1:nth-child(3) .star-container .star svg.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-1:nth-child(4) .star-container .star svg.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-1:nth-child(5) .star-container .star svg.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-1:nth-child(6) .star-container .star svg.star-half, .rating.hover:hover.hover-1 .star-container .star svg.star-half, .rating.hover:hover.value-2.half .star-container .star svg.star-half, .rating.value-0.half .rating.hover.star:hover.value-2:nth-child(1) .star-container .star svg.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-2:nth-child(2) .star-container .star svg.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-2:nth-child(3) .star-container .star svg.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-2:nth-child(4) .star-container .star svg.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-2:nth-child(5) .star-container .star svg.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-2:nth-child(6) .star-container .star svg.star-half, .rating.hover:hover.hover-2 .star-container .star svg.star-half, .rating.hover:hover.value-3.half .star-container .star svg.star-half, .rating.value-0.half .rating.hover.star:hover.value-3:nth-child(1) .star-container .star svg.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-3:nth-child(2) .star-container .star svg.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-3:nth-child(3) .star-container .star svg.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-3:nth-child(4) .star-container .star svg.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-3:nth-child(5) .star-container .star svg.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-3:nth-child(6) .star-container .star svg.star-half, .rating.hover:hover.hover-3 .star-container .star svg.star-half, .rating.hover:hover.value-4.half .star-container .star svg.star-half, .rating.value-0.half .rating.hover.star:hover.value-4:nth-child(1) .star-container .star svg.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-4:nth-child(2) .star-container .star svg.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-4:nth-child(3) .star-container .star svg.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-4:nth-child(4) .star-container .star svg.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-4:nth-child(5) .star-container .star svg.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-4:nth-child(6) .star-container .star svg.star-half, .rating.hover:hover.hover-4 .star-container .star svg.star-half, .rating.hover:hover.value-5.half .star-container .star svg.star-half, .rating.value-0.half .rating.hover.star:hover.value-5:nth-child(1) .star-container .star svg.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-5:nth-child(2) .star-container .star svg.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-5:nth-child(3) .star-container .star svg.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-5:nth-child(4) .star-container .star svg.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-5:nth-child(5) .star-container .star svg.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-5:nth-child(6) .star-container .star svg.star-half, .rating.hover:hover.hover-5 .star-container .star svg.star-half, .rating.hover:hover.value-6.half .star-container .star svg.star-half, .rating.value-0.half .rating.hover.star:hover.value-6:nth-child(1) .star-container .star svg.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-6:nth-child(2) .star-container .star svg.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-6:nth-child(3) .star-container .star svg.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-6:nth-child(4) .star-container .star svg.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-6:nth-child(5) .star-container .star svg.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-6:nth-child(6) .star-container .star svg.star-half, .rating.hover:hover.hover-6 .star-container .star svg.star-half, .star.empty svg.star-filled, .rating.hover:hover.value-1.half .star-container .star svg.star-filled, .rating.value-0.half .rating.hover.star:hover.value-1:nth-child(1) .star-container .star svg.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-1:nth-child(2) .star-container .star svg.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-1:nth-child(3) .star-container .star svg.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-1:nth-child(4) .star-container .star svg.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-1:nth-child(5) .star-container .star svg.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-1:nth-child(6) .star-container .star svg.star-filled, .rating.hover:hover.hover-1 .star-container .star svg.star-filled, .rating.hover:hover.value-2.half .star-container .star svg.star-filled, .rating.value-0.half .rating.hover.star:hover.value-2:nth-child(1) .star-container .star svg.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-2:nth-child(2) .star-container .star svg.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-2:nth-child(3) .star-container .star svg.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-2:nth-child(4) .star-container .star svg.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-2:nth-child(5) .star-container .star svg.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-2:nth-child(6) .star-container .star svg.star-filled, .rating.hover:hover.hover-2 .star-container .star svg.star-filled, .rating.hover:hover.value-3.half .star-container .star svg.star-filled, .rating.value-0.half .rating.hover.star:hover.value-3:nth-child(1) .star-container .star svg.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-3:nth-child(2) .star-container .star svg.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-3:nth-child(3) .star-container .star svg.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-3:nth-child(4) .star-container .star svg.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-3:nth-child(5) .star-container .star svg.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-3:nth-child(6) .star-container .star svg.star-filled, .rating.hover:hover.hover-3 .star-container .star svg.star-filled, .rating.hover:hover.value-4.half .star-container .star svg.star-filled, .rating.value-0.half .rating.hover.star:hover.value-4:nth-child(1) .star-container .star svg.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-4:nth-child(2) .star-container .star svg.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-4:nth-child(3) .star-container .star svg.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-4:nth-child(4) .star-container .star svg.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-4:nth-child(5) .star-container .star svg.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-4:nth-child(6) .star-container .star svg.star-filled, .rating.hover:hover.hover-4 .star-container .star svg.star-filled, .rating.hover:hover.value-5.half .star-container .star svg.star-filled, .rating.value-0.half .rating.hover.star:hover.value-5:nth-child(1) .star-container .star svg.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-5:nth-child(2) .star-container .star svg.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-5:nth-child(3) .star-container .star svg.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-5:nth-child(4) .star-container .star svg.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-5:nth-child(5) .star-container .star svg.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-5:nth-child(6) .star-container .star svg.star-filled, .rating.hover:hover.hover-5 .star-container .star svg.star-filled, .rating.hover:hover.value-6.half .star-container .star svg.star-filled, .rating.value-0.half .rating.hover.star:hover.value-6:nth-child(1) .star-container .star svg.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-6:nth-child(2) .star-container .star svg.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-6:nth-child(3) .star-container .star svg.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-6:nth-child(4) .star-container .star svg.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-6:nth-child(5) .star-container .star svg.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-6:nth-child(6) .star-container .star svg.star-filled, .rating.hover:hover.hover-6 .star-container .star svg.star-filled, .star.empty i.star-half, .rating.hover:hover.value-1.half .star-container .star i.star-half, .rating.value-0.half .rating.hover.star:hover.value-1:nth-child(1) .star-container .star i.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-1:nth-child(2) .star-container .star i.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-1:nth-child(3) .star-container .star i.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-1:nth-child(4) .star-container .star i.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-1:nth-child(5) .star-container .star i.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-1:nth-child(6) .star-container .star i.star-half, .rating.hover:hover.hover-1 .star-container .star i.star-half, .rating.hover:hover.value-2.half .star-container .star i.star-half, .rating.value-0.half .rating.hover.star:hover.value-2:nth-child(1) .star-container .star i.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-2:nth-child(2) .star-container .star i.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-2:nth-child(3) .star-container .star i.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-2:nth-child(4) .star-container .star i.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-2:nth-child(5) .star-container .star i.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-2:nth-child(6) .star-container .star i.star-half, .rating.hover:hover.hover-2 .star-container .star i.star-half, .rating.hover:hover.value-3.half .star-container .star i.star-half, .rating.value-0.half .rating.hover.star:hover.value-3:nth-child(1) .star-container .star i.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-3:nth-child(2) .star-container .star i.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-3:nth-child(3) .star-container .star i.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-3:nth-child(4) .star-container .star i.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-3:nth-child(5) .star-container .star i.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-3:nth-child(6) .star-container .star i.star-half, .rating.hover:hover.hover-3 .star-container .star i.star-half, .rating.hover:hover.value-4.half .star-container .star i.star-half, .rating.value-0.half .rating.hover.star:hover.value-4:nth-child(1) .star-container .star i.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-4:nth-child(2) .star-container .star i.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-4:nth-child(3) .star-container .star i.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-4:nth-child(4) .star-container .star i.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-4:nth-child(5) .star-container .star i.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-4:nth-child(6) .star-container .star i.star-half, .rating.hover:hover.hover-4 .star-container .star i.star-half, .rating.hover:hover.value-5.half .star-container .star i.star-half, .rating.value-0.half .rating.hover.star:hover.value-5:nth-child(1) .star-container .star i.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-5:nth-child(2) .star-container .star i.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-5:nth-child(3) .star-container .star i.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-5:nth-child(4) .star-container .star i.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-5:nth-child(5) .star-container .star i.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-5:nth-child(6) .star-container .star i.star-half, .rating.hover:hover.hover-5 .star-container .star i.star-half, .rating.hover:hover.value-6.half .star-container .star i.star-half, .rating.value-0.half .rating.hover.star:hover.value-6:nth-child(1) .star-container .star i.star-half, .rating.value-1.half .star-container .rating.hover.star:hover.value-6:nth-child(2) .star-container .star i.star-half, .rating.value-2.half .star-container .rating.hover.star:hover.value-6:nth-child(3) .star-container .star i.star-half, .rating.value-3.half .star-container .rating.hover.star:hover.value-6:nth-child(4) .star-container .star i.star-half, .rating.value-4.half .star-container .rating.hover.star:hover.value-6:nth-child(5) .star-container .star i.star-half, .rating.value-5.half .star-container .rating.hover.star:hover.value-6:nth-child(6) .star-container .star i.star-half, .rating.hover:hover.hover-6 .star-container .star i.star-half, .star.empty i.star-filled, .rating.hover:hover.value-1.half .star-container .star i.star-filled, .rating.value-0.half .rating.hover.star:hover.value-1:nth-child(1) .star-container .star i.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-1:nth-child(2) .star-container .star i.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-1:nth-child(3) .star-container .star i.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-1:nth-child(4) .star-container .star i.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-1:nth-child(5) .star-container .star i.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-1:nth-child(6) .star-container .star i.star-filled, .rating.hover:hover.hover-1 .star-container .star i.star-filled, .rating.hover:hover.value-2.half .star-container .star i.star-filled, .rating.value-0.half .rating.hover.star:hover.value-2:nth-child(1) .star-container .star i.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-2:nth-child(2) .star-container .star i.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-2:nth-child(3) .star-container .star i.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-2:nth-child(4) .star-container .star i.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-2:nth-child(5) .star-container .star i.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-2:nth-child(6) .star-container .star i.star-filled, .rating.hover:hover.hover-2 .star-container .star i.star-filled, .rating.hover:hover.value-3.half .star-container .star i.star-filled, .rating.value-0.half .rating.hover.star:hover.value-3:nth-child(1) .star-container .star i.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-3:nth-child(2) .star-container .star i.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-3:nth-child(3) .star-container .star i.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-3:nth-child(4) .star-container .star i.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-3:nth-child(5) .star-container .star i.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-3:nth-child(6) .star-container .star i.star-filled, .rating.hover:hover.hover-3 .star-container .star i.star-filled, .rating.hover:hover.value-4.half .star-container .star i.star-filled, .rating.value-0.half .rating.hover.star:hover.value-4:nth-child(1) .star-container .star i.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-4:nth-child(2) .star-container .star i.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-4:nth-child(3) .star-container .star i.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-4:nth-child(4) .star-container .star i.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-4:nth-child(5) .star-container .star i.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-4:nth-child(6) .star-container .star i.star-filled, .rating.hover:hover.hover-4 .star-container .star i.star-filled, .rating.hover:hover.value-5.half .star-container .star i.star-filled, .rating.value-0.half .rating.hover.star:hover.value-5:nth-child(1) .star-container .star i.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-5:nth-child(2) .star-container .star i.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-5:nth-child(3) .star-container .star i.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-5:nth-child(4) .star-container .star i.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-5:nth-child(5) .star-container .star i.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-5:nth-child(6) .star-container .star i.star-filled, .rating.hover:hover.hover-5 .star-container .star i.star-filled, .rating.hover:hover.value-6.half .star-container .star i.star-filled, .rating.value-0.half .rating.hover.star:hover.value-6:nth-child(1) .star-container .star i.star-filled, .rating.value-1.half .star-container .rating.hover.star:hover.value-6:nth-child(2) .star-container .star i.star-filled, .rating.value-2.half .star-container .rating.hover.star:hover.value-6:nth-child(3) .star-container .star i.star-filled, .rating.value-3.half .star-container .rating.hover.star:hover.value-6:nth-child(4) .star-container .star i.star-filled, .rating.value-4.half .star-container .rating.hover.star:hover.value-6:nth-child(5) .star-container .star i.star-filled, .rating.value-5.half .star-container .rating.hover.star:hover.value-6:nth-child(6) .star-container .star i.star-filled, .rating.hover:hover.hover-6 .star-container .star i.star-filled {\n    opacity: 0; }\n  .star.empty svg.star-empty, .rating.hover:hover.value-1.half .star-container .star svg.star-empty, .rating.value-0.half .rating.hover.star:hover.value-1:nth-child(1) .star-container .star svg.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-1:nth-child(2) .star-container .star svg.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-1:nth-child(3) .star-container .star svg.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-1:nth-child(4) .star-container .star svg.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-1:nth-child(5) .star-container .star svg.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-1:nth-child(6) .star-container .star svg.star-empty, .rating.hover:hover.hover-1 .star-container .star svg.star-empty, .rating.hover:hover.value-2.half .star-container .star svg.star-empty, .rating.value-0.half .rating.hover.star:hover.value-2:nth-child(1) .star-container .star svg.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-2:nth-child(2) .star-container .star svg.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-2:nth-child(3) .star-container .star svg.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-2:nth-child(4) .star-container .star svg.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-2:nth-child(5) .star-container .star svg.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-2:nth-child(6) .star-container .star svg.star-empty, .rating.hover:hover.hover-2 .star-container .star svg.star-empty, .rating.hover:hover.value-3.half .star-container .star svg.star-empty, .rating.value-0.half .rating.hover.star:hover.value-3:nth-child(1) .star-container .star svg.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-3:nth-child(2) .star-container .star svg.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-3:nth-child(3) .star-container .star svg.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-3:nth-child(4) .star-container .star svg.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-3:nth-child(5) .star-container .star svg.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-3:nth-child(6) .star-container .star svg.star-empty, .rating.hover:hover.hover-3 .star-container .star svg.star-empty, .rating.hover:hover.value-4.half .star-container .star svg.star-empty, .rating.value-0.half .rating.hover.star:hover.value-4:nth-child(1) .star-container .star svg.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-4:nth-child(2) .star-container .star svg.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-4:nth-child(3) .star-container .star svg.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-4:nth-child(4) .star-container .star svg.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-4:nth-child(5) .star-container .star svg.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-4:nth-child(6) .star-container .star svg.star-empty, .rating.hover:hover.hover-4 .star-container .star svg.star-empty, .rating.hover:hover.value-5.half .star-container .star svg.star-empty, .rating.value-0.half .rating.hover.star:hover.value-5:nth-child(1) .star-container .star svg.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-5:nth-child(2) .star-container .star svg.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-5:nth-child(3) .star-container .star svg.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-5:nth-child(4) .star-container .star svg.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-5:nth-child(5) .star-container .star svg.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-5:nth-child(6) .star-container .star svg.star-empty, .rating.hover:hover.hover-5 .star-container .star svg.star-empty, .rating.hover:hover.value-6.half .star-container .star svg.star-empty, .rating.value-0.half .rating.hover.star:hover.value-6:nth-child(1) .star-container .star svg.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-6:nth-child(2) .star-container .star svg.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-6:nth-child(3) .star-container .star svg.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-6:nth-child(4) .star-container .star svg.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-6:nth-child(5) .star-container .star svg.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-6:nth-child(6) .star-container .star svg.star-empty, .rating.hover:hover.hover-6 .star-container .star svg.star-empty, .star.empty i.star-empty, .rating.hover:hover.value-1.half .star-container .star i.star-empty, .rating.value-0.half .rating.hover.star:hover.value-1:nth-child(1) .star-container .star i.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-1:nth-child(2) .star-container .star i.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-1:nth-child(3) .star-container .star i.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-1:nth-child(4) .star-container .star i.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-1:nth-child(5) .star-container .star i.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-1:nth-child(6) .star-container .star i.star-empty, .rating.hover:hover.hover-1 .star-container .star i.star-empty, .rating.hover:hover.value-2.half .star-container .star i.star-empty, .rating.value-0.half .rating.hover.star:hover.value-2:nth-child(1) .star-container .star i.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-2:nth-child(2) .star-container .star i.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-2:nth-child(3) .star-container .star i.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-2:nth-child(4) .star-container .star i.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-2:nth-child(5) .star-container .star i.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-2:nth-child(6) .star-container .star i.star-empty, .rating.hover:hover.hover-2 .star-container .star i.star-empty, .rating.hover:hover.value-3.half .star-container .star i.star-empty, .rating.value-0.half .rating.hover.star:hover.value-3:nth-child(1) .star-container .star i.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-3:nth-child(2) .star-container .star i.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-3:nth-child(3) .star-container .star i.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-3:nth-child(4) .star-container .star i.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-3:nth-child(5) .star-container .star i.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-3:nth-child(6) .star-container .star i.star-empty, .rating.hover:hover.hover-3 .star-container .star i.star-empty, .rating.hover:hover.value-4.half .star-container .star i.star-empty, .rating.value-0.half .rating.hover.star:hover.value-4:nth-child(1) .star-container .star i.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-4:nth-child(2) .star-container .star i.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-4:nth-child(3) .star-container .star i.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-4:nth-child(4) .star-container .star i.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-4:nth-child(5) .star-container .star i.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-4:nth-child(6) .star-container .star i.star-empty, .rating.hover:hover.hover-4 .star-container .star i.star-empty, .rating.hover:hover.value-5.half .star-container .star i.star-empty, .rating.value-0.half .rating.hover.star:hover.value-5:nth-child(1) .star-container .star i.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-5:nth-child(2) .star-container .star i.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-5:nth-child(3) .star-container .star i.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-5:nth-child(4) .star-container .star i.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-5:nth-child(5) .star-container .star i.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-5:nth-child(6) .star-container .star i.star-empty, .rating.hover:hover.hover-5 .star-container .star i.star-empty, .rating.hover:hover.value-6.half .star-container .star i.star-empty, .rating.value-0.half .rating.hover.star:hover.value-6:nth-child(1) .star-container .star i.star-empty, .rating.value-1.half .star-container .rating.hover.star:hover.value-6:nth-child(2) .star-container .star i.star-empty, .rating.value-2.half .star-container .rating.hover.star:hover.value-6:nth-child(3) .star-container .star i.star-empty, .rating.value-3.half .star-container .rating.hover.star:hover.value-6:nth-child(4) .star-container .star i.star-empty, .rating.value-4.half .star-container .rating.hover.star:hover.value-6:nth-child(5) .star-container .star i.star-empty, .rating.value-5.half .star-container .rating.hover.star:hover.value-6:nth-child(6) .star-container .star i.star-empty, .rating.hover:hover.hover-6 .star-container .star i.star-empty {\n    opacity: 1; }\n  .star.half svg.star-filled, .rating.value-0.half .star:nth-child(1) svg.star-filled, .rating.value-1.half .star-container .star:nth-child(2) svg.star-filled, .rating.value-2.half .star-container .star:nth-child(3) svg.star-filled, .rating.value-3.half .star-container .star:nth-child(4) svg.star-filled, .rating.value-4.half .star-container .star:nth-child(5) svg.star-filled, .rating.value-5.half .star-container .star:nth-child(6) svg.star-filled, .star.half svg.star-empty, .rating.value-0.half .star:nth-child(1) svg.star-empty, .rating.value-1.half .star-container .star:nth-child(2) svg.star-empty, .rating.value-2.half .star-container .star:nth-child(3) svg.star-empty, .rating.value-3.half .star-container .star:nth-child(4) svg.star-empty, .rating.value-4.half .star-container .star:nth-child(5) svg.star-empty, .rating.value-5.half .star-container .star:nth-child(6) svg.star-empty, .star.half i.star-filled, .rating.value-0.half .star:nth-child(1) i.star-filled, .rating.value-1.half .star-container .star:nth-child(2) i.star-filled, .rating.value-2.half .star-container .star:nth-child(3) i.star-filled, .rating.value-3.half .star-container .star:nth-child(4) i.star-filled, .rating.value-4.half .star-container .star:nth-child(5) i.star-filled, .rating.value-5.half .star-container .star:nth-child(6) i.star-filled, .star.half i.star-empty, .rating.value-0.half .star:nth-child(1) i.star-empty, .rating.value-1.half .star-container .star:nth-child(2) i.star-empty, .rating.value-2.half .star-container .star:nth-child(3) i.star-empty, .rating.value-3.half .star-container .star:nth-child(4) i.star-empty, .rating.value-4.half .star-container .star:nth-child(5) i.star-empty, .rating.value-5.half .star-container .star:nth-child(6) i.star-empty {\n    opacity: 0; }\n  .star.half svg.star-half, .rating.value-0.half .star:nth-child(1) svg.star-half, .rating.value-1.half .star-container .star:nth-child(2) svg.star-half, .rating.value-2.half .star-container .star:nth-child(3) svg.star-half, .rating.value-3.half .star-container .star:nth-child(4) svg.star-half, .rating.value-4.half .star-container .star:nth-child(5) svg.star-half, .rating.value-5.half .star-container .star:nth-child(6) svg.star-half, .star.half i.star-half, .rating.value-0.half .star:nth-child(1) i.star-half, .rating.value-1.half .star-container .star:nth-child(2) i.star-half, .rating.value-2.half .star-container .star:nth-child(3) i.star-half, .rating.value-3.half .star-container .star:nth-child(4) i.star-half, .rating.value-4.half .star-container .star:nth-child(5) i.star-half, .rating.value-5.half .star-container .star:nth-child(6) i.star-half {\n    opacity: 1; }\n  .star.filled svg.star-empty, .rating.value-1 .star-container .star:nth-child(-n+1) svg.star-empty, .rating.value-2 .star-container .star:nth-child(-n+2) svg.star-empty, .rating.value-3 .star-container .star:nth-child(-n+3) svg.star-empty, .rating.value-4 .star-container .star:nth-child(-n+4) svg.star-empty, .rating.value-5 .star-container .star:nth-child(-n+5) svg.star-empty, .rating.value-6 .star-container .star:nth-child(-n+6) svg.star-empty, .rating.value-7 .star-container .star:nth-child(-n+7) svg.star-empty, .rating.value-8 .star-container .star:nth-child(-n+8) svg.star-empty, .rating.value-9 .star-container .star:nth-child(-n+9) svg.star-empty, .rating.value-10 .star-container .star:nth-child(-n+10) svg.star-empty, .rating.value-11 .star-container .star:nth-child(-n+11) svg.star-empty, .rating.value-12 .star-container .star:nth-child(-n+12) svg.star-empty, .rating.hover:hover.hover-1 .star-container .star:nth-child(-n+1) svg.star-empty, .rating.hover:hover.hover-2 .star-container .star:nth-child(-n+2) svg.star-empty, .rating.hover:hover.hover-3 .star-container .star:nth-child(-n+3) svg.star-empty, .rating.hover:hover.hover-4 .star-container .star:nth-child(-n+4) svg.star-empty, .rating.hover:hover.hover-5 .star-container .star:nth-child(-n+5) svg.star-empty, .rating.hover:hover.hover-6 .star-container .star:nth-child(-n+6) svg.star-empty, .star.filled svg.star-filled, .rating.value-1 .star-container .star:nth-child(-n+1) svg.star-filled, .rating.value-2 .star-container .star:nth-child(-n+2) svg.star-filled, .rating.value-3 .star-container .star:nth-child(-n+3) svg.star-filled, .rating.value-4 .star-container .star:nth-child(-n+4) svg.star-filled, .rating.value-5 .star-container .star:nth-child(-n+5) svg.star-filled, .rating.value-6 .star-container .star:nth-child(-n+6) svg.star-filled, .rating.value-7 .star-container .star:nth-child(-n+7) svg.star-filled, .rating.value-8 .star-container .star:nth-child(-n+8) svg.star-filled, .rating.value-9 .star-container .star:nth-child(-n+9) svg.star-filled, .rating.value-10 .star-container .star:nth-child(-n+10) svg.star-filled, .rating.value-11 .star-container .star:nth-child(-n+11) svg.star-filled, .rating.value-12 .star-container .star:nth-child(-n+12) svg.star-filled, .rating.hover:hover.hover-1 .star-container .star:nth-child(-n+1) svg.star-filled, .rating.hover:hover.hover-2 .star-container .star:nth-child(-n+2) svg.star-filled, .rating.hover:hover.hover-3 .star-container .star:nth-child(-n+3) svg.star-filled, .rating.hover:hover.hover-4 .star-container .star:nth-child(-n+4) svg.star-filled, .rating.hover:hover.hover-5 .star-container .star:nth-child(-n+5) svg.star-filled, .rating.hover:hover.hover-6 .star-container .star:nth-child(-n+6) svg.star-filled, .star.filled i.star-empty, .rating.value-1 .star-container .star:nth-child(-n+1) i.star-empty, .rating.value-2 .star-container .star:nth-child(-n+2) i.star-empty, .rating.value-3 .star-container .star:nth-child(-n+3) i.star-empty, .rating.value-4 .star-container .star:nth-child(-n+4) i.star-empty, .rating.value-5 .star-container .star:nth-child(-n+5) i.star-empty, .rating.value-6 .star-container .star:nth-child(-n+6) i.star-empty, .rating.value-7 .star-container .star:nth-child(-n+7) i.star-empty, .rating.value-8 .star-container .star:nth-child(-n+8) i.star-empty, .rating.value-9 .star-container .star:nth-child(-n+9) i.star-empty, .rating.value-10 .star-container .star:nth-child(-n+10) i.star-empty, .rating.value-11 .star-container .star:nth-child(-n+11) i.star-empty, .rating.value-12 .star-container .star:nth-child(-n+12) i.star-empty, .rating.hover:hover.hover-1 .star-container .star:nth-child(-n+1) i.star-empty, .rating.hover:hover.hover-2 .star-container .star:nth-child(-n+2) i.star-empty, .rating.hover:hover.hover-3 .star-container .star:nth-child(-n+3) i.star-empty, .rating.hover:hover.hover-4 .star-container .star:nth-child(-n+4) i.star-empty, .rating.hover:hover.hover-5 .star-container .star:nth-child(-n+5) i.star-empty, .rating.hover:hover.hover-6 .star-container .star:nth-child(-n+6) i.star-empty, .star.filled i.star-filled, .rating.value-1 .star-container .star:nth-child(-n+1) i.star-filled, .rating.value-2 .star-container .star:nth-child(-n+2) i.star-filled, .rating.value-3 .star-container .star:nth-child(-n+3) i.star-filled, .rating.value-4 .star-container .star:nth-child(-n+4) i.star-filled, .rating.value-5 .star-container .star:nth-child(-n+5) i.star-filled, .rating.value-6 .star-container .star:nth-child(-n+6) i.star-filled, .rating.value-7 .star-container .star:nth-child(-n+7) i.star-filled, .rating.value-8 .star-container .star:nth-child(-n+8) i.star-filled, .rating.value-9 .star-container .star:nth-child(-n+9) i.star-filled, .rating.value-10 .star-container .star:nth-child(-n+10) i.star-filled, .rating.value-11 .star-container .star:nth-child(-n+11) i.star-filled, .rating.value-12 .star-container .star:nth-child(-n+12) i.star-filled, .rating.hover:hover.hover-1 .star-container .star:nth-child(-n+1) i.star-filled, .rating.hover:hover.hover-2 .star-container .star:nth-child(-n+2) i.star-filled, .rating.hover:hover.hover-3 .star-container .star:nth-child(-n+3) i.star-filled, .rating.hover:hover.hover-4 .star-container .star:nth-child(-n+4) i.star-filled, .rating.hover:hover.hover-5 .star-container .star:nth-child(-n+5) i.star-filled, .rating.hover:hover.hover-6 .star-container .star:nth-child(-n+6) i.star-filled {\n    opacity: 0; }\n  .star.filled svg.star-filled, .rating.value-1 .star-container .star:nth-child(-n+1) svg.star-filled, .rating.value-2 .star-container .star:nth-child(-n+2) svg.star-filled, .rating.value-3 .star-container .star:nth-child(-n+3) svg.star-filled, .rating.value-4 .star-container .star:nth-child(-n+4) svg.star-filled, .rating.value-5 .star-container .star:nth-child(-n+5) svg.star-filled, .rating.value-6 .star-container .star:nth-child(-n+6) svg.star-filled, .rating.value-7 .star-container .star:nth-child(-n+7) svg.star-filled, .rating.value-8 .star-container .star:nth-child(-n+8) svg.star-filled, .rating.value-9 .star-container .star:nth-child(-n+9) svg.star-filled, .rating.value-10 .star-container .star:nth-child(-n+10) svg.star-filled, .rating.value-11 .star-container .star:nth-child(-n+11) svg.star-filled, .rating.value-12 .star-container .star:nth-child(-n+12) svg.star-filled, .rating.hover:hover.hover-1 .star-container .star:nth-child(-n+1) svg.star-filled, .rating.hover:hover.hover-2 .star-container .star:nth-child(-n+2) svg.star-filled, .rating.hover:hover.hover-3 .star-container .star:nth-child(-n+3) svg.star-filled, .rating.hover:hover.hover-4 .star-container .star:nth-child(-n+4) svg.star-filled, .rating.hover:hover.hover-5 .star-container .star:nth-child(-n+5) svg.star-filled, .rating.hover:hover.hover-6 .star-container .star:nth-child(-n+6) svg.star-filled, .star.filled i.star-filled, .rating.value-1 .star-container .star:nth-child(-n+1) i.star-filled, .rating.value-2 .star-container .star:nth-child(-n+2) i.star-filled, .rating.value-3 .star-container .star:nth-child(-n+3) i.star-filled, .rating.value-4 .star-container .star:nth-child(-n+4) i.star-filled, .rating.value-5 .star-container .star:nth-child(-n+5) i.star-filled, .rating.value-6 .star-container .star:nth-child(-n+6) i.star-filled, .rating.value-7 .star-container .star:nth-child(-n+7) i.star-filled, .rating.value-8 .star-container .star:nth-child(-n+8) i.star-filled, .rating.value-9 .star-container .star:nth-child(-n+9) i.star-filled, .rating.value-10 .star-container .star:nth-child(-n+10) i.star-filled, .rating.value-11 .star-container .star:nth-child(-n+11) i.star-filled, .rating.value-12 .star-container .star:nth-child(-n+12) i.star-filled, .rating.hover:hover.hover-1 .star-container .star:nth-child(-n+1) i.star-filled, .rating.hover:hover.hover-2 .star-container .star:nth-child(-n+2) i.star-filled, .rating.hover:hover.hover-3 .star-container .star:nth-child(-n+3) i.star-filled, .rating.hover:hover.hover-4 .star-container .star:nth-child(-n+4) i.star-filled, .rating.hover:hover.hover-5 .star-container .star:nth-child(-n+5) i.star-filled, .rating.hover:hover.hover-6 .star-container .star:nth-child(-n+6) i.star-filled {\n    opacity: 1; }\n  .star.default svg, .star-container .star svg {\n    fill: #999; }\n  .star.default i, .star-container .star i {\n    color: #999; }\n  .star.negative svg, .rating.value-1 .star-container .star svg, .rating.value-2 .star-container .star svg, .rating.hover:hover.hover-1 .star-container .star svg, .rating.hover:hover.hover-2 .star-container .star svg, .rating.value-0.half .star svg, .rating.value-1.half .star-container .rating.value-0.star:nth-child(2) .star svg, .rating.value-2.half .star-container .rating.value-0.star:nth-child(3) .star svg, .rating.value-3.half .star-container .rating.value-0.star:nth-child(4) .star svg, .rating.value-4.half .star-container .rating.value-0.star:nth-child(5) .star svg, .rating.value-5.half .star-container .rating.value-0.star:nth-child(6) .star svg {\n    fill: #f03c56; }\n  .star.negative i, .rating.value-1 .star-container .star i, .rating.value-2 .star-container .star i, .rating.hover:hover.hover-1 .star-container .star i, .rating.hover:hover.hover-2 .star-container .star i, .rating.value-0.half .star i, .rating.value-1.half .star-container .rating.value-0.star:nth-child(2) .star i, .rating.value-2.half .star-container .rating.value-0.star:nth-child(3) .star i, .rating.value-3.half .star-container .rating.value-0.star:nth-child(4) .star i, .rating.value-4.half .star-container .rating.value-0.star:nth-child(5) .star i, .rating.value-5.half .star-container .rating.value-0.star:nth-child(6) .star i {\n    color: #f03c56; }\n  .star.ok svg, .rating.value-3 .star-container .star svg, .rating.hover:hover.hover-3 .star-container .star svg {\n    fill: #ffc058; }\n  .star.ok i, .rating.value-3 .star-container .star i, .rating.hover:hover.hover-3 .star-container .star i {\n    color: #ffc058; }\n  .star.positive svg, .rating.value-4 .star-container .star svg, .rating.value-5 .star-container .star svg, .rating.value-6 .star-container .star svg, .rating.value-7 .star-container .star svg, .rating.value-8 .star-container .star svg, .rating.value-9 .star-container .star svg, .rating.value-10 .star-container .star svg, .rating.value-11 .star-container .star svg, .rating.value-12 .star-container .star svg, .rating.hover:hover.hover-4 .star-container .star svg, .rating.hover:hover.hover-5 .star-container .star svg, .rating.hover:hover.hover-6 .star-container .star svg {\n    fill: #7ed321; }\n  .star.positive i, .rating.value-4 .star-container .star i, .rating.value-5 .star-container .star i, .rating.value-6 .star-container .star i, .rating.value-7 .star-container .star i, .rating.value-8 .star-container .star i, .rating.value-9 .star-container .star i, .rating.value-10 .star-container .star i, .rating.value-11 .star-container .star i, .rating.value-12 .star-container .star i, .rating.hover:hover.hover-4 .star-container .star i, .rating.hover:hover.hover-5 .star-container .star i, .rating.hover:hover.hover-6 .star-container .star i {\n    color: #7ed321; }\n  .star.svg i, .rating.star-svg i {\n    display: none; }\n  .star.svg svg, .rating.star-svg svg {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .star.custom-icon svg, .rating.star-custom-icon svg, .rating.theme-kununu .star-container .star svg, .star.icon svg, .rating.star-icon svg {\n    display: none; }\n  .star.custom-icon i, .rating.star-custom-icon i, .rating.theme-kununu .star-container .star i, .star.icon i, .rating.star-icon i {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .star.small, .rating.small .star {\n    width: 10px;\n    height: 9, 5px; }\n    .star.small i, .rating.small .star i {\n      font-size: 11px;\n      line-height: 10px; }\n  .star.medium, .rating.medium .star {\n    width: 20px;\n    height: 20px; }\n    .star.medium i, .rating.medium .star i {\n      font-size: 25px;\n      line-height: 25px; }\n  .star.large, .rating.large .star {\n    width: 35px;\n    height: 33.3px; }\n    .star.large i, .rating.large .star i {\n      font-size: 36px;\n      line-height: 35px; }\n  .star.disabled, .rating.disabled .star-container .star {\n    opacity: 0.5; }\n  .star.direction-rtl svg.star-half, .star-container.direction-rtl .star svg.star-half, .rating.direction-rtl .star-container .star svg.star-half, .star.direction-rtl i.star-half, .star-container.direction-rtl .star i.star-half, .rating.direction-rtl .star-container .star i.star-half {\n    -webkit-transform: scale(-1, 1);\n            transform: scale(-1, 1); }\n  .star.direction-ltr svg.star-half, .star-container.direction-ltr .star svg.star-half, .star.direction-ltr i.star-half, .star-container.direction-ltr .star i.star-half {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n\n/*\r\nLabel Element\r\n===================================================================*/\n.label-value {\n  font-size: 18px;\n  line-height: 18px;\n  /*\r\n  Sizes\r\n  =================================================================*/\n  /*\r\n  Disabled\r\n  =================================================*/ }\n  .label-value.small, .rating.small .label-value {\n    font-size: 9.5px;\n    line-height: 9.5px; }\n  .label-value.medium, .rating.medium .label-value {\n    font-size: 18px;\n    line-height: 25px; }\n  .label-value.large, .rating.large .label-value {\n    font-size: 28px;\n    line-height: 35px; }\n  .label-value.disabled, .rating.disabled .label-value {\n    opacity: 0.5; }\n\n/*\r\nStar Container\r\n==================================================================*/\n.star-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-left: 5px;\n  margin-right: 5px;\n  transition: all 0.3s ease;\n  /*\r\n Direction\r\n ===================================================*/\n  /*\r\n  Space\r\n  ======================================================*/ }\n  .star-container + .star {\n    margin-left: 5px; }\n  .star-container .star {\n    transition: all 0.3s ease; }\n    .star-container .star svg, .star-container .star i {\n      transition: all 0.3s ease; }\n  .star-container svg {\n    z-index: 2; }\n  .star-container i {\n    z-index: 1; }\n  .star-container.direction-rtl, .rating.direction-rtl .star-container {\n    direction: rtl; }\n  .star-container.direction-ltr {\n    direction: ltr; }\n  .star-container.space-no, .rating.space-no .star-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .star-container.space-between, .rating.space-between .star-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .star-container.space-around, .rating.space-around .star-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n\n/*\r\nRating Component\r\n========================================================================= */\n.rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 5px;\n  /*Rating Value\r\n  ====================================================*/\n  /*Hover states\r\n  ====================================================*/\n  /*Half stars\r\n  ====================================================*/\n  /*Label Visible\r\n  ====================================================*/\n  /*Label Position\r\n  ====================================================*/\n  /*\r\n  Direction\r\n  ===================================================*/\n  /* Star Type\r\n  ====================================================*/\n  /* Sizes\r\n  ==========================================================*/\n  /* Space\r\n  ====================================================*/\n  /* Static Color\r\n    ====================================================*/\n  /*Disabled\r\n  ====================================================*/\n  /*AnimationSpeed\r\n ====================================================*/ }\n  .rating.label-hidden .label-value {\n    display: none; }\n  .rating.label-visible {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .rating.label-top {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .rating.label-top .label-value + .star-container {\n      margin-left: 0;\n      margin-right: 0;\n      margin-top: 5px; }\n  .rating.label-left .label-value {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto; }\n    .rating.label-left .label-value + .star-container {\n      margin-left: 5px;\n      margin-right: 0; }\n  .rating.label-right {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n    .rating.label-right .label-value + .star-container {\n      margin-left: 0;\n      margin-right: 5px; }\n  .rating.label-bottom {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n    .rating.label-bottom .label-value + .star-container {\n      margin-left: 0;\n      margin-right: 0;\n      margin-bottom: 5px; }\n  .rating.direction-rtl {\n    direction: rtl; }\n  .rating.direction-ltr {\n    direction: ltr; }\n  .rating.color-default .star-container .star svg {\n    fill: #999; }\n  .rating.color-default .star-container .star i {\n    color: #999; }\n  .rating.color-ok .star-container .star svg {\n    fill: #ffc058; }\n  .rating.color-ok .star-container .star i {\n    color: #ffc058; }\n  .rating.color-positive .star-container .star svg {\n    fill: #7ed321; }\n  .rating.color-positive .star-container .star i {\n    color: #7ed321; }\n  .rating.color-negative .star-container .star svg {\n    fill: #f03c56; }\n  .rating.color-negative .star-container .star i {\n    color: #f03c56; }\n  .rating.immediately .star-container {\n    transition: all none; }\n    .rating.immediately .star-container .star {\n      transition: none; }\n      .rating.immediately .star-container .star svg, .rating.immediately .star-container .star i {\n        transition: none; }\n  .rating.noticeable .star-container {\n    transition: all 0.3s ease; }\n    .rating.noticeable .star-container .star {\n      transition: all 0.3s ease; }\n      .rating.noticeable .star-container .star svg, .rating.noticeable .star-container .star i {\n        transition: all 0.3s ease; }\n  .rating.slow .star-container {\n    transition: all 0.8s ease; }\n    .rating.slow .star-container .star {\n      transition: all 0.8s ease; }\n      .rating.slow .star-container .star svg, .rating.slow .star-container .star i {\n        transition: all 0.8s ease; }\n\n/*theme modifiers\r\n====================================================*/\n.rating.theme-kununu {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 78px; }\n  .rating.theme-kununu .label-value,\n  .rating.theme-kununu .star-container {\n    width: 100%; }\n  .rating.theme-kununu .label-value {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border-radius: 6px 6px 0 0;\n    height: 50px;\n    border: 1px solid #e9ecec;\n    border-bottom: 0px;\n    font-size: 18px;\n    font-weight: bold;\n    color: #2f3940;\n    letter-spacing: -1px;\n    background-color: #f8f8f8; }\n  .rating.theme-kununu .star-container {\n    border-radius: 0 0 6px 6px;\n    padding: 2px 0 4px 0;\n    margin-left: 0px;\n    margin-right: 0px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: #99c613;\n    border: 1px solid #99c613;\n    border-bottom: 0px; }\n    .rating.theme-kununu .star-container .star {\n      height: 11px;\n      width: 11px; }\n      .rating.theme-kununu .star-container .star i {\n        font-size: 11px;\n        color: #fff;\n        text-align: center; }\n\n.rating.theme-google-places .label-value {\n  color: #e7711b;\n  font-family: arial, sans-serif;\n  font-size: 13px;\n  line-height: 15px; }\n\n.rating.theme-google-places .star-container {\n  width: 65px;\n  margin-left: 2px; }\n  .rating.theme-google-places .star-container .star i {\n    font-size: 17px;\n    color: #e7711b !important; }\n    .rating.theme-google-places .star-container .star i.star-empty {\n      opacity: 1 !important;\n      color: #e1e1e1 !important; }\n      .rating.theme-google-places .star-container .star i.star-empty:before {\n        content: \"\\2605\"; }\n    .rating.theme-google-places .star-container .star i.star-half {\n      width: 7px;\n      overflow: hidden; }\n      .rating.theme-google-places .star-container .star i.star-half:before {\n        content: \"\\2605\"; }\n    .rating.theme-google-places .star-container .star i.star-filled:before {\n      content: \"\\2605\"; }\n\n.rating.theme-rolling-stars .star-container .star {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg); }\n\n.rating.theme-rolling-stars.value-1 .star-container .star:nth-child(-n+1) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-2 .star-container .star:nth-child(-n+2) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-3 .star-container .star:nth-child(-n+3) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-4 .star-container .star:nth-child(-n+4) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-5 .star-container .star:nth-child(-n+5) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-6 .star-container .star:nth-child(-n+6) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-0.half .star:nth-child(1), .rating.value-0.half .rating.theme-rolling-stars.value-0.star:nth-child(1) .star:nth-child(1), .rating.value-1.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(2) .star:nth-child(1), .rating.value-2.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(3) .star:nth-child(1), .rating.value-3.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(4) .star:nth-child(1), .rating.value-4.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(5) .star:nth-child(1), .rating.value-5.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(6) .star:nth-child(1) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-1.half .star-container .star:nth-child(2), .rating.value-0.half .rating.theme-rolling-stars.value-1.star:nth-child(1) .star-container .star:nth-child(2), .rating.value-1.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(2) .star-container .star:nth-child(2), .rating.value-2.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(3) .star-container .star:nth-child(2), .rating.value-3.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(4) .star-container .star:nth-child(2), .rating.value-4.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(5) .star-container .star:nth-child(2), .rating.value-5.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(6) .star-container .star:nth-child(2) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-2.half .star-container .star:nth-child(3), .rating.value-0.half .rating.theme-rolling-stars.value-2.star:nth-child(1) .star-container .star:nth-child(3), .rating.value-1.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(2) .star-container .star:nth-child(3), .rating.value-2.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(3) .star-container .star:nth-child(3), .rating.value-3.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(4) .star-container .star:nth-child(3), .rating.value-4.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(5) .star-container .star:nth-child(3), .rating.value-5.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(6) .star-container .star:nth-child(3) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-3.half .star-container .star:nth-child(4), .rating.value-0.half .rating.theme-rolling-stars.value-3.star:nth-child(1) .star-container .star:nth-child(4), .rating.value-1.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(2) .star-container .star:nth-child(4), .rating.value-2.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(3) .star-container .star:nth-child(4), .rating.value-3.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(4) .star-container .star:nth-child(4), .rating.value-4.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(5) .star-container .star:nth-child(4), .rating.value-5.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(6) .star-container .star:nth-child(4) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-4.half .star-container .star:nth-child(5), .rating.value-0.half .rating.theme-rolling-stars.value-4.star:nth-child(1) .star-container .star:nth-child(5), .rating.value-1.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(2) .star-container .star:nth-child(5), .rating.value-2.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(3) .star-container .star:nth-child(5), .rating.value-3.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(4) .star-container .star:nth-child(5), .rating.value-4.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(5) .star-container .star:nth-child(5), .rating.value-5.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(6) .star-container .star:nth-child(5) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.rating.theme-rolling-stars.value-5.half .star-container .star:nth-child(6), .rating.value-0.half .rating.theme-rolling-stars.value-5.star:nth-child(1) .star-container .star:nth-child(6), .rating.value-1.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(2) .star-container .star:nth-child(6), .rating.value-2.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(3) .star-container .star:nth-child(6), .rating.value-3.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(4) .star-container .star:nth-child(6), .rating.value-4.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(5) .star-container .star:nth-child(6), .rating.value-5.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(6) .star-container .star:nth-child(6) {\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.header {\n  width: 100%;\n  height: 65px;\n  padding: 5px;\n  background-color: #0099cc; }\n\n.logout {\n  float: right;\n  color: #fff;\n  height: 60px;\n  width: 17%; }\n\n.heading {\n  font-family: \"brandon-grotesque\", \"Brandon Grotesque\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #fff;\n  display: inline-block;\n  font-size: 1.5rem; }\n\n.logoimg {\n  width: 60px;\n  height: 60px; }\n\n.logo {\n  display: inline-block; }\n\n.body {\n  background-color: #f1f4f9 !important; }\n\n.userimage {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-top: -8%;\n  margin-right: 4%; }\n\n.userinfo {\n  display: inline-block; }\n\n.footer {\n  background-color: #30abd5;\n  height: 6vh;\n  color: #fff;\n  text-align: center; }\n\n#signout {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.holder {\n  background-color: #E7EAF0;\n  min-height: 85vh; }\n\n.overlay {\n  min-height: 84vh;\n  background-color: #ffffff;\n  box-shadow: 0 0 10px #ccc; }\n\n.login-holder {\n  text-align: center; }\n\n.loginBtn {\n  cursor: pointer;\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF; }\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%; }\n\n.loginBtn:focus {\n  outline: none; }\n\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1); }\n\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39; }\n\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat; }\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37; }\n\n.login-card {\n  margin: 3.5% auto;\n  padding: 2%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_users_service__ = __webpack_require__("../../../../../src/app/shared/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(af, router, userService) {
        this.af = af;
        this.router = router;
        this.userService = userService;
        this.title = 'Anytime Library';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.authState.subscribe(function (data) {
            if (!data) {
                // this.router.navigate(['']);
            }
            else {
                _this.photoUrl = data.photoURL;
                _this.displayName = data.displayName;
                console.log(data);
                _this.userData = data;
                _this.userService.currentUser.next(data);
                _this.router.navigate(['/home']);
            }
        });
    };
    AppComponent.prototype.login = function () {
        this.af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.logout = function () {
        this.af.auth.signOut().then(function (data) {
            // window.location.assign('https://accounts.google.com/Logout');
            console.log(data);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_users_service__["a" /* UsersService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__ = __webpack_require__("../../../../../src/environments/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_star_rating__ = __webpack_require__("../../../../angular-star-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [{ path: 'home', loadChildren: './home/home.module#HomeModule' }];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_star_rating__["a" /* StarRatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/shared/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(http) {
        var _this = this;
        this.http = http;
        this.userData = [];
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]({});
        this.userRecords = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this.toasterSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]({});
        this.currentUser.subscribe(function (data) {
            _this.userEmail = data.email;
            _this.userName = data.displayName;
            _this.userThumbnail = data.photoURL;
        });
        this.getRecords();
    }
    UsersService.prototype.getRecords = function () {
        var _this = this;
        this.http.get("https://json-server-books.herokuapp.com/users").subscribe(function (data) {
            _this.userData = data;
            _this.userRecords.next('updated');
        });
    };
    UsersService.prototype.borrow = function (book) {
        var _this = this;
        var userBorrowed = false;
        for (var i = 0; i < this.userData.length; i++) {
            if (this.userData[i].userEmail === this.userEmail && this.userData[i].hasborrowed && this.userData[i].book.isbn === book.isbn) {
                userBorrowed = true;
            }
        }
        if (!userBorrowed) {
            this.http.post("https://json-server-books.herokuapp.com/users", {
                userEmail: this.userEmail,
                userName: this.userName,
                userThumbnail: this.userThumbnail,
                hasborrowed: true,
                book: book,
                borrowdate: new Date().toISOString().split('T')[0],
                duedate: new Date(+new Date() + 12096e5).toISOString().split('T')[0],
                returneddate: ''
            }).subscribe(function (data) {
                console.log('post success');
                _this.toasterSubject.next({
                    message: 'You have successfully borrowed this book!',
                    success: true,
                    title: 'Done!'
                });
                _this.getRecords();
            });
        }
        else {
            this.toasterSubject.next({
                message: 'You have already borrowed this book!',
                success: false,
                title: 'Error'
            });
        }
    };
    UsersService.prototype.return = function (book) {
        var _this = this;
        var id = '';
        var hasborrowed = false;
        for (var i = 0; i < this.userData.length; i++) {
            if (book.isbn === this.userData[i].book.isbn && this.userEmail === this.userData[i].userEmail && this.userData[i].hasborrowed) {
                hasborrowed = true;
                var modifiedRecord = Object.assign({}, this.userData[i]);
                modifiedRecord.hasborrowed = false;
                modifiedRecord.returneddate = new Date().toISOString().split('T')[0];
                this.http.put("https://json-server-books.herokuapp.com/users/" + this.userData[i].id, modifiedRecord).subscribe(function (data) {
                    _this.getRecords();
                    _this.toasterSubject.next({
                        message: 'You have successfully returned this book!',
                        success: true,
                        title: 'Returned!'
                    });
                });
            }
        }
        if (!hasborrowed) {
            this.toasterSubject.next({
                message: 'You have not borrowed this book',
                success: false,
                title: 'Oops!'
            });
        }
    };
    UsersService.prototype.queryUserRecords = function (params) {
        return this.http.get('https://json-server-books.herokuapp.com/users', { params: params });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/environments/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyBKeim1cfIHq_qQBm2bByzfuz9Lt1dkuP4",
    authDomain: "any-time-library-e1619.firebaseapp.com",
    databaseURL: "https://any-time-library-e1619.firebaseio.com",
    projectId: "any-time-library-e1619",
    storageBucket: "any-time-library-e1619.appspot.com",
    messagingSenderId: "169174302047"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
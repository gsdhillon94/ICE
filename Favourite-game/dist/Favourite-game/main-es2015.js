(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"favouriteTeam == null\">\r\n  <div class=\"row text-center\" *ngIf=\"teams\">\r\n    <div class=\"col-lg-3 col-md-6 mb-4\" *ngFor=\"let team of teams\">\r\n      <div class=\"card h-100\">\r\n        <img\r\n          class=\"card-img-center\" style=\"width:200px; height: 130px;\"\r\n          src=\"https://squiggle.com.au/{{team.logo }}\"\r\n          alt=\"\"\r\n        />\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">{{ team.name }}</h4>\r\n          <!-- <p class=\"card-text\">{{ team.id }} - {{ team.abbrev }}</p> -->\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn-primary\" (click)=\"setfavouriteTeam(team)\">\r\n            Select\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div>Selected Team {{favouriteTeam.name}} </div> -->\r\n\r\n<app-detail></app-detail>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/all-games/all-games.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/all-games/all-games.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<h3>Games so far for: {{ favouriteTeam.name }}</h3>\r\n\r\n<table class=\"table\">\r\n        \r\n        <thead class=\"thead-dark\">\r\n        <tr>\r\n                <th>Away Team</th>\r\n                <th></th>\r\n                <th>Home Team</th>\r\n                <th>Winner</th>\r\n                <th>Venue</th>\r\n        </tr>\r\n        </thead>\r\n        <tr *ngFor='let x of getAllMatches()'> \r\n                <td>{{x.ateam}}</td>\r\n                <td> VS </td>\r\n                <td>{{x.hteam}}</td>\r\n                <td class=\"demo1\">{{x.winner}}</td>\r\n                <td >{{x.venue}}</td>\r\n        </tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/detail.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/detail.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">{{favouriteTeam.name}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" value=\"All Games\"\r\n        [ngClass]=\"{ selected: isSelected('All Games') }\"\r\n        (click)=\"setActive($event)\">All Games<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" value=\"H2H Games\"\r\n        [ngClass]=\"{ selected: isSelected('H2H Games') }\"\r\n        (click)=\"setActive($event)\">Head to Head</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" value=\"Upcoming Games\"\r\n        [ngClass]=\"{ selected: isSelected('Upcoming Games') }\"\r\n        (click)=\"setActive($event)\">Upcoming Games</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" value=\"Predictions\"\r\n        [ngClass]=\"{ selected: isSelected('Predictions') }\"\r\n        (click)=\"setActive($event)\">Next Game Predictions</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" value=\"PastPredictions\"\r\n        [ngClass]=\"{ selected: isSelected('PastPredictions') }\"\r\n        (click)=\"setActive($event)\">Past Predictions</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" value=\"Standings\"\r\n        [ngClass]=\"{ selected: isSelected('Standings') }\"\r\n        (click)=\"setActive($event)\">Standings</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" value=\"Rankings\"\r\n        [ngClass]=\"{ selected: isSelected('Rankings') }\"\r\n        (click)=\"setActive($event)\">Rankings</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" value=\"Games Nearby\"\r\n        [ngClass]=\"{ selected: isSelected('Games Nearby') }\"\r\n        (click)=\"setActive($event)\">Games Nearby</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"favouriteTeam != null\">\r\n  <!-- <div>\r\n    <div class=\"col-sm-3\">\r\n      <select\r\n        name=\"TeamSelectionDropdown\"\r\n        #TeamSelectionDropdown\r\n        [(ngModel)]=\"favouriteTeam\"\r\n      >\r\n        <option *ngFor=\"let team of teams\" [ngValue]=\"team\">\r\n          {{ team.name }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-sm-9 favTeam\">\r\n      <h1>{{ favouriteTeam.name }}</h1>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"col-sm-12 button-nav\">\r\n    <button\r\n      class=\"nav-button\"\r\n      value=\"All Games\"\r\n      [ngClass]=\"{ selected: isSelected('All Games') }\"\r\n      (click)=\"setActive($event)\"\r\n    >\r\n      All Games\r\n    </button>\r\n    <button\r\n      class=\"nav-button\"\r\n      value=\"H2H Games\"\r\n      [ngClass]=\"{ selected: isSelected('H2H Games') }\"\r\n      (click)=\"setActive($event)\"\r\n    >\r\n      Head to Head\r\n    </button>\r\n    <button\r\n      class=\"nav-button\"\r\n      value=\"Upcoming Games\"\r\n      [ngClass]=\"{ selected: isSelected('Upcoming Games') }\"\r\n      (click)=\"setActive($event)\"\r\n    >\r\n      Upcoming Games\r\n    </button>\r\n\r\n    <button\r\n      class=\"nav-button\"\r\n      value=\"Predictions\"\r\n      [ngClass]=\"{ selected: isSelected('Predictions') }\"\r\n      (click)=\"setActive($event)\"\r\n    >\r\n      Next Game Predictions\r\n    </button>\r\n\r\n    <button\r\n      class=\"nav-button\"\r\n      value=\"PastPredictions\"\r\n      [ngClass]=\"{ selected: isSelected('PastPredictions') }\"\r\n      (click)=\"setActive($event)\"\r\n    >\r\n      Past Predictions\r\n    </button>\r\n\r\n    <button\r\n      class=\"nav-button\"\r\n      value=\"Standings\"\r\n      [ngClass]=\"{ selected: isSelected('Standings') }\"\r\n      (click)=\"setActive($event)\"\r\n    >\r\n      Standings\r\n    </button>\r\n    \r\n    <button\r\n      class=\"nav-button\"\r\n      value=\"Rankings\"\r\n      [ngClass]=\"{ selected: isSelected('Rankings') }\"\r\n      (click)=\"setActive($event)\"\r\n    >\r\n      Rankings\r\n    </button>\r\n\r\n    <button\r\n      class=\"nav-button\"\r\n      value=\"Games Nearby\"\r\n      [ngClass]=\"{ selected: isSelected('Games Nearby') }\"\r\n      (click)=\"setActive($event)\"\r\n    >\r\n      Games Nearby\r\n    </button>\r\n  </div>  \r\n  <div class=\"col-sm-12\" *ngIf=\"activeTab === 'All Games'\">\r\n    <app-all-games [favouriteTeam]=\"favouriteTeam\"></app-all-games>\r\n  </div>\r\n  <div class=\"col-sm-12\" *ngIf=\"activeTab === 'H2H Games'\">\r\n    <app-h2-hgames\r\n      [favouriteTeam]=\"favouriteTeam\"\r\n      [teams]=\"teams\"\r\n    ></app-h2-hgames>\r\n  </div>\r\n  <div class=\"col-sm-12\" *ngIf=\"activeTab === 'Upcoming Games'\">\r\n    <app-upcoming-games [favouriteTeam]=\"favouriteTeam\"></app-upcoming-games>\r\n  </div>\r\n  <div class=\"col-sm-12\" *ngIf=\"activeTab === 'Rankings'\">\r\n    <app-rankings [favouriteTeam]=\"favouriteTeam\"></app-rankings>\r\n  </div>\r\n  <div class=\"col-sm-12\" *ngIf=\"activeTab === 'Predictions'\">\r\n    <app-predictions [favouriteTeam]=\"favouriteTeam\"></app-predictions>\r\n  </div>\r\n  <div class=\"col-sm-12\" *ngIf=\"activeTab === 'PastPredictions'\">\r\n    <past-predictions [favouriteTeam]=\"favouriteTeam\"></past-predictions>\r\n  </div>\r\n  <div class=\"col-sm-12\" *ngIf=\"activeTab === 'Games Nearby'\">\r\n    <app-nearby-venue></app-nearby-venue>\r\n  </div>\r\n  <div class=\"col-sm-12\" *ngIf=\"activeTab === 'Standings'\">\r\n    <app-standings [favouriteTeam]=\"favouriteTeam\"></app-standings>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/h2-hgames/h2-hgames.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/h2-hgames/h2-hgames.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>Select rival team</span>\r\n<select\r\n  #rivalTeamSelectionDropdown\r\n  (change)=\"onRivalTeamChange(rivalTeamSelectionDropdown.value)\"\r\n>\r\n  <option value=\"\" disabled=\"true\" [selected]=\"true\">--please select--</option>\r\n  <option *ngFor=\"let rival of rivalTeams\" [value]=\"rival.id\">\r\n    {{ rival.name }}\r\n  </option>\r\n</select>\r\n\r\n  <table class=\"table\" *ngIf =\"matches.length != 0\">\r\n        \r\n    <thead class=\"thead-dark\">\r\n    <tr>\r\n            <th>Away Team</th>\r\n            <th></th>\r\n            <th>Home Team</th>\r\n            <th>Winner</th>\r\n            <th>Year</th>\r\n    </tr>\r\n    </thead>\r\n    <tr *ngFor='let x of matches'> \r\n            <td>{{x.ateam}}</td>\r\n            <td> VS </td>\r\n            <td>{{x.hteam}}</td>\r\n            <td class=\"demo3\">{{x.winner}}</td>\r\n            <td>{{x.year}}</td>\r\n    </tr>\r\n  </table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/nearby-venue/nearby-venue.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/nearby-venue/nearby-venue.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <form>\r\n  <agm-map\r\n    style=\"height: 300px;\"\r\n    [latitude]=\"lat\"\r\n    [longitude]=\"lng\"\r\n    [zoom]=\"zoom\"\r\n    (mapClick)=\"mapClicked($event)\"\r\n  >\r\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n  </agm-map>\r\n</form> -->\r\n<div class=\"col-sm-12\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 heading\">Team 1</div>\r\n    <div class=\"col-sm-3 heading\">Team 2</div>\r\n    <div class=\"col-sm-3 heading\">Location</div>\r\n    <div class=\"col-sm-3 heading\">Distance</div>\r\n  </div>\r\n  <div class=\"row\" *ngFor=\"let match of getMatchesNearby()\">\r\n    <div class=\"col-sm-3 value\">{{ match.ateam }}</div>\r\n    <div class=\"col-sm-3 value\">{{ match.hteam }}</div>\r\n    <div class=\"col-sm-3 value\">{{ match.venue }}</div>\r\n    <div class=\"col-sm-3 value\">{{ match.distance }}</div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/past-predictions/past-predictions.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/past-predictions/past-predictions.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\" *ngIf =\"tips\">\r\n        \r\n        <thead class=\"thead-dark\">\r\n        <tr>\r\n                <th>Away Team</th>\r\n                <th></th>\r\n                <th>Home Team</th>\r\n                <th>Tip For</th>\r\n                <th>Correct</th>\r\n        </tr>\r\n        </thead>\r\n        <tr *ngFor='let x of tips'> \r\n                <td>{{x.ateam}}</td>\r\n                <td> VS </td>\r\n                <td>{{x.hteam}}</td>\r\n                <td class=\"tipsfor\">{{x.tip}}</td>\r\n                <td >{{x.correct}}</td>\r\n        </tr>\r\n</table>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/predictions/predictions.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/predictions/predictions.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3> Next Game: {{tips[1].hteam}} VS {{tips[1].ateam}} </h3>\r\n\r\n<table class=\"table\" *ngIf =\"tips\">\r\n        <thead class=\"thead-dark\">\r\n        <tr>\r\n                <th>Source</th>\r\n                <th>Confidence</th>\r\n                <th>Tip</th>\r\n        </tr>\r\n        </thead>\r\n        <tr *ngFor='let x of tips'> \r\n                <td>{{x.source}}</td>\r\n                <td>{{x.confidence}}</td>\r\n                <td class=\"tip\">{{x.tip}}</td>\r\n        </tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/rankings/rankings.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/rankings/rankings.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <table class=\"table\" *ngIf =\"Standings\">\n    <thead class=\"thead-dark\">\n        <tr>\n        <th>NAME</th>\n        <th>RANK</th>\n\n    </tr>\n    </thead>\n    <tr *ngFor=\"let Standing of Standings\"> \n            <td>{{Standing.name}}</td>\n            <td class=\"Demo\">{{Standing.rank}}</td>\n    </tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/standings/standings.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/standings/standings.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <table class=\"table\" *ngIf =\"Standings\">\r\n    <thead class=\"thead-dark\">\r\n        <tr><th>NAME:  {{Standings[0].name}} </th></tr>\r\n    </thead>\r\n    \r\n    <tr><td>RANK:  {{Standings[0].rank}} </td></tr>\r\n    <tr><td>WINS:  {{Standings[0].wins}} </td></tr>\r\n    <tr><td>LOSSES:  {{Standings[0].losses}} </td></tr>\r\n    <tr><td>GOALS FOR:  {{Standings[0].goals_for}} </td></tr>\r\n    <tr><td>GOALS AGAINST:  {{Standings[0].goals_against}} </td></tr>\r\n    <tr><td>DRAWS:  {{Standings[0].draws}} </td></tr>\r\n\r\n    </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/upcoming-games/upcoming-games.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/upcoming-games/upcoming-games.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<h3>Upcoming Matches for: {{favouriteTeam.name}}  </h3>\r\n\r\n<table class=\"table\" *ngIf =\"matches\">\r\n  <thead class=\"thead-dark\">\r\n  <tr>\r\n          <th>Away Team</th>\r\n          <th></th>\r\n          <th>Home Team</th>\r\n          <th>Date</th>\r\n  </tr>\r\n  </thead>\r\n  <tr *ngFor='let x of matches'> \r\n          <td>{{x.ateam}}</td>\r\n          <td>VS</td>\r\n          <td>{{x.hteam}}</td>\r\n          <td class=\"demo2\">{{x.date | date}}</td>\r\n  </tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">Select Favourite Team</div>\r\n<div\r\n  *ngFor=\"let team of allTeams\"\r\n  class=\"teams\"\r\n  [ngClass]=\"{ favourite: isFav(team.name) }\"\r\n  (click)=\"onTeamSelect(team)\"\r\n>\r\n  {{ team.name }} ({{ team.abbrev }})\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




const routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Favourite game';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _details_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/detail.component */ "./src/app/details/detail.component.ts");
/* harmony import */ var _details_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/all-games/all-games.component */ "./src/app/details/all-games/all-games.component.ts");
/* harmony import */ var _details_h2_hgames_h2_hgames_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details/h2-hgames/h2-hgames.component */ "./src/app/details/h2-hgames/h2-hgames.component.ts");
/* harmony import */ var _details_upcoming_games_upcoming_games_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details/upcoming-games/upcoming-games.component */ "./src/app/details/upcoming-games/upcoming-games.component.ts");
/* harmony import */ var _details_nearby_venue_nearby_venue_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details/nearby-venue/nearby-venue.component */ "./src/app/details/nearby-venue/nearby-venue.component.ts");
/* harmony import */ var _details_predictions_predictions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details/predictions/predictions.component */ "./src/app/details/predictions/predictions.component.ts");
/* harmony import */ var _details_past_predictions_past_predictions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./details/past-predictions/past-predictions.component */ "./src/app/details/past-predictions/past-predictions.component.ts");
/* harmony import */ var _details_standings_standings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./details/standings/standings.component */ "./src/app/details/standings/standings.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _details_rankings_rankings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./details/rankings/rankings.component */ "./src/app/details/rankings/rankings.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"],
            _details_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"],
            _details_all_games_all_games_component__WEBPACK_IMPORTED_MODULE_10__["AllGamesComponent"],
            _details_h2_hgames_h2_hgames_component__WEBPACK_IMPORTED_MODULE_11__["H2HGamesComponent"],
            _details_upcoming_games_upcoming_games_component__WEBPACK_IMPORTED_MODULE_12__["UpcomingGamesComponent"],
            _details_nearby_venue_nearby_venue_component__WEBPACK_IMPORTED_MODULE_13__["NearbyVenueComponent"],
            _details_predictions_predictions_component__WEBPACK_IMPORTED_MODULE_14__["PredictionsComponent"],
            _details_past_predictions_past_predictions_component__WEBPACK_IMPORTED_MODULE_15__["PastPredictionsComponent"],
            _details_standings_standings_component__WEBPACK_IMPORTED_MODULE_16__["StandingsComponent"],
            _details_rankings_rankings_component__WEBPACK_IMPORTED_MODULE_18__["RankingsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyDNKz1vuaimJ7ZuwlsklotXG0ccfuK9i4U",
            }),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n  padding-top: 56px;\r\n}\r\n\r\n.bg-blue {\r\n  background-color: blue;\r\n}\r\n\r\n.bg-yellow {\r\n  background-color: yellow;\r\n}\r\n\r\n.bg-red {\r\n  background-color: red;\r\n}\r\n\r\n.no-pad-h {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiA1NnB4O1xyXG59XHJcblxyXG4uYmctYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4uYmcteWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLmJnLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbi5uby1wYWQtaCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
        this.allTeams();
    }
    ngOnInit() { }
    allTeams() {
        this.dataservice.getAllTeamsHttp().subscribe((temp) => {
            this.teams = temp;
        });
    }
    navigation(team) {
        this.favouriteTeam = team;
    }
    setfavouriteTeam(team) {
        this.dataservice.favTeam(team);
        this.favouriteTeam = team;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/data-service/data-service.service.ts":
/*!******************************************************!*\
  !*** ./src/app/data-service/data-service.service.ts ***!
  \******************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _team_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team/team */ "./src/app/data-service/team/team.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game */ "./src/app/data-service/game/game.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _tips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tips */ "./src/app/data-service/tips.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teams */ "./src/app/data-service/teams.ts");
/* harmony import */ var _standings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./standings */ "./src/app/data-service/standings.ts");










let DataServiceService = class DataServiceService {
    constructor(http) {
        this.http = http;
        this.favouriteTeam = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.setAllMatches();
    }
    setTeams(teams) {
        this.teams = teams;
    }
    getSavedTeams() {
        return this.teams;
    }
    getTeams() {
        return this.http
            .get("https://api.squiggle.com.au/?q=teams")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => data.teams.map((item) => new _team_team__WEBPACK_IMPORTED_MODULE_2__["Team"](item.name, item.id, item.abbrev, item.logo))));
    }
    getAllMatches() {
        return this.allMatches;
    }
    getStandings() {
        return this.http
            .get("https://api.squiggle.com.au/?q=standings")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => data.standings.map((item) => new _standings__WEBPACK_IMPORTED_MODULE_9__["Standings"](item.goals_against, item.id, item.rank, item.behinds_against, item.pts, item.behinds_for, item.draws, item.wins, item.against, item.losses, item.name, item.played, item.goals_for, item.percentage))));
    }
    getAllTeamsHttp() {
        return this.http
            .get("https://api.squiggle.com.au/?q=teams")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => data.teams.map((item) => new _teams__WEBPACK_IMPORTED_MODULE_8__["Teams"](item.logo, item.id, item.abbrev, item.name))));
    }
    getTips() {
        return this.http
            .get("https://api.squiggle.com.au/?q=tips;year=2019;round=20")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => data.tips.map((item) => new _tips__WEBPACK_IMPORTED_MODULE_6__["Tips"](item.hteamid, item.tip, item.ateamid, item.year, item.venue, item.tipteamid, item.sourceid, item.date, item.source, item.ateam, item.round, item.confidence, item.correct, item.gameid, item.updated, item.margin, item.hconfidence, item.err, item.bits, item.hteam))));
    }
    getTipsPast() {
        return this.http
            .get("https://api.squiggle.com.au/?q=tips;year=2018;source=1")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => data.tips.map((item) => new _tips__WEBPACK_IMPORTED_MODULE_6__["Tips"](item.hteamid, item.tip, item.ateamid, item.year, item.venue, item.tipteamid, item.sourceid, item.date, item.source, item.ateam, item.round, item.confidence, item.correct, item.gameid, item.updated, item.margin, item.hconfidence, item.err, item.bits, item.hteam))));
    }
    setAllMatches() {
        this.getAllGames().subscribe((data) => {
            this.allMatches = data;
        });
    }
    getAllGames() {
        return this.http
            .get("https://api.squiggle.com.au/?q=games;year=2019")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => data.games.map((item) => new _game_game__WEBPACK_IMPORTED_MODULE_3__["Game"](item.hteam, item.is_grand_final, item.ascore, item.upated, item.hgoals, item.abehinds, item.hbehinds, item.hscore, item.ateamid, item.id, item.is_final, item.complete, item.winner, item.round, item.year, item.venue, item.winnerteamid, item.agoals, item.ateam, item.date, item.hteamid, item.tz))));
    }
    favTeam(team) {
        this.favouriteTeam.next(team);
    }
    getUpcomingMatches() {
        return this.http
            .get("https://api.squiggle.com.au/?q=games;year=2019")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => data.games.map((item) => new _game_game__WEBPACK_IMPORTED_MODULE_3__["Game"](item.hteam, item.is_grand_final, item.ascore, item.upated, item.hgoals, item.abehinds, item.hbehinds, item.hscore, item.ateamid, item.id, item.is_final, item.complete, item.winner, item.round, item.year, item.venue, item.winnerteamid, item.agoals, item.ateam, item.date, item.hteamid, item.tz))));
        // const matches = this.upComingMatches.games
        //   .filter((m) => m.ateamid == id || m.hteamid == id)
        //   .sort((a, b) => b.date - a.date)
        //   .slice(0, 5);
        // return matches;
    }
    getAllRivalTeams(teamName) {
        // let data = [{}];
        // this.allTeams.teams.forEach((team) => {
        //   if (team.name != this.favouriteTeam.name) {
        //     data.push(team);
        //   }
        // });
        // data.shift();
        // return data;
    }
    getMatchesRivals(team1, team2) {
        let data = [{}];
        this.allMatches.forEach((match) => {
            if ((match.hteam == team1 || match.ateam == team1) &&
                (match.hteam == team2 || match.ateam == team2)) {
                data.push(match);
            }
        });
        console.log(data);
        // data.shift();
        return data;
    }
    getDistance(venue, lat, lng) {
        let url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" +
            lat +
            "," +
            lng +
            "&destinations=" +
            venue +
            "&key=AIzaSyDNKz1vuaimJ7ZuwlsklotXG0ccfuK9i4U";
        return this.http.get(url);
    }
};
DataServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DataServiceService);



/***/ }),

/***/ "./src/app/data-service/game/game.ts":
/*!*******************************************!*\
  !*** ./src/app/data-service/game/game.ts ***!
  \*******************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Game {
    constructor(hteam, is_grand_final, ascore, updated, hgoals, abehinds, hbehinds, hscore, ateamid, id, is_final, complete, winner, round, year, venue, winnerteamid, agoals, ateam, date, hteamid, tz, distance) {
        this.hteam = hteam;
        this.is_grand_final = is_grand_final;
        this.ascore = ascore;
        this.updated = updated;
        this.hgoals = hgoals;
        this.abehinds = abehinds;
        this.hbehinds = hbehinds;
        this.hscore = hscore;
        this.ateamid = ateamid;
        this.id = id;
        this.is_final = is_final;
        this.complete = complete;
        this.winner = winner;
        this.round = round;
        this.year = year;
        this.venue = venue;
        this.winnerteamid = winnerteamid;
        this.agoals = agoals;
        this.ateam = ateam;
        this.date = date;
        this.hteamid = hteamid;
        this.tz = tz;
        this.distance = distance;
    }
}


/***/ }),

/***/ "./src/app/data-service/standings.ts":
/*!*******************************************!*\
  !*** ./src/app/data-service/standings.ts ***!
  \*******************************************/
/*! exports provided: Standings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Standings", function() { return Standings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Standings {
    constructor(goals_against, id, rank, behinds_against, pts, behinds_for, draws, wins, against, losses, name, played, goals_for, percentage) {
        this.goals_against = goals_against;
        this.id = id;
        this.rank = rank;
        this.behinds_against = behinds_against;
        this.pts = pts;
        this.behinds_for = behinds_for;
        this.draws = draws;
        this.wins = wins;
        this.against = against;
        this.losses = losses;
        this.name = name;
        this.played = played;
        this.goals_for = goals_for;
        this.percentage = percentage;
    }
}


/***/ }),

/***/ "./src/app/data-service/team/team.ts":
/*!*******************************************!*\
  !*** ./src/app/data-service/team/team.ts ***!
  \*******************************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Team {
    constructor(name, id, abbrev, logo) {
        this.name = name;
        this.id = id;
        this.abbrev = abbrev;
        this.logo = logo;
    }
}


/***/ }),

/***/ "./src/app/data-service/teams.ts":
/*!***************************************!*\
  !*** ./src/app/data-service/teams.ts ***!
  \***************************************/
/*! exports provided: Teams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teams", function() { return Teams; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Teams {
    constructor(logo, id, abbrev, name) {
        this.logo = logo;
        this.id = id;
        this.abbrev = abbrev;
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/data-service/tips.ts":
/*!**************************************!*\
  !*** ./src/app/data-service/tips.ts ***!
  \**************************************/
/*! exports provided: Tips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tips", function() { return Tips; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Tips {
    constructor(hteamid, tip, ateamid, year, venue, tipteamid, sourceid, date, source, ateam, round, confidence, correct, gameid, updated, margin, hconfidence, err, bits, hteam) {
        this.hteamid = hteamid;
        this.tip = tip;
        this.ateamid = ateamid;
        this.year = year;
        this.venue = venue;
        this.tipteamid = tipteamid;
        this.sourceid = sourceid;
        this.date = date;
        this.source = source;
        this.ateam = ateam;
        this.round = round;
        this.confidence = confidence;
        this.correct = correct;
        this.gameid = gameid;
        this.updated = updated;
        this.margin = margin;
        this.hconfidence = hconfidence;
        this.err = err;
        this.bits = bits;
        this.hteam = hteam;
    }
}


/***/ }),

/***/ "./src/app/details/all-games/all-games.component.css":
/*!***********************************************************!*\
  !*** ./src/app/details/all-games/all-games.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo1{\r\n    background-color: lightcoral;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9hbGwtZ2FtZXMvYWxsLWdhbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2FsbC1nYW1lcy9hbGwtZ2FtZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/details/all-games/all-games.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/details/all-games/all-games.component.ts ***!
  \**********************************************************/
/*! exports provided: AllGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllGamesComponent", function() { return AllGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let AllGamesComponent = class AllGamesComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
    getAllMatches() {
        let data = [];
        let x = 0;
        let y = 0;
        this.data.getAllMatches().forEach((i) => {
            if (i.hteam == this.favouriteTeam.name ||
                i.ateam == this.favouriteTeam.name) {
                data.push(i);
            }
            x++;
        });
        return data;
    }
};
AllGamesComponent.ctorParameters = () => [
    { type: _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AllGamesComponent.prototype, "favouriteTeam", void 0);
AllGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-all-games",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-games.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/all-games/all-games.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-games.component.css */ "./src/app/details/all-games/all-games.component.css")).default]
    })
], AllGamesComponent);



/***/ }),

/***/ "./src/app/details/detail.component.css":
/*!**********************************************!*\
  !*** ./src/app/details/detail.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favTeam {\r\n  text-align: center;\r\n}\r\n.button-nav {\r\n  width: 100%;\r\n  text-align: center;\r\n  border-bottom: 1px solid #000000;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.nav-button {\r\n  background: none;\r\n  border: none;\r\n  border-left: 1px solid;\r\n  color:grey;\r\n}\r\n.nav-button:nth-child(1) {\r\n  border: none;\r\n}\r\n.selected {\r\n  font-weight: 700;\r\n  color: #ff0000;\r\n}\r\n.select-team-heading {\r\n  text-align: center;\r\n  font-weight: 700;\r\n  padding: 10rem;\r\n  font-size: 3rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZUZWFtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbi1uYXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuLm5hdi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgY29sb3I6Z3JleTtcclxufVxyXG5cclxuLm5hdi1idXR0b246bnRoLWNoaWxkKDEpIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG4uc2VsZWN0LXRlYW0taGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMTByZW07XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/details/detail.component.ts":
/*!*********************************************!*\
  !*** ./src/app/details/detail.component.ts ***!
  \*********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let DetailComponent = class DetailComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
        this.activeTab = "All Games";
        this.allTeams();
        this.getFavTeam();
    }
    getFavTeam() {
        this.dataservice.favouriteTeam.subscribe((team) => {
            this.favouriteTeam = team;
        });
    }
    allTeams() {
        this.dataservice.getAllTeamsHttp().subscribe((temp) => {
            this.teams = temp;
        });
    }
    ngOnInit() { }
    setActive(event) {
        this.activeTab = event.target.value;
    }
    isSelected(tab) {
        if (tab === this.activeTab) {
            return true;
        }
        return false;
    }
};
DetailComponent.ctorParameters = () => [
    { type: _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.css */ "./src/app/details/detail.component.css")).default]
    })
], DetailComponent);



/***/ }),

/***/ "./src/app/details/h2-hgames/h2-hgames.component.css":
/*!***********************************************************!*\
  !*** ./src/app/details/h2-hgames/h2-hgames.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo3{\r\n\r\n    background-color: lightskyblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9oMi1oZ2FtZXMvaDItaGdhbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9oMi1oZ2FtZXMvaDItaGdhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtbzN7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/details/h2-hgames/h2-hgames.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/details/h2-hgames/h2-hgames.component.ts ***!
  \**********************************************************/
/*! exports provided: H2HGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2HGamesComponent", function() { return H2HGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let H2HGamesComponent = class H2HGamesComponent {
    constructor(data) {
        this.data = data;
        this.rivalTeams = [];
        this.matches = [];
    }
    ngOnInit() {
        this.getAllRivalTeams();
    }
    onRivalTeamChange(team) {
        this.rivalTeamId = team;
        this.getAllMatches();
    }
    getAllMatches() {
        let data;
        this.matches = [];
        data = this.data.getAllMatches();
        console.log(this.rivalTeamId);
        for (let match of data) {
            if ((match.ateamid == this.rivalTeamId &&
                match.hteamid == this.favouriteTeam.id) ||
                (match.ateamid == this.favouriteTeam.id &&
                    match.hteamid == this.rivalTeamId)) {
                this.matches.push(match);
            }
        }
    }
    getAllRivalTeams() {
        for (let team of this.teams) {
            if (team.id != this.favouriteTeam.id) {
                this.rivalTeams.push(team);
            }
        }
        console.log(this.rivalTeams);
    }
    ngOnChanges(changes) {
        this.favouriteTeam = changes.favouriteTeam.currentValue;
        this.matches = [];
        this.rivalTeamId = 0;
    }
};
H2HGamesComponent.ctorParameters = () => [
    { type: _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], H2HGamesComponent.prototype, "favouriteTeam", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], H2HGamesComponent.prototype, "teams", void 0);
H2HGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-h2-hgames",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./h2-hgames.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/h2-hgames/h2-hgames.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./h2-hgames.component.css */ "./src/app/details/h2-hgames/h2-hgames.component.css")).default]
    })
], H2HGamesComponent);



/***/ }),

/***/ "./src/app/details/nearby-venue/nearby-venue.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/details/nearby-venue/nearby-venue.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvbmVhcmJ5LXZlbnVlL25lYXJieS12ZW51ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/details/nearby-venue/nearby-venue.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/details/nearby-venue/nearby-venue.component.ts ***!
  \****************************************************************/
/*! exports provided: NearbyVenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyVenueComponent", function() { return NearbyVenueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let NearbyVenueComponent = class NearbyVenueComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.lng = 0;
        this.lat = 0;
        this.allGames = this.dataService.getAllMatches();
        this.distinctVenues = Array.from(new Set(this.allGames.map((x) => x.venue))).map((venue) => {
            return {
                venue: venue,
                distance: 0,
            };
        });
        this.formatVenues();
        this.getCurrentLocation();
        this.getDistanceForVenues();
    }
    ngOnInit() { }
    formatVenues() {
        let i = 0;
        this.distinctVenues.forEach((venue) => {
            this.distinctVenues[i].venue = venue.venue.replace(/ /, "+");
            i++;
        });
        console.log(this.distinctVenues);
    }
    getDistanceForVenues() {
        let x = 0;
        this.distinctVenues.forEach((venue) => {
            this.dataService
                .getDistance(venue, this.lng, this.lat)
                .subscribe((data) => {
                this.distinctVenues[x].distance = data;
            });
        });
        let y = 0;
        let z = 0;
        this.allGames.forEach((game) => {
            this.distinctVenues.forEach((venue) => {
                z = 0;
                if (game.venue == venue.venue) {
                    this.allGames[y].distance = this.distinctVenues[z].distance;
                }
            });
        });
    }
    getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                }
            });
        }
    }
    getMatchesNearby() {
        return this.allGames;
    }
};
NearbyVenueComponent.ctorParameters = () => [
    { type: _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
NearbyVenueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nearby-venue",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nearby-venue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/nearby-venue/nearby-venue.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nearby-venue.component.css */ "./src/app/details/nearby-venue/nearby-venue.component.css")).default]
    })
], NearbyVenueComponent);



/***/ }),

/***/ "./src/app/details/past-predictions/past-predictions.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/details/past-predictions/past-predictions.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tipsfor{\r\n    background-color: lawngreen;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9wYXN0LXByZWRpY3Rpb25zL3Bhc3QtcHJlZGljdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvcGFzdC1wcmVkaWN0aW9ucy9wYXN0LXByZWRpY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlwc2ZvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhd25ncmVlbjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/details/past-predictions/past-predictions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/details/past-predictions/past-predictions.component.ts ***!
  \************************************************************************/
/*! exports provided: PastPredictionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastPredictionsComponent", function() { return PastPredictionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let PastPredictionsComponent = class PastPredictionsComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.tipsForFavTeam(this.favouriteTeam.id);
    }
    tipsForFavTeam(id) {
        this.dataService.getTipsPast().subscribe(temp => {
            this.tips = temp.filter(x => {
                return x.ateamid == id || x.hteamid == id;
            });
            console.log("tips", this.tips);
        });
    }
};
PastPredictionsComponent.ctorParameters = () => [
    { type: src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PastPredictionsComponent.prototype, "favouriteTeam", void 0);
PastPredictionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'past-predictions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./past-predictions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/past-predictions/past-predictions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./past-predictions.component.css */ "./src/app/details/past-predictions/past-predictions.component.css")).default]
    })
], PastPredictionsComponent);



/***/ }),

/***/ "./src/app/details/predictions/predictions.component.css":
/*!***************************************************************!*\
  !*** ./src/app/details/predictions/predictions.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tip{\r\n    background-color: orangered;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9wcmVkaWN0aW9ucy9wcmVkaWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9wcmVkaWN0aW9ucy9wcmVkaWN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/details/predictions/predictions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/details/predictions/predictions.component.ts ***!
  \**************************************************************/
/*! exports provided: PredictionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsComponent", function() { return PredictionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let PredictionsComponent = class PredictionsComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.tipsForFavTeam(this.favouriteTeam.id);
    }
    tipsForFavTeam(id) {
        this.dataService.getTips().subscribe(temp => {
            this.tips = temp.filter(x => x.ateamid == id || x.hteamid == id);
            console.log("tips", this.tips);
        });
    }
};
PredictionsComponent.ctorParameters = () => [
    { type: src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PredictionsComponent.prototype, "favouriteTeam", void 0);
PredictionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-predictions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./predictions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/predictions/predictions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./predictions.component.css */ "./src/app/details/predictions/predictions.component.css")).default]
    })
], PredictionsComponent);



/***/ }),

/***/ "./src/app/details/rankings/rankings.component.css":
/*!*********************************************************!*\
  !*** ./src/app/details/rankings/rankings.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Demo{\r\n    background-color: rosybrown;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9yYW5raW5ncy9yYW5raW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCOztBQUUvQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvcmFua2luZ3MvcmFua2luZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5EZW1ve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm9zeWJyb3duO1xyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/details/rankings/rankings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details/rankings/rankings.component.ts ***!
  \********************************************************/
/*! exports provided: RankingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingsComponent", function() { return RankingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let RankingsComponent = class RankingsComponent {
    constructor(DataService) {
        this.DataService = DataService;
    }
    ngOnInit() {
        this.getStandings(this.favouriteTeam.id);
    }
    getStandings(id) {
        this.DataService.getStandings().subscribe(temp => {
            this.Standings = temp;
        });
    }
};
RankingsComponent.ctorParameters = () => [
    { type: src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RankingsComponent.prototype, "favouriteTeam", void 0);
RankingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rankings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rankings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/rankings/rankings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rankings.component.css */ "./src/app/details/rankings/rankings.component.css")).default]
    })
], RankingsComponent);



/***/ }),

/***/ "./src/app/details/standings/standings.component.css":
/*!***********************************************************!*\
  !*** ./src/app/details/standings/standings.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main{\r\n    background-color: lightblue;\r\n    font-size: large;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9zdGFuZGluZ3Mvc3RhbmRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9zdGFuZGluZ3Mvc3RhbmRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/details/standings/standings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/details/standings/standings.component.ts ***!
  \**********************************************************/
/*! exports provided: StandingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsComponent", function() { return StandingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let StandingsComponent = class StandingsComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.getStandings(this.favouriteTeam.id);
    }
    getStandings(id) {
        this.dataService.getStandings().subscribe(temp => {
            console.log('temp', temp);
            this.Standings = temp.filter(x => x.id == id);
            console.log('id', id);
        });
    }
};
StandingsComponent.ctorParameters = () => [
    { type: src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StandingsComponent.prototype, "favouriteTeam", void 0);
StandingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-standings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./standings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/standings/standings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./standings.component.css */ "./src/app/details/standings/standings.component.css")).default]
    })
], StandingsComponent);



/***/ }),

/***/ "./src/app/details/upcoming-games/upcoming-games.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/details/upcoming-games/upcoming-games.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo2{\r\n    background-color: lightpink;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy91cGNvbWluZy1nYW1lcy91cGNvbWluZy1nYW1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy91cGNvbWluZy1nYW1lcy91cGNvbWluZy1nYW1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/details/upcoming-games/upcoming-games.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/details/upcoming-games/upcoming-games.component.ts ***!
  \********************************************************************/
/*! exports provided: UpcomingGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingGamesComponent", function() { return UpcomingGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let UpcomingGamesComponent = class UpcomingGamesComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        this.dataService.getUpcomingMatches().subscribe((data) => {
            this.matches = data
                .filter((m) => m.ateamid == this.favouriteTeam.id ||
                m.hteamid == this.favouriteTeam.id)
                .sort((a, b) => b.date - a.date)
                .slice(0, 5);
            console.log(this.matches);
        });
    }
};
UpcomingGamesComponent.ctorParameters = () => [
    { type: src_app_data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpcomingGamesComponent.prototype, "favouriteTeam", void 0);
UpcomingGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-upcoming-games",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upcoming-games.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/upcoming-games/upcoming-games.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upcoming-games.component.css */ "./src/app/details/upcoming-games/upcoming-games.component.css")).default]
    })
], UpcomingGamesComponent);



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  color: #ffffff;\r\n  background: black;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n.teams {\r\n  text-align: center;\r\n  padding: 5px;\r\n  border: 2px solid red;\r\n}\r\n.favourite {\r\n  color: #ffffff;\r\n  border: 2px solid #ffffff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnRlYW1zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG4uZmF2b3VyaXRlIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-service/data-service.service */ "./src/app/data-service/data-service.service.ts");



let TeamComponent = class TeamComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
        this.getTeams();
    }
    ngOnInit() {
        // this.teams = teamData.teams;
    }
    getTeams() {
        this.dataservice.getTeams().subscribe((data) => {
            this.setAllTeams(data);
        });
    }
    setAllTeams(data) {
        this.allTeams = data;
    }
    onTeamSelect(team) {
        this.favTeam = team;
        this.dataservice.favTeam(team);
    }
    isFav(name) {
        // console.log(this.favTeam);
        if (this.favTeam != null) {
            if (name === this.favTeam.name) {
                return true;
            }
            else {
                return false;
            }
        }
    }
};
TeamComponent.ctorParameters = () => [
    { type: _data_service_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-team",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")).default]
    })
], TeamComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\ICE\ICE\Favourite-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
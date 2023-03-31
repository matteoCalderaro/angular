"use strict";
(self["webpackChunkangular_course"] = self["webpackChunkangular_course"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _db_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db-data */ 6764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-card/course-card.component */ 5316);




function AppComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pair_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](pair_r2.key + ":" + pair_r2.value);
  }
}
function AppComponent_course_card_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "course-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("courseSelected", function AppComponent_course_card_15_Template_course_card_courseSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onCourseSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const isFirst_r5 = ctx.first;
    const isLast_r6 = ctx.last;
    const isEven_r7 = ctx.even;
    const isOdd_r8 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-first", isFirst_r5)("is-last", isLast_r6)("is-even", isEven_r7)("is-odd", isOdd_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("course", course_r3)("cardIndex", i_r4 + 1);
  }
}
class AppComponent {
  constructor() {
    this.courses = _db_data__WEBPACK_IMPORTED_MODULE_0__.COURSES;
    this.title = _db_data__WEBPACK_IMPORTED_MODULE_0__.COURSES[0].description;
    this.startDate = new Date(2000, 0, 1);
    this.price = 9.99;
    this.rate = 0.67;
    this.course = _db_data__WEBPACK_IMPORTED_MODULE_0__.COURSES[0];
  }
  onCourseSelected(course) {
    console.log('bubbled', course);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 17,
    vars: 19,
    consts: [[1, "top-menu"], ["src", "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png", 1, "logo"], [1, "demo"], [4, "ngFor", "ngForOf"], [1, "courses"], [3, "is-first", "is-last", "is-even", "is-odd", "course", "cardIndex", "courseSelected", 4, "ngFor", "ngForOf"], [3, "course", "cardIndex", "courseSelected"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AppComponent_div_12_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AppComponent_course_card_15_Template, 1, 10, "course-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 5, ctx.startDate, "MMM dd yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 8, ctx.price, "EUR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 11, ctx.rate), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 13, ctx.course));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](16, 15, ctx.courses, 0, 2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_1__.CourseCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.PercentPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe],
    styles: [".top-menu[_ngcontent-%COMP%] {\n    background: #1976d2;\n    padding: 2px 15px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-height: 55px;\n}\n\n\n.courses[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 50px auto;\n}\n/*# sourceURL=webpack://./src/app/app.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiXG4udG9wLW1lbnUge1xuICAgIGJhY2tncm91bmQ6ICMxOTc2ZDI7XG4gICAgcGFkZGluZzogMnB4IDE1cHg7XG59XG5cbi5sb2dvIHtcbiAgbWF4LWhlaWdodDogNTVweDtcbn1cblxuXG4uY291cnNlcyB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-card/course-card.component */ 5316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_1__.CourseCardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 5316:
/*!******************************************************!*\
  !*** ./src/app/course-card/course-card.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseCardComponent": () => (/* binding */ CourseCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function CourseCardComponent_div_0_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.course.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function CourseCardComponent_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No image available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CourseCardComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CourseCardComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CourseCardComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Advanced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CourseCardComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All Levels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CourseCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CourseCardComponent_div_0_img_3_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CourseCardComponent_div_0_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div")(9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CourseCardComponent_div_0_div_10_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CourseCardComponent_div_0_div_11_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CourseCardComponent_div_0_div_12_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CourseCardComponent_div_0_div_13_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseCardComponent_div_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onCourseViewed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.cardClasses());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.cardIndex + " " + ctx_r0.course.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isImageVisible())("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.course.longDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.course.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "BEGINNER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "INTERMEDIATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ADVANCED");
  }
}
class CourseCardComponent {
  constructor() {
    this.courseSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onCourseViewed() {
    console.log('clicked');
    this.courseSelected.emit(this.course);
  }
  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }
  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
  static #_ = this.ɵfac = function CourseCardComponent_Factory(t) {
    return new (t || CourseCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CourseCardComponent,
    selectors: [["course-card"]],
    inputs: {
      course: "course",
      cardIndex: "cardIndex"
    },
    outputs: {
      courseSelected: "courseSelected"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "course-card", 3, "ngClass", 4, "ngIf"], [1, "course-card", 3, "ngClass"], [1, "course-title"], ["width", "300", "alt", "Angular Logo", 3, "src", 4, "ngIf", "ngIfElse"], ["noImage", ""], [1, "course-description"], [1, "course-category", 3, "ngSwitch"], ["class", "category", 4, "ngSwitchCase"], ["class", "category", 4, "ngSwitchDefault"], [3, "click"], ["width", "300", "alt", "Angular Logo", 3, "src"], [1, "category"]],
    template: function CourseCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CourseCardComponent_div_0_Template, 16, 9, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchDefault],
    styles: [".course-card.beginner[_ngcontent-%COMP%] {\r\n  background-color: lightsalmon;\r\n}\n/*# sourceURL=webpack://./src/app/course-card/course-card.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlLWNhcmQvY291cnNlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtBQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Vyc2UtY2FyZC5iZWdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6764:
/*!************************!*\
  !*** ./src/db-data.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COURSES": () => (/* binding */ COURSES),
/* harmony export */   "findCourseById": () => (/* binding */ findCourseById)
/* harmony export */ });
const COURSES = [{
  id: 1,
  description: "Angular core deep dive",
  longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
  lessonsCount: 10
}, {
  id: 2,
  description: "RxJs In Practice Course",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
  longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
  category: 'BEGINNER',
  lessonsCount: 10
}, {
  id: 3,
  description: 'NgRx In Depth',
  longDescription: "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
  category: 'ADVANCED'
}, {
  id: 4,
  description: "Angular for Beginners",
  iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
  longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
  category: 'BEGINNER',
  lessonsCount: 10
}, {
  id: 5,
  description: 'Angular Security Course',
  longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
  category: 'ADVANCED',
  lessonsCount: 11
}, {
  id: 6,
  description: 'Angular PWA Course',
  longDescription: "<p class='course-description'>Learn Angular Progressive Web Applications, build the future of the Web Today.",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
  category: 'ADVANCED',
  lessonsCount: 8
}, {
  id: 7,
  description: 'Angular Advanced Course',
  longDescription: "Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm",
  iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
  category: 'ADVANCED'
}, {
  id: 8,
  description: 'Complete Typescript Course',
  longDescription: "Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.",
  iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
  category: 'BEGINNER'
}, {
  id: 9,
  description: 'Angular Architecture Course',
  longDescription: "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
  iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
  category: 'BEGINNER'
}, {
  id: 10,
  description: "Angular Material Course",
  iconUrl: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
  longDescription: "Build Applications with the official Angular Widget Library",
  category: 'ADVANCED'
}];
function findCourseById(courseId) {
  return COURSES.find(course => course.id === courseId);
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-persons-view></app-persons-view>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__persons_actions_person_actions__ = __webpack_require__("../../../../../src/app/persons/actions/person.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_entities_json__ = __webpack_require__("../../../../../src/assets/entities.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_entities_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_entities_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__persons_actions_person_actions__["a" /* AddMany */](Object.keys(__WEBPACK_IMPORTED_MODULE_4__assets_entities_json__).map(function (key) { return __WEBPACK_IMPORTED_MODULE_4__assets_entities_json__[key]; })));
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__persons_persons_module__ = __webpack_require__("../../../../../src/app/persons/persons.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__persons_persons_module__["a" /* PersonsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* StoreModule */].forRoot({})
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/persons/actions/person.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PersonActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddOne; });
/* unused harmony export UpdateOne */
/* unused harmony export DeleteOne */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DeleteMany; });
/* unused harmony export DeleteAll */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SelectOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SelectOne; });
/* unused harmony export SelectMany */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SelectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UnSelectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UnSelectOne; });
/* unused harmony export UnSelectMany */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SetSelectOption; });
var PersonActionTypes;
(function (PersonActionTypes) {
    PersonActionTypes["ADD_ONE"] = "[Persons] Add One";
    PersonActionTypes["ADD_MANY"] = "[Persons] Add Many";
    PersonActionTypes["UPDATE_ONE"] = "[Persons] Update One";
    PersonActionTypes["DELETE_ONE"] = "[Persons] Delete One";
    PersonActionTypes["DELETE_MANY"] = "[Persons] Delete Many";
    PersonActionTypes["DELETE_ALL"] = "[Persons] Delete All";
    PersonActionTypes["SELECT_ONLY"] = "[Persons] Select only";
    PersonActionTypes["SELECT_MANY"] = "[Persons] Select Many";
    PersonActionTypes["SELECT_ONE"] = "[Persons] Select One";
    PersonActionTypes["SELECT_ALL"] = "[Persons] Select All";
    PersonActionTypes["UNSELECT_ONE"] = "[Persons] UnSelect One";
    PersonActionTypes["UNSELECT_MANY"] = "[Persons] UnSelect Many";
    PersonActionTypes["UNSELECT_ALL"] = "[Persons] UnSelect All";
    PersonActionTypes["SET_SELECT_OPTION"] = "[Persons] Set Select Option";
})(PersonActionTypes || (PersonActionTypes = {}));
var AddOne = /** @class */ (function () {
    function AddOne(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.ADD_ONE;
    }
    return AddOne;
}());

var UpdateOne = /** @class */ (function () {
    function UpdateOne(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.UPDATE_ONE;
    }
    return UpdateOne;
}());

var DeleteOne = /** @class */ (function () {
    function DeleteOne(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.DELETE_ONE;
    }
    return DeleteOne;
}());

var DeleteMany = /** @class */ (function () {
    function DeleteMany(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.DELETE_MANY;
    }
    return DeleteMany;
}());

var DeleteAll = /** @class */ (function () {
    function DeleteAll() {
        this.type = PersonActionTypes.DELETE_ALL;
    }
    return DeleteAll;
}());

var AddMany = /** @class */ (function () {
    function AddMany(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.ADD_MANY;
    }
    return AddMany;
}());

// Select actions
var SelectOnly = /** @class */ (function () {
    function SelectOnly(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.SELECT_ONLY;
    }
    return SelectOnly;
}());

var SelectOne = /** @class */ (function () {
    function SelectOne(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.SELECT_ONE;
    }
    return SelectOne;
}());

var SelectMany = /** @class */ (function () {
    function SelectMany(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.SELECT_MANY;
    }
    return SelectMany;
}());

var SelectAll = /** @class */ (function () {
    function SelectAll() {
        this.type = PersonActionTypes.SELECT_ALL;
    }
    return SelectAll;
}());

var UnSelectAll = /** @class */ (function () {
    function UnSelectAll() {
        this.type = PersonActionTypes.UNSELECT_ALL;
    }
    return UnSelectAll;
}());

var UnSelectOne = /** @class */ (function () {
    function UnSelectOne(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.UNSELECT_ONE;
    }
    return UnSelectOne;
}());

var UnSelectMany = /** @class */ (function () {
    function UnSelectMany(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.UNSELECT_MANY;
    }
    return UnSelectMany;
}());

var SetSelectOption = /** @class */ (function () {
    function SetSelectOption(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.SET_SELECT_OPTION;
    }
    return SetSelectOption;
}());



/***/ }),

/***/ "../../../../../src/app/persons/components/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n  margin: 20px 0;\r\n  height: 80vh;\r\n  overflow: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/persons/components/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th>\r\n        <input type=\"checkbox\"\r\n               [disabled]=\"disabledSelectAll()\"\r\n               (change)=\"selectAll()\"\r\n               [checked]=\"isAllSelected()\">\r\n      </th>\r\n      <th>Firstname</th>\r\n      <th>Lastname</th>\r\n      <th>Age</th>\r\n      <th>Phone</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let person of persons\">\r\n      <td>\r\n        <input type=\"checkbox\"\r\n               (change)=\"select(person.id)\"\r\n               [checked]=\"isSelected(person.id)\">\r\n      </td>\r\n      <td>{{person.firstName}}</td>\r\n      <td>{{person.lastName}}</td>\r\n      <td>{{person.age}}</td>\r\n      <td>{{person.phone}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\nselectedIds: {{ selectedIds | json }}\r\n"

/***/ }),

/***/ "../../../../../src/app/persons/components/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_index__ = __webpack_require__("../../../../../src/app/persons/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_person_actions__ = __webpack_require__("../../../../../src/app/persons/actions/person.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("../../../../../src/app/persons/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TableComponent = /** @class */ (function () {
    function TableComponent(store) {
        this.store = store;
        this.persons$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers_index__["a" /* selectAllUsers */]);
        this.selectedIds$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers_index__["c" /* selectSelectedIds */]);
        this.selectOption$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["b" /* selectSelectOption */]);
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIds$.subscribe(function (selectedIds) { return _this.selectedIds = selectedIds; });
        this.persons$.subscribe(function (persons) { return _this.persons = persons; });
        this.selectOption$.subscribe(function (selectOption) { return _this.selectOption = selectOption; });
    };
    TableComponent.prototype.select = function (id) {
        if (this.isSelected(id)) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_person_actions__["j" /* UnSelectOne */](id));
        }
        else {
            switch (this.selectOption) {
                case 'Multiple':
                    this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_person_actions__["f" /* SelectOne */](id));
                    break;
                case 'Single':
                    this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_person_actions__["g" /* SelectOnly */]([id]));
                    break;
            }
        }
    };
    TableComponent.prototype.isSelected = function (id) {
        return this.selectedIds.includes(id);
    };
    TableComponent.prototype.selectAll = function () {
        if (this.isAllSelected()) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_person_actions__["i" /* UnSelectAll */]());
        }
        else {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_person_actions__["e" /* SelectAll */]());
        }
    };
    TableComponent.prototype.isAllSelected = function () {
        return !this.noEntities() && (this.selectedIds.length === this.persons.length);
    };
    TableComponent.prototype.noEntities = function () {
        return (this.persons.length === 0);
    };
    TableComponent.prototype.disabledSelectAll = function () {
        return this.noEntities() || this.selectOption !== 'Multiple';
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/persons/components/table/table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/persons/components/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/persons/components/tools/tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/persons/components/tools/tools.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addPerson()\">Add</button>\r\n  <button type=\"button\" class=\"btn btn-danger\" [disabled]=\"selected.length === 0\" (click)=\"deleteSelected()\">Delete</button>\r\n\r\n  <div class=\"btn-group\" dropdown>\r\n    <button dropdownToggle type=\"button\" class=\"btn btn-success dropdown-toggle\">\r\n      {{ selectOption }}<span class=\"caret\"></span>\r\n    </button>\r\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n      <li role=\"menuitem\" *ngFor=\"let option of selectOptions\">\r\n        <a class=\"dropdown-item\" (click)=\"setSelectOptions(option)\">{{option}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/persons/components/tools/tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__ = __webpack_require__("../../../../../src/app/persons/actions/person.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_faker__ = __webpack_require__("../../../../faker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_faker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_faker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("../../../../../src/app/persons/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_select_option_model__ = __webpack_require__("../../../../../src/app/persons/model/select-option.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(store) {
        this.store = store;
        this.selected$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["c" /* selectSelectedIds */]);
        this.selected = [];
        this.selectOption$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["b" /* selectSelectOption */]);
        this.selectOptions = Object.values(__WEBPACK_IMPORTED_MODULE_5__model_select_option_model__["a" /* SelectOptions */]);
    }
    ToolsComponent.prototype.addPerson = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["b" /* AddOne */]({
            id: new Date().getTime().toString(),
            age: Math.floor(Math.random() * 20) + 18,
            firstName: __WEBPACK_IMPORTED_MODULE_3_faker__["name"].firstName(),
            lastName: __WEBPACK_IMPORTED_MODULE_3_faker__["name"].firstName(),
            phone: __WEBPACK_IMPORTED_MODULE_3_faker__["phone"].phoneNumber()
        }));
    };
    ToolsComponent.prototype.deleteSelected = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["c" /* DeleteMany */](this.selected));
    };
    ToolsComponent.prototype.setSelectOptions = function (option) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["h" /* SetSelectOption */](option));
    };
    ToolsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected$.subscribe(function (selected) { return _this.selected = selected; });
        this.selectOption$.subscribe(function (selectOption) { return _this.selectOption = selectOption; });
    };
    ToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tools',
            template: __webpack_require__("../../../../../src/app/persons/components/tools/tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/persons/components/tools/tools.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/persons/components/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/persons/components/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Persons</h2>\r\n    <app-tools></app-tools>\r\n    <app-table></app-table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/persons/components/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
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

var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-persons-view',
            template: __webpack_require__("../../../../../src/app/persons/components/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/persons/components/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/persons/model/select-option.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectOptions; });
var SelectOptions = {
    Multiple: 'Multiple',
    Single: 'Single'
};


/***/ }),

/***/ "../../../../../src/app/persons/persons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_table_table_component__ = __webpack_require__("../../../../../src/app/persons/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tools_tools_component__ = __webpack_require__("../../../../../src/app/persons/components/tools/tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_person_reducer__ = __webpack_require__("../../../../../src/app/persons/reducers/person.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_view_view_component__ = __webpack_require__("../../../../../src/app/persons/components/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PersonsModule = /** @class */ (function () {
    function PersonsModule() {
    }
    PersonsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* StoreModule */].forFeature(__WEBPACK_IMPORTED_MODULE_5__reducers_person_reducer__["a" /* personFeatureKey */], __WEBPACK_IMPORTED_MODULE_5__reducers_person_reducer__["c" /* personReducer */]),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_tools_tools_component__["a" /* ToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_view_view_component__["a" /* ViewComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__components_view_view_component__["a" /* ViewComponent */]
            ]
        })
    ], PersonsModule);
    return PersonsModule;
}());



/***/ }),

/***/ "../../../../../src/app/persons/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectUserIds */
/* unused harmony export selectUserEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectAllUsers; });
/* unused harmony export selectUserTotal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectSelectedIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectSelectOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_reducer__ = __webpack_require__("../../../../../src/app/persons/reducers/person.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");



var selectUserIds = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_0__person_reducer__["b" /* personFeatureSelector */], __WEBPACK_IMPORTED_MODULE_0__person_reducer__["g" /* selectUserIds */]);
var selectUserEntities = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_0__person_reducer__["b" /* personFeatureSelector */], __WEBPACK_IMPORTED_MODULE_0__person_reducer__["f" /* selectUserEntities */]);
var selectAllUsers = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_0__person_reducer__["b" /* personFeatureSelector */], __WEBPACK_IMPORTED_MODULE_0__person_reducer__["d" /* selectAllUsers */]);
var selectUserTotal = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_0__person_reducer__["b" /* personFeatureSelector */], __WEBPACK_IMPORTED_MODULE_0__person_reducer__["h" /* selectUserTotal */]);
var selectSelectedIds = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_0__person_reducer__["b" /* personFeatureSelector */], __WEBPACK_IMPORTED_MODULE_0__person_reducer__["e" /* selectSelectedIds */]);
var selectSelectOption = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_0__person_reducer__["b" /* personFeatureSelector */], function (state) { return state.selectOption; });


/***/ }),

/***/ "../../../../../src/app/persons/reducers/person.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export personAdapter */
/* unused harmony export personInitialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return personFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return personFeatureSelector; });
/* harmony export (immutable) */ __webpack_exports__["c"] = personReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return selectUserIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return selectUserEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return selectAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return selectUserTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return selectSelectedIds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__ = __webpack_require__("../../../../../src/app/persons/actions/person.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_entity__ = __webpack_require__("../../../../../src/entity/index.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// import { createEntityAdapter, EntityState } from '@ngrx/entity';



var personAdapter = Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_entity__["a" /* createEntityAdapter */])();
var personInitialState = personAdapter.getInitialState({
    selectOption: 'Multiple'
});
var personFeatureKey = 'person';
var personFeatureSelector = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])(personFeatureKey);
function personReducer(state, action) {
    if (state === void 0) { state = personInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].ADD_ONE:
            return personAdapter.addOne(action.payload, state);
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].ADD_MANY:
            return personAdapter.addMany(action.payload, state);
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].UPDATE_ONE:
            return personAdapter.updateOne({
                id: action.payload.id,
                changes: action.payload.changes
            }, state);
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].DELETE_ONE: {
            return personAdapter.removeOne(action.payload, state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].DELETE_MANY: {
            return personAdapter.removeMany(action.payload, state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].DELETE_ALL: {
            return personAdapter.removeAll(state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].SELECT_ONE: {
            return personAdapter.selectOne(action.payload, state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].SELECT_MANY: {
            return personAdapter.selectMany(action.payload, state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].SELECT_ALL: {
            return personAdapter.selectAll(state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].SELECT_ONLY: {
            return personAdapter.selectOnly(action.payload, state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].UNSELECT_ONE: {
            return personAdapter.unSelectOne(action.payload, state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].UNSELECT_MANY: {
            return personAdapter.unSelectMany(action.payload, state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].UNSELECT_ALL: {
            return personAdapter.unSelectAll(state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_person_actions__["d" /* PersonActionTypes */].SET_SELECT_OPTION: {
            var updatedState = personAdapter.unSelectAll(state);
            return __assign({}, updatedState, { selectOption: action.payload });
        }
        default:
            return state;
    }
}
var selectUserIds = (_a = personAdapter.getSelectors(), _a.selectIds), selectUserEntities = _a.selectEntities, selectAllUsers = _a.selectAll, selectUserTotal = _a.selectTotal, selectSelectedIds = _a.selectSelectedIds;
var _a;


/***/ }),

/***/ "../../../../../src/assets/entities.json":
/***/ (function(module, exports) {

module.exports = [{"id":"1519211425790","age":31,"firstName":"Vidal","lastName":"Valentine","phone":"340-267-1524 x808"},{"id":"1519211425925","age":23,"firstName":"Madilyn","lastName":"Kelton","phone":"005.230.7832 x449"},{"id":"1519211426374","age":18,"firstName":"Madaline","lastName":"Idella","phone":"(815) 671-3172 x3716"},{"id":"1519211426517","age":25,"firstName":"Allison","lastName":"Marshall","phone":"(008) 120-5911"},{"id":"1519211426670","age":30,"firstName":"Icie","lastName":"Alvah","phone":"306-911-3806 x8336"},{"id":"1519211426813","age":22,"firstName":"Tia","lastName":"Ricky","phone":"1-650-496-8729 x68437"},{"id":"1519211426959","age":20,"firstName":"Everardo","lastName":"Daphnee","phone":"1-751-342-3277 x7302"},{"id":"1519211427238","age":37,"firstName":"Else","lastName":"Shane","phone":"922-453-3473"},{"id":"1519211427397","age":26,"firstName":"Rosalyn","lastName":"Queenie","phone":"606-326-0088 x507"},{"id":"1519211427542","age":28,"firstName":"Grady","lastName":"Allie","phone":"(488) 089-7511"},{"id":"1519211427686","age":30,"firstName":"Leonor","lastName":"Buford","phone":"(937) 123-2153"}]

/***/ }),

/***/ "../../../../../src/entity/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__("../../../../../src/entity/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });
/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */



/***/ }),

/***/ "../../../../../src/entity/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__("../../../../../src/entity/src/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });



/***/ }),

/***/ "../../../../../src/entity/src/create_adapter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createEntityAdapter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_state__ = __webpack_require__("../../../../../src/entity/src/entity_state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_selectors__ = __webpack_require__("../../../../../src/entity/src/state_selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorted_state_adapter__ = __webpack_require__("../../../../../src/entity/src/sorted_state_adapter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unsorted_state_adapter__ = __webpack_require__("../../../../../src/entity/src/unsorted_state_adapter.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _a = {
        selectId: function (instance) { return instance.id; },
        sortComparer: false,
    }, selectId = _a.selectId, sortComparer = _a.sortComparer;
    var stateFactory = Object(__WEBPACK_IMPORTED_MODULE_0__entity_state__["a" /* createInitialStateFactory */])();
    var selectorsFactory = Object(__WEBPACK_IMPORTED_MODULE_1__state_selectors__["a" /* createSelectorsFactory */])();
    var stateAdapter = sortComparer
        ? Object(__WEBPACK_IMPORTED_MODULE_2__sorted_state_adapter__["a" /* createSortedStateAdapter */])(selectId, sortComparer)
        : Object(__WEBPACK_IMPORTED_MODULE_3__unsorted_state_adapter__["a" /* createUnsortedStateAdapter */])(selectId);
    return __assign({}, stateFactory, selectorsFactory, stateAdapter);
}


/***/ }),

/***/ "../../../../../src/entity/src/entity_state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getInitialEntityState */
/* harmony export (immutable) */ __webpack_exports__["a"] = createInitialStateFactory;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
        selectedIds: new Set(),
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return __assign({}, getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}


/***/ }),

/***/ "../../../../../src/entity/src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_adapter__ = __webpack_require__("../../../../../src/entity/src/create_adapter.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__create_adapter__["a"]; });



/***/ }),

/***/ "../../../../../src/entity/src/sorted_state_adapter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSortedStateAdapter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_adapter__ = __webpack_require__("../../../../../src/entity/src/state_adapter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unsorted_state_adapter__ = __webpack_require__("../../../../../src/entity/src/unsorted_state_adapter.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function createSortedStateAdapter(selectId, sort) {
    var _a = Object(__WEBPACK_IMPORTED_MODULE_1__unsorted_state_adapter__["a" /* createUnsortedStateAdapter */])(selectId), removeOne = _a.removeOne, removeMany = _a.removeMany, removeAll = _a.removeAll, selectAll = _a.selectAll, unSelectAll = _a.unSelectAll, selectOne = _a.selectOne, unSelectOne = _a.unSelectOne, selectMany = _a.selectMany, unSelectMany = _a.unSelectMany, selectOnly = _a.selectOnly;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newModels, state) {
        var models = newModels.filter(function (model) { return !(selectId(model) in state.entities); });
        if (models.length === 0) {
            return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
        }
        else {
            merge(models, state);
            return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds;
        }
    }
    function addAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectId(updated);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        var models = [];
        var didMutateIds = updates.filter(function (update) { return takeUpdatedModel(models, update, state); }).length >
            0;
        if (models.length === 0) {
            return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
        }
        else {
            var originalIds_1 = state.ids;
            var updatedIndexes_1 = [];
            state.ids = state.ids.filter(function (id, index) {
                if (id in state.entities) {
                    return true;
                }
                else {
                    updatedIndexes_1.push(index);
                    return false;
                }
            });
            merge(models, state);
            if (!didMutateIds &&
                updatedIndexes_1.every(function (i) { return state.ids[i] === originalIds_1[i]; })) {
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesOnly;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds;
            }
        }
    }
    function upsertOneMutably(update, state) {
        return upsertManyMutably([update], state);
    }
    function upsertManyMutably(updates, state) {
        var added = [];
        var updated = [];
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            if (update.id in state.entities) {
                updated.push(update);
            }
            else {
                added.push(__assign({}, update.changes, { id: update.id }));
            }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None &&
                didMutateByUpdated === __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None:
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
            case didMutateByAdded === __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds ||
                didMutateByUpdated === __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds:
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds;
            default:
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesOnly;
        }
    }
    function merge(models, state) {
        models.sort(sort);
        var ids = [];
        var i = 0;
        var j = 0;
        while (i < models.length && j < state.ids.length) {
            var model = models[i];
            var modelId = selectId(model);
            var entityId = state.ids[j];
            var entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach(function (model, i) {
            state.entities[selectId(model)] = model;
        });
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        selectAll: selectAll,
        unSelectAll: unSelectAll,
        selectOne: selectOne,
        unSelectOne: unSelectOne,
        selectMany: selectMany,
        unSelectMany: unSelectMany,
        selectOnly: selectOnly,
        addOne: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(addOneMutably),
        updateOne: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(updateOneMutably),
        upsertOne: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(upsertOneMutably),
        addAll: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(addAllMutably),
        addMany: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(addManyMutably),
        updateMany: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(updateManyMutably),
        upsertMany: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(upsertManyMutably),
    };
}


/***/ }),

/***/ "../../../../../src/entity/src/state_adapter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DidMutate; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStateOperator;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var DidMutate;
(function (DidMutate) {
    DidMutate[DidMutate["EntitiesOnly"] = 0] = "EntitiesOnly";
    DidMutate[DidMutate["EntitiesAndIds"] = 1] = "EntitiesAndIds";
    DidMutate[DidMutate["SelectedIdsOnly"] = 2] = "SelectedIdsOnly";
    DidMutate[DidMutate["All"] = 3] = "All";
    DidMutate[DidMutate["None"] = 4] = "None";
})(DidMutate || (DidMutate = {}));
function createStateOperator(mutator) {
    return function operation(arg, state) {
        var clonedEntityState = {
            selectedIds: new Set(state.selectedIds),
            ids: state.ids.slice(),
            entities: __assign({}, state.entities),
        };
        var didMutate = mutator(arg, clonedEntityState);
        switch (didMutate) {
            case DidMutate.EntitiesOnly:
                return __assign({}, state, { entities: clonedEntityState.entities });
            case DidMutate.SelectedIdsOnly:
                return __assign({}, state, { selectedIds: clonedEntityState.selectedIds });
            case DidMutate.EntitiesAndIds:
                return __assign({}, state, { entities: clonedEntityState.entities, ids: clonedEntityState.ids });
            case DidMutate.All:
                return Object.assign({}, state, clonedEntityState);
        }
        return state;
    };
}


/***/ }),

/***/ "../../../../../src/entity/src/state_selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSelectorsFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");

function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectIds, selectEntities, function (ids, entities) {
            return ids.map(function (id) { return entities[id]; });
        });
        var selectTotal = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectIds, function (ids) { return ids.length; });
        var selectSelectedIds = function (state) {
            return Array.from(state.selectedIds.values());
        };
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
                selectSelectedIds: selectSelectedIds,
            };
        }
        return {
            selectIds: Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectState, selectIds),
            selectEntities: Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectState, selectEntities),
            selectAll: Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectState, selectAll),
            selectTotal: Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectState, selectTotal),
            selectSelectedIds: Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(selectState, selectSelectedIds),
        };
    }
    return { getSelectors: getSelectors };
}


/***/ }),

/***/ "../../../../../src/entity/src/unsorted_state_adapter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createUnsortedStateAdapter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_adapter__ = __webpack_require__("../../../../../src/entity/src/state_adapter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectId(entity);
        if (key in state.entities) {
            return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds;
    }
    function addManyMutably(entities, state) {
        var didMutate = false;
        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
            var entity = entities_1[_i];
            didMutate = addOneMutably(entity, state) !== __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None || didMutate;
        }
        return didMutate ? __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds : __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
    }
    function addAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds;
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = keys
            .filter(function (key) { return key in state.entities; })
            .map(function (key) { return delete state.entities[key]; }).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
        var didSelectedIdsMutate = didMutate && keys.some(function (key) { return state.selectedIds.has(key); });
        if (didSelectedIdsMutate) {
            state.selectedIds = new Set(Array.from(state.selectedIds.values()).filter(function (id) { return !keys.includes(id); }));
            return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].All;
        }
        if (didMutate && !didSelectedIdsMutate) {
            return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds;
        }
        return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
    }
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
            selectedIds: new Set(),
        });
    }
    function takeNewKey(keys, update, state) {
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectId(updated);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        updates = updates.filter(function (update) { return update.id in state.entities; });
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map(function (id) { return newKeys[id] || id; });
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesOnly;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
    }
    function upsertOneMutably(update, state) {
        return upsertManyMutably([update], state);
    }
    function upsertManyMutably(updates, state) {
        var added = [];
        var updated = [];
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            if (update.id in state.entities) {
                updated.push(update);
            }
            else {
                added.push(__assign({}, update.changes, { id: update.id }));
            }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None &&
                didMutateByUpdated === __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None:
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
            case didMutateByAdded === __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds ||
                didMutateByUpdated === __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds:
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesAndIds;
            default:
                return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].EntitiesOnly;
        }
    }
    function unSelectAll(state) {
        return __assign({}, state, { selectedIds: new Set() });
    }
    function selectAll(state) {
        var didMutate = state.ids.length > 0;
        if (didMutate) {
            return __assign({}, state, { selectedIds: new Set(state.ids) });
        }
        return state;
    }
    function selectManyMutably(keys, state) {
        var filteredKeys = keys.filter(function (key) { return key in state.entities; });
        var didMutate = filteredKeys.length > 0;
        if (didMutate) {
            var values = Array.from(state.selectedIds.values()).concat(keys);
            state.selectedIds = new Set(values);
            return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].SelectedIdsOnly;
        }
        return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
    }
    function selectOneMutably(key, state) {
        return selectManyMutably([key], state);
    }
    function unSelectManyMutably(keys, state) {
        var filteredKeys = keys.filter(function (key) { return key in state.entities; });
        var someKey = filteredKeys.length > 0;
        var someIncludes = filteredKeys.some(function (key) { return state.selectedIds.has(key); });
        var didMutate = someKey && someIncludes;
        if (didMutate) {
            var filteredValues = Array.from(state.selectedIds.values()).filter(function (key) { return !filteredKeys.includes(key); });
            state.selectedIds = new Set(filteredValues);
            return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].SelectedIdsOnly;
        }
        return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
    }
    function unSelectOneMutably(key, state) {
        return unSelectManyMutably([key], state);
    }
    function selectOnlyMutably(keys, state) {
        var filteredKeys = keys.filter(function (key) { return key in state.entities; });
        var didMutate = filteredKeys.length > 0;
        if (didMutate) {
            state.selectedIds = new Set(filteredKeys);
            return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].SelectedIdsOnly;
        }
        return __WEBPACK_IMPORTED_MODULE_0__state_adapter__["a" /* DidMutate */].None;
    }
    return {
        removeAll: removeAll,
        selectAll: selectAll,
        unSelectAll: unSelectAll,
        selectOne: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(selectOneMutably),
        selectMany: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(selectManyMutably),
        unSelectOne: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(unSelectOneMutably),
        unSelectMany: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(unSelectManyMutably),
        selectOnly: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(selectOnlyMutably),
        addOne: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(addOneMutably),
        addMany: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(addManyMutably),
        addAll: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(addAllMutably),
        updateOne: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(updateOneMutably),
        updateMany: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(updateManyMutably),
        upsertOne: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(upsertOneMutably),
        upsertMany: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(upsertManyMutably),
        removeOne: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(removeOneMutably),
        removeMany: Object(__WEBPACK_IMPORTED_MODULE_0__state_adapter__["b" /* createStateOperator */])(removeManyMutably),
    };
}


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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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
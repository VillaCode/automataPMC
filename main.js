(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/unicode.ts":
/*!*************************************!*\
  !*** ./src/app/Services/unicode.ts ***!
  \*************************************/
/*! exports provided: ServicioUnicode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioUnicode", function() { return ServicioUnicode; });
var ServicioUnicode = /** @class */ (function () {
    function ServicioUnicode() {
    }
    ServicioUnicode.verificaAZ = function (c) {
        if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)) {
            return true;
        }
        return false;
    };
    ServicioUnicode.verificaAF = function (c) {
        if ((c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 70) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 102)) {
            return true;
        }
        return false;
    };
    ServicioUnicode.verifica09 = function (c) {
        if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) {
            return true;
        }
        else {
            return false;
        }
    };
    ServicioUnicode.verifica19 = function (c) {
        if (c.charCodeAt(0) > 48 && c.charCodeAt(0) <= 57) {
            return true;
        }
        else {
            return false;
        }
    };
    ServicioUnicode.verifica07 = function (c) {
        if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 55) {
            return true;
        }
        else {
            return false;
        }
    };
    ServicioUnicode.verifica89 = function (c) {
        if (c.charCodeAt(0) == 56 || c.charCodeAt(0) == 57) {
            return true;
        }
        else {
            return false;
        }
    };
    ServicioUnicode.guionBajo = function (c) {
        if (c.charCodeAt(0) == 95) {
            return true;
        }
        else {
            return false;
        }
    };
    ServicioUnicode.esPunto = function (c) {
        if (c.charCodeAt(0) == 46) {
            return true;
        }
        else {
            return false;
        }
    };
    ServicioUnicode.esSigno = function (c) {
        if ((c.charCodeAt(0) == 43 || c.charCodeAt(0) == 45)) {
            return true;
        }
        else {
            return false;
        }
    };
    ServicioUnicode.charInvalido = function (c) {
        if (c.charCodeAt(0) == 46 || c.charCodeAt(0) == 43 || c.charCodeAt(0) == 45) {
            return false;
        }
        if ((c.charCodeAt(0) >= 0 && c.charCodeAt(0) <= 47) || (c.charCodeAt(0) >= 58 && c.charCodeAt(0) <= 64) || (c.charCodeAt(0) >= 91 && c.charCodeAt(0) <= 94)
            || c.charCodeAt(0) == 96 || c.charCodeAt(0) >= 123) {
            return true;
        }
        else {
            return false;
        }
    };
    return ServicioUnicode;
}());



/***/ }),

/***/ "./src/app/Services/verificadores.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/verificadores.ts ***!
  \*******************************************/
/*! exports provided: Verificadores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verificadores", function() { return Verificadores; });
/* harmony import */ var _unicode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unicode */ "./src/app/Services/unicode.ts");

var Verificadores = /** @class */ (function () {
    function Verificadores(servicioUnicode) {
        this.servicioUnicode = servicioUnicode;
        this.keywords = {
            keywords: [
                //deben estar en orden alfabético
                "abstract", "assert", "begin", "boolean", "break", "byte", "case", "catch", "char", "class",
                "const", "continue", "default", "do", "double", "else", "end", "extends", "false", "final", "finally", "float",
                "for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new",
                "null", "package", "private", "program", "protected", "public", "return", "short", "static", "strictfp", "super",
                "switch", "synchronized", "then", "this", "throw", "throws", "transient", "true", "try", "var", "void", "volatile",
                "while"
            ]
        };
    }
    Verificadores.prototype.verificaPF = function (arreglo, i) {
        if (arreglo.length == i + 1) {
            this.mensaje = ("No es un Punto Flotante valido, No puede haber cadena vacia despues del punto");
            return this.mensaje;
        }
        if (_unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].esPunto(arreglo[i])) {
            if (_unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].verifica09(arreglo[i + 1])) {
                this.verificaPF2(arreglo, i + 1);
                return this.mensaje;
            }
        }
        this.mensaje = ("No es punto flotante válido");
        return this.mensaje;
    };
    Verificadores.prototype.verificarSiEsHexadecimal = function (arreglo) {
        if (arreglo.length == 2) {
            this.mensaje = ("No es un hexadecimal valido");
            return this.mensaje;
        }
        console.log('holacrayola');
        for (var i = 2; i < arreglo.length; i++) {
            if (_unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].guionBajo(arreglo[i]) || _unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].esPunto(arreglo[i])) {
                this.mensaje = ("No es un hexadecimal valido");
                return this.mensaje;
            }
            else if (!(_unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].verificaAF(arreglo[i]) || _unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].verifica09(arreglo[i]))) {
                this.mensaje = ("No es un hexadecimal valido");
                return this.mensaje;
            }
        }
        this.mensaje = ("Es un hexadecimal valido");
        return this.mensaje;
    };
    Verificadores.prototype.indentificadorValido = function (arreglo, i) {
        for (var j = i; j < arreglo.length; j++) {
            if (!(_unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].verificaAZ(arreglo[j]) || _unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].guionBajo(arreglo[j]) || _unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].verifica09(arreglo[j]))) {
                this.mensaje = ("No es identificador Valido");
                return this.mensaje;
            }
        }
        this.mensaje = ("Es identificador valido");
        return this.mensaje;
    };
    Verificadores.prototype.verificaPF2 = function (arreglo, i) {
        if (i + 1 == arreglo.length) {
            this.mensaje = ("Es un Punto Flotante Valido");
            return this.mensaje;
        }
        var espf;
        for (var j = i; j < arreglo.length; j++) {
            espf = false;
            if (_unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].verifica09(arreglo[j])) {
                espf = true;
            }
            if (arreglo[j] == 'e' || arreglo[j] == 'E') {
                this.verificaPF3(arreglo, j);
                return this.mensaje;
            }
            if (espf == false) {
                this.mensaje = ("Punto flotante no valido");
                return this.mensaje;
            }
        }
        this.mensaje = ("Punto Flotante Valido");
        return this.mensaje;
    };
    Verificadores.prototype.verificaPF3 = function (arreglo, j) {
        if (j + 1 == arreglo.length) {
            this.mensaje = ("Punto Flotante no válido por el exponente");
            return this.mensaje;
        }
        if (_unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].esSigno(arreglo[j + 1])) {
            if (j + 2 == arreglo.length) {
                this.mensaje = ("Punto flotante no válido por cadena incompleta");
                return this.mensaje;
            }
            this.verificaPF4(arreglo, j + 2);
            return this.mensaje;
        }
        if (_unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].verifica09(arreglo[j + 1])) {
            this.verificaPF4(arreglo, j + 1);
            return this.mensaje;
        }
        this.mensaje = ("punto FLOTANTE invalido");
        return this.mensaje;
    };
    Verificadores.prototype.verificaPF4 = function (arreglo, j) {
        if (j + 1 == arreglo.length) {
            this.mensaje = ("Punto Flotante válido");
            return this.mensaje;
        }
        var espf;
        for (var i = j; i < arreglo.length; i++) {
            espf = false;
            if (_unicode__WEBPACK_IMPORTED_MODULE_0__["ServicioUnicode"].verifica09(arreglo[i])) {
                espf = true;
            }
            if (espf == false) {
                this.mensaje = ("punto flotante INVALIDO");
                return this.mensaje;
            }
        }
        this.mensaje = ("PUNTO FLOTANTE VALIDO");
        return this.mensaje;
    };
    Verificadores.prototype.verificaReservada = function (keyword) {
        return (this.binarySearch(this.keywords.keywords, keyword) < 0);
    };
    Verificadores.prototype.binarySearch = function (list, value) {
        console.log(list);
        console.log(value);
        // initial values for start, middle and end
        var start = 0;
        var stop = list.length - 1;
        var middle = Math.floor((start + stop) / 2);
        // While the middle is not what we're looking for and the list does not have a single item
        while (list[middle] !== value && start < stop) {
            if (value < list[middle]) {
                stop = middle - 1;
            }
            else {
                start = middle + 1;
            }
            // recalculate middle on every iteration
            middle = Math.floor((start + stop) / 2);
        }
        console.log(middle);
        // if the current middle item is what we're looking for return it's index, else return -1
        return (list[middle] !== value) ? -1 : middle;
    };
    return Verificadores;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html body{\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n\r\n\r\n.display{\r\n    width: 60%;\r\n    margin-top: 10%;\r\n    color: rgb(255, 255, 255);\r\n    background: rgb(255, 255, 255);\r\n    display: inline-block;\r\n    padding: 0% 2%;\r\n    margin: 0%;\r\n    height: 70%;\r\n}\r\n\r\n\r\n.textarea{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: black;\r\n    padding: 0%;\r\n    margin: 0%;\r\n    color: white;\r\n    font-size: 4rem\r\n}\r\n\r\n\r\n#wrapper{\r\n    width: 100%;\r\n    align-content: center;\r\n    margin: 0%;\r\n    padding: 0%;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#magia{\r\n    width: 20%;\r\n    height: 15%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1o7QUFDSjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keXtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG5cclxuXHJcbi5kaXNwbGF5e1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwJSAyJTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuLnRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbVxyXG59XHJcblxyXG4jd3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbWFnaWF7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"wrapper\">\n  <div style=\"text-align:center\">\n    <h1>\n      Proyecto Autómata - Matemáticas Computacionales\n    </h1>\n  </div>\n\n  <div class=\"display\">\n    <textarea name=\"\" #string  class=\"textarea\" cols=\"35\" rows=\"2\" ngModel=\"comentario\"></textarea>\n  </div>\n\n  <div class=\"display\">\n    <textarea name=\"\" id=\"\" class=\"textarea\" cols=\"35\" rows=\"2\"> {{this.mensaje}} </textarea>\n  </div>\n\n  <div id=\"botton\">\n    <button id=\"magia\" (click)=\"automata(string.value)\"> Magia! </button>    \n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Automata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Automata", function() { return Automata; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_verificadores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/verificadores */ "./src/app/Services/verificadores.ts");
/* harmony import */ var _Services_unicode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/unicode */ "./src/app/Services/unicode.ts");




var Automata = /** @class */ (function () {
    function Automata(verificadores, servicioUnicode) {
        this.verificadores = verificadores;
        this.servicioUnicode = servicioUnicode;
    }
    ;
    Automata.prototype.automata = function (string) {
        console.log(string);
        //caso vacio
        if (string == '') {
            this.mensaje = ("Cadena recibida es vacía");
            return;
        }
        //Array del string
        var arreglo = string.split('');
        console.log(arreglo);
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
        // caracter invalido
        for (var i = 0; i < arreglo.length; i++) {
            if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].charInvalido(arreglo[i])) {
                this.mensaje = ("Caracter inválido dentro de la cadena");
                return;
            }
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
        // primera letra para ver validez o identificador valido
        if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].verificaAZ(arreglo[0])) {
            console.log('es de la a a la z');
            if (this.verificadores.verificaReservada(string)) {
                console.log("no es palabra reservada");
                this.mensaje = this.verificadores.indentificadorValido(arreglo, 1);
            }
            else {
                this.mensaje = ("No es un identificador válido porque es una palabra reservada");
                return;
            }
        }
        else if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].guionBajo(arreglo[0])) {
            for (var i = 1; i < arreglo.length; i++) {
                if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].verificaAZ(arreglo[i])) {
                    this.mensaje = this.verificadores.indentificadorValido(arreglo, i);
                    return;
                }
                else if (!(_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].verifica09(arreglo[i]) || _Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].guionBajo(arreglo[i]))) {
                    this.mensaje = ("No es un identificador válido por ser guión bajo");
                    return;
                }
                else if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].esPunto(arreglo[i]) || _Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].esSigno(arreglo[i])) {
                    this.mensaje = ("No es un identificador válido por ser punto o signo");
                    return;
                }
            }
            this.mensaje = ("No es un identificador válido");
            return;
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
        // Revisa si es octal, hexadecimal o punto flotante
        else if (arreglo[0] == '0') {
            if (arreglo.length == 1) {
                this.mensaje = ("número Natural válido");
                return;
            }
            //hex
            if (arreglo[1] == 'x' || arreglo[1] == 'X') {
                this.mensaje = this.verificadores.verificarSiEsHexadecimal(arreglo);
                return;
            }
            //flot
            for (var i = 1; i < arreglo.length; i++) {
                if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].esPunto(arreglo[i])) {
                    this.mensaje = this.verificadores.verificaPF(arreglo, i);
                    return;
                }
            }
            //Oct
            var octal = void 0;
            for (var i = 1; i < arreglo.length; i++) {
                octal = false;
                if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].verifica07(arreglo[i])) {
                    octal = true;
                }
                if (octal == false) {
                    this.mensaje = ("No es un octal válido");
                    return;
                }
            }
            this.mensaje = ("Es un octal válido");
            return;
        }
        //Natural
        if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].verifica19(arreglo[0])) {
            var natural = void 0;
            for (var i = 1; i < arreglo.length; i++) {
                natural = false;
                if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].verifica09(arreglo[i])) {
                    natural = true;
                }
                if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].esPunto(arreglo[i])) {
                    this.mensaje = this.verificadores.verificaPF(arreglo, i);
                    return;
                }
                if (natural == false) {
                    this.mensaje = ("número natural inválido");
                    return;
                }
            }
            this.mensaje = ("número natural válido ");
            return;
        }
        if (_Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].esPunto(arreglo[0]) || _Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"].esSigno(arreglo[0])) {
            this.mensaje = ("número no reconocido");
            return;
        }
        //caso error
        this.mensaje = ("Inválido por no pertenecer a ninguna categoría");
    };
    Automata = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_verificadores__WEBPACK_IMPORTED_MODULE_2__["Verificadores"], _Services_unicode__WEBPACK_IMPORTED_MODULE_3__["ServicioUnicode"]])
    ], Automata);
    return Automata;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Services_verificadores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/verificadores */ "./src/app/Services/verificadores.ts");
/* harmony import */ var _Services_unicode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/unicode */ "./src/app/Services/unicode.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["Automata"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [
                _Services_verificadores__WEBPACK_IMPORTED_MODULE_5__["Verificadores"],
                _Services_unicode__WEBPACK_IMPORTED_MODULE_6__["ServicioUnicode"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["Automata"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Tec\MateCompProyecto\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
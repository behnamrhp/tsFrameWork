"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(data) {
        this.data = data;
    }
    User.prototype.get = function (propName) {
        return this.data[propName];
    };
    User.prototype.set = function (update) {
        return __assign(__assign({}, this.data), { update: update });
    };
    return User;
}());
exports.User = User;

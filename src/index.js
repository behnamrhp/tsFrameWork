"use strict";
exports.__esModule = true;
var User_1 = require("./models/User");
var user = new User_1.User({ name: 'behnam', age: 26 });
user.set({ name: 'amir' });
console.log(user.get('name'));

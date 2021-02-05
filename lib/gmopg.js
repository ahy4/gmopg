"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUMS = exports.GENERATE_MEMBER_ID = void 0;
const enums = require("./client.enum");
exports.ENUMS = enums;
const memberable_1 = require("./client/memberable");
const cardable_1 = require("./client/cardable");
const tranable_1 = require("./client/tranable");
const cvsTranable_1 = require("./client/cvsTranable");
const multiTranable_1 = require("./client/multiTranable");
const util_1 = require("./util");
const client_1 = require("./client");
exports.default = cardable_1.default(cvsTranable_1.default(memberable_1.default(multiTranable_1.default(tranable_1.default(client_1.default)))));
function GENERATE_MEMBER_ID(key) {
    return util_1.generateID(key).substring(0, 60);
}
exports.GENERATE_MEMBER_ID = GENERATE_MEMBER_ID;
__exportStar(require("./config.type"), exports);
__exportStar(require("./client.type"), exports);
__exportStar(require("./client.enum"), exports);
__exportStar(require("./client/memberable.type"), exports);
__exportStar(require("./client/cardable.type"), exports);
__exportStar(require("./client/tranable.type"), exports);
__exportStar(require("./client/cvsTranable.type"), exports);
__exportStar(require("./client/multiTranable.type"), exports);
__exportStar(require("./errors"), exports);

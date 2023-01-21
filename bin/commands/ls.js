"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.describe = exports.command = void 0;
const db_json_1 = __importDefault(require("../assets/db.json"));
const command = 'ls';
exports.command = command;
const describe = 'List all foods';
exports.describe = describe;
const builder = {};
exports.builder = builder;
const handler = function (argv) {
    console.log(`Total: ${db_json_1.default.length}`);
    console.log(db_json_1.default.map((i) => i.name['th-TH']));
};
exports.handler = handler;

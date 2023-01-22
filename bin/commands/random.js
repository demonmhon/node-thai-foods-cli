"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.describe = exports.aliases = exports.command = void 0;
const db_json_1 = __importDefault(require("../assets/db.json"));
const command = 'random';
exports.command = command;
const aliases = ['rnd'];
exports.aliases = aliases;
const describe = 'List all foods';
exports.describe = describe;
const builder = {};
exports.builder = builder;
const handler = function (argv) {
    const results = getRandomItems(1);
    if (results) {
        console.log(results.name['th-TH']);
    }
};
exports.handler = handler;
function getRandomItems(limit) {
    const item = db_json_1.default[Math.floor(Math.random() * db_json_1.default.length)];
    return item;
}

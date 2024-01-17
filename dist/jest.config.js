"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_jest_1 = require("ts-jest");
const tsconfig_json_1 = __importDefault(require("./tsconfig.json"));
const config = {
    preset: 'ts-jest',
    moduleNameMapper: (0, ts_jest_1.pathsToModuleNameMapper)(tsconfig_json_1.default.compilerOptions.paths, { prefix: '<rootDir>/' }),
    testPathIgnorePatterns: ['dist'],
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
};
exports.default = config;

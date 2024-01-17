"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
const react_hooks_1 = require("@testing-library/react-hooks");
const _1 = __importDefault(require("./"));
const react_1 = require("react");
test('useWatch should call the callback function with proper dependencies', () => __awaiter(void 0, void 0, void 0, function* () {
    function useTestHelper() {
        const [count, setCount] = (0, react_1.useState)(0);
        (0, _1.default)((preCount) => {
            if (preCount === 10) {
                setCount(0);
            }
        }, [count]);
        return { count, setCount };
    }
    const { result } = (0, react_hooks_1.renderHook)(() => useTestHelper());
    (0, react_hooks_1.act)(() => { result.current.setCount(10); });
    expect(result.current.count).toBe(10);
    (0, react_hooks_1.act)(() => { result.current.setCount(11); });
    expect(result.current.count).toBe(0);
}));

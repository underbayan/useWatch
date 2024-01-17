"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useWatch = (callback, dependencies) => {
    const dependenciesRef = (0, react_1.useRef)(dependencies);
    (0, react_1.useEffect)(() => {
        const prevDependencies = dependenciesRef.current || [];
        const result = callback.apply(null, [...prevDependencies]);
        dependenciesRef.current = dependencies;
        return result;
    }, dependencies);
};
exports.default = useWatch;

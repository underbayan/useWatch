import React, { useEffect, useRef } from 'react';
const useWatch = (callback: (...args: any[]) => ReturnType<React.EffectCallback>, dependencies?: React.DependencyList) => {
    const dependenciesRef = useRef(dependencies);
    useEffect(() => {
        const prevDependencies = dependenciesRef.current || []
        const result = callback.apply(null, [...prevDependencies])
        dependenciesRef.current = dependencies;
        return result
    }, dependencies);
};
export default useWatch;

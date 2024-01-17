/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react-hooks';
import useWatch from './';
import { useState } from 'react';
test('useWatch should call the callback function with proper dependencies', async () => {
    function useTestHelper() {
        const [count, setCount] = useState(0)
        useWatch((preCount) => {
            if (preCount === 10) {
                setCount(0)
            }
        }, [count])
        return { count, setCount }
    }
    const { result } = renderHook(() => useTestHelper())
    act(() => { result.current.setCount(10) })
    expect(result.current.count).toBe(10)
    act(() => { result.current.setCount(11) })
    expect(result.current.count).toBe(0)
});

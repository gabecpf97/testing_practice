import {capitalize, reverseStr, calculator, caesarCipher, analyzeArray} from "./index";

// capitalize function
test ('test Capitalize', () => {
    expect(capitalize('toy')).toBe('Toy');
});

// reverse function
test ('reverse string', () => {
    expect(reverseStr('abcd')).toBe('dcba');
});


// calculate object
test ('calculator add', () => {
    const cal = calculator();
    expect(cal.add(1, 3)).toBe(4);
});

test ('calculator subtract', () => {
    const cal = calculator();
    expect(cal.subtract(1, 3)).toBe(-2);
});

test ('calculator divide', () => {
    const cal = calculator();
    expect(cal.divide(4, 2)).toBe(2);
});

test ('calculator multiply', () => {
    const cal = calculator();
    expect(cal.mulitply(2, 3)).toBe(6);
});

// Cipher function
test ('caesarCipher by 3', () => {
    expect(caesarCipher('happy', 3)).toBe('kdssb');
});

test ('caesarCipher by -3', () => {
    expect(caesarCipher('Happy !', -3)).toBe('Exmmv !');
});

// analyze array object
test ('analyze average', () => {
    const analyzeArr = analyzeArray([1,8,3,4,2,6]);
    expect(analyzeArr.average).toBe(4); 
})

test ('analyze min', () => {
    const analyzeArr = analyzeArray([-1,8,3,4,2,6]);
    expect(analyzeArr.min).toBe(-1); 
})

test ('analyze max', () => {
    const analyzeArr = analyzeArray([-1,-8,-3,-4,-2,-6]);
    expect(analyzeArr.max).toBe(-1); 
})

test ('analyze length', () => {
    const analyzeArr = analyzeArray([1,8,3,4,2,6]);
    expect(analyzeArr.length).toBe(6); 
})

test ('analyze empty', () => {
    const analyzeArr = analyzeArray([]);
    try {
        analyzeArr.max;
    } catch (e) {
        expect(e).toBe('Empty array'); 
    }
})
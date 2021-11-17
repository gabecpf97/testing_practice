function capitalize(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function reverseStr(str) {
    let newStr = "";
    for (let i = str.length - 1; i > -1; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}

const calculator = () => {
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function divide (a, b) {
        return a / b;
    }

    function mulitply(a, b) {
        return a * b;
    }

    return {add, subtract, divide, mulitply}
}

function caesarCipher(str, shiftAmount) {
    let newStr = "";
    const modShift = (shiftAmount % 26);
    for (let i = 0; i < str.length; i++) {
        if (_isAlpha(str.charCodeAt(i)))
            newStr += _shiftIt(str.charCodeAt(i), modShift);
        else 
            newStr += str.charAt(i);
    }
    return newStr;
}

function _shiftIt(charC, n) {
    let shifted = _checkOverflow(charC, n);
    return String.fromCharCode(shifted);
}

function _checkOverflow(charC, n) {
    if (charC > 65 && charC < 91) {
        if ((charC + n) < 65) {
            return charC + n + 26;
        } else if ((charC + n) > 90) {
            return charC + n -26;
        } else {
            return charC + n;
        }
    } else if (charC > 96 && charC < 123) {
        if ((charC + n) < 96) {
            return charC + n + 26;
        } else if ((charC + n) > 123) {
            return charC + n -26;
        } else {
            return charC + n;
        }
    }
}

function _isAlpha(charC) {
    if (charC < 65 || (charC > 90 && charC < 97) || charC > 122)
        return false;
    else
        return true;
}

const analyzeArray = (newArr) => {
    let arr = _checkNotNull(newArr);
    let average = _getAverage();
    let min = _getMin();
    let max = _getMax();
    let length = arr.length;

    function _getAverage() {
        return (arr.reduce((curr, prev) => curr + prev, 0)) / arr.length;
    }

    function _getMin() {
        let min = Infinity;
        arr.forEach( num => {
            if (num < min)
                min = num;
        });
        return min;
    }

    function _getMax() {
        let max = arr[0];
        arr.forEach( num => {
            if (num > max)
                max = num;
        });
        return max;
    }

    function _checkNotNull(newArr) {
        if (newArr == [])
            throw new Error("Empty array");
        else 
            return newArr;
    }
    
    return {average, min, max, length}
}

export {capitalize, reverseStr, calculator, caesarCipher, analyzeArray};
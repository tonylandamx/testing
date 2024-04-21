dirconst { evenOrOdd } = require("./evenOrOdd.js");

describe('isEvenOrOdd', () => {
    test('returns Even for even number', () => {
        expect(evenOrOdd(24)).toBe("Even");
        expect(evenOrOdd(10)).toBe("Even");
    });
    test('returns Odd for odd number', () => {
        expect(evenOrOdd(33)).toBe("Odd");
        expect(evenOrOdd(1)).toBe("Odd");
    });
});
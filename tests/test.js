const fb = require('../fizzbuzz');

test('Test Constants', () => {
    expect(fb.FIZZ).toBe('fizz');
    expect(fb.BUZZ).toBe('buzz');
    expect(fb.FIZZBUZZ).toBe('fizzbuzz');
});

test('Test isFizzy', () => {
    expect(fb.isFizzy(1, 3)).toBe(false);
    expect(fb.isFizzy(3, 3)).toBe(true);
    expect(fb.isFizzy(4, 3)).toBe(false);
    expect(fb.isFizzy(6, 3)).toBe(true);
    expect(fb.isFizzy(4, 2)).toBe(true); // Test for fizzOn = 2
});

test('Test isBuzzy', () => {
    expect(fb.isBuzzy(1, 5)).toBe(false);
    expect(fb.isBuzzy(5, 5)).toBe(true);
    expect(fb.isBuzzy(7, 5)).toBe(false);
    expect(fb.isBuzzy(15, 5)).toBe(true);
    expect(fb.isBuzzy(7, 7)).toBe(true); // Test for buzzOn = 7
});

test('Test fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(5, 3, 5)).toBe('buzz');
    expect(fb.fizzyBuzzy(3, 3, 5)).toBe('fizz');
    expect(fb.fizzyBuzzy(15, 3, 5)).toBe('fizzbuzz');
    expect(fb.fizzyBuzzy(2, 3, 5)).toBe('');
    expect(fb.fizzyBuzzy(2, 2, 7)).toBe('fizz'); // Test for fizzOn = 2, buzzOn = 7
    expect(fb.fizzyBuzzy(7, 2, 7)).toBe('buzz'); // Test for fizzOn = 2, buzzOn = 7
});

describe('fizzBuzz function', () => {

    test('should return correct fizz, buzz, and fizzbuzz counts', () => {
        const result = fb.fizzBuzz(15);
        expect(result.count).toBe(15);
        expect(result.fizz).toBe(4); // for 3, 6, 9, 12
        expect(result.buzz).toBe(2); // for 5, 10
        expect(result.fizzBuzz).toBe(1); // for 15
    });

    test('should return 0 for all counts if given count is 0', () => {
        const result = fb.fizzBuzz(0);
        expect(result.count).toBe(0);
        expect(result.fizz).toBe(0);
        expect(result.buzz).toBe(0);
        expect(result.fizzBuzz).toBe(0);
    });

    test('should handle larger counts correctly', () => {
        const result = fb.fizzBuzz(100);
        expect(result.count).toBe(100);
        expect(result.fizz).toBe(27); // Calculate based on FizzBuzz logic
        expect(result.buzz).toBe(14); // Calculate based on FizzBuzz logic
        expect(result.fizzBuzz).toBe(6); // Calculate based on FizzBuzz logic
    });

    test('should handle custom fizz and buzz values', () => {
        const result = fb.fizzBuzz(20, 2, 7); // Fizz on 2, Buzz on 7
        expect(result.count).toBe(20);
        expect(result.fizz).toBe(9); // for 2, 4, 6, 8, 10, 12, 16, 18, 20 (but NOT 14 because it's fizzBuzz)
        expect(result.buzz).toBe(1); // for 7
        expect(result.fizzBuzz).toBe(1); // for 14 (divisible by both 2 and 7)
    });

});

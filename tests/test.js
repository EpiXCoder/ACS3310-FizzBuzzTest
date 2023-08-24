const fb = require('../fizzbuzz')

test ( 'Test Constants', () => {
    expect(fb.FIZZ).toBe('fizz')
    expect(fb.BUZZ).toBe('buzz')
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
}
)

test('Test isFizzy', () => {
    expect(fb.isFizzy(1)).toBe(false)
    expect(fb.isFizzy(3)).toBe(true)
    expect(fb.isFizzy(4)).toBe(false)
    expect(fb.isFizzy(6)).toBe(true)
  })

test('Test isBuzzy', () => {
    expect(fb.isBuzzy(1)).toBe(false)
    expect(fb.isBuzzy(5)).toBe(true)
    expect(fb.isBuzzy(7)).toBe(false)
    expect(fb.isBuzzy(15)).toBe(true)
  })

test('Test fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(5)).toBe('buzz')
    expect(fb.fizzyBuzzy(3)).toBe('fizz')
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
    expect(fb.fizzyBuzzy(2)).toBe('')
  })

describe('fizzBuzz function', () => {

    test('should return correct fizz, buzz, and fizzbuzz counts', () => {
        const result = fizzBuzz(15);
        expect(result.count).toBe(15);
        expect(result.fizz).toBe(4); // for 3, 6, 9, 12
        expect(result.buzz).toBe(2); // for 5, 10
        expect(result.fizzBuzz).toBe(1); // for 15
    });

    test('should return 0 for all counts if given count is 0', () => {
        const result = fizzBuzz(0);
        expect(result.count).toBe(0);
        expect(result.fizz).toBe(0);
        expect(result.buzz).toBe(0);
        expect(result.fizzBuzz).toBe(0);
    });

    test('should handle larger counts correctly', () => {
        const result = fizzBuzz(100);
        expect(result.count).toBe(100);
        expect(result.fizz).toBe(27); // Calculate based on FizzBuzz logic
        expect(result.buzz).toBe(14); // Calculate based on FizzBuzz logic
        expect(result.fizzBuzz).toBe(6); // Calculate based on FizzBuzz logic
    });


});
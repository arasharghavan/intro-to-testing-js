
// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe("sayHello", function () {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called.",function () {
       expect(typeof sayHello()).toBe("string");
    });
    it('should return "hello, alex!"', function () {
        expect(sayHello("alex")).toBe("hello, alex!");
    });
    it('should return "hello, pat!"', function () {
        expect(sayHello("pat")).toBe("hello, pat!");
    });
    it('should return "hello, world!"', function () {
        expect(sayHello(true)).toBe("hello, world!");
    });
    it('should return"hello, world"', function () {
        expect(sayHello(false)).toBe("hello, world");
    });
});

// Unit tests for the isFive function
describe('isFive',function () {
    it('should be defined function', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return true at all time', function () {
        expect(isFive()).toBe(true);
    });
});

// Unit tests for the isEven function

describe('isEven', function () {
    it('should be defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('returns true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('returns true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('returns false when called with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('returns true when called with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('returns false when called with isEven(infinity)', function () {
        expect(isEven('infinity')).toBe(false);
    });
    it('return false when called with a boolean input like isEven(true)', function () {
        expect(isEven(true)).toBe(false);
    });
    it('return false when called with a boolean input isEven(false)', function () {
        expect(isEven(false)).toBe(false);
    });
    it('returns false when calles without an argument like isEven()', function () {
        expect(isEven()).toBe(false);
    });


});

// Unit tests for the isVowel function

describe('isVowel',function () {
    it('should be defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('isVowel("a") returns true', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('isVowel("A") returns true', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('isVowel("y") returns false', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('isVowel(4) returns false', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('isVowel(true) return false', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('isVowel(false) return false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('isVowel("banana") returns false', function () {
        expect(isVowel("")).toBe(false);
    });
    it('isVowel() returns false', function () {
        expect(isVowel()).toBe(false);
    });
});









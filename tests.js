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


const usage = require("../scr/usage");

describe("usage", () => {
    it("should get bill per day", () => {
        expect(usage.calculate("MO","10:00","12:00")).toBe(30);
    });
});
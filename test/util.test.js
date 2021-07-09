const util = require("../scr/util")

describe("util", () => {
    it("should get milliseconds", () => {
        expect(util.format_time('00:01')).toBe(60000);
    });
});
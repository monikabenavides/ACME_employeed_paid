const shift = require("../scr/shift");

describe("shift", () => {
    it("should get schedule", () => {
        expect(shift.time("00:01","09:00")).toHaveProperty("clock_in");
    });
});
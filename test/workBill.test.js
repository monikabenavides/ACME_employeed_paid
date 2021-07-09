const workBill = require("../scr/workBill");

describe("workBill", () => {
    it("should get total value to paid", () => {
        expect(workBill.get_employee_balance("RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00")).toMatch(/215/);;
    });
});
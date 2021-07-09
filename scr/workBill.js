const Usage = require("./usage.js");


function get_day_payment(worked_day) {
    let day_name = worked_day[0]+worked_day[1]
    let worked_time = worked_day.replace(worked_day[0],'').replace(worked_day[1],'').split('-');
    return Usage.calculate(day_name, worked_time[0], worked_time[1])
}

function calculate_final_payment(total_worked_days) {
    let total_payment = 0
    for (let worked_day of total_worked_days)
    {
        total_payment = total_payment + get_day_payment(worked_day);
    }
    return Math.abs(total_payment)
}


const workBill={
    get_employee_balance: function (input_data){
        let employee_name = input_data.split('=')[0]
        let total_worked_days = input_data.split('=')[1].split(',')
        let final_payment = calculate_final_payment(total_worked_days)
        return `The amount to pay ${employee_name} is: ${final_payment} USD`
    }
}
module.exports = workBill;


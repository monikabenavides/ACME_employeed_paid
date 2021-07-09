const { weekends,schedules,opening_schedule_hour,closing_schedule_hour,regular_hour_cost,special_hour_cost } =require("./content/rate_works_hour")
const util =require("./util.js");
const Shift = require("./shift");

    const usage={
        calculate : function(day, init_time, end_time) {
            const shift = Shift.time(init_time, end_time);
            let hour_cost = regular_hour_cost
            if (weekends.indexOf(day)>-1) {
                hour_cost = special_hour_cost;
            }
            return calculate_total_payment(shift, hour_cost);
        }

    }
    module.exports = usage;


    function get_hours_payment(init_time, end_time, payment)
    {
        let diff_time = end_time - init_time;
        let time_worked = diff_time/3600000;
        return Math.abs((time_worked * payment));
    }

    function calculate_total_payment(shift, hour_cost){
        let arrival = shift.clock_in
        let departure = shift.clock_out
        let hour_costed = hour_cost[arrival.schedule]
        if (arrival.schedule === departure.schedule)
        {
            return get_hours_payment(arrival.time, departure.time, hour_costed)
        }
        else{
            let payment = get_hours_payment(arrival.time,arrival.closing_hour,hour_costed)
            let arrival_schedule_index = schedules.index(arrival.schedule)

            for (let schedule of schedules[arrival_schedule_index+1]){
                hour_costed = hour_cost[schedule]
                if (schedule === departure.schedule)
                {
                    return payment + get_hours_payment(departure.opening_hour, departure.time,hour_costed);
                }
                else
                {
                    let init_time = opening_schedule_hour[schedule]
                    let end_time = closing_schedule_hour[schedule]
                    payment = payment + get_hours_payment(init_time,end_time,hour_costed)
                }
            }
        }
    }






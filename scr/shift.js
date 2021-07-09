const  util = require("./util.js");

const { schedules,opening_schedule_hour,closing_schedule_hour} =require("./content/rate_works_hour")


const Shift={
    time:function(init_time, end_time){
        return {
            clock_in : ScheduleTime(init_time),
            clock_out : ScheduleTime(end_time)
        }
    }
}

module.exports = Shift;

function ScheduleTime (_time) {
    let time=util.format_time(_time)
    for (let schedule of schedules){
        if (opening_schedule_hour[schedule]<=time && time <= closing_schedule_hour[schedule])
        {
            return {
                schedule: schedule,
                time:time,
                opening_hour: opening_schedule_hour[schedule],
                closing_hour: closing_schedule_hour[schedule]
            }
        }
    }
}
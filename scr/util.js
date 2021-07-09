const moment =require('moment');
const re_employee_name = '[A-Za-z]+'
const re_day = '(MO|TU|WE|TH|FR|SA|SU)'
const re_hour = '(([0-1][0-9]|2[0-3]):[0-5][0-9])'
const re_time_worked = `${re_hour}-${re_hour}`
const re_workday = `${re_day}${re_time_worked}`
const re_employee_workday = `^${re_employee_name}=${re_workday}(,${re_workday})*$`

const util = {

    check_input : function(input_str){
        console.log(input_str);
        let mensaje='';
        if (input_str.match(re_employee_workday)){
            const matchobj = [];
            // Iterate hits
            let match = null;
            do {
                match = re_time_worked(input_str);
                if(match) {
                    matchobj.push(match[0]);
                }
            } while (match);
            for(let item of matchobj )
            {
                if(!(item.group(1) < item.group(3)))
                    mensaje =`Clock-In (${item.group(1)}) time cannot be equal or greater than Clock-out time (${item.group(3)})`
            }
        }
        else
            mensaje='Invalid Input';

        return mensaje;
    },
    format_time:function(time_str){
        let regExTime = /([0-9]?[0-9]):([0-9][0-9])/;
        let regExTimeArr = regExTime.exec(time_str);
        let timeHr = regExTimeArr[1] * 3600 * 1000;
        let timeMin = regExTimeArr[2] * 60 * 1000;
        return(timeHr + timeMin)
    }

}


module.exports = util;

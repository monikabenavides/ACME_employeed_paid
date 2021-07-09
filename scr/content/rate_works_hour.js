const weekends = ['SA','SU']
const schedules = ['morning', 'noon', 'night']
const opening_schedule_hour = {
    'morning': 60000,
    'noon': 32460000 ,
    'night': 64860000,
}
const closing_schedule_hour = {
    'morning': 32400000,
    'noon': 64800000,
    'night': 86340000,
}

const regular_hour_cost = {
    'morning': 25,
    'noon': 15,
    'night': 20
}

const special_hour_cost = {
    'morning': 30,
    'noon': 20,
    'night': 25
}



module.exports = { weekends,schedules,opening_schedule_hour,closing_schedule_hour,regular_hour_cost,special_hour_cost };
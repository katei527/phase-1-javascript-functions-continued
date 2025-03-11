function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(event = "go to the office"){
    return `This Monday, I will ${event}.`
}
mondayWork()

function wrapAdjective(mark ="*"){
    return function(adjective = "special") {
        return `You are ${mark}${adjective}${mark}!`
    }
}
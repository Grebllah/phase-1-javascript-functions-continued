// code your solution here
const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}
const wrapAdjective = (highlight) => {
    const makeEmphatic = (emphasis = 'special') => {
        return `You are ${highlight}${emphasis}${highlight}!`
    }
    return makeEmphatic

}
// code your solution here

function saturdayFun(game = 'roller-skate') {
    return `This Saturday, I want to ${game}!`
}

const mondayWork = function (work = 'go to the office') {
    return `This Monday, I will ${work}.`
}


function wrapAdjective(string1) {
    return function inner(compliment = 'special') {
        compliment = `${string1}${compliment}${string1}`

        // `*compliment*`
        let declaration = `You are ${compliment}!`
        /*     let result1 = wrapAdjective('*');
             let result2 = wrapAdjective('||');
             function name(string2) {
                 if (result1 === true) {
                     return function (string) {
                         return `You are ${string}!`
                     }
                 }
                 else if (result2 === true) {
                     return function (string) {
                         return `You are ${string}!`
                     }
                 }*/
        return declaration
    }
}



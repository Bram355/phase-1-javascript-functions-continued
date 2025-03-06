// code your solution here
function saturdayFun(){
    console.log('This Saturday, I want to roller-skate!');
}

function mondayWork(){
    console.log('This Monday, I will go to the office.');
}

function saturdayFun(activity= 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;

}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*'){
    return function(adjective = 'special'){
        return `You are ${flair}${adjective}${flair}!`
    }
}

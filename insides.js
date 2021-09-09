const master = [
    'talks about drugs (in game)', 'Someone has sex', 'Bill Ehmann cameo', 'Goof goes into normal voice for seroius talk', 'NEED SOMETHING',
    'NPC Impersonation', 'Amber Smokes pot', 'Earl rolls more than 8 dice in a turn', 'Making fun of inteligence of DM', 'Big iron is mentioned',
    'Mot starts rambling about infomation gathered', 'Vel uses shocking grasp', 'home is played', 'Something gets puts into the Quotes channel', 'goof breaks down something to wake mot up',
    'Kyle says "something my char would know"', 'Someone makes a deal with garfield', 'in game racism', 'Fin goes fishing', 'Earl mentioned squeekers',
    'joke about forest fire', 'DM has more than 4 voices', 'Fin slaps something to death', 'Someone is late', 'D20 dice montage'
];
//Note please spell check this later since Ryan Wrote this

var usedindex = []

function getinside() {
    var temp = 0;
    while (usedindex.length <= 25) {
        number = Math.floor(Math.random() * 25)
        if (usedindex.includes(number) == false) {
            usedindex[temp++] = number
            
        }
    }
    return usedindex

    //pick a number between 0 ->24
    //put number in array 
    //check if number is in array
    //if not put in taken, if taken pick new number
    //return master[number]
    //go to loop


}
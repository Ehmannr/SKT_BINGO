const master = [
    'talks about drugs (in game)', 'Someone has sex', 'Bill Ehmann cameo', 'Goof goes into normal voice for seroius talk', 'NEED SOMETHING',

    'NPC Impersonation', 'Amber Smokes pot', 'Earl rolls more than 8 dice in a turn', 'Making fun of inteligence of DM', 'Big iron is mentioned',

    'Mot starts rambling about infomation gathered', 'Vel uses shocking grasp', 'home is played', 'Something gets puts into the Quotes channel', 'goof breaks down something to wake mot up',

    'Kyle says "something my char would know"', 'Someone makes a deal with garfield', 'in game racism', 'Fin goes fishing', 'Earl mentioned squeekers',

    'joke about forest fire', 'DM has more than 4 voices', 'Fin slaps something to death', 'Someone is late', 'D20 dice montage'
];
//Note please spell check this later since Ryan Wrote this

var usedindex = []
let allBoxes = [...document.querySelectorAll('.box')]
var temp = 0;

function fillIndex() {
    while (temp < 25) {
        number = Math.floor(Math.random() * master.length)
        if (usedindex.includes(number) == false) {
            usedindex[temp] = number
            temp++ 
        }
    }
}

function fillBoard(){
temp=0
    while (temp < 25) {
        if(temp == 12){
            allBoxes[temp].innerHTML = "Free Space"
        }
        else{
            allBoxes[temp].innerHTML = master[usedindex[temp]]
        }
        temp++
    }
}
if (document.querySelector('.table__wrapper')) {

    console.log(allBoxes) //note 12 is the free space

    allBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            box.classList.toggle('used')
            //allBoxes[12].innerHTML = "i cant belive this works"
            
        })
    })

}
fillIndex()
fillBoard()





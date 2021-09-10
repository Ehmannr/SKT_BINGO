const master = [
    'Talks about drugs ', 'Someone has sex', 'Bill Ehmann cameo', 'Goof goes into normal voice for serious talk', 'NEED SOMETHING',

    'Need something', 'Vel Smokes pot', 'Earl rolls more than 8 dice in a turn', 'Make fun of DM', 'Big iron is mentioned',

    'Mot starts rambling', 'Vel uses shocking grasp', 'home is played', 'Something gets puts into the Quotes channel', 'goof breaks down something to wake mot up',

    '"Something my char would know"', 'Someone makes a deal with garfield', 'In game racism', 'Fin goes fishing', 'NEED SOMETHING',

    'Joke about forest fire', 'DM has more than 4 voices', 'Fin slaps something to death', 'Someone is late', 'D20 dice montage'
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





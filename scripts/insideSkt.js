const master = [
    'More than 50 dmg in a turn', 'Someone has sex', 'Other parents cameo', 'Goof becomes a gymnastics', 'Someone has golden gulp',

    'Theft', 'Vel Smokes pot', '8 dice in a turn', 'Make fun of DM', 'You get crit',

    'Mot starts rambling', 'Vel uses shocking grasp', 'Home is played', 'Something gets puts into the Quotes channel', 'Goof wakes mot up',

    '"Something my char would know"', 'Someone makes a deal with garfield', 'In game racism', 'Fin goes fishing', 'Billy bob begs Earl to unalive',

    'Joke about forest fire', 'DM has more than 4 voices', 'Fin slaps something to death', 'Someone is late', 'D20 dice montage',

    'Janet Ehmann Cameo', 'Last week we didnt play','Gambling','You roll Nat 1','You roll a nat 20',

    //'Fill in later', 'Fill in later','Fill in later','Fill in later','Fill in later',
];

//'Fill in later', 'Fill in later','Fill in later','Fill in later','Fill in later',
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

function changeBorder(color){
    if (document.querySelector('.table__wrapper')){
        document.querySelector('.table__wrapper').classList.toggle(color)
    }
    //console.log("im in")
    allBoxes.forEach((box) => {
            box.classList.toggle(color) 
               
    })
}

if (document.querySelector('.table__wrapper')) {

    //console.log(allBoxes) note 12 is the free space

    allBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            box.classList.toggle('used')
            //allBoxes[12].innerHTML = "i cant belive this works"
            
        })
    })

}
fillIndex()
fillBoard()






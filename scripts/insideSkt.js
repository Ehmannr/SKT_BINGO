const master = [
    'More than 50 dmg in a turn', 'Someone has sex', 'Other parents cameo', 'Goof becomes a gymnastics', 'Someone has golden gulp',

    'Theft', 'Vel Smokes pot', '8 dice in a turn', 'Make fun of DM', 'You get crit',

    'Mot starts rambling', 'Vel uses shocking grasp', 'Home is played', 'Something gets puts into the Quotes channel', 'Goof wakes mot up',

    '"Something my char would know"', 'Someone makes a deal with garfield', 'In game racism', 'Fin goes fishing', 'Billy bob begs Earl to unalive',

    'Joke about forest fire', 'DM messes up a voice', 'Fin slaps something to death', 'Someone is late', 'D20 dice montage',

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
var audio = document.getElementById("myAudio"); 
    
function play() { 
    audio.play(); 
} 

function pause() { 
    audio.pause(); 
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
            checkBoard()
            
        })
    })

}
fillIndex()
fillBoard()


function checkBoard(){
    //  0   1  2    3   4
    if(allBoxes[0].classList.contains('used')&& allBoxes[1].classList.contains('used') && allBoxes[2].classList.contains('used') && allBoxes[3].classList.contains('used') && allBoxes[4].classList.contains('used')){
        play();
        confetti.start()
    }
    //  5   6   7   8   9
    if(allBoxes[5].classList.contains('used')&& allBoxes[6].classList.contains('used') && allBoxes[7].classList.contains('used') && allBoxes[8].classList.contains('used') && allBoxes[9].classList.contains('used')){
        play();
        confetti.start()
    }
    //  10  11  12  13  14
    if(allBoxes[10].classList.contains('used')&& allBoxes[11].classList.contains('used') && allBoxes[12].classList.contains('used') && allBoxes[13].classList.contains('used') && allBoxes[14].classList.contains('used')){
        confetti.start()
        play()
    }
    //  15  16  17  18  19
    if(allBoxes[15].classList.contains('used')&& allBoxes[16].classList.contains('used') && allBoxes[17].classList.contains('used') && allBoxes[18].classList.contains('used') && allBoxes[19].classList.contains('used')){
        play();
        confetti.start()
    }
    //  20  21  22  23  24
    if(allBoxes[20].classList.contains('used')&& allBoxes[21].classList.contains('used') && allBoxes[22].classList.contains('used') && allBoxes[23].classList.contains('used') && allBoxes[24].classList.contains('used')){
        play();
        confetti.start()
        }
    //  0   6   12  18  24
    if(allBoxes[0].classList.contains('used')&& allBoxes[6].classList.contains('used') && allBoxes[12].classList.contains('used') && allBoxes[18].classList.contains('used') && allBoxes[24].classList.contains('used')){
        play();
        confetti.start()
    }
    //  4   8   12  16  20
    if(allBoxes[4].classList.contains('used')&& allBoxes[8].classList.contains('used') && allBoxes[12].classList.contains('used') && allBoxes[16].classList.contains('used') && allBoxes[20].classList.contains('used')){
        play();
        confetti.start()
    }

}

  


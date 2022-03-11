const master = [
    'More than 50 dmg in a turn', 'Other parents cameo', 'Goof becomes a gymnast', 'Someone has golden gulp','Cant do math',

    'Theft', 'Vel Smokes pot', '8 dice in a turn', 'Make fun of DM', 'You get crit',

    'Mot starts rambling', 'Vel uses shocking grasp', 'Home is played', 'Something gets puts into the Quotes channel', 'Goof wakes mot up',

    '"Something my char would know"', 'Someone makes a deal with garfield', 'fin flirts', 'Fin goes fishing', 'Billy bob begs Earl to unalive',

    'Joke about forest fire', 'DM messes up a voice', 'Fin slaps something to death', 'Someone is late', 'D20 dice montage',

    'Janet Ehmann Cameo', 'Last week we didnt play', 'Gambling', 'You roll Nat 1', 'You roll a nat 20'

    
];

//'Fill in later', 'Fill in later','Fill in later','Fill in later','Fill in later',
//Note please spell check this later since Ryan Wrote this

var usedindex = []
let allBoxes = [...document.querySelectorAll('.box')]
var temp = 0;
var bingo = false

function fillIndex() {
    while (temp < 25) {
        number = Math.floor(Math.random() * master.length)
        if (usedindex.includes(number) == false) {
            usedindex[temp] = number
            temp++
        }
    }
}

function fillBoard() {
    temp = 0
    while (temp < 25) {
        if (temp == 12) {
            allBoxes[temp].innerHTML = "Free Space"
        } else {
            allBoxes[temp].innerHTML = master[usedindex[temp]]
        }
        temp++
    }
}


function play() {
    audio.play();
    audio.volume = .07;
}

function pause() {
    audio.pause();
}

function changeBorder(color) {
   
    //console.log("im in")
    allBoxes.forEach((box) => {
        box.classList.toggle(color)
        allBoxes[12].classList.toggle(color)
    })
    
}

if (document.querySelector('.table__wrapper')) {

    //console.log(allBoxes) note 12 is the free space

    allBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            box.classList.toggle('used')
            box.classList.toggle('white_border')
            checkBoard()
            

        })
    })

}
fillIndex()
fillBoard()


function checkBoard() {
    //left to right
    //  0   1   2    3   4
    if (allBoxes[0].classList.contains('used') && allBoxes[1].classList.contains('used') && allBoxes[2].classList.contains('used') && allBoxes[3].classList.contains('used') && allBoxes[4].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  5   6   7   8   9
    if (allBoxes[5].classList.contains('used') && allBoxes[6].classList.contains('used') && allBoxes[7].classList.contains('used') && allBoxes[8].classList.contains('used') && allBoxes[9].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  10  11  12  13  14
    if (allBoxes[10].classList.contains('used') && allBoxes[11].classList.contains('used') && allBoxes[12].classList.contains('used') && allBoxes[13].classList.contains('used') && allBoxes[14].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  15  16  17  18  19
    if (allBoxes[15].classList.contains('used') && allBoxes[16].classList.contains('used') && allBoxes[17].classList.contains('used') && allBoxes[18].classList.contains('used') && allBoxes[19].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  20  21  22  23  24
    if (allBoxes[20].classList.contains('used') && allBoxes[21].classList.contains('used') && allBoxes[22].classList.contains('used') && allBoxes[23].classList.contains('used') && allBoxes[24].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //Diag
    //  0   6   12  18  24
    if (allBoxes[0].classList.contains('used') && allBoxes[6].classList.contains('used') && allBoxes[12].classList.contains('used') && allBoxes[18].classList.contains('used') && allBoxes[24].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  4   8   12  16  20
    if (allBoxes[4].classList.contains('used') && allBoxes[8].classList.contains('used') && allBoxes[12].classList.contains('used') && allBoxes[16].classList.contains('used') && allBoxes[20].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  B
    if (allBoxes[0].classList.contains('used') && allBoxes[5].classList.contains('used') && allBoxes[10].classList.contains('used') && allBoxes[15].classList.contains('used') && allBoxes[20].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  I
    if (allBoxes[1].classList.contains('used') && allBoxes[6].classList.contains('used') && allBoxes[11].classList.contains('used') && allBoxes[16].classList.contains('used') && allBoxes[21].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  n
    if (allBoxes[2].classList.contains('used') && allBoxes[7].classList.contains('used') && allBoxes[12].classList.contains('used') && allBoxes[17].classList.contains('used') && allBoxes[22].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  g
    if (allBoxes[3].classList.contains('used') && allBoxes[8].classList.contains('used') && allBoxes[13].classList.contains('used') && allBoxes[18].classList.contains('used') && allBoxes[23].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
    //  O
    if (allBoxes[4].classList.contains('used') && allBoxes[9].classList.contains('used') && allBoxes[14].classList.contains('used') && allBoxes[19].classList.contains('used') && allBoxes[24].classList.contains('used')) {
        BINGOBONGOTIME(bingo)
    }
}

 function BINGOBONGOTIME() {
     if(bingo== false){
    clearUsed()
   audio = pickASong()
   play()

   window.setInterval(DiscoTime, 500)
    confetti.start()
    document.querySelector('#card__wrapper').classList.toggle('lightning-background')
    document.querySelector('#card__wrapper').classList.toggle('DISCO')
    changeBorder('black')
    bingo = true
}

}

 function DiscoTime() {

    
    
    index = Math.floor(Math.random() * 24)
    colorInt = Math.floor(Math.random() * 4)+1
    

    
    switch (colorInt) {
        case 1:
            allBoxes[index].classList.toggle('red-bg')
            
            break;
        case 2:
            allBoxes[index].classList.toggle('greenDisco-bg')
            break;
        case 3:
            allBoxes[index].classList.toggle('yellow-bg')
            break;
        case 4:
            allBoxes[index].classList.toggle('purp-bg')
            break;
    }

   
}

 
function pickASong(){

    songChoise = Math.floor(Math.random() * 2)+1
   // console.log(songChoise)

switch (songChoise) {
        case 1: //CHYHN
            var audio = document.getElementById("myAudio2"); 
        
            return audio;
            
        case 2:
            var audio = document.getElementById("myAudio");
           
            return audio;
          
      
       
    }
}




function clearUsed() {
    temp = 0
    while (temp < 25) {
        if (allBoxes[temp].classList.contains('used')) {
            allBoxes[temp].classList.toggle('used');
            allBoxes[temp].classList.toggle('white_border');
            //console.log(temp)
        }
        temp++
    }
}
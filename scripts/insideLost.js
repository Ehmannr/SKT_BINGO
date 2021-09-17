const master = [
    'fill in later','fill in later','fill in later','fill in later','fill in later',

    'fill in later','fill in later','fill in later','fill in later','fill in later',

    'fill in later','fill in later','fill in later','fill in later','fill in later',

    'fill in later','fill in later','fill in later','fill in later','fill in later',

    'fill in later','fill in later','fill in later','fill in later','fill in later',

    
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

function changeBorder(){
    console.log("im in")
    allBoxes.forEach((box) => {
            box.classList.toggle('black_border') 
               
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

//this is just for fun 


changeBorder()
fillIndex()
fillBoard()

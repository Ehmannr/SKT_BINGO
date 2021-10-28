function badBackground() {

    if (document.querySelector('#bingo')) {
        var num = Math.floor(Math.random() * 20) + 1
        //num = 1;
        if (num== 1) {
            document.querySelector('#bingo').classList.toggle("green-background")
            document.querySelector('#bingo').classList.toggle("bad-background")
            document.querySelector('#bingo').innerHTML = "I hope you enjoy this Jimmy / Refresh page"
        }

    }
    console.log(num)
}

function forcedBackground(newbackground,oldbackground) {
    document.querySelector('#card__wrapper').classList.toggle(oldbackground)
    document.querySelector('#card__wrapper').classList.toggle(newbackground)
    
    
}



//--------------------------------------